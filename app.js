let students = [
  {
    id: 1,
    name: "Mehdi",
    surname: "Ismayilov",
    age: 19,
    field: "CS",
  },
  {
    id: 2,
    name: "Aydan",
    surname: "Huseynova",
    age: 18,
    field: "CS",
  },
  {
    id: 3,
    name: "Nergiz",
    surname: "Babayeva",
    age: 21,
    field: "CS",
  },
  {
    id: 4,
    name: "Samir",
    surname: "Hebibov",
    age: 19,
    field: "CS",
  },
  {
    id: 5,
    name: "Sema",
    surname: "Eliyeva",
    age: 18,
    field: "IT",
  },
];
let teachers = [
  {
    id: 1,
    name: "Emil",
    surname: "Hacizade",
    age: 25,
    field: "CS",
  },
  {
    id: 2,
    name: "Fuad",
    surname: "Qurbanov",
    age: 71,
    field: "CS",
  },
  {
    id: 3,
    name: "Ebulfez",
    surname: "Sadiqov",
    age: 25,
    field: "CS",
  },
];
let classes = [
  {
    id: 1,
    classname: "bp216",
    teacher: "Emil Hacizade",
    students: [
      {
        studentId: 2161,
        name: "Mehdi",
        surname: "Ismayilov",
        age: 19,
        field: "CS",
      },
      {
        studentId: 2162,
        name: "Aydan",
        surname: "Huseynova",
        age: 18,
        field: "CS",
      },
      {
        studentId: 2163,
        name: "Nergiz",
        surname: "Babayeva",
        age: 21,
        field: "CS",
      },
    ],
  },
  {
    id: 2,
    classname: "bp217",
    teacher: "Eli Eliyev",
    students: [
      {
        studentId: 2171,
        name: "Ismayil",
        surname: "Ismayilov",
        age: 22,
        field: "CS",
      },
      {
        studentId: 2172,
        name: "Nermin",
        surname: "Huseynova",
        age: 20,
        field: "CS",
      },
      {
        studentId: 2173,
        name: "Leyla",
        surname: "Babayeva",
        age: 19,
        field: "CS",
      },
    ],
  },
];

let userInputCategoryText = `
1.Telebeler haqda melumat 
2.Muellimler haqda melumat
3.Sinifler haqda melumat
0. cixis
`;
let userInputStudentsText = `
1.Butun telebelerin melumatlari 
2.Id-e uygun telebeni goster 
3.Telebe elave et
4.Telebe sil
5.Telebeni gucelle
0.Cixis
`;
let userInputTeachersText = `
1.Butun muellimlerin melumatlari 
2.Id-e uygun muellimi goster 
3.Muellim elave et
4.Muellim sil
5.Muellimi gucelle
0.Cixis
`;
let userInputClassesText = `
1.Butun sinifleri goster
2.Id-e uygun sinif goster 
3.Sinif yarat
4.Sinif sil
5.Sinfe telebe elave et
6.Sinfin muellimin deyis
7.Sinifin icindeki sagirdleri goster
0.Cixis
`;
let userStudentsUpdateText = `
1. Telebenin adini deyismek
2. Telebenin soyadini deyismek
3. Telebenin yasini deyismek
4. Telebenin ixtisasini deyismek
`;
let userTeachersUpdateText = `
1. Muellimin adini deyismek
2. Muellimin soyadini deyismek
3. Muellimin yasini deyismek
4. Muellimin ixtisasini deyismek
`;

