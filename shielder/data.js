const HOLIDAYS = {
  "2026-01-26": "Republic Day", "2026-03-25": "Holi", "2026-04-14": "Dr. Ambedkar Jayanti",
  "2026-05-01": "Labour Day", "2026-06-17": "Eid ul-Adha", "2026-08-15": "Independence Day", "2026-09-24": "Tution Closed",
  "2026-10-02": "Gandhi Jayanti", "2026-10-15": "Tution Closed", "2026-10-20": "Dussehra", "2026-11-04": "Diwali",
  "2026-11-05": "Diwali Holiday", "2026-12-25": "Christmas",
};
const SUBJECTS = ["Math", "English", "Science", "Social Studies", "Hindi", "Computer"];
const UPCOMING_EVENTS = [
  { title: "Unit Test: Grammar 50", date: "2026-10-9" },
  { title: "Unit Test: Math 50", date: "2026-10-10" },
  { title: "Unit Test: Science 50", date: "2026-11-10" },
  { title: "Unit Test: Social Science 50", date: "2026-11-11" },
];
const ANNOUNCEMENT_MEDIA = [
  {
    type: "image",
    src: "src/announcement/heroV.gif",
    alt: "SHIELDER announcement",
  },
  
  {
    type: "image",
    src: "src/announcement/heroA.gif",
    alt: "SHIELDER announcement",
  },
  
  {
    type: "image",
    src: "src/announcement/heroB.gif",
    alt: "SHIELDER announcement",
  },

  {
    type: "image",
    src: "src/announcement/heroC.gif",
    alt: "SHIELDER announcement",
  },

  {
    type: "image",
    src: "src/announcement/heroD.gif",
    alt: "SHIELDER announcement",
  },

];

function blankAttendance() {
  const attendance = {};
  for (let month = 1; month <= 12; month++) {
    const days = new Date(2026, month, 0).getDate();
    for (let day = 1; day <= days; day++) {
      const date = "2026-" + String(month).padStart(2, "0") + "-" + String(day).padStart(2, "0");
      const weekday = new Date(date).getDay();
      attendance[date] = weekday === 0 ? "sunday" : (HOLIDAYS[date] ? "holiday" : null);
    }
  }
  return attendance;
}

function makeResults(scores) {
  return SUBJECTS.map((subject, index) => ({
    subject,
    date: "2026-09-" + String(5 + index * 2).padStart(2, "0"),
    score: scores[index],
    total: 50,
  }));
}

function fee(month, status, due) {
  return { month, amount: 500, status, due };
}
