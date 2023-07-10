const studentName = document.querySelector('#name');
const studentSurname = document.querySelector('#surname');
const finishedCourse = document.querySelector('#finishedCourse');
const programm = document.querySelector('#programm');
const instructor = document.querySelector('#instructor');
const date = document.querySelector('#date');

let student = JSON.parse(localStorage.getItem('student'));

if (student != null) {
  date.textContent = student.certificateId + student.date;
  if (student.date.length > 15) {
    date.classList = 'date1';
  }

  if (student.camp) {
    if (student.gender === 'Мужской') {
      finishedCourse.textContent = 'окончил лагерь';
    } else {
      finishedCourse.textContent = 'окончила лагерь';
    }
  } else {
    if (student.gender === 'Мужской') {
      finishedCourse.textContent = 'окончил курс';
    } else {
      finishedCourse.textContent = 'окончила курс';
    }
  }

  studentName.textContent = student.name;
  studentSurname.textContent = student.lastname;
  instructor.textContent = student.instructor;
  programm.textContent = student.programm;
}

if (studentName.textContent[0] === 'A') {
  studentName.classList.add('student-name1');
}
if (studentSurname.textContent[0] === 'A') {
  studentSurname.classList.add('student-name1');
}
if (programm.textContent.length > 20) {
  programm.classList.add('width');
}

console.log(student);
