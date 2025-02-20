const studentName = document.querySelector("#name");
const studentSurname = document.querySelector("#surname");
const finishedCourse = document.querySelector("#finishedCourse");
const programm = document.querySelector("#programm");
const instructor = document.querySelector("#instructor");
const certificate_id = document.querySelector("#certificate_id");
const date = document.querySelector("#date");
const img = document.querySelector("img");
const instructorDiv = document.querySelector(".instructor");

let student = JSON.parse(localStorage.getItem("student"));
console.log(student);

if (student != null) {
  certificate_id.textContent = student.certificateId;
  date.textContent = student.date;
  if (student.date.length > 15) {
    date.classList = "date1";
  }
  finishedCourse.textContent = "is awarded to";
  studentName.textContent = student.name;
  studentSurname.textContent = student.lastname;
  instructor.textContent = student.instructor;
  programm.insertAdjacentText("beforeend", student.programm);
}
// if (student.programm === "Программирование с нуля") {
//   img.src = "./img/itp.png";
//   programm.textContent = "";
//   studentName.classList.add("student-name-itp");
//   if (student.gender === "male") {
//     finishedCourse.textContent = "Окончил курс:";
//   } else {
//     finishedCourse.textContent = "Окончила курс:";
//   }
//   instructorDiv.classList.add("instructor-itp");
//   instructor.classList.add("instructor-signature-itp");
//   studentName = student.name + student.lastname;
// }
if (studentName.textContent[0] === "A") {
  studentName.classList.add("student-name1");
}
if (studentSurname.textContent[0] === "A") {
  studentSurname.classList.add("student-name1");
}
if (programm.textContent.length > 17) {
  programm.classList.add("width");
}