let devamEt = true;
while (devamEt) {
  let userInputCategory = +prompt(userInputCategoryText);
  switch (userInputCategory) {
    case 0:
      devamEt = false;
      break;
    //   STUDENTS
    case 1:
      let userInputStudents = +prompt(userInputStudentsText);

      switch (userInputStudents) {
        case 0:
          devamEt = false;
          break;
        case 1:
          listItems(students);
          break;
        case 2:
          let userInputStudentId = prompt("Telebenin id-sini daxil edin");
          console.log(findItemById(students, userInputStudentId));
          break;
        case 3:
          let userInputAddItemName = prompt("Telebenin adini daxil edin");
          let userInputAddItemSurname = prompt("Telebenin soyadini daxil edin");
          let userInputAddItemAge = prompt("Telebenin yasini daxil edin");
          let userInputAddItemField = prompt("Telebenin ixtisasini daxil edin");
          createNewItem(
            students,
            userInputAddItemName,
            userInputAddItemSurname,
            userInputAddItemAge,
            userInputAddItemField
          );
          console.table(students);
          break;

        case 4:
          let userInputAddDeletedItemId = +prompt(
            " Silmek istediyiniz telebenin id-sini daxil edin"
          );
          console.log(typeof userInputAddDeletedItemId);
          students = deleteItemById(students, userInputAddDeletedItemId);
          console.table(students);
          break;

        case 5:
          let userInputAddUpdatedItemId = +prompt(
            " Yenilemek istediyiniz telebenin id-sini daxil edin"
          );
          let userInputAddUpdatedItemTypeNum = +prompt(userStudentsUpdateText);
          let userInputAddUpdatedItemType = 0;
          switch (userInputAddUpdatedItemTypeNum) {
            case 1:
              userInputAddUpdatedItemType = "name";
              break;
            case 2:
              userInputAddUpdatedItemType = "surname";
              break;
            case 3:
              userInputAddUpdatedItemType = "age";
              break;
            case 4:
              userInputAddUpdatedItemType = "field";
              break;

            default:
              break;
          }
          let userInputAddUpdatedItemNewValue = prompt(
            "Yeni deyeri daxil edin"
          );
          updateItemByName(
            students,
            userInputAddUpdatedItemId,
            userInputAddUpdatedItemType,
            userInputAddUpdatedItemNewValue
          );
          console.table(students);
          break;
        case 6:
          devamEt = false;
          break;

        default:
          alert("duzgun deyer daxil et");
          break;
      }
      break;
    // TEACHERS
    case 2:
      let userInputTeachers = +prompt(userInputTeachersText);
      switch (userInputTeachers) {
        case 0:
          devamEt = false;
          break;
        case 1:
          listItems(teachers);
          break;
        case 2:
          let userInputTeacherId = prompt("Muellimin  id-sini daxil edin");
          console.log(findItemById(teachers, userInputTeacherId));
          break;
        case 3:
          let userInputAddItemName = prompt("Muellimin adini daxil edin");
          let userInputAddItemSurname = prompt("Muellimin soyadini daxil edin");
          let userInputAddItemAge = prompt("Muellimin yasini daxil edin");
          let userInputAddItemField = prompt("Muellimin ixtisasini daxil edin");
          createNewItem(
            teachers,
            userInputAddItemName,
            userInputAddItemSurname,
            userInputAddItemAge,
            userInputAddItemField
          );
          console.table(teachers);
          break;

        case 4:
          let userInputAddDeletedItemId = +prompt(
            " Silmek istediyiniz muellimin id-sini daxil edin"
          );

          teachers = deleteItemById(teachers, userInputAddDeletedItemId);
          console.table(teachers);
          break;

        case 5:
          let userInputAddUpdatedItemId = +prompt(
            " Yenilemek istediyiniz muellimin id-sini daxil edin"
          );
          let userInputAddUpdatedItemTypeNum = +prompt(userTeachersUpdateText);
          let userInputAddUpdatedItemType = 0;
          switch (userInputAddUpdatedItemTypeNum) {
            case 1:
              userInputAddUpdatedItemType = "name";
              break;
            case 2:
              userInputAddUpdatedItemType = "surname";
              break;
            case 3:
              userInputAddUpdatedItemType = "age";
              break;
            case 4:
              userInputAddUpdatedItemType = "field";
              break;

            default:
              break;
          }
          let userInputAddUpdatedItemNewValue = prompt(
            "Yeni deyeri daxil edin"
          );
          updateItemByName(
            teachers,
            userInputAddUpdatedItemId,
            userInputAddUpdatedItemType,
            userInputAddUpdatedItemNewValue
          );
          console.table(teachers);
          break;
        case 6:
          devamEt = false;
          break;

        default:
          alert("duzgun deyer daxil et");
          break;
      }
      break;
    //    CLASSES
    case 3:
      let userInputClasses = +prompt(userInputClassesText);
      switch (userInputClasses) {
        case 0:
          devamEt = false;
          break;
        case 1:
          listClassItems(classes);
          break;
        case 2:
          let userInputClassId = prompt("Classin id-sini daxil edin");
          console.log(findItemById(classes, userInputClassId));
          break;
        case 3:
          let userInputAddClassName = prompt("Classin adini daxil edin");
          let userInputAddClassTeacher = prompt(
            "Classin muellimini daxil edin"
          );
          let userInputAddClassStudentName = prompt(
            "Clasdaki telebenin adini daxil edin"
          );
          let userInputAddClassStudentSurname = prompt(
            "Clasdaki telebenin soyadini daxil edin"
          );
          let userInputAddClassStudentAge = prompt(
            "Clasdaki telebenin yasini daxil edin"
          );
          let userInputAddClassStudentField = prompt(
            "Clasdaki telebenin ixtisasini daxil edin"
          );

          createNewClassItem(
            classes,
            userInputAddClassName,
            userInputAddClassTeacher,
            userInputAddClassStudentName,
            userInputAddClassStudentSurname,
            userInputAddClassStudentAge,
            userInputAddClassStudentField
          );

          console.table(classes);
          break;

        case 4:
          let userInputAddDeletedItemId = +prompt(
            " Silmek istediyiniz classin id-sini daxil edin"
          );
          console.log(typeof userInputAddDeletedItemId);
          classes = deleteItemById(classes, userInputAddDeletedItemId);
          console.table(classes);
          break;
        case 5:
          let userInputAddStudentToClass = +prompt(
            " Telebeni elave etmek istediyiniz classin id-sini daxil edin"
          );
          let userInputAddStudentToClassStudentName = prompt(
            "Telebenin adini daxil edin"
          );
          let userInputAddStudentToClassSurname = prompt(
            "Telebenin soyadini daxil edin"
          );
          let userInputAddStudentToClassAge = prompt(
            "Telebenin yasini daxil edin"
          );
          let userInputAddStudentToClassField = prompt(
            "Telebenin ixtisasini daxil edin"
          );

          addStudentToClass(
            classes,
            userInputAddStudentToClass,
            userInputAddStudentToClassStudentName,
            userInputAddStudentToClassSurname,
            userInputAddStudentToClassAge,
            userInputAddStudentToClassField
          );
          console.log("yeni telebe elave olundu");

          console.log(classes);

          break;
        case 6:
          let userInputChangedTeacherClassId = +prompt(
            "Muellimi deyismek istediyiniz classin idsini daxil edin"
          );

          let userInputChangedTeacherName = prompt(
            "Yeni muellimin adini daxil edin"
          );
          changeTeacher(
            classes,
            userInputChangedTeacherClassId,
            userInputChangedTeacherName
          );
          console.log(classes);

          break;
        case 7:
          let userInputClassStidentsList = +prompt(
            "Sagirdlerini gormek iistediyiniz classin idsini daxil edin"
          );

          showStudentsOfClass(classes, userInputClassStidentsList);
          break;

        default:
          alert("duzgun deyer daxil et");
          break;
      }
      break;
    default:
      alert("duzgun deyer daxil et");
      break;
  }
}

