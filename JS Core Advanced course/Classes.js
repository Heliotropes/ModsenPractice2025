"use strict";

class University {
    constructor(name) {
        this.name = name; // Название университета
        this.faculties = []; // Список факультетов
    }

    addFaculty(faculty) {
        this.faculties.push(faculty);
        console.log(`Факультет "${faculty}" добавлен в университет "${this.name}".`);
    }

    removeFaculty(faculty) {
        const index = this.faculties.indexOf(faculty);
        if (index !== -1) {
            this.faculties.splice(index, 1);
            console.log(`Факультет "${faculty}" удален из университета "${this.name}".`);
        } else {
            console.log(`Факультет "${faculty}" не найден в университете "${this.name}".`);
        }
    }

    displayFaculties() {
        if (this.faculties.length === 0) {
            console.log(`В университете "${this.name}" пока нет факультетов.`);
        } else {
            console.log(`Факультеты университета "${this.name}":`);
            this.faculties.forEach((faculty, index) => {
                console.log(`${index + 1}. ${faculty}`);
            });
        }
    }
}

// Создаем экземпляр класса University
const myUniversity = new University("Мой Университет");

// Добавляем факультеты
myUniversity.addFaculty("Информационные технологии");
myUniversity.addFaculty("Экономика");
myUniversity.addFaculty("Юриспруденция");

// Отображаем все факультеты
myUniversity.displayFaculties();

// Удаляем факультет
myUniversity.removeFaculty("Экономика");

// Отображаем все факультеты после удаления
myUniversity.displayFaculties();