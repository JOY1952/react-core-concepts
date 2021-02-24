let age:number = 50;
age = 150;

let club:string = 'Real Madrid';

const isFamous:boolean = false;
let famous:boolean;

console.log(club);


function fullName (firstName:string, leastName:string): string{
    return firstName + ' ' + leastName;
}
const user = fullName('Martin', 'Rock');

function doubleItAndConsole(num:number): void{
    const result =  num * 2;
    console.log(result);
}
const output = doubleItAndConsole(10);
console.log('output', output);

const multiply = (x:number, y:number): number => x * y;
console.log(multiply(25, 6))

const numbers: number[] = [2,3,4,5,6,7,6];
numbers.push(22);

const friends: string[] = ['George', 'jubir', 'kobir'];
let megaName = '';
for (let i = 0; i < friends.length; i++) {
    const element: string = friends[i];
    if(friends.length > megaName.length ){
        megaName = friends;
    }
    
}
console.log('friend with the largest name', megaName);

const friend ={
    name: 'Samuel David',
    age: 61
}

interface Player {
    club: string,
    name: string,
    salary: number,
    wife: string,
    isPlaying: boolean
}

const messy: = {
    name: 'Messy',
    club: 'Real Madrid',
    salary: 4544444,
    wife: 'some name'
    isPlaying: true
}

class Person {
    name: string;
    constructor(name: string){
        this.name = name;
    }
}