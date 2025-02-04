const studentName = document.querySelector('#name-surname');
const studentSurname = document.querySelector('#surname');
const finishedCourse = document.querySelector('#finished-course');
const programm = document.querySelector('#programm');
const instructor = document.querySelector('#instructor');
const date = document.querySelector('#date');
const instructorDiv = document.querySelector('.instructor');
const studentId = document.querySelector('#student-id');

let student = JSON.parse(localStorage.getItem('student'));

if (student != null) {
  date.textContent = `| ${student.date.slice(4, 13)}`;
  studentId.textContent = `ID ${student.certificateId.slice(2)}`;
  if (student.date.length > 15) {
    date.classList = 'date1';
  }
  if (student.gender === 'male') {
    finishedCourse.textContent = 'Окончил курс:';
  } else {
    finishedCourse.textContent = 'Окончила курс:';
  }
  studentName.textContent = `${student.name} ${student.lastname}`;
  instructor.textContent = student.instructor;
  programm.textContent = student.programm;
}
if (studentName.textContent[0] === 'A') {
  studentName.classList.add('student-name1');
}
if (studentSurname.textContent[0] === 'A') {
  studentSurname.classList.add('student-name1');
}
if (programm.textContent.length > 17) {
  programm.classList.add('width');
}
