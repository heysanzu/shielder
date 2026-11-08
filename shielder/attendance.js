//All attendance in one place, month by month.
//Needs data.js and students.js loaded first.
//Pattern for each day: mark everyone present, then list the absent students
//(use = null for students who had not joined yet).

//Students 1-12 were on the roll in September. Students 13-23 joined later.
const SEPTEMBER_ROLL = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"].map(id => STUDENTS[id]);

//Month: September 2026
SEPTEMBER_ROLL.forEach(student => {
  student.attendance["2026-09-01"] = "present";
});
STUDENT_01.attendance["2026-09-01"] = "absent";
STUDENT_02.attendance["2026-09-01"] = "absent";
STUDENT_06.attendance["2026-09-01"] = "absent";
STUDENT_07.attendance["2026-09-01"] = "absent";
STUDENT_10.attendance["2026-09-01"] = "absent";

SEPTEMBER_ROLL.forEach(student => {
  student.attendance["2026-09-02"] = "present";
});
STUDENT_06.attendance["2026-09-02"] = "absent";

SEPTEMBER_ROLL.forEach(student => {
  student.attendance["2026-09-03"] = "present";
});
STUDENT_01.attendance["2026-09-03"] = "absent";
STUDENT_02.attendance["2026-09-03"] = "absent";
STUDENT_07.attendance["2026-09-03"] = "absent";
STUDENT_08.attendance["2026-09-03"] = "absent";
STUDENT_09.attendance["2026-09-03"] = "absent";
STUDENT_12.attendance["2026-09-03"] = "absent";

SEPTEMBER_ROLL.forEach(student => {
  student.attendance["2026-09-04"] = "present";
});
STUDENT_01.attendance["2026-09-04"] = "absent";
STUDENT_02.attendance["2026-09-04"] = "absent";
STUDENT_06.attendance["2026-09-04"] = "absent";
STUDENT_07.attendance["2026-09-04"] = "absent";
STUDENT_10.attendance["2026-09-04"] = "absent";

SEPTEMBER_ROLL.forEach(student => {
  student.attendance["2026-09-05"] = "present";
});
STUDENT_01.attendance["2026-09-05"] = "absent";
STUDENT_02.attendance["2026-09-05"] = "absent";
STUDENT_05.attendance["2026-09-05"] = "absent";
STUDENT_06.attendance["2026-09-05"] = "absent";
STUDENT_07.attendance["2026-09-05"] = "absent";
STUDENT_10.attendance["2026-09-05"] = "absent";

SEPTEMBER_ROLL.forEach(student => {
  student.attendance["2026-09-07"] = "present";
});
STUDENT_01.attendance["2026-09-07"] = "absent";
STUDENT_07.attendance["2026-09-07"] = "absent";

SEPTEMBER_ROLL.forEach(student => {
  student.attendance["2026-09-08"] = "present";
});
STUDENT_01.attendance["2026-09-08"] = "absent";
STUDENT_02.attendance["2026-09-08"] = "absent";
STUDENT_07.attendance["2026-09-08"] = "absent";

SEPTEMBER_ROLL.forEach(student => {
  student.attendance["2026-09-09"] = "present";
});
STUDENT_01.attendance["2026-09-09"] = "absent";
STUDENT_02.attendance["2026-09-09"] = "absent";
STUDENT_07.attendance["2026-09-09"] = "absent";

SEPTEMBER_ROLL.forEach(student => {
  student.attendance["2026-09-10"] = "present";
});
STUDENT_07.attendance["2026-09-10"] = "absent";

SEPTEMBER_ROLL.forEach(student => {
  student.attendance["2026-09-11"] = "present";
});
STUDENT_07.attendance["2026-09-11"] = "absent";

SEPTEMBER_ROLL.forEach(student => {
  student.attendance["2026-09-12"] = "present";
});
STUDENT_06.attendance["2026-09-12"] = "absent";
STUDENT_07.attendance["2026-09-12"] = "absent";

SEPTEMBER_ROLL.forEach(student => {
  student.attendance["2026-09-14"] = "present";
});
STUDENT_01.attendance["2026-09-14"] = "absent";
STUDENT_06.attendance["2026-09-14"] = "absent";
STUDENT_07.attendance["2026-09-14"] = "absent";

SEPTEMBER_ROLL.forEach(student => {
  student.attendance["2026-09-15"] = "present";
});
STUDENT_07.attendance["2026-09-15"] = "absent";

