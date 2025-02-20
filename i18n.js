const language = document.querySelector("#language");
const currentLang = localStorage.getItem("lang");

document.addEventListener("DOMContentLoaded", () => {
  if (currentLang === "ru") {
    document.querySelector(".language-selected").classList.remove("language-selected");
    document.querySelector('[data-lang="ru"]').classList.add("language-selected");
  } else {
    document.querySelector(".language-selected").classList.remove("language-selected");
    document.querySelector('[data-lang="en"]').classList.add("language-selected");
    gender.style.display = "none";
  }
});
language.addEventListener("click", (evt) => {
  const button = evt.target;
  if (button.tagName !== "BUTTON") {
    return;
  }
  if (button.classList.contains("language-selected")) {
    return;
  } else {
    document.querySelector(".language-selected").classList.remove("language-selected");
    button.classList.add("language-selected");
  }
  let lang = button.dataset.lang;
  localStorage.setItem("lang", lang);
  location.reload();
});

const locales = {
  ru: {
    courseGroups: [
      {
        name: "IT Project Management",
        items: [
          "IT Project Management 0",
          "IT Project Management LVL 1",
          "IT Project Management LVL 2"
        ]
      },
      {
        name: "Веб-разработка",
        items: [
          "Web 0",
          "JavaScript LVL 1",
          "JavaScript LVL 2",
          "React JS",
          "Front-end Pro"
        ]
      },
      {
        name: "Python",
        items: [
          "Python LVL 0",
          "Python LVL 1",
          "Python LVL 2"
        ]
      },
      {
        name: "Графический дизайн",
        items: [
          "Графический дизайн: экспресс",
          "Графический дизайн",
          "Графический дизайн Pro"
        ]
      },
      {
        name: "UX/UI дизайн",
        items: [
          "UX/UI дизайн",
          "UX/UI дизайн 0",
          "UX/UI дизайн LVL 1"
        ]
      },
      {
        name: "Основы программирования",
        items: [
          "Основы компьютера",
          "Программирование с нуля",
          "Основы программирования CS50"
        ]
      },
      {
        name: "Маркетинг",
        items: [
          "Digital маркетинг",
          "Диджитал Маркетинг для начинающих",
          "Product Management",
          "Project Management"
        ]
      },
      {
        name: "Другие курсы",
        items: [
          "Цифровая грамотность",
          "Blender для начинающих",
          "Основы дата аналитики",
          "Storytelling with Scratch",
          "Сайт на Tilda",
          "Как подружиться с данными",
          "Успешный стартап",
          "Удаленный заработок"
        ]
      }
    ],
    instructorGroups: [
      {
        name: "Актуальные",
        items: [
          "Азиза Сатыбалдыева",
          "Акбар Хамзаев",
          "Алишер Нарзуллоев",
          "Зарифхон Олимов",
          "Манижа Рахматуллаева",
          "Мурод Коимдодов",
          "Солор Ибодуллоев",
          "Сомон Бахромзода",
          "Табрез Саноев",
          "Юлия Мамедова"
        ]
      },
      {
        name: "Экс-инструкторы",
        items: [
          "Алиджон Аминов",
          "Антон Безухов",
          "Бахром Холматов",
          "Богдан Ли",
          "Василий Вавилов",
          "Дильноза Зоидова",
          "Дильшод Кахори",
          "Дониёр Сангинов",
          "Джамшед Бобоев",
          "Исмат Мухамеджанов",
          "Исломиддин Нуриддинов",
          "Манучехр Гаффорзода",
          "Мурод Коимдодов",
          "Нуриддин Ишонкулов",
          "Озар Айни",
          "Садыков Олимҷон",
          "Фаррух Сафарзаде",
          "Тимима Насратшоева",
          "Умед Худойбердиев",
          "Хасан Солиев",
          "Шахриер Гафуров",
          "Шерали Джурабаев",
          "Шодибек Шарипов"
        ]
      }
    ]
  },
  en: {
    courseGroups: [
      {
        name: "IT Project Management",
        items: [
          "IT Project Management 0",
          "IT Project Management LVL 1",
          "IT Project Management LVL 2"
        ]
      },
      {
        name: "Web Development",
        items: [
          "Web 0",
          "JavaScript LVL 1",
          "JavaScript LVL 2",
          "React JS",
          "Front-end Pro"
        ]
      },
      {
        name: "Python",
        items: [
          "Python LVL 0",
          "Python LVL 1",
          "Python LVL 2"
        ]
      },
      {
        name: "Graphic Design",
        items: [
          "Graphic Design: Express",
          "Graphic Design",
          "Graphic Design Pro"
        ]
      },
      {
        name: "UX/UI Design",
        items: [
          "UX/UI Design",
          "UX/UI Design 0",
          "UX/UI Design LVL 1"
        ]
      },
      {
        name: "Programming Basics",
        items: [
          "Computer Basics",
          "Programming from Scratch",
          "Programming Basics CS50"
        ]
      },
      {
        name: "Marketing",
        items: [
          "Digital Marketing",
          "Digital Marketing for Beginners",
          "Product Management",
          "Project Management"
        ]
      },
      {
        name: "Other Courses",
        items: [
          "Digital Literacy",
          "Blender for Beginners",
          "Data Analytics Basics",
          "Storytelling with Scratch",
          "Website on Tilda",
          "How to Befriend Data",
          "Successful Startup",
          "Remote Earnings"
        ]
      }
    ],
    instructorGroups: [
      {
        name: "Current",
        items: [
          "Akbar Khamzaev",
          "Alisher Narzulloev",
          "Aziza Satybaldieva",
          "Manizha Rakhmatullaeva",
          "Murod Koimdodov",
          "Solor Ibodulloev",
          "Somon Bahromzoda",
          "Tabrez Sanoev",
          "Yulia Mamedova",
          "Zarifkhon Olimov",
        ]
      },
      {
        name: "Former Instructors",
        items: [
          "Alijon Aminov",
          "Anton Bezukhov",
          "Bahrom Kholmatov",
          "Bogdan Li",
          "Dilnoza Zoidova",
          "Dilshod Kahori",
          "Doniyor Sanginov",
          "Farrukh Safarzade",
          "Islomiddin Nuriddinov",
          "Ismat Mukhamedzhanov",
          "Jamshed Boboev",
          "Khasan Soliev",
          "Manuchehr Gafforzoda",
          "Murod Koimdodov",
          "Nuriddin Ishonkulov",
          "Ozar Aini",
          "Sadykov Olimjon",
          "Shakhrier Gafurov",
          "Sherali Dzhurabaev",
          "Shodibek Sharipov",
          "Timima Nasratshoeva",
          "Umed Khudoyberdiev",
          "Vasily Vavilov",
        ]
      }
    ]
  }
};



const coursesSelect = document.querySelector("#programm");
const instructorsSelect = document.querySelector("#instructor");
const nameLabel = document.querySelector("#name_label");
const surnameLabel = document.querySelector("#surname_label");
const dateLabel = document.querySelector("#date_label");

function populateSelectOptions(lang, courseGroups, instructorGroups, coursesSelect, instructorsSelect) {
  nameLabel.textContent = lang === "ru" ? "Имя студента" : "Student name";
  surnameLabel.textContent = lang === "ru" ? "Фамилия студента" : "Student surname";
  dateLabel.textContent = lang === "ru" ? "Дата выпуска" : "Date issue";

  let defaultCourseOption = document.createElement("option");
  defaultCourseOption.textContent = lang === "ru" ? "-- Программа --" : "-- Course --";
  coursesSelect.appendChild(defaultCourseOption);

  let defaultInstructorOption = document.createElement("option");
  defaultInstructorOption.textContent = lang === "ru" ? "-- Инструктор --" : "-- Instructor --";
  instructorsSelect.appendChild(defaultInstructorOption);

  renderOptGroups(courseGroups, coursesSelect);
  renderOptGroups(instructorGroups, instructorsSelect);

  function renderOptGroups(groups, select) {
    groups.forEach((group) => {
      let optgroup = document.createElement("optgroup");
      optgroup.label = group.name;
      select.appendChild(optgroup);
      group.items.forEach((course) => {
        let option = document.createElement("option");
        option.textContent = course;
        optgroup.appendChild(option);
      });
    });
  }
}

const lang = localStorage.getItem("lang") || "ru";
const { courseGroups, instructorGroups } = locales[lang];
populateSelectOptions(lang, courseGroups, instructorGroups, coursesSelect, instructorsSelect);

