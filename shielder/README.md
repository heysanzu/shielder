## Data files

| File | What it holds |
| --- | --- |
| `data.js` | Holidays, subjects, events, announcement media and helpers (`blankAttendance`, `makeResults`, `fee`) |
| `students.js` | All students in one place: name, results, fees (`STUDENT_01` ... `STUDENT_23` and `STUDENTS`) |
| `attendance.js` | All attendance in one place, month by month |

Load order in `index.html`: `data.js`, `students.js`, `attendance.js`.

## Attendance (attendance.js)

Mark everyone present for the day, then list the absent students:

```js
Object.values(STUDENTS).forEach(student => {
  student.attendance["2026-11-06"] = "present";
});
STUDENT_01.attendance["2026-11-06"] = "absent";
STUDENT_02.attendance["2026-11-06"] = "absent";
```

Use `= null` for a student who had not joined yet on that day.

---

## Notes (notes.js)

```js
const NOTES = [
  {
    title: "Math Notes",
    fileName: "math-notes.pdf",
    data: "src/notes/math-notes.pdf",
  },
];
```
