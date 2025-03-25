/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
//--- Тип any - можно использовать любой тип
let city: any = 'Berlin';
city = ['Paris', 1234];

//--- Типизация обьекта через интерфейс
interface User {
    name: string,
    age?: number | string
}

const userData: User = {
    name: 'Tom',
    age: 34
}

interface User {
    isAdmin?: boolean
}

// Наследование интерфейсов
interface Admin extends User {
    email: string,
    tel: string
};

const personData: Admin = {
    name: 'Bob',
    email: 'asd@gmail.com',
    tel: '904578'
}

const newUser: User = {
    name: 'John',
    // email: 'asd@gmail.com' 
}

//--- Типизация через type
// использование type для создания усложненного типа 
type Weight = string | number | null;

let userWeight: Weight = '52';
let animalWeight: Weight = null;

// пример использования union для ограничения переменной по значению
type Status = 'success' | 'error' | 'loading';
let requestStatus: Status = 'success';
requestStatus = 'loading';
// requestStatus = 'eror'; - пример ошибки а именно не правильного указания значения

// Использование type для типизации обьекта
type Animal = {
    name: string,
    weight?: number
};

const animmalDAta: Animal = {
    name: 'Lion',
    weight: 200
}

// type Animal = {country:'London'}; - !нельзя создавать типи с одинаковими названиями

// обьединение типов
type NewAnimal = Animal & {country: string};

const zebra: NewAnimal = {
    name: 'Zebra',
    country: 'Afrika'
}

const dog: Animal = {
    name: 'Dog',
    // county: 'Germany' - пример ошибки
}

//Generic&Type - дженерик єто переменная, в которую ми можем подставить
// нужний тип, в момент использования данного type(interface) 
type CustomArrayType<T=null> = (string | T)[];

const arrayMix1: CustomArrayType<number> = ['red', 123, 'black'];
const arrayMix2: CustomArrayType<number[]> = ['apple', [1,4,1]];
const arrayMix3: CustomArrayType = [ null];

// Generic&Interface 
interface Fruit<T=number>{
    title: string,
    address: T
}

const fruitObj: Fruit<string>={
    title: 'Grape',
    address: 'london, str...'
}

// --- Числовое перечисление
enum Colors {Red, Black=6, Green};

//--- Строковое перечсиление
// enum для цветов светофора
export enum TRAFFIC_LIGHT {
    RED = 'red',
    YELLOW =  'yellow',
    GREEN = 'green'
}

// Пример експорта именнованного експорта
export const getAction = (light: TRAFFIC_LIGHT)=> {
    switch (light) {
        case TRAFFIC_LIGHT.RED :
            return 'Стоп!';
        case TRAFFIC_LIGHT.YELLOW :
            return 'Приготовтесь идти';
        case TRAFFIC_LIGHT.GREEN :
            return 'Можно идти';
    }
}
