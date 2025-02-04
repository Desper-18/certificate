const studentName = document.querySelector("#name");
const studentSurname = document.querySelector("#surname");
const finishedCourse = document.querySelector("#finishedCourse");
const programm = document.querySelector("#programm");
const instructor = document.querySelector("#instructor");
const date = document.querySelector("#date");
const img = document.querySelector(".img");

let student = JSON.parse(localStorage.getItem("student"));

if (student != null) {
  date.textContent = student.certificateId + student.date;
  if (student.date.length > 15) {
    date.classList = "date1";
  }

  if (student.gender === "male") {
    finishedCourse.textContent = "окончил специальный курс";
  } else {
    finishedCourse.textContent = "окончила специальный курс";
  }
  if (student.instructor === "Исломиддин Нуриддинов") {
    img.setAttribute("src", "./img/proSkills-Islom.png");
    instructor.textContent = "";
  } else if (student.instructor === "Умед Худойбердиев") {
    img.setAttribute("src", "./img/proSkills-Umed.png");
    instructor.textContent = "";
  } else {
    img.setAttribute("src", "./img/certificate.png");
    instructor.textContent = student.instructor;
  }
  studentName.textContent = student.name;
  studentSurname.textContent = student.lastname;
  // instructor.textContent = student.instructor;
  if (instructor.textContent.length > 20) {
    instructor.classList.add("instructor1");
  }
  programm.textContent = student.programm;
}

if (studentName.textContent[0] === "A") {
  studentName.classList.add("student-name1");
}
if (studentSurname.textContent[0] === "A") {
  studentSurname.classList.add("student-name1");
}
if (programm.textContent.length > 20) {
  programm.classList.add("width");
}
