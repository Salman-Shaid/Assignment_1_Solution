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



function getLength(value: string | any[]) : number {
    if(typeof value === "string") {
        return value.length;
    } else if(Array.isArray(value)){
        return value.length;
    }else{
        return 0;
    }
}



class Person{
    name: string;
    age : number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }

    getDetails(): string {
        return `'Name: ${this.name}, Age: ${this.age}'`;
    }
}
const person1 = new Person("John Doe", 30);
const person2 = new Person('Alice', 25);



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

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];





type Products = {
     name : string;
     price : number;
     quantity : number;
     discount?: number;
};

function calculateTotalPrice(product: Products[]): number {
    if(product.length === 0 ) {
        return 0;
    }

    const total = product.map(p => {
        const basePrice = p.price*p.quantity;
        if(p.discount !== undefined){
            const discountAmount = (basePrice * p.discount) / 100;
            return basePrice - discountAmount;
        }
        return basePrice;
    }).reduce((sum, value) => sum + value, 0);

    return total;
}

const products = [
    {name: 'Pen', price: 10, quantity: 2},
    {name: 'Notebook', price: 25, quantity: 3, discount: 10},
    {name: 'Bag', price: 50, quantity: 1, discount: 20},
];




