console.log('Hi');

// Деструктуризация
// Массивы

const fruits = ['apple', 'grape'];

const arr = [...fruits, 'cherry'];

console.log(arr);
console.log(fruits);

//Объекти
const bookObj = {
   bookName: 'Great Gatsby',
   price: 20,
};

// Создать новий обьект newBookObj и добавить в него новое свойство author
const newBookObj = {
    ...bookObj, author: "Fitzgerald"
 };

 console.log(newBookObj);

 //Деструктурирующеи присваивание
 // Массивы

 const colors = ['red', 'black'];

// Вариант1 копирование значений из массива в переменние
//  const color1 = colors[0];
//  const color2 = colors[1];
 
// Вариант2 копирование значений из массива в переменние с помощью  деструктурирующего присваивания
 const [color1, color2] = colors;
 
 console.log(color1);
 console.log(color2);
 console.log(colors);
 
// Обьекти
const animal = {
    title: 'Dog',
    weight: 20
 };

//  const title = animal.title;

// при деструктиризации присваивании обьекта необходимо указать точние названия свойств обьекта и тогда будут создани переменние с такими же названиями
// если не задани псевдоними - (через двоеточие weight: animalWeight)
const { title, weight: animalWeight } = animal;

console.log(title);
console.log(animalWeight);
console.log(animal);