// studens and teachers functions
function listItems(arr) {
  arr.forEach((x) =>
    console.log(
      `| ${x.id} - ${x.name} - ${x.surname} - ${x.age} - ${x.field} |`
    )
  );
}

function findItemById(arr, itemId) {
  return arr.find((x) => x.id === Number(itemId));
}
function createNewItem(arr, name, surname, age, field) {
  let newItem = {
    id: Math.ceil(Math.random() * 100000),
    name: name,
    surname: surname,
    age: Number(age),
    field: field,
  };
  arr.push(newItem);
}

function deleteItemById(arr, itemId) {
  return arr.filter((x) => x.id !== itemId);
}

function updateItemByName(arr, itemId, itemType, newValue) {
  let item = arr.find((x) => x.id === itemId);
  return (item[itemType] = newValue);
}

// classes functions
function listClassItems(arr) {
  let studentsDataInClass = ``;
  arr.forEach((x) => {
    console.log(x);
  });
}
function createNewClassItem(
  arr,
  classname,
  teacher,
  name,
  surname,
  age,
  field
) {
  let newItem = {
    id: Math.ceil(Math.random() * 100000),
    classname: classname,
    teacher: teacher,
    students: [
      {
        studentId: Math.ceil(Math.random() * 100000),
        name: name,
        surname: surname,
        age: Number(age),
        field: field,
      },
    ],
  };
  arr.push(newItem);
}
function addStudentToClass(arr, classId, name, surname, age, field) {
  let classItem = arr.find((x) => x.id === classId);
  let newItem = {
    studentId: Math.ceil(Math.random() * 100000),
    name: name,
    surname: surname,
    age: Number(age),
    field: field,
  };
  classItem.students.push(newItem);
}

function changeTeacher(arr, classId, newTeacher) {
  let classItem = arr.find((x) => x.id === classId);
  classItem.teacher = newTeacher;
}
function showStudentsOfClass(arr, classId) {
  let classItem = arr.find((x) => x.id === classId);

  classItem.students.forEach((x) =>
    console.log(
      `| ${JSON.stringify(x.studentId)} - ${JSON.stringify(
        x.name
      )} - ${JSON.stringify(x.surname)} - ${JSON.stringify(
        x.age
      )} - ${JSON.stringify(x.field)} -  |`
    )
  );
}
