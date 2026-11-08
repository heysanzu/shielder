// Diwali celebration: fireworks + greeting. Runs ONLY on 8 Nov 2026 (India time), then does nothing.
(function () {
  var DIWALI = "2026-11-08";
  var today = new Date().toLocaleDateString("en-CA", { timeZone: "Asia/Kolkata" }); // YYYY-MM-DD
  if (today !== DIWALI) return;

  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  var css = document.createElement("style");
  css.textContent =
    ".diwali-fx{position:fixed;inset:0;width:100%;height:100%;pointer-events:none;z-index:9999}" +
    ".diwali-toast{position:fixed;left:50%;top:calc(env(safe-area-inset-top,0px) + 12px);transform:translateX(-50%);" +
    "z-index:10000;display:flex;align-items:center;gap:10px;max-width:calc(100% - 24px);padding:10px 12px 10px 16px;" +
    "background:#111;color:#fff;border-radius:16px;font-size:.92rem;line-height:1.3;box-shadow:0 8px 28px rgba(0,0,0,.25);" +
    "animation:diwaliIn .5s ease both}" +
    ".diwali-toast b{font-weight:800;color:#ffbf00}" +
    ".diwali-toast button{border:0;background:rgba(255,255,255,.14);color:#fff;width:26px;height:26px;border-radius:50%;" +
    "cursor:pointer;font:inherit;line-height:1;flex:none}" +
    ".diwali-toast.out{animation:diwaliOut .4s ease both}" +
    "@keyframes diwaliIn{from{opacity:0;transform:translate(-50%,-14px)}to{opacity:1;transform:translate(-50%,0)}}" +
    "@keyframes diwaliOut{to{opacity:0;transform:translate(-50%,-14px)}}";
  document.head.appendChild(css);

  // Greeting
  var toast = document.createElement("div");
  toast.className = "diwali-toast";
  toast.innerHTML = '<span>\uD83E\uDE94 <b>Happy Diwali!</b> May your year be bright.</span>';
  var close = document.createElement("button");
  close.setAttribute("aria-label", "Close");
  close.textContent = "\u00D7";
  toast.appendChild(close);
  document.body.appendChild(toast);
  function hideToast() {
    toast.classList.add("out");
    setTimeout(function () { if (toast.parentNode) toast.parentNode.removeChild(toast); }, 450);
  }
  close.addEventListener("click", hideToast);
  setTimeout(hideToast, 9000);

  if (reduceMotion) return; // greeting only for people who prefer less motion

  // Fireworks
  var canvas = document.createElement("canvas");
  canvas.className = "diwali-fx";
  document.body.appendChild(canvas);
  var ctx = canvas.getContext("2d");
  var dpr = Math.min(window.devicePixelRatio || 1, 2);
  var W = 0, H = 0;
  function resize() {
    W = window.innerWidth; H = window.innerHeight;
    canvas.width = W * dpr; canvas.height = H * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  resize();
  window.addEventListener("resize", resize);

  var COLORS = ["#ff9f1c", "#ffbf00", "#ff5d8f", "#ff3d00", "#ffd166", "#e63946", "#9b5de5"];
  var rockets = [], sparks = [];
  var DURATION = 14000, last = 0, start = 0, nextLaunch = 0;

  function launch() {
    rockets.push({
      x: W * (0.12 + Math.random() * 0.76), y: H + 10,
      vx: (Math.random() - 0.5) * 0.8, vy: -(5 + Math.random() * 2.5),
      targetY: H * (0.12 + Math.random() * 0.38),
      color: COLORS[(Math.random() * COLORS.length) | 0]
    });
  }
  function explode(x, y, color) {
    var n = 48 + ((Math.random() * 20) | 0);
    for (var i = 0; i < n; i++) {
      var a = (Math.PI * 2 * i) / n + Math.random() * 0.2;
      var s = 1.4 + Math.random() * 3.2;
      sparks.push({
        x: x, y: y, px: x, py: y, vx: Math.cos(a) * s, vy: Math.sin(a) * s,
        life: 1, decay: 0.011 + Math.random() * 0.012,
        color: Math.random() < 0.7 ? color : "#ffd166"
      });
    }
  }

  function frame(t) {
    if (!start) { start = t; last = t; nextLaunch = t; }
    var dt = Math.min((t - last) / 16.67, 3); last = t;
    var running = t - start < DURATION;
    if (running && t >= nextLaunch) {
      launch(); if (Math.random() < 0.4) launch();
      nextLaunch = t + 500 + Math.random() * 600;
    }
    ctx.clearRect(0, 0, W, H);
    ctx.lineCap = "round";

    for (var i = rockets.length - 1; i >= 0; i--) {
      var r = rockets[i];
      var ox = r.x, oy = r.y;
      r.x += r.vx * dt; r.y += r.vy * dt;
      ctx.globalAlpha = 0.9; ctx.strokeStyle = r.color; ctx.lineWidth = 2.4;
      ctx.beginPath(); ctx.moveTo(ox, oy); ctx.lineTo(r.x, r.y); ctx.stroke();
      if (r.y <= r.targetY) { explode(r.x, r.y, r.color); rockets.splice(i, 1); }
    }
    for (var j = sparks.length - 1; j >= 0; j--) {
      var p = sparks[j];
      p.px = p.x; p.py = p.y;
      p.vx *= Math.pow(0.985, dt); p.vy = p.vy * Math.pow(0.985, dt) + 0.04 * dt;
      p.x += p.vx * dt; p.y += p.vy * dt; p.life -= p.decay * dt;
      if (p.life <= 0) { sparks.splice(j, 1); continue; }
      ctx.globalAlpha = p.life; ctx.strokeStyle = p.color; ctx.lineWidth = 2.2;
      ctx.beginPath(); ctx.moveTo(p.px, p.py); ctx.lineTo(p.x, p.y); ctx.stroke();
    }
    ctx.globalAlpha = 1;

    if (running || rockets.length || sparks.length) {
      requestAnimationFrame(frame);
    } else {
      window.removeEventListener("resize", resize);
      if (canvas.parentNode) canvas.parentNode.removeChild(canvas);
    }
  }
  requestAnimationFrame(frame);
})();