SEPTEMBER_ROLL.forEach(student => {
  student.attendance["2026-09-16"] = "present";
});
STUDENT_06.attendance["2026-09-16"] = "absent";
STUDENT_07.attendance["2026-09-16"] = "absent";

SEPTEMBER_ROLL.forEach(student => {
  student.attendance["2026-09-17"] = "present";
});
STUDENT_06.attendance["2026-09-17"] = "absent";
STUDENT_07.attendance["2026-09-17"] = "absent";

SEPTEMBER_ROLL.forEach(student => {
  student.attendance["2026-09-18"] = "present";
});
STUDENT_01.attendance["2026-09-18"] = "absent";
STUDENT_02.attendance["2026-09-18"] = "absent";
STUDENT_05.attendance["2026-09-18"] = "absent";
STUDENT_06.attendance["2026-09-18"] = "absent";
STUDENT_07.attendance["2026-09-18"] = "absent";

SEPTEMBER_ROLL.forEach(student => {
  student.attendance["2026-09-19"] = "present";
});
STUDENT_01.attendance["2026-09-19"] = "absent";
STUDENT_02.attendance["2026-09-19"] = "absent";
STUDENT_06.attendance["2026-09-19"] = "absent";
STUDENT_07.attendance["2026-09-19"] = "absent";

SEPTEMBER_ROLL.forEach(student => {
  student.attendance["2026-09-21"] = "present";
});
STUDENT_01.attendance["2026-09-21"] = "absent";
STUDENT_02.attendance["2026-09-21"] = "absent";
STUDENT_06.attendance["2026-09-21"] = "absent";
STUDENT_07.attendance["2026-09-21"] = "absent";

SEPTEMBER_ROLL.forEach(student => {
  student.attendance["2026-09-22"] = "present";
});
STUDENT_01.attendance["2026-09-22"] = "absent";
STUDENT_02.attendance["2026-09-22"] = "absent";
STUDENT_06.attendance["2026-09-22"] = "absent";
STUDENT_07.attendance["2026-09-22"] = "absent";

SEPTEMBER_ROLL.forEach(student => {
  student.attendance["2026-09-23"] = "present";
});
STUDENT_01.attendance["2026-09-23"] = "absent";
STUDENT_02.attendance["2026-09-23"] = "absent";
STUDENT_06.attendance["2026-09-23"] = "absent";
STUDENT_07.attendance["2026-09-23"] = "absent";

SEPTEMBER_ROLL.forEach(student => {
  student.attendance["2026-09-24"] = "present";
});
STUDENT_01.attendance["2026-09-24"] = "absent";
STUDENT_02.attendance["2026-09-24"] = "absent";
STUDENT_06.attendance["2026-09-24"] = "absent";
STUDENT_07.attendance["2026-09-24"] = "absent";

SEPTEMBER_ROLL.forEach(student => {
  student.attendance["2026-09-26"] = "present";
});
STUDENT_01.attendance["2026-09-26"] = "absent";
STUDENT_02.attendance["2026-09-26"] = "absent";
STUDENT_06.attendance["2026-09-26"] = "absent";
STUDENT_07.attendance["2026-09-26"] = "absent";

SEPTEMBER_ROLL.forEach(student => {
  student.attendance["2026-09-28"] = "present";
});
STUDENT_01.attendance["2026-09-28"] = "absent";
STUDENT_02.attendance["2026-09-28"] = "absent";
STUDENT_06.attendance["2026-09-28"] = "absent";

SEPTEMBER_ROLL.forEach(student => {
  student.attendance["2026-09-29"] = "present";
});
STUDENT_01.attendance["2026-09-29"] = "absent";
STUDENT_02.attendance["2026-09-29"] = "absent";

SEPTEMBER_ROLL.forEach(student => {
  student.attendance["2026-09-30"] = "present";
});
STUDENT_01.attendance["2026-09-30"] = "absent";
STUDENT_02.attendance["2026-09-30"] = "absent";

