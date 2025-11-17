function formatValue(value: string | number | boolean): string | number | boolean {
    if(typeof value === "string"){
        return value.toUpperCase();
    }else if(typeof value === "number"){
        return value * 10;
    }else if (typeof value === "boolean") {
    return !value;
  }else{
    return value;
  }  
}
// console.log(formatValue('hello')); // HELLO
// console.log(formatValue(5));       // 50
// console.log(formatValue(true));    // false


function getLength(value: string | any[]) : number {
    if(typeof value === "string") {
        return value.length;
    } else if(Array.isArray(value)){
        return value.length;
    }else{
        return 0;
    }
}

// console.log(getLength('typescript')); // 10
// console.log(getLength([10, 20, 30, 40])); // 4


class Person{
    name: string;
    age : number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }

    getDetails(): string {
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}

const person1 = new Person("salman", 30);

// console.log(person1.getDetails());

const person2 = new Person('Alice', 25);

// console.log(person2.getDetails());


type Item = {
    title: string;
    rating: number;
};

function filterByRating(items: Item[]): Item[]{
    return items.filter(item=> item.rating >= 4)
}

const books = [
    {title: 'Book A', rating: 4.5},
    {title: 'Book B', rating: 3.5},
    {title: 'Book C', rating: 2.5},
    {title: 'Book D', rating: 5.0},
    
];

// console.log(filterByRating(books));

type User = {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
};

function filterActiveUsers(users: User[]): User[]{
    return users.filter(user => user.isActive === true);
}

const users = [
    { id: 1, name:'Salman', email: "salman@mail.com", isActive : false},
    { id: 1, name:'Rakib', email: "rakib@mail.com", isActive : true},
    { id: 1, name:'Asha', email: "Asha@mail.com", isActive : false},
    { id: 1, name:'Rumi', email: "rumi@mail.com", isActive : true},

    
];

// console.log(filterActiveUsers(users));


interface Book {
    title : string;
    author: string;
    publishYear: number;
    isAvailable: boolean;
}

function printBookDetails(book: Book): void {
    const availability = book.isAvailable ? "Yes" : "No";
    console.log(`Title: ${book.title}, Author: ${book.author}, Published: ${book.publishYear}, Available: ${availability}`);
}

const myBook: Book= {
    title: "The Great Gatsby",
    author: "F.Scott Fitzgerald",
    publishYear: 1925,
    isAvailable: true,
};
printBookDetails(myBook);



function getUniqueValues(
    arr1: (number | string)[],
    arr2: (number | string) []
): (number | string)[] {

    const result: (number | string)[] = [];

    for(let i = 0; i < arr1.length; i++){
        let exists = false;

        for(let j = 0 ; j < result.length; j++){
            if(result[j] === arr1[i]){
                exists = true;
                break;
            }
        }
        if(!exists){
            result[result.length] = arr1[i]!;
        }
    }

    for(let i = 0 ; i < arr2.length; i++) {
        let exists = false;

        for(let j = 0 ; j< result.length; j++){
            if(result[j] === arr2[i]) {
                exists = true;
                break;
            }
        }
        if(!exists){
            result[result.length] = arr2[i]!;
        }
    }
    return result;
}

// const array1 = [1, 2, 3, 4, 5];
// const array2 = [3, 4, 5, 6, 7]

// console.log(getUniqueValues(array1, array2))



type Product = {
     name : string;
     price : number;
     quantity : number;
     discount?: number;
};

function calculateTotalPrice(product: Product[]): number {
    if()
}
