const userInLS = localStorage.getItem("user")
if (userInLS === null) {
  location.replace("loginPage/login.html")
}


const certificateType = document.querySelector('#certificateType');
const studentName = document.querySelector('#name');
const studentLastname = document.querySelector('#lastname');
const gender = document.querySelector('#gender');
const instructor = document.querySelector('#instructor');
const date = document.querySelector('#date');
const id = document.querySelector('#id');
const programm = document.querySelector('#programm');
const campLabel = document.querySelector('#camp-label');
const camp = document.querySelector('#camp');
const btnSubmit = document.querySelector('#submit');

const logOutBtn = document.querySelector("#log-out")

logOutBtn.addEventListener('click', logOut)
certificateType.addEventListener('click', certificateChange);
gender.addEventListener('click', genderSelect);
programm.addEventListener('change', Programm);
instructor.addEventListener('change', instructorChange);
btnSubmit.addEventListener('click', Submit);

const student = {};

document.addEventListener("DOMContentLoaded", () => {
  student.gender = "male"
})

function removeActiveClassName(items, activeClassName) {
  Array.from(items).forEach(btn => {
    if (btn.classList.contains(activeClassName)) {
      btn.classList.remove(activeClassName)
    }
  });
}

function certificateChange(event) {
  const btn = event.target
  console.log(certificateType.children);
  removeActiveClassName(certificateType.children, 'type-selected')
  btn.classList.add('type-selected')
  let certificate = btn.dataset.type;
  console.log(certificate);
  student.certificateType = certificate;
  if (certificate === 'kids') {
    campLabel.classList.remove('none');
    campLabel.classList.add('inline-block');
  } else if (certificate != 'kids') {
    campLabel.classList.add('none');
    campLabel.classList.remove('inline-block');
  }
}

function genderSelect(evt) {
  let btn = evt.target
  let gen = btn.dataset.type;
  removeActiveClassName(gender.children, 'gender-selected')
  btn.classList.add('gender-selected')

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
  const lang = localStorage.getItem('lang');

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
    if (lang === "ru") {
      window.open('./certificate/index.html', '_blank');
    } else {
      window.open('./certificate/index-en.html', '_blank');
    }
  }
}

function Submit(event) {
  event.preventDefault();
  const lang = localStorage.getItem('lang');
  student.name = studentName.value;
  student.lastname = studentLastname.value;
  student.certificateId = '№ ' + id.value.toUpperCase();
  student.date = lang === "ru" ? ' от ' + date.value : ' on ' + date.value;
  student.camp = camp.checked;
  localStorage.setItem('student', JSON.stringify(student));
  studentName.value = '';
  studentLastname.value = '';
  gender.selectedIndex = 0;
  // programm.selectedIndex = 0;
  // instructor.selectedIndex = 0;
  id.value = '';
  // date.value = '';
}

function logOut(event) {
  localStorage.removeItem("user")
  window.location.reload()
}