//Month: October 2026
Object.values(STUDENTS).forEach(student => {
  student.attendance["2026-10-01"] = "present";
});
STUDENT_01.attendance["2026-10-01"] = "absent";
STUDENT_02.attendance["2026-10-01"] = "absent";
STUDENT_13.attendance["2026-10-01"] = "absent";
STUDENT_14.attendance["2026-10-01"] = "absent";
STUDENT_15.attendance["2026-10-01"] = "absent";
STUDENT_16.attendance["2026-10-01"] = "absent";
STUDENT_17.attendance["2026-10-01"] = "absent";
STUDENT_18.attendance["2026-10-01"] = "absent";
STUDENT_19.attendance["2026-10-01"] = "absent";
STUDENT_20.attendance["2026-10-01"] = "absent";
STUDENT_21.attendance["2026-10-01"] = null;
STUDENT_23.attendance["2026-10-01"] = null;

Object.values(STUDENTS).forEach(student => {
  student.attendance["2026-10-02"] = "present";
});
STUDENT_01.attendance["2026-10-02"] = "absent";
STUDENT_02.attendance["2026-10-02"] = "absent";
STUDENT_04.attendance["2026-10-02"] = "absent";
STUDENT_06.attendance["2026-10-02"] = "absent";
STUDENT_13.attendance["2026-10-02"] = "absent";
STUDENT_14.attendance["2026-10-02"] = "absent";
STUDENT_15.attendance["2026-10-02"] = "absent";
STUDENT_16.attendance["2026-10-02"] = "absent";
STUDENT_19.attendance["2026-10-02"] = "absent";
STUDENT_20.attendance["2026-10-02"] = "absent";
STUDENT_21.attendance["2026-10-02"] = "holiday";
STUDENT_23.attendance["2026-10-02"] = "holiday";

Object.values(STUDENTS).forEach(student => {
  student.attendance["2026-10-03"] = "present";
});
STUDENT_01.attendance["2026-10-03"] = "absent";
STUDENT_03.attendance["2026-10-03"] = "absent";
STUDENT_04.attendance["2026-10-03"] = "absent";
STUDENT_16.attendance["2026-10-03"] = "absent";
STUDENT_18.attendance["2026-10-03"] = "absent";
STUDENT_21.attendance["2026-10-03"] = null;
STUDENT_23.attendance["2026-10-03"] = null;

Object.values(STUDENTS).forEach(student => {
  student.attendance["2026-10-05"] = "present";
});
STUDENT_03.attendance["2026-10-05"] = "absent";
STUDENT_04.attendance["2026-10-05"] = "absent";
STUDENT_05.attendance["2026-10-05"] = "absent";
STUDENT_16.attendance["2026-10-05"] = "absent";
STUDENT_18.attendance["2026-10-05"] = "absent";
STUDENT_19.attendance["2026-10-05"] = "absent";
STUDENT_20.attendance["2026-10-05"] = "absent";
STUDENT_21.attendance["2026-10-05"] = null;
STUDENT_23.attendance["2026-10-05"] = null;

Object.values(STUDENTS).forEach(student => {
  student.attendance["2026-10-06"] = "present";
});
STUDENT_07.attendance["2026-10-06"] = "absent";
STUDENT_11.attendance["2026-10-06"] = "absent";
STUDENT_16.attendance["2026-10-06"] = "absent";
STUDENT_18.attendance["2026-10-06"] = "absent";
STUDENT_21.attendance["2026-10-06"] = null;
STUDENT_23.attendance["2026-10-06"] = null;

Object.values(STUDENTS).forEach(student => {
  student.attendance["2026-10-07"] = "present";
});
STUDENT_01.attendance["2026-10-07"] = "absent";
STUDENT_02.attendance["2026-10-07"] = "absent";
STUDENT_03.attendance["2026-10-07"] = "absent";
STUDENT_04.attendance["2026-10-07"] = "absent";
STUDENT_05.attendance["2026-10-07"] = "absent";
STUDENT_06.attendance["2026-10-07"] = "absent";
STUDENT_07.attendance["2026-10-07"] = "absent";
STUDENT_08.attendance["2026-10-07"] = "absent";
STUDENT_09.attendance["2026-10-07"] = "absent";
STUDENT_10.attendance["2026-10-07"] = "absent";
STUDENT_11.attendance["2026-10-07"] = "absent";
STUDENT_12.attendance["2026-10-07"] = "absent";
STUDENT_13.attendance["2026-10-07"] = "absent";
STUDENT_14.attendance["2026-10-07"] = "absent";
STUDENT_15.attendance["2026-10-07"] = "absent";
STUDENT_16.attendance["2026-10-07"] = "absent";
STUDENT_17.attendance["2026-10-07"] = "absent";
STUDENT_18.attendance["2026-10-07"] = "absent";
STUDENT_19.attendance["2026-10-07"] = "absent";
STUDENT_20.attendance["2026-10-07"] = "absent";
STUDENT_21.attendance["2026-10-07"] = null;
STUDENT_22.attendance["2026-10-07"] = null;
STUDENT_23.attendance["2026-10-07"] = null;

