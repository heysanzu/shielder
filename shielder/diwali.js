(function () {
  var DIWALI = "2026-11-08";
  var today = new Date().toLocaleDateString("en-CA", { timeZone: "Asia/Kolkata" });
  if (today !== DIWALI) return;

  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion) return;

  var css = document.createElement("style");
  css.textContent = ".diwali-fx{position:fixed;inset:0;width:100%;height:100%;pointer-events:none;z-index:9999}";
  document.head.appendChild(css);

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
