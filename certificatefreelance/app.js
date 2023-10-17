const studentName = document.querySelector('#name');
const studentSurname = document.querySelector('#surname');
const finishedCourse = document.querySelector('#finishedCourse');
const programm = document.querySelector('#programm');
const instructor = document.querySelector('#instructor');
const date = document.querySelector('#date');
const img = document.querySelector('#img');

let student = JSON.parse(localStorage.getItem('student'));
console.log(student);

if (student !== null) {
  date.textContent = student.certificateId + student.date;
  if (student.date.length > 15) {
    date.classList = 'date1';
  }

  if (student.gender === 'Мужской') {
    finishedCourse.textContent = 'окончил курс';
  } else {
    finishedCourse.textContent = 'окончила курс';
  }
  studentName.textContent = student.name + ' ' + student.lastname;
  if (student.instructor === 'Джамшед Бобоев') {
    img.src = './img/jamshed.png';
    programm.textContent = '';
  } else if (student.instructor === 'Зарифхон Олимов') {
    img.src = './img/newDf.png';
    // programm.textContent = student.programm;
  }
}

// if (studentName.textContent[0] === "A") {
//   studentName.classList.add("student-name1");
// }
// if (studentSurname.textContent[0] === "A") {
//   studentSurname.classList.add("student-name1");
// }
// if (programm.textContent.length > 20) {
//   programm.classList.add("width");
// }
