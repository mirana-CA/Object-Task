
// let obj = {
//     name: "Mehdi",
//     surname: "Ismayilov",
//     age: 19,
//     field: "CS"

// }


let students = [
    {
        id: 1,
        name: "Mehdi",
        surname: "Ismayilov",
        age: 19,
        field: "CS"

    },
    {
        id: 2,
        name: "Aydan",
        surname: "Huseynova",
        age: 18,
        field: "CS"

    },
    {
        id: 3,
        name: "Nergiz",
        surname: "Babayeva",
        age: 21,
        field: "CS"

    },
    {
        id: 4,
        name: "Samir",
        surname: "Hebibov",
        age: 19,
        field: "CS"

    },
    {
        id: 5,
        name: "Sema",
        surname: "Eliyeva",
        age: 18,
        field: "IT"

    },


]
let teachers = [
    {
        id: 1,
        name: "Emil",
        surname: "Hacizade",
        age: 25,
        field: "CS"

    },
    {
        id: 2,
        name: "Fuad",
        surname: "Qurbanov",
        age: 71,
        field: "CS"

    },
    {
        id: 3,
        name: "Ebulfez",
        surname: "Sadiqov",
        age: 25,
        field: "CS"

    },
]
const classes = [
    {
        teacher: "hsdhds",
        classname: "bp216",
        students: {

        }
    }
]


const classsromm = {
    teachers: {},
    classesname: {}

}
let userInputCategoryText = `
1.Telebeler haqda melumat 
2.Muellimler haqda melumat
3.Sinifler haqda melumat
0. cixis
`
let userInputStudentsText = `
1.Butun telebelerin melumatlari 
2.Id-e uygun telebeni goster 
3.Telebe elave et
4.Telebe sil
5.Telebeni gucelle
0.Cixis
`
let userInputTeachersText = `
1.Butun muellimlerin melumatlari 
2.Id-e uygun muellimi goster 
3.Muellim elave et
4.Muellim sil
5.Muellimi gucelle
0.Cixis
`
let userInputClassesText = `
1.Butun sinifleri goster
2.Id-e uygun sinif goster 
3.Sinif yarat
4.Sinif sil
5.Sinfe telebe elave et
6.Sinfin muellimin deyis
7.Sinifin icindeki sagirdleri goster
0.Cixis
`
let userStudentsUpdateText = `
1. Telebenin adini deyismek
2. Telebenin soyadini deyismek
3. Telebenin yasini deyismek
4. Telebenin ixtisasini deyismek
`
let userTeachersUpdateText = `
1. Muellimin adini deyismek
2. Muellimin soyadini deyismek
3. Muellimin yasini deyismek
4. Muellimin ixtisasini deyismek
`
function ListItems(arr) {
    arr.forEach(x => console.log(`| ${x.id} - ${x.name} - ${x.surname} - ${x.age} - ${x.field} |`))
}

function findItemById(arr, itemId) {
    return arr.find(x => x.id === Number(itemId))
}
function createNewItem(arr, name, surname, age, field) {
    let newItem = {
        id: Math.ceil(Math.random() * 100000),
        name: name,
        surname: surname,
        age: Number(age),
        field: field
    }
    arr.push(newItem)
}

function deleteItemById(arr, itemId) {

    return arr.filter(x => x.id !== itemId)
}


