//All student data in one place: name, results and fees.
//Attendance starts blank here and is filled in attendance.js.
//Needs data.js loaded first (blankAttendance, makeResults, fee).

const STUDENT_01 = {
  name: "Aayu",
  attendance: blankAttendance(),
  results: makeResults([42, 38, 40, 35, 44, 45]),
  fees: [
    fee("January 2026", "paid", "2026-01-05"), fee("February 2026", "paid", "2026-02-05"), fee("March 2026", "paid", "2026-03-05"),
    fee("April 2026", "unpaid", "2026-04-05"), fee("May 2026", "unpaid", "2026-05-05"), fee("June 2026", "unpaid", "2026-06-05"),
    fee("July 2026", "unpaid", "2026-07-05"), fee("August 2026", "unpaid", "2026-08-05"), fee("September 2026", "unpaid", "2026-09-05"),
    fee("October 2026", "unpaid", "2026-10-05"), fee("November 2026", "unpaid", "2026-11-05"), fee("December 2026", "unpaid", "2026-12-05"),
  ],
};

const STUDENT_02 = {
  name: "Sanvi",
  attendance: blankAttendance(),
  results: makeResults([40, 41, 40, 39, 43, 42]),
  fees: [
    fee("January 2026", "paid", "2026-01-10"), fee("February 2026", "paid", "2026-02-10"), fee("March 2026", "paid", "2026-03-10"),
    fee("April 2026", "unpaid", "2026-04-10"), fee("May 2026", "unpaid", "2026-05-10"), fee("June 2026", "unpaid", "2026-06-10"),
    fee("July 2026", "unpaid", "2026-07-10"), fee("August 2026", "unpaid", "2026-08-10"), fee("September 2026", "unpaid", "2026-09-10"),
    fee("October 2026", "unpaid", "2026-10-10"), fee("November 2026", "unpaid", "2026-11-10"), fee("December 2026", "unpaid", "2026-12-10"),
  ],
};

const STUDENT_03 = {
  name: "Ayan",
  attendance: blankAttendance(),
  results: makeResults([35, 12, 36, 40, 35, 33]),
  fees: [
    fee("January 2026", "unpaid", "2026-01-12"), fee("February 2026", "paid", "2026-02-12"), fee("March 2026", "paid", "2026-03-12"),
    fee("April 2026", "paid", "2026-04-12"), fee("May 2026", "paid", "2026-05-12"), fee("June 2026", "paid", "2026-06-12"),
    fee("July 2026", "paid", "2026-07-12"), fee("August 2026", "unpaid", "2026-08-12"), fee("September 2026", "unpaid", "2026-09-12"),
    fee("October 2026", "unpaid", "2026-10-12"), fee("November 2026", "unpaid", "2026-11-12"), fee("December 2026", "unpaid", "2026-12-12"),
  ],
};

const STUDENT_04 = {
  name: "Arifa",
  attendance: blankAttendance(),
  results: makeResults([41, 44, 41, 42, 43, 46]),
  fees: [
    fee("January 2026", "unpaid", "2026-01-05"), fee("February 2026", "paid", "2026-02-05"), fee("March 2026", "paid", "2026-03-05"),
    fee("April 2026", "paid", "2026-04-05"), fee("May 2026", "paid", "2026-05-05"), fee("June 2026", "paid", "2026-06-05"),
    fee("July 2026", "paid", "2026-07-05"), fee("August 2026", "unpaid", "2026-08-05"), fee("September 2026", "unpaid", "2026-09-05"),
    fee("October 2026", "unpaid", "2026-10-05"), fee("November 2026", "unpaid", "2026-11-05"), fee("December 2026", "unpaid", "2026-12-05"),
  ],
};

const STUDENT_05 = {
  name: "Anaya",
  attendance: blankAttendance(),
  results: makeResults([44, 42, 37, 33, 40, 38]),
  fees: [
    fee("January 2026", "unpaid", "2026-01-15"), fee("February 2026", "unpaid", "2026-02-15"), fee("March 2026", "unpaid", "2026-03-15"),
    fee("April 2026", "paid", "2026-04-15"), fee("May 2026", "paid", "2026-05-15"), fee("June 2026", "paid", "2026-06-15"),
    fee("July 2026", "paid", "2026-07-15"), fee("August 2026", "unpaid", "2026-08-15"), fee("September 2026", "unpaid", "2026-09-15"),
    fee("October 2026", "unpaid", "2026-10-15"), fee("November 2026", "unpaid", "2026-11-15"), fee("December 2026", "unpaid", "2026-12-15"),
  ],
};

const STUDENT_06 = {
  name: "Nayyar",
  attendance: blankAttendance(),
  results: makeResults([44, 36, 42, 35, 43, 38]),
  fees: [
    fee("January 2026", "unpaid", "2026-01-05"), fee("February 2026", "unpaid", "2026-02-05"), fee("March 2026", "unpaid", "2026-03-05"),
    fee("April 2026", "paid", "2026-04-05"), fee("May 2026", "paid", "2026-05-05"), fee("June 2026", "paid", "2026-06-05"),
    fee("July 2026", "unpaid", "2026-07-05"), fee("August 2026", "unpaid", "2026-08-05"), fee("September 2026", "unpaid", "2026-09-05"),
    fee("October 2026", "unpaid", "2026-10-05"), fee("November 2026", "unpaid", "2026-11-05"), fee("December 2026", "unpaid", "2026-12-05"),
  ],
};

const STUDENT_07 = {
  name: "Nafisha",
  attendance: blankAttendance(),
  results: makeResults([42, 40, 36, 39, 37, 38]),
  fees: [
    fee("January 2026", "unpaid", "2026-01-05"), fee("February 2026", "unpaid", "2026-02-05"), fee("March 2026", "unpaid", "2026-03-05"),
    fee("April 2026", "paid", "2026-04-05"), fee("May 2026", "paid", "2026-05-05"), fee("June 2026", "paid", "2026-06-05"),
    fee("July 2026", "unpaid", "2026-07-05"), fee("August 2026", "unpaid", "2026-08-05"), fee("September 2026", "unpaid", "2026-09-05"),
    fee("October 2026", "unpaid", "2026-10-05"), fee("November 2026", "unpaid", "2026-11-05"), fee("December 2026", "unpaid", "2026-12-05"),
  ],
};

const STUDENT_08 = {
  name: "Abusad",
  attendance: blankAttendance(),
  results: makeResults([40, 35, 36, 44, 33, 37]),
  fees: [
    fee("January 2026", "unpaid", "2026-01-05"), fee("February 2026", "unpaid", "2026-02-05"), fee("March 2026", "unpaid", "2026-03-05"),
    fee("April 2026", "paid", "2026-04-05"), fee("May 2026", "paid", "2026-05-05"), fee("June 2026", "paid", "2026-06-05"),
    fee("July 2026", "paid", "2026-07-05"), fee("August 2026", "unpaid", "2026-08-05"), fee("September 2026", "unpaid", "2026-09-05"),
    fee("October 2026", "unpaid", "2026-10-05"), fee("November 2026", "unpaid", "2026-11-05"), fee("December 2026", "unpaid", "2026-12-05"),
  ],
};

const STUDENT_09 = {
  name: "Asad",
  attendance: blankAttendance(),
  results: makeResults([42, 36, 30, 37, 34, 31]),
  fees: [
    fee("January 2026", "unpaid", "2026-01-05"), fee("February 2026", "unpaid", "2026-02-05"), fee("March 2026", "unpaid", "2026-03-05"),
    fee("April 2026", "paid", "2026-04-05"), fee("May 2026", "paid", "2026-05-05"), fee("June 2026", "paid", "2026-06-05"),
    fee("July 2026", "paid", "2026-07-05"), fee("August 2026", "unpaid", "2026-08-05"), fee("September 2026", "unpaid", "2026-09-05"),
    fee("October 2026", "unpaid", "2026-10-05"), fee("November 2026", "unpaid", "2026-11-05"), fee("December 2026", "unpaid", "2026-12-05"),
  ],
};

