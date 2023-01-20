// 9 - Напишіть функції для роботи з колекцією навчальних курсів courses:
// addCourse(name) - додає курс до кінця колекції
// removeCourse(name) - видаляє курс із колекції
// updateCourse(oldName, newName) - змінює ім'я на нове


const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];

function addCourse(name) {
    if (!courses.includes(name)) {
        courses.push(name);
    } else {
        console.log('Ви вже маєте такий курс');
    }
};

function removeCourse(name) {
    const index = courses.indexOf(name);
    if (index === -1) {
        console.log('Курс із таким ім\'ям не знайдено');
        return;
    }
    courses.splice(index, 1);
};

function updateCourse(oldName, newName) {
    const index = courses.indexOf(oldName);

    if (index === -1) {
        console.log('Курс із таким ім\'ям не знайдено');
        return;
    }

    courses[index] = newName;
    // courses.splice(index, 1, newName);
}



addCourse('Express');
console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
addCourse('CSS'); // 'Ви вже маєте такий курс'

removeCourse('React');
console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
removeCourse('Vue'); // 'Курс із таким ім'ям не знайдено'

updateCourse('Express', 'NestJS');
console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS']