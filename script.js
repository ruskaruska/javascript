let a;
a = 7;
let b;
b = a;
console.log("a is " + a);
console.log("b is " + b);

let myVar = 1;
myVar += 6;
myVar *= 2;
console.log(myVar);

//escape characters
let myStr = "Bear is going on the \"trip\"";
console.log(myStr);
let myStr1 = "\\new folder\\";
console.log(myStr1);
let myStr2 = "Rabbit decided to go on a trip \nas well\nbut the tiger was \nagainst it.";
console.log(myStr2);
let myStr3="Enter your name:\tJane Doe";
console.log(myStr3);

//template expression
let myStr4 = `
bear is going ${myStr2}
lion isn't going ${myStr1}
raabit is going ${myStr3}
`;
console.log(myStr4);

//Boolean
let isItGreaterThan = Boolean(4 > 5);
console.log(isItGreaterThan);

console.log("ბულეანის 4 მაგალითი: ");
console.log(Boolean(1)); //true
console.log(Boolean(0)); //false
console.log(Boolean("Hello")); //true
console.log(Boolean("")); //false
console.log("\n");

let x = 9;
let y = 10;

let whichNum = Boolean(x < y);
console.log(whichNum);

//typeof და კონვერტაცია
let value = true;
console.log(typeof value);
value = String(value);
console.log(typeof value);

//სტრინგის გადაყვანა რიცხვის ტიპზე
let newStr = "12345";
console.log(typeof newStr);

let newNum = Number(newStr);
console.log(typeof newNum);
console.log(newNum);

//არავალიდური სტრინგის კონვერტაცია რიცხვად (არ იმუშავებს)
let notNum = "ასაკი არ ვიცით დაზუსტებით.";
let age = Number(notNum);
console.log(age);


//Conditions
let bool = false; //ერთი ტოლობა (=) არის მინიჭების ოპერატორი (assignment)

if (bool == true){ //ორი ტოლობა (==) არის ტოლობის აღმნიშვნელი, ვამოწმებთ არის თუ არა ორი ან მეტი მნიშვნელობა ერთმანეთის ტოლი
    console.log("ცვლადის მნიშვნელობა არის true.");
}
else if (bool == false){
    console.log("ცვლადის მნიშვნელობა არის false.");
}
else if (bool == "true"){
    console.log("ცვლადის მნიშვნელობა არის true, თუმცა ტიპი არის სტრინგი");
}
else if(bool == "false"){
    console.log("ცვლადის მნიშვნელობა არის false, თუმცა ტიპი არის სტრინგი");
}
else{
    console.log("ცვლადის ტიპი არ არის Boolean და არ არის არც true, არც false");
}

//მაგალითი 1.01.25
/*
let currentYear = prompt("რომელი წელია ახლა?");
if (currentYear == 2021){
    alert("პასუხი სწორია.");
}
else if (currentYear == 2020){
    alert("პასუხი ახლოს არის, სცადეთ ერთით მეტი.");
}
else if (currentYear == 2022){
    alert("პასუხი ახლოს არის, თუმცა სცადეთ ერთით ნაკლები.");
}
else {
    alert("პასუხი არასწორია.");
}
*/

//წვდომის უფლება
/* 
let access;

let ageVar = prompt("რამდენი წლის ხართ?");

if(ageVar > 18){
    access = true;
    alert(`გაქვთ თუ არა წვდომის უფლება: ${access}`);
}
else {
    access = false;
    alert(`გაქვთ თუ არა წვდომის უფლება: ${access}`);
}
*/

//Ternary ოპერატორი
/*
let age1 = prompt("შეიყვანეთ ასაკი: ");
let message = (age1 <= 18) ? "Hi there!" : "Greetings!";
alert(message);*/

/*
let birthYear = prompt("შეიყვანეთ დაბადების წელი: ");
let gen = (birthYear >= 1965 && birthYear <= 1980) ? "Gen X" : (birthYear >= 1946 && birthYear <=1964) ? "Baby Boomer" : (birthYear >= 1981 && birthYear <=1996) ? "Gen Y / Milleanial" : (birthYear >= 1997 && birthYear <= 2015) ? "Gen Z" : "You don't belong to any generation.";
alert(gen);*/
/*პირველი იყო if-ი ანუ ეს (birthYear >= 1965 && birthYear <= 1980) ? "Gen X" 
მეორე იყო else if-ები. რეალურად ყველა მსგავს მნიშვნელობას ჭირდება აუცილებლად else მნიშვნელობა თუ აქედან 
არც ერთი არ კმაყოფილდება მაგ შემთხვევაში "You don't belong to any generation."ამოაგდე ეს.*/


//შედარების ოპერატორები 

console.log(2 > 1); //true
console.log( 2 ==1 ); //false
console.log( 2 != 1); //true

console.log('2' > 1); //true
console.log('02' == 2); //true


console.log(0 == false); //true - ჩვეულებრივი ტოლობა
console.log( 0 === false); //false - მკაცრი ტოლობა, ადარებს ერთმანეთს როგორც მნიშვნელობებს, ასევე მონაცემების ტიპებს

//ლოგიკური NOT ოპერატორი
//ეს ყველაფერი გამოიყენება Togle-ბისას. (How To Create a Toggle Switch - W3Schools)
let myVariable = true;
console.log(myVariable);//true
myVariable = !myVariable;
console.log(myVariable);//false
//ამის სხვა ვერსიაც ვნახოთ
//მაგალითი
/*
let tempVar;
let userInput = prompt("შეიყვანეთ რიცხვი, 0 ან 1:");


if (userInput == 0){
    tempVar = false;
}
else if (userInput == 1){
    tempVar = true;
}
else {
    alert("ინფუთი არასწორია.");
}

if (!tempVar){
    tempVar = !tempVar; //tempVar რომელიც იყო false, გახდება true
    alert(tempVar);
}
else {
    tempVar = tempVar;
    alert(tempVar);
}
*/

//SWITCH
let language = "Georgian";

if (language =="Georgian"){
    console.log("გამარჯობა!");
}
else if (language == "English"){
    console.log("Hello!");
}
else if (language == "German"){
    console.log("Guten Tag!");
}
else if (language == "Spanish"){
    console.log("Hola!");
}
else if (language == "French"){
    console.log("Bon Jour!");
}
else {
    console.log(`Unfortunately, we don't have a support for ${language}.`);
}

switch (language){
    case "Georgian":
        console.log("გამარჯობა!");
        break;
    case "English":
        console.log("Hello!");
        break;
    case "German":
        console.log("Guten Tag!");
        break;
    case "Spanish":
        console.log("Hola!");
        break;
    case "French":
        console.log("Bon Jour!");
        break;
    default:
        console.log(`Unfortunately, we don't have a support for ${language}.`);
}