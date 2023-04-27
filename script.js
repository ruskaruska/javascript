let num = 100; //number literal
let myNum = 1.4; //float number
let myStr = "Hello"; //string
let value = true; //boolean - true = 1, false = 0
let newChar = 'C'; //string
let clearValue = null; //ნული მნიშვნელობა, გამოიყენება მნიშვნელობის გასასუფთავებლად

/*
let firstName; //undefined - არ აქვს მნიშვნელობა მინიჭებული
let lastName; //undefined - არ აქვს მნიშვნელობა მინიჭებული

firstName = "Barbare";
*/
let saxeli, gvari, asaki, bio;
saxeli = "Jane";
gvari = "Doe";
asaki = "24";
bio = "Hi, I'm Jane.";


// ერთ ხაზიანი კომენტარი
/*
რამდენიმე
ხაზიანი
კომენტარი
*/
//სტრინგის ბეჭდვა
console.log("Hello");

//მიმატების ოპერატორი
console.log(3 + 4);

//გამოკლების ოპერატორი
console.log(5 - 2);

//გამრავლების ოპერატორი
let x = 2;
let y = 9;
let z = x * y; //z = 2 * 9
console.log(z);

//გაყოფის ოპერატორი
let a = 81;
let b = 9;
console.log(a / b);

//მოდულუსი
let c = 17;
console.log(c % 3);

//ინკრემენტი
let num1 = 4;
num1++;
console.log("num1-ის ამჟამინდელი მნიშვნელობაა ინკრემენტის შემდეგ: " + num1);
//concatenation - შეერთება, გადაბმა მონაცემების, ან ცვლადების ან მნიშვნელობების

//დეკრემენტი
num1--;
console.log("num1-ის ამჟამინდელი მნიშვნელობაა დეკრემენტის შემდეგ: " + num1);


/* CONCATENATION */

console.log('hi' + 'ya');
console.log('სფეისი' + ' ' + 'სტრინგებს' + ' ' + 'შორის');

let string1 = "hello";
let string2 = "world";
console.log(string1 + string2);
console.log(string1 + " " + string2);


//length - სიგრძე, ქარაქთერების ან შემავალი მონაცემების რაოდენობა
console.log("Doggo is walking down the road.".length);

//uppercase & lowercase
console.log("Doggo is walking down the road.".toUpperCase());
console.log("Doggo is walking down the road.".toLowerCase());

//trim
console.log("|||" + "           someone@example.com        " + "|||");
console.log("|||" + "           someone@example.com        ".trim() + "|||");

/*
//alert("Hi there!");

let userName = prompt("რა გქვია?", "ბარბარე");
alert(`გამარჯობა, ${userName} !`); //template expression
//concatenation-ით იქნებოდა ასე: alert("გამარჯობა, " + userName + " !");

*/

let firstName = prompt("შეიყვანეთ სახელი: ");
let lastName = prompt("შეიყვანეთ გვარი: ");
let age = prompt("შეიყვანეთ ასაკი: ");
let company = prompt("შეიყვანეთ კომპანია, რომლისთვისაც მუშაობთ: ");

console.log("თქვენ ხართ " + firstName + " " + lastName + ", ასაკით " + age + ", რომელიც მუშაობს კომპანია " + company + "-ში.");

alert(`თქვენ ხართ ${firstName} ${lastName}, ასაკით ${age}, რომელიც მუშაობს კომპანია ${company}-ში.`);