Object.values(STUDENTS).forEach(student => {
  student.attendance["2026-10-08"] = "present";
});
STUDENT_01.attendance["2026-10-08"] = "absent";
STUDENT_02.attendance["2026-10-08"] = "absent";
STUDENT_03.attendance["2026-10-08"] = "absent";
STUDENT_04.attendance["2026-10-08"] = "absent";
STUDENT_05.attendance["2026-10-08"] = "absent";
STUDENT_06.attendance["2026-10-08"] = "absent";
STUDENT_07.attendance["2026-10-08"] = "absent";
STUDENT_08.attendance["2026-10-08"] = "absent";
STUDENT_09.attendance["2026-10-08"] = "absent";
STUDENT_10.attendance["2026-10-08"] = "absent";
STUDENT_11.attendance["2026-10-08"] = "absent";
STUDENT_12.attendance["2026-10-08"] = "absent";
STUDENT_13.attendance["2026-10-08"] = "absent";
STUDENT_14.attendance["2026-10-08"] = "absent";
STUDENT_15.attendance["2026-10-08"] = "absent";
STUDENT_16.attendance["2026-10-08"] = "absent";
STUDENT_17.attendance["2026-10-08"] = "absent";
STUDENT_18.attendance["2026-10-08"] = "absent";
STUDENT_19.attendance["2026-10-08"] = "absent";
STUDENT_20.attendance["2026-10-08"] = "absent";
STUDENT_21.attendance["2026-10-08"] = null;
STUDENT_22.attendance["2026-10-08"] = null;
STUDENT_23.attendance["2026-10-08"] = null;

Object.values(STUDENTS).forEach(student => {
  student.attendance["2026-10-09"] = "present";
});
STUDENT_01.attendance["2026-10-09"] = "absent";
STUDENT_02.attendance["2026-10-09"] = "absent";
STUDENT_13.attendance["2026-10-09"] = "absent";
STUDENT_14.attendance["2026-10-09"] = "absent";
STUDENT_15.attendance["2026-10-09"] = "absent";
STUDENT_16.attendance["2026-10-09"] = "absent";
STUDENT_18.attendance["2026-10-09"] = "absent";
STUDENT_19.attendance["2026-10-09"] = "absent";
STUDENT_20.attendance["2026-10-09"] = "absent";
STUDENT_21.attendance["2026-10-09"] = null;
STUDENT_22.attendance["2026-10-09"] = null;
STUDENT_23.attendance["2026-10-09"] = null;

Object.values(STUDENTS).forEach(student => {
  student.attendance["2026-10-10"] = "present";
});
STUDENT_01.attendance["2026-10-10"] = "absent";
STUDENT_02.attendance["2026-10-10"] = "absent";
STUDENT_16.attendance["2026-10-10"] = "absent";
STUDENT_19.attendance["2026-10-10"] = "absent";
STUDENT_20.attendance["2026-10-10"] = "absent";
STUDENT_21.attendance["2026-10-10"] = null;
STUDENT_22.attendance["2026-10-10"] = null;
STUDENT_23.attendance["2026-10-10"] = null;

Object.values(STUDENTS).forEach(student => {
  student.attendance["2026-10-11"] = "present";
});
STUDENT_01.attendance["2026-10-11"] = "absent";
STUDENT_02.attendance["2026-10-11"] = "absent";
STUDENT_03.attendance["2026-10-11"] = "absent";
STUDENT_04.attendance["2026-10-11"] = "absent";
STUDENT_05.attendance["2026-10-11"] = "absent";
STUDENT_06.attendance["2026-10-11"] = "absent";
STUDENT_07.attendance["2026-10-11"] = "absent";
STUDENT_13.attendance["2026-10-11"] = "absent";
STUDENT_14.attendance["2026-10-11"] = "absent";
STUDENT_15.attendance["2026-10-11"] = "absent";
STUDENT_16.attendance["2026-10-11"] = "absent";
STUDENT_18.attendance["2026-10-11"] = "absent";
STUDENT_19.attendance["2026-10-11"] = "absent";
STUDENT_20.attendance["2026-10-11"] = "absent";
STUDENT_21.attendance["2026-10-11"] = "sunday";
STUDENT_22.attendance["2026-10-11"] = "sunday";
STUDENT_23.attendance["2026-10-11"] = "sunday";

Object.values(STUDENTS).forEach(student => {
  student.attendance["2026-10-12"] = "present";
});
STUDENT_01.attendance["2026-10-12"] = "absent";
STUDENT_02.attendance["2026-10-12"] = "absent";
STUDENT_03.attendance["2026-10-12"] = "absent";
STUDENT_04.attendance["2026-10-12"] = "absent";
STUDENT_05.attendance["2026-10-12"] = "absent";
STUDENT_06.attendance["2026-10-12"] = "absent";
STUDENT_07.attendance["2026-10-12"] = "absent";
STUDENT_08.attendance["2026-10-12"] = "absent";
STUDENT_09.attendance["2026-10-12"] = "absent";
STUDENT_10.attendance["2026-10-12"] = "absent";
STUDENT_11.attendance["2026-10-12"] = "absent";
STUDENT_12.attendance["2026-10-12"] = "absent";
STUDENT_13.attendance["2026-10-12"] = "absent";
STUDENT_14.attendance["2026-10-12"] = "absent";
STUDENT_15.attendance["2026-10-12"] = "absent";
STUDENT_16.attendance["2026-10-12"] = "absent";
STUDENT_17.attendance["2026-10-12"] = "absent";
STUDENT_18.attendance["2026-10-12"] = "absent";
STUDENT_22.attendance["2026-10-12"] = "absent";
STUDENT_23.attendance["2026-10-12"] = null;

Object.values(STUDENTS).forEach(student => {
  student.attendance["2026-10-13"] = "present";
});
STUDENT_01.attendance["2026-10-13"] = "absent";
STUDENT_02.attendance["2026-10-13"] = "absent";
STUDENT_03.attendance["2026-10-13"] = "absent";
STUDENT_04.attendance["2026-10-13"] = "absent";
STUDENT_05.attendance["2026-10-13"] = "absent";
STUDENT_06.attendance["2026-10-13"] = "absent";
STUDENT_07.attendance["2026-10-13"] = "absent";
STUDENT_08.attendance["2026-10-13"] = "absent";
STUDENT_09.attendance["2026-10-13"] = "absent";
STUDENT_10.attendance["2026-10-13"] = "absent";
STUDENT_11.attendance["2026-10-13"] = "absent";
STUDENT_12.attendance["2026-10-13"] = "absent";
STUDENT_13.attendance["2026-10-13"] = "absent";
STUDENT_14.attendance["2026-10-13"] = "absent";
STUDENT_15.attendance["2026-10-13"] = "absent";
STUDENT_16.attendance["2026-10-13"] = "absent";
STUDENT_17.attendance["2026-10-13"] = "absent";
STUDENT_18.attendance["2026-10-13"] = "absent";
STUDENT_23.attendance["2026-10-13"] = null;

Object.values(STUDENTS).forEach(student => {
  student.attendance["2026-10-14"] = "present";
});
STUDENT_01.attendance["2026-10-14"] = "absent";
STUDENT_02.attendance["2026-10-14"] = "absent";
STUDENT_04.attendance["2026-10-14"] = "absent";
STUDENT_11.attendance["2026-10-14"] = "absent";
STUDENT_16.attendance["2026-10-14"] = "absent";

Object.values(STUDENTS).forEach(student => {
  student.attendance["2026-10-16"] = "present";
});
STUDENT_11.attendance["2026-10-16"] = "absent";
STUDENT_13.attendance["2026-10-16"] = "absent";
STUDENT_14.attendance["2026-10-16"] = "absent";
STUDENT_15.attendance["2026-10-16"] = "absent";
STUDENT_16.attendance["2026-10-16"] = "absent";
STUDENT_18.attendance["2026-10-16"] = "absent";
STUDENT_10.attendance["2026-10-16"] = null;

Object.values(STUDENTS).forEach(student => {
  student.attendance["2026-10-17"] = "present";
});
STUDENT_03.attendance["2026-10-17"] = "absent";
STUDENT_04.attendance["2026-10-17"] = "absent";
STUDENT_05.attendance["2026-10-17"] = "absent";
STUDENT_07.attendance["2026-10-17"] = "absent";
STUDENT_10.attendance["2026-10-17"] = "absent";
STUDENT_11.attendance["2026-10-17"] = "absent";
STUDENT_16.attendance["2026-10-17"] = "absent";
STUDENT_17.attendance["2026-10-17"] = "absent";
STUDENT_22.attendance["2026-10-17"] = "absent";

Object.values(STUDENTS).forEach(student => {
  student.attendance["2026-10-19"] = "present";
});
STUDENT_01.attendance["2026-10-19"] = "absent";
STUDENT_02.attendance["2026-10-19"] = "absent";
STUDENT_05.attendance["2026-10-19"] = "absent";
STUDENT_10.attendance["2026-10-19"] = "absent";
STUDENT_11.attendance["2026-10-19"] = "absent";
STUDENT_12.attendance["2026-10-19"] = "absent";
STUDENT_22.attendance["2026-10-19"] = "absent";

Object.values(STUDENTS).forEach(student => {
  student.attendance["2026-10-20"] = "present";
});
STUDENT_01.attendance["2026-10-20"] = "absent";
STUDENT_02.attendance["2026-10-20"] = "absent";
STUDENT_05.attendance["2026-10-20"] = "absent";
STUDENT_08.attendance["2026-10-20"] = "absent";
STUDENT_09.attendance["2026-10-20"] = "absent";
STUDENT_10.attendance["2026-10-20"] = "absent";
STUDENT_11.attendance["2026-10-20"] = "absent";
STUDENT_12.attendance["2026-10-20"] = "absent";
STUDENT_16.attendance["2026-10-20"] = "absent";
STUDENT_17.attendance["2026-10-20"] = "absent";
STUDENT_19.attendance["2026-10-20"] = "absent";
STUDENT_20.attendance["2026-10-20"] = "absent";
STUDENT_22.attendance["2026-10-20"] = "absent";
STUDENT_23.attendance["2026-10-20"] = "absent";

Object.values(STUDENTS).forEach(student => {
  student.attendance["2026-10-21"] = "present";
});
STUDENT_01.attendance["2026-10-21"] = "absent";
STUDENT_02.attendance["2026-10-21"] = "absent";
STUDENT_04.attendance["2026-10-21"] = "absent";
STUDENT_05.attendance["2026-10-21"] = "absent";
STUDENT_06.attendance["2026-10-21"] = "absent";
STUDENT_08.attendance["2026-10-21"] = "absent";
STUDENT_09.attendance["2026-10-21"] = "absent";
STUDENT_13.attendance["2026-10-21"] = "absent";
STUDENT_14.attendance["2026-10-21"] = "absent";
STUDENT_15.attendance["2026-10-21"] = "absent";
STUDENT_20.attendance["2026-10-21"] = "absent";
STUDENT_21.attendance["2026-10-21"] = "absent";
STUDENT_23.attendance["2026-10-21"] = "absent";

Object.values(STUDENTS).forEach(student => {
  student.attendance["2026-10-22"] = "present";
});
STUDENT_04.attendance["2026-10-22"] = "absent";
STUDENT_05.attendance["2026-10-22"] = "absent";
STUDENT_06.attendance["2026-10-22"] = "absent";
STUDENT_13.attendance["2026-10-22"] = "absent";
STUDENT_14.attendance["2026-10-22"] = "absent";
STUDENT_15.attendance["2026-10-22"] = "absent";
STUDENT_16.attendance["2026-10-22"] = "absent";
STUDENT_17.attendance["2026-10-22"] = "absent";
STUDENT_18.attendance["2026-10-22"] = "absent";
STUDENT_19.attendance["2026-10-22"] = "absent";
STUDENT_20.attendance["2026-10-22"] = "absent";
STUDENT_21.attendance["2026-10-22"] = "absent";
STUDENT_23.attendance["2026-10-22"] = "absent";

Object.values(STUDENTS).forEach(student => {
  student.attendance["2026-10-23"] = "present";
});
STUDENT_04.attendance["2026-10-23"] = "absent";
STUDENT_05.attendance["2026-10-23"] = "absent";
STUDENT_16.attendance["2026-10-23"] = "absent";
STUDENT_17.attendance["2026-10-23"] = "absent";
STUDENT_19.attendance["2026-10-23"] = "absent";
STUDENT_20.attendance["2026-10-23"] = "absent";
STUDENT_23.attendance["2026-10-23"] = "absent";