function updateItemByName(arr, itemId, itemType, newValue) {
    let item = arr.find(x => x.id === itemId)
    return item[itemType] = newValue

}
let devamEt = true
while (devamEt) {
    let userInputCategory = +prompt(userInputCategoryText)
    switch (userInputCategory) {
        case 0:
            devamEt = false
            break;
        case 1:
            let userInputStudents = +prompt(userInputStudentsText)


            switch (userInputStudents) {
                case 0:
                    devamEt = false
                    break;
                case 1:
                    ListItems(students)
                    break;
                case 2:
                    let userInputStudentId = prompt("Telebenin id-sini daxil edin")
                    console.log(findItemById(students, userInputStudentId));
                    break;
                case 3:
                    let userInputAddItemName = prompt("Telebenin adini daxil edin")
                    let userInputAddItemSurname = prompt("Telebenin soyadini daxil edin")
                    let userInputAddItemAge = prompt("Telebenin yasini daxil edin")
                    let userInputAddItemField = prompt("Telebenin ixtisasini daxil edin")
                    createNewItem(students, userInputAddItemName, userInputAddItemSurname, userInputAddItemAge, userInputAddItemField)
                    console.table(students);
                    break;

                case 4:
                    let userInputAddDeletedItemId = +prompt(" Silmek istediyiniz telebenin id-sini daxil edin")
                    console.log(typeof userInputAddDeletedItemId);
                    students = deleteItemById(students, userInputAddDeletedItemId)
                    console.table(students);
                    break;

                case 5:
                    let userInputAddUpdatedItemId = +prompt(" Yenilemek istediyiniz telebenin id-sini daxil edin")
                    let userInputAddUpdatedItemTypeNum = +prompt(userStudentsUpdateText)
                    let userInputAddUpdatedItemType = 0
                    switch (userInputAddUpdatedItemTypeNum) {
                        case 1:
                            userInputAddUpdatedItemType = 'name'
                            break;
                        case 2:
                            userInputAddUpdatedItemType = 'surname'
                            break;
                        case 3:
                            userInputAddUpdatedItemType = 'age'
                            break;
                        case 4:
                            userInputAddUpdatedItemType = 'field'
                            break;

                        default:
                            break;
                    }
                    let userInputAddUpdatedItemNewValue = prompt("Yeni deyeri daxil edin")
                    updateItemByName(students, userInputAddUpdatedItemId, userInputAddUpdatedItemType, userInputAddUpdatedItemNewValue)
                    console.table(students);
                    break;
                case 6:
                    devamEt = false
                    break;

                default:
                    alert("duzgun deyer daxil et")
                    break;
            }
            break;
        case 2:
            let userInputTeachers = +prompt(userInputTeachersText)
            switch (userInputTeachers) {
                case 0:
                    devamEt = false
                    break;
                case 1:
                    ListItems(teachers)
                    break;
                case 2:
                    let userInputTeacherId = prompt("Muellimin  id-sini daxil edin")
                    console.log(findItemById(teachers, userInputTeacherId));
                    break;
                case 3:
                    let userInputAddItemName = prompt("Muellimin adini daxil edin")
                    let userInputAddItemSurname = prompt("Muellimin soyadini daxil edin")
                    let userInputAddItemAge = prompt("Muellimin yasini daxil edin")
                    let userInputAddItemField = prompt("Muellimin ixtisasini daxil edin")
                    createNewItem(teachers, userInputAddItemName, userInputAddItemSurname, userInputAddItemAge, userInputAddItemField)
                    console.table(teachers);
                    break;

                case 4:
                    let userInputAddDeletedItemId = +prompt(" Silmek istediyiniz muellimin id-sini daxil edin")
              
                    teachers = deleteItemById(teachers, userInputAddDeletedItemId)
                    console.table(teachers);
                    break;

                case 5:
                    let userInputAddUpdatedItemId = +prompt(" Yenilemek istediyiniz muellimin id-sini daxil edin")
                    let userInputAddUpdatedItemTypeNum = +prompt(userTeachersUpdateText)
                    let userInputAddUpdatedItemType = 0
                    switch (userInputAddUpdatedItemTypeNum) {
                        case 1:
                            userInputAddUpdatedItemType = 'name'
                            break;
                        case 2:
                            userInputAddUpdatedItemType = 'surname'
                            break;
                        case 3:
                            userInputAddUpdatedItemType = 'age'
                            break;
                        case 4:
                            userInputAddUpdatedItemType = 'field'
                            break;

                        default:
                            break;
                    }
                    let userInputAddUpdatedItemNewValue = prompt("Yeni deyeri daxil edin")
                    updateItemByName(teachers, userInputAddUpdatedItemId, userInputAddUpdatedItemType, userInputAddUpdatedItemNewValue)
                    console.table(teachers);
                    break;
                case 6:
                    devamEt = false
                    break;

                default:
                    alert("duzgun deyer daxil et")
                    break;
            }
            break;
        case 3:
            let userInputClasses = prompt(userInputClassesText)
            break;
        default:
            alert("duzgun deyer daxil et")
            break;
    }

}
