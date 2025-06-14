"use strict";
console.log("Підключено JavaScript для Практичної роботи №3");

// 1. Об'єктний літерал
const car = {
  brand: "Toyota",
  year: 2020,
  displayInfo() {
    console.log(`Автомобіль: ${this.brand}, Рік: ${this.year}`);
  },
};
car.displayInfo();

// 2. Метод з this
const person = {
  name: "Іван",
  sayHello() {
    console.log(`Привіт, мене звуть ${this.name}`);
  },
};
person.sayHello();

// 3. Функція-конструктор і прототип
function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.greet = function () {
  console.log(`Привіт, я ${this.name}, мені ${this.age} років.`);
};
const person1 = new Person("Олена", 28);
person1.greet();

// 4. Клас і наслідування
class Student extends Person {
  constructor(name, age, grade) {
    super(name, age);
    this.grade = grade;
  }
  displayInfo() {
    console.log(
      `Студент: ${this.name}, Вік: ${this.age}, Оцінка: ${this.grade}`
    );
  }
}
const student1 = new Student("Андрій", 22, "A");
student1.greet();
student1.displayInfo();

// 5. Інкапсуляція через геттери та сеттери
class User {
  constructor(name, age, profession) {
    this._name = name;
    this._age = age;
    this._profession = profession;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (value) this._name = value;
  }

  get age() {
    return this._age;
  }

  set age(value) {
    if (value > 0) this._age = value;
  }

  get profession() {
    return this._profession;
  }

  set profession(value) {
    if (value) this._profession = value;
  }

  display() {
    console.log(
      `Користувач: ${this._name}, Вік: ${this._age}, Професія: ${this._profession}`
    );
  }
}

class Admin extends User {
  constructor(name, age, profession, role) {
    super(name, age, profession);
    this.role = role;
  }

  display() {
    console.log(
      `Адміністратор: ${this.name}, Вік: ${this.age}, Професія: ${this.profession}, Роль: ${this.role}`
    );
  }
}

// 6. Інтерактивна частина: "Бібліотека користувачів"
function createUserFromPrompt() {
  const name = prompt("Введіть ім’я:");
  const age = Number(prompt("Введіть вік:"));
  const profession = prompt("Введіть професію:");
  const isAdmin = confirm("Це адміністратор?");
  let role;

  if (isNaN(age) || age <= 0) {
    alert("Невірне значення віку!");
    return;
  }

  if (isAdmin) {
    role = prompt("Введіть роль адміністратора:");
    const admin = new Admin(name, age, profession, role);
    admin.display();
    alert(
      `Адміністратор: ${admin.name}, Вік: ${admin.age}, Роль: ${admin.role}`
    );
  } else {
    const user = new User(name, age, profession);
    user.display();
    alert(
      `Користувач: ${user.name}, Вік: ${user.age}, Професія: ${user.profession}`
    );
  }
}

createUserFromPrompt();
