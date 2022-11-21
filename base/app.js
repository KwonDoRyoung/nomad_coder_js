console.log(1234243);
console.log("doyoung");
console.log(5+2);
console.log(5*2);
console.log(5/2);

const a=9;
const b=8;
let myName="doyoung";
console.log(a+b);
console.log(a*b);
console.log(a/b);
console.log(myName);

myName="newName";
console.log(myName);

const amIFat = true;
console.log(amIFat);

const amIUser = null;
console.log(amIUser)

let something;
console.log(something);

const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
console.log(daysOfWeek);
const nonsense = [1,2,3,null, undefined, false, "doyoung"];
console.log(nonsense);
console.log(daysOfWeek[1]);
console.log(daysOfWeek[5]);
daysOfWeek.pop();
console.log(daysOfWeek);
daysOfWeek.push("sun");
console.log(daysOfWeek);

// const player = {
//     name: "doyoung",
//     point: 12121,
//     handsome: false,
//     fat: "little bit"
// };

// console.log(player.fat);
// console.log(player["fat"]);
//
// console.log(player);
// player.lastName = "Kwon";
// console.log(player);

function sayHello(nameOfPerson, age){
    console.log("Hello! My name is " + nameOfPerson +"\nMy age is " + age)
}
sayHello("c++", 30);
sayHello("python", 10);
sayHello("java", 20);

function plus(a, b){
    console.log(a+b)
}

function divide(a,b){
    console.log(a/b)
}
plus(100,200);
divide(1,0)

const player = {
    name: "doyoung",
    sayHello: function (otherPersonsName){
        console.log("Hello! " + otherPersonsName + "\nNice to meet you!")
    }
};

player.sayHello("lynn")


//
// const age = 96;
function calculateKrAge(ageOfForeigner){
    return 2 + ageOfForeigner
}
//
// const krAge = calculateKrAge(age);
// console.log(krAge)


let age = parseInt(prompt("How old are you?"));
if (isNaN(age)){
    alert("It is not Number!")
}
else{
    console.log("Korea Age is " + calculateKrAge(age))
    age = calculateKrAge(age)
    if (age <= 18){
        console.log("You cannot drink beer🍺!")
    } else if (age >= 70) {
        console.log("Consider your health!")
    } else {
        console.log("enjoy the beer🍺!")
    }
}



















