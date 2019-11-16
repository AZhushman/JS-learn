'use strict';
// use strict - определяет стандарт Es6
// a = 5;
// console.log(a);
// CamaelCase

// var leftBorderWidht = 1; // переменная сущетсвует всегда, но определяется только на этой строчке кода
// let second = 2;          // переменную видно только после того как мы её определили
// const pi = 3.14;
// console.log(leftBorderWidht);

// типы данных в js

var number = 5;
// infinity - 4/0
// NaN - not an number (строку умножаем на число)
var string = "Hello!";
var sym = Symbol();
var boolean = true;
// null - ссылка на не существующую вещь
null;
// undefined - не определена 
undefined;
// объект - это коллекция данных
var obj = {};

// пример 
var person = {
    name: "John", // свойство объекта ключ - name, значение John
    age: 25,
    isMarield: false
};

// console.log(person.name); // получили значение первого свойства
// console.log(person["name"]); // если хотим добраться до свойства заднное любой строкой

// разновидность объекта - массив

var arr = ['plum.png', 'orange.jpg', 'apple.bmp'];


// Простое обзение с пользователем

// var answer = confirm("Are u here?");  //confirm ок и отмена возвращает bool
// console.log(answer);

// var answer = prompt("Есть ливам 18?", "Да");
// console.log(answer);
// typeof - проверка на тип данных
// console.log(typeof(answer));

// Вся информация от пользователя приходит в виде строк
// console.log(typeof(arr)); // object

// операторы в js 

// var answer = +prompt("Есть ливам 18?", "Да");
// вернет number
// console.log(typeof(answer));


var incr = 10,
    decr = 10;

incr++;
decr--;

// console.log(incr);
// console.log(decr);