const STUDENT_10 = {
  name: "Owais",
  attendance: blankAttendance(),
  results: makeResults([35, 32, 40, 36, 33, 31]),
  fees: [
    fee("January 2026", "unpaid", "2026-01-05"), fee("February 2026", "unpaid", "2026-02-05"), fee("March 2026", "unpaid", "2026-03-05"),
    fee("April 2026", "unpaid", "2026-04-05"), fee("May 2026", "unpaid", "2026-05-05"), fee("June 2026", "unpaid", "2026-06-05"),
    fee("July 2026", "unpaid", "2026-07-05"), fee("August 2026", "unpaid", "2026-08-05"), fee("September 2026", "unpaid", "2026-09-05"),
    fee("October 2026", "unpaid", "2026-10-05"), fee("November 2026", "unpaid", "2026-11-05"), fee("December 2026", "unpaid", "2026-12-05"),
  ],
};

const STUDENT_11 = {
  name: "Rabiya",
  attendance: blankAttendance(),
  results: makeResults([32, 15, 33, 30, 36, 34]),
  fees: [
    fee("January 2026", "unpaid", "2026-01-05"), fee("February 2026", "unpaid", "2026-02-05"), fee("March 2026", "unpaid", "2026-03-05"),
    fee("April 2026", "unpaid", "2026-04-05"), fee("May 2026", "unpaid", "2026-05-05"), fee("June 2026", "unpaid", "2026-06-05"),
    fee("July 2026", "unpaid", "2026-07-05"), fee("August 2026", "unpaid", "2026-08-05"), fee("September 2026", "unpaid", "2026-09-05"),
    fee("October 2026", "unpaid", "2026-10-05"), fee("November 2026", "unpaid", "2026-11-05"), fee("December 2026", "unpaid", "2026-12-05"),
  ],
};

const STUDENT_12 = {
  name: "Hasan",
  attendance: blankAttendance(),
  results: makeResults([41, 36, 43, 39, 41, 38]),
  fees: [
    fee("January 2026", "unpaid", "2026-01-05"), fee("February 2026", "unpaid", "2026-02-05"), fee("March 2026", "unpaid", "2026-03-05"),
    fee("April 2026", "unpaid", "2026-04-05"), fee("May 2026", "paid", "2026-05-05"), fee("June 2026", "paid", "2026-06-05"),
    fee("July 2026", "paid", "2026-07-05"), fee("August 2026", "unpaid", "2026-08-05"), fee("September 2026", "unpaid", "2026-09-05"),
    fee("October 2026", "unpaid", "2026-10-05"), fee("November 2026", "unpaid", "2026-11-05"), fee("December 2026", "unpaid", "2026-12-05"),
  ],
};

const STUDENT_13 = {
  name: "Shivam",
  attendance: blankAttendance(),
  results: makeResults([0, 0, 0, 0, 0, 0]),
  fees: [fee("January 2026", "unpaid", "2026-01-05"), fee("February 2026", "unpaid", "2026-02-05"), fee("March 2026", "unpaid", "2026-03-05"), fee("April 2026", "unpaid", "2026-04-05"), fee("May 2026", "unpaid", "2026-05-05"), fee("June 2026", "unpaid", "2026-06-05"), fee("July 2026", "unpaid", "2026-07-05"), fee("August 2026", "unpaid", "2026-08-05"), fee("September 2026", "unpaid", "2026-09-05"), fee("October 2026", "unpaid", "2026-10-05"), fee("November 2026", "unpaid", "2026-11-05"), fee("December 2026", "unpaid", "2026-12-05")],
};

const STUDENT_14 = {
  name: "Simple",
  attendance: blankAttendance(),
  results: makeResults([0, 0, 0, 0, 0, 0]),
  fees: [fee("January 2026", "unpaid", "2026-01-05"), fee("February 2026", "unpaid", "2026-02-05"), fee("March 2026", "unpaid", "2026-03-05"), fee("April 2026", "unpaid", "2026-04-05"), fee("May 2026", "unpaid", "2026-05-05"), fee("June 2026", "unpaid", "2026-06-05"), fee("July 2026", "unpaid", "2026-07-05"), fee("August 2026", "unpaid", "2026-08-05"), fee("September 2026", "unpaid", "2026-09-05"), fee("October 2026", "unpaid", "2026-10-05"), fee("November 2026", "unpaid", "2026-11-05"), fee("December 2026", "unpaid", "2026-12-05")],
};

const STUDENT_15 = {
  name: "Sandhya",
  attendance: blankAttendance(),
  results: makeResults([0, 0, 0, 0, 0, 0]),
  fees: [fee("January 2026", "unpaid", "2026-01-05"), fee("February 2026", "unpaid", "2026-02-05"), fee("March 2026", "unpaid", "2026-03-05"), fee("April 2026", "unpaid", "2026-04-05"), fee("May 2026", "unpaid", "2026-05-05"), fee("June 2026", "unpaid", "2026-06-05"), fee("July 2026", "unpaid", "2026-07-05"), fee("August 2026", "unpaid", "2026-08-05"), fee("September 2026", "unpaid", "2026-09-05"), fee("October 2026", "unpaid", "2026-10-05"), fee("November 2026", "unpaid", "2026-11-05"), fee("December 2026", "unpaid", "2026-12-05")],
};

const STUDENT_16 = {
  name: "Muskan",
  attendance: blankAttendance(),
  results: makeResults([0, 0, 0, 0, 0, 0]),
  fees: [fee("January 2026", "unpaid", "2026-01-05"), fee("February 2026", "unpaid", "2026-02-05"), fee("March 2026", "unpaid", "2026-03-05"), fee("April 2026", "unpaid", "2026-04-05"), fee("May 2026", "unpaid", "2026-05-05"), fee("June 2026", "unpaid", "2026-06-05"), fee("July 2026", "unpaid", "2026-07-05"), fee("August 2026", "unpaid", "2026-08-05"), fee("September 2026", "unpaid", "2026-09-05"), fee("October 2026", "unpaid", "2026-10-05"), fee("November 2026", "unpaid", "2026-11-05"), fee("December 2026", "unpaid", "2026-12-05")],
};

const STUDENT_17 = {
  name: "Ashrafi",
  attendance: blankAttendance(),
  results: makeResults([0, 0, 0, 0, 0, 0]),
  fees: [fee("January 2026", "unpaid", "2026-01-05"), fee("February 2026", "unpaid", "2026-02-05"), fee("March 2026", "unpaid", "2026-03-05"), fee("April 2026", "unpaid", "2026-04-05"), fee("May 2026", "unpaid", "2026-05-05"), fee("June 2026", "unpaid", "2026-06-05"), fee("July 2026", "unpaid", "2026-07-05"), fee("August 2026", "unpaid", "2026-08-05"), fee("September 2026", "unpaid", "2026-09-05"), fee("October 2026", "unpaid", "2026-10-05"), fee("November 2026", "unpaid", "2026-11-05"), fee("December 2026", "unpaid", "2026-12-05")],
};

const STUDENT_18 = {
  name: "Nishad",
  attendance: blankAttendance(),
  results: makeResults([0, 0, 0, 0, 0, 0]),
  fees: [fee("January 2026", "unpaid", "2026-01-05"), fee("February 2026", "unpaid", "2026-02-05"), fee("March 2026", "unpaid", "2026-03-05"), fee("April 2026", "unpaid", "2026-04-05"), fee("May 2026", "unpaid", "2026-05-05"), fee("June 2026", "unpaid", "2026-06-05"), fee("July 2026", "unpaid", "2026-07-05"), fee("August 2026", "unpaid", "2026-08-05"), fee("September 2026", "unpaid", "2026-09-05"), fee("October 2026", "unpaid", "2026-10-05"), fee("November 2026", "unpaid", "2026-11-05"), fee("December 2026", "unpaid", "2026-12-05")],
};

const STUDENT_19 = {
  name: "Owais",
  attendance: blankAttendance(),
  results: makeResults([0, 0, 0, 0, 0, 0]),
  fees: [fee("January 2026", "unpaid", "2026-01-05"), fee("February 2026", "unpaid", "2026-02-05"), fee("March 2026", "unpaid", "2026-03-05"), fee("April 2026", "unpaid", "2026-04-05"), fee("May 2026", "unpaid", "2026-05-05"), fee("June 2026", "unpaid", "2026-06-05"), fee("July 2026", "unpaid", "2026-07-05"), fee("August 2026", "unpaid", "2026-08-05"), fee("September 2026", "unpaid", "2026-09-05"), fee("October 2026", "unpaid", "2026-10-05"), fee("November 2026", "unpaid", "2026-11-05"), fee("December 2026", "unpaid", "2026-12-05")],
};