Object.values(STUDENTS).forEach(student => {
  student.attendance["2026-10-24"] = "present";
});
STUDENT_04.attendance["2026-10-24"] = "absent";
STUDENT_05.attendance["2026-10-24"] = "absent";
STUDENT_16.attendance["2026-10-24"] = "absent";
STUDENT_17.attendance["2026-10-24"] = "absent";
STUDENT_19.attendance["2026-10-24"] = "absent";
STUDENT_20.attendance["2026-10-24"] = "absent";
STUDENT_22.attendance["2026-10-24"] = "absent";
STUDENT_23.attendance["2026-10-24"] = "absent";

Object.values(STUDENTS).forEach(student => {
  student.attendance["2026-10-26"] = "present";
});
STUDENT_12.attendance["2026-10-26"] = "absent";
STUDENT_13.attendance["2026-10-26"] = "absent";
STUDENT_14.attendance["2026-10-26"] = "absent";
STUDENT_15.attendance["2026-10-26"] = "absent";
STUDENT_16.attendance["2026-10-26"] = "absent";
STUDENT_17.attendance["2026-10-26"] = "absent";
STUDENT_18.attendance["2026-10-26"] = "absent";
STUDENT_19.attendance["2026-10-26"] = "absent";
STUDENT_20.attendance["2026-10-26"] = "absent";
STUDENT_22.attendance["2026-10-26"] = "absent";
STUDENT_23.attendance["2026-10-26"] = "absent";

Object.values(STUDENTS).forEach(student => {
  student.attendance["2026-10-27"] = "present";
});
STUDENT_01.attendance["2026-10-27"] = "absent";
STUDENT_02.attendance["2026-10-27"] = "absent";
STUDENT_08.attendance["2026-10-27"] = "absent";
STUDENT_09.attendance["2026-10-27"] = "absent";
STUDENT_10.attendance["2026-10-27"] = "absent";
STUDENT_12.attendance["2026-10-27"] = "absent";
STUDENT_13.attendance["2026-10-27"] = "absent";
STUDENT_14.attendance["2026-10-27"] = "absent";
STUDENT_15.attendance["2026-10-27"] = "absent";
STUDENT_16.attendance["2026-10-27"] = "absent";
STUDENT_17.attendance["2026-10-27"] = "absent";
STUDENT_18.attendance["2026-10-27"] = "absent";
STUDENT_19.attendance["2026-10-27"] = "absent";
STUDENT_20.attendance["2026-10-27"] = "absent";
STUDENT_22.attendance["2026-10-27"] = "absent";
STUDENT_23.attendance["2026-10-27"] = "absent";

Object.values(STUDENTS).forEach(student => {
  student.attendance["2026-10-28"] = "present";
});
STUDENT_13.attendance["2026-10-28"] = "absent";
STUDENT_14.attendance["2026-10-28"] = "absent";
STUDENT_15.attendance["2026-10-28"] = "absent";
STUDENT_16.attendance["2026-10-28"] = "absent";
STUDENT_17.attendance["2026-10-28"] = "absent";
STUDENT_18.attendance["2026-10-28"] = "absent";
STUDENT_19.attendance["2026-10-28"] = "absent";
STUDENT_20.attendance["2026-10-28"] = "absent";
STUDENT_22.attendance["2026-10-28"] = "absent";
STUDENT_23.attendance["2026-10-28"] = "absent";

Object.values(STUDENTS).forEach(student => {
  student.attendance["2026-10-29"] = "present";
});
STUDENT_16.attendance["2026-10-29"] = null;
STUDENT_17.attendance["2026-10-29"] = null;
STUDENT_19.attendance["2026-10-29"] = null;
STUDENT_20.attendance["2026-10-29"] = null;
STUDENT_21.attendance["2026-10-29"] = null;
STUDENT_22.attendance["2026-10-29"] = null;
STUDENT_23.attendance["2026-10-29"] = null;

Object.values(STUDENTS).forEach(student => {
  student.attendance["2026-10-30"] = "present";
});
STUDENT_16.attendance["2026-10-30"] = null;
STUDENT_17.attendance["2026-10-30"] = null;
STUDENT_18.attendance["2026-10-30"] = null;
STUDENT_19.attendance["2026-10-30"] = null;
STUDENT_20.attendance["2026-10-30"] = null;
STUDENT_21.attendance["2026-10-30"] = null;
STUDENT_22.attendance["2026-10-30"] = null;
STUDENT_23.attendance["2026-10-30"] = null;

