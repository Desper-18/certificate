const userInLS = localStorage.getItem("user")
if (userInLS === null) {
  location.replace("login.html")
} else {
}


const certificateType = document.querySelector('#certificateType');
const studentName = document.querySelector('#name');
const studentLastname = document.querySelector('#lastname');
const gender = document.querySelector('#gender');
const instructor = document.querySelector('#instructor');
const date = document.querySelector('#date');
const id = document.querySelector('#id');
const logOutBtn = document.querySelector("#log-out")
const btnSubmit = document.querySelector('#submit');
const programm = document.querySelector('#programm');
const campLabel = document.querySelector('#camp-label');
const camp = document.querySelector('#camp');

logOutBtn.addEventListener('click', logOut)
certificateType.addEventListener('change', certificateChange);
gender.addEventListener('change', genderChange);
programm.addEventListener('change', Programm);
instructor.addEventListener('change', instructorChange);
btnSubmit.addEventListener('click', Submit);

const student = {};

function certificateChange(event) {
  let certificate = event.target.value;
  student.certificateType = certificate;
  if (certificate === 'kids') {
    campLabel.classList.remove('none');
    campLabel.classList.add('inline-block');
  } else if (certificate != 'kids') {
    campLabel.classList.add('none');
    campLabel.classList.remove('inline-block');
  }
}

function genderChange() {
  let gen = gender.options[gender.selectedIndex].text;
  student.gender = gen;
}

function Programm() {
  let pro = programm.options[programm.selectedIndex].text;
  student.programm = pro;
}
function instructorChange() {
  inst = instructor.options[instructor.selectedIndex].text;
  student.instructor = inst;
}

function NewTab() {
  if (
    student.certificateType === 'kids' &&
    student.programm === 'Storytelling with Scratch' &&
    !camp.checked
  ) {
    window.open('./certificateKids/kids.html', '_blank');
  } else if (student.certificateType === 'proskills') {
    window.open('./certificateProskills/index.html', '_blank');
  } else if (student.certificateType === 'freelance') {
    window.open('./certificateFreelance/index.html', '_blank');
  } else {
    if (student.certificateType === 'kids') {
      window.open('./certificateKids/index.html', '_blank');
    }
    if (student.programm === 'Программирование с нуля') {
      window.open('./certificate/itp.html', '_blank');
    }

    window.open('./certificate/index.html', '_blank');
  }
}

function Submit(event) {
  event.preventDefault();
  student.name = studentName.value;
  student.lastname = studentLastname.value;
  student.certificateId = '№ ' + id.value;
  student.date = ' от ' + date.value;
  student.camp = camp.checked;
  localStorage.setItem('student', JSON.stringify(student));
  studentName.value = '';
  studentLastname.value = '';
  gender.selectedIndex = 0;
  programm.selectedIndex = 0;
  instructor.selectedIndex = 0;
  id.value = '';
  date.value = '';
}

function logOut (event) {
  localStorage.removeItem("user")
  window.location.reload()
}