const STUDENT_20 = {
  name: "Altamash",
  attendance: blankAttendance(),
  results: makeResults([0, 0, 0, 0, 0, 0]),
  fees: [fee("January 2026", "unpaid", "2026-01-05"), fee("February 2026", "unpaid", "2026-02-05"), fee("March 2026", "unpaid", "2026-03-05"), fee("April 2026", "unpaid", "2026-04-05"), fee("May 2026", "unpaid", "2026-05-05"), fee("June 2026", "unpaid", "2026-06-05"), fee("July 2026", "unpaid", "2026-07-05"), fee("August 2026", "unpaid", "2026-08-05"), fee("September 2026", "unpaid", "2026-09-05"), fee("October 2026", "unpaid", "2026-10-05"), fee("November 2026", "unpaid", "2026-11-05"), fee("December 2026", "unpaid", "2026-12-05")],
};

const STUDENT_21 = {
  name: "Iqbal",
  attendance: blankAttendance(),
  results: makeResults([0, 0, 0, 0, 0, 0]),
  fees: [fee("January 2026", "unpaid", "2026-01-05"), fee("February 2026", "unpaid", "2026-02-05"), fee("March 2026", "unpaid", "2026-03-05"), fee("April 2026", "unpaid", "2026-04-05"), fee("May 2026", "unpaid", "2026-05-05"), fee("June 2026", "unpaid", "2026-06-05"), fee("July 2026", "unpaid", "2026-07-05"), fee("August 2026", "unpaid", "2026-08-05"), fee("September 2026", "unpaid", "2026-09-05"), fee("October 2026", "unpaid", "2026-10-05"), fee("November 2026", "unpaid", "2026-11-05"), fee("December 2026", "unpaid", "2026-12-05")],
};

const STUDENT_22 = {
  name: "Murshid",
  attendance: blankAttendance(),
  results: makeResults([0, 0, 0, 0, 0, 0]),
  fees: [fee("January 2026", "unpaid", "2026-01-05"), fee("February 2026", "unpaid", "2026-02-05"), fee("March 2026", "unpaid", "2026-03-05"), fee("April 2026", "unpaid", "2026-04-05"), fee("May 2026", "unpaid", "2026-05-05"), fee("June 2026", "unpaid", "2026-06-05"), fee("July 2026", "unpaid", "2026-07-05"), fee("August 2026", "unpaid", "2026-08-05"), fee("September 2026", "unpaid", "2026-09-05"), fee("October 2026", "unpaid", "2026-10-05"), fee("November 2026", "unpaid", "2026-11-05"), fee("December 2026", "unpaid", "2026-12-05")],
};

const STUDENT_23 = {
  name: "Zainab",
  attendance: blankAttendance(),
  results: makeResults([0, 0, 0, 0, 0, 0]),
  fees: [fee("January 2026", "unpaid", "2026-01-05"), fee("February 2026", "unpaid", "2026-02-05"), fee("March 2026", "unpaid", "2026-03-05"), fee("April 2026", "unpaid", "2026-04-05"), fee("May 2026", "unpaid", "2026-05-05"), fee("June 2026", "unpaid", "2026-06-05"), fee("July 2026", "unpaid", "2026-07-05"), fee("August 2026", "unpaid", "2026-08-05"), fee("September 2026", "unpaid", "2026-09-05"), fee("October 2026", "unpaid", "2026-10-05"), fee("November 2026", "unpaid", "2026-11-05"), fee("December 2026", "unpaid", "2026-12-05")],
};

const STUDENTS = {
  "01": STUDENT_01, "02": STUDENT_02, "03": STUDENT_03, "04": STUDENT_04,
  "05": STUDENT_05, "06": STUDENT_06, "07": STUDENT_07, "08": STUDENT_08,
  "09": STUDENT_09, "10": STUDENT_10, "11": STUDENT_11, "12": STUDENT_12,
  "13": STUDENT_13, "14": STUDENT_14, "15": STUDENT_15, "16": STUDENT_16,
  "17": STUDENT_17, "18": STUDENT_18, "19": STUDENT_19, "20": STUDENT_20,
  "21": STUDENT_21, "22": STUDENT_22, "23": STUDENT_23,
};