Object.values(STUDENTS).forEach(student => {
  student.attendance["2026-10-31"] = "present";
});
STUDENT_16.attendance["2026-10-31"] = null;
STUDENT_17.attendance["2026-10-31"] = null;
STUDENT_18.attendance["2026-10-31"] = null;
STUDENT_19.attendance["2026-10-31"] = null;
STUDENT_20.attendance["2026-10-31"] = null;
STUDENT_21.attendance["2026-10-31"] = null;
STUDENT_22.attendance["2026-10-31"] = null;
STUDENT_23.attendance["2026-10-31"] = null;

//Month: November 2026 (entered up to Nov 7)
Object.values(STUDENTS).forEach(student => {
  student.attendance["2026-11-02"] = "present";
});
STUDENT_03.attendance["2026-11-02"] = "absent";
STUDENT_04.attendance["2026-11-02"] = "absent";
STUDENT_16.attendance["2026-11-02"] = "absent";
STUDENT_17.attendance["2026-11-02"] = "absent";
STUDENT_19.attendance["2026-11-02"] = "absent";
STUDENT_20.attendance["2026-11-02"] = "absent";
STUDENT_22.attendance["2026-11-02"] = "absent";
STUDENT_23.attendance["2026-11-02"] = "absent";

Object.values(STUDENTS).forEach(student => {
  student.attendance["2026-11-03"] = "present";
});
STUDENT_16.attendance["2026-11-03"] = "absent";
STUDENT_17.attendance["2026-11-03"] = "absent";
STUDENT_19.attendance["2026-11-03"] = "absent";
STUDENT_20.attendance["2026-11-03"] = "absent";
STUDENT_22.attendance["2026-11-03"] = "absent";
STUDENT_23.attendance["2026-11-03"] = "absent";

Object.values(STUDENTS).forEach(student => {
  student.attendance["2026-11-04"] = "present";
});
STUDENT_01.attendance["2026-11-04"] = "absent";
STUDENT_06.attendance["2026-11-04"] = "absent";
STUDENT_16.attendance["2026-11-04"] = "absent";
STUDENT_17.attendance["2026-11-04"] = "absent";
STUDENT_19.attendance["2026-11-04"] = "absent";
STUDENT_20.attendance["2026-11-04"] = "absent";
STUDENT_21.attendance["2026-11-04"] = "absent";
STUDENT_22.attendance["2026-11-04"] = "absent";
STUDENT_23.attendance["2026-11-04"] = "absent";

Object.values(STUDENTS).forEach(student => {
  student.attendance["2026-11-05"] = "present";
});
STUDENT_16.attendance["2026-11-05"] = "absent";
STUDENT_17.attendance["2026-11-05"] = "absent";
STUDENT_19.attendance["2026-11-05"] = "absent";
STUDENT_20.attendance["2026-11-05"] = "absent";
STUDENT_21.attendance["2026-11-05"] = "absent";
STUDENT_22.attendance["2026-11-05"] = "absent";
STUDENT_23.attendance["2026-11-05"] = "absent";

Object.values(STUDENTS).forEach(student => {
  student.attendance["2026-11-06"] = "present";
});
STUDENT_01.attendance["2026-11-06"] = "absent";
STUDENT_02.attendance["2026-11-06"] = "absent";
STUDENT_04.attendance["2026-11-06"] = "absent";
STUDENT_16.attendance["2026-11-06"] = "absent";
STUDENT_17.attendance["2026-11-06"] = "absent";
STUDENT_22.attendance["2026-11-06"] = "absent";
STUDENT_23.attendance["2026-11-06"] = "absent";

Object.values(STUDENTS).forEach(student => {
  student.attendance["2026-11-07"] = "present";
});
STUDENT_01.attendance["2026-11-07"] = "absent";
STUDENT_02.attendance["2026-11-07"] = "absent";
STUDENT_04.attendance["2026-11-07"] = "absent";
STUDENT_16.attendance["2026-11-07"] = "absent";
STUDENT_17.attendance["2026-11-07"] = "absent";
STUDENT_22.attendance["2026-11-07"] = "absent";
STUDENT_23.attendance["2026-11-07"] = "absent";
