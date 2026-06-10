// let fullname='brocode';
// let age=25;
// let isstudent=true;

// document.getElementById("p1").textContent=`your name is ${fullname}`;
// document.getElementById("p2").textContent=`your age is ${age}`;
// document.getElementById("p3").textContent=` enrolled: ${isstudent}`;

// let username=window.prompt("whats ur username:");
// console.log(username);

// let username;
// document.getElementById("mysubmit").onclick=function(){
//   username=document.getElementById("mytext").value;
//   document.getElementById("myh1").textContent=`hello ${username}`;
// }

// let age=window.prompt("how old are you ??")

// age+=1;
// console.log(age);

// let x ="pizza";
// let y ="pizza";
// let z ="pizza";

// x=Number(x);
// y=String(y);
// z=Boolean(z);

// console.log(x,typeof x);
// console.log(y,typeof y);
// console.log(z,typeof z);


// const PI = 3.14159;
// let radius;
// let circumference;

// // PI = 420.69;

// document.getElementById("mySubmit").onclick = function(){
//     radius = document.getElementById("myText").value;
//     radius = Number(radius);
//     circumference = 2 * PI * radius;
//     document.getElementById("myH3").textContent = circumference + " cm";
// }

// const increasebtn=document.getElementById("increase-button");
// const resetbtn=document.getElementById("reset-button");
// const decreasebtn=document.getElementById("decrease-button");

// let count=0;
// increasebtn.onclick = function(){
//     count++;
//     document.getElementById("countlabel").textContent = count;
// }

// decreasebtn.onclick=function(){
//   count--;
//   document.getElementById("countlabel").textContent=count;
// }

// resetbtn.onclick=function(){
//   count=0;
//   document.getElementById("countlabel").textContent=count;
// }


// let x = 3;
// let y = 2;
// let z = 1;

// console.log(Math.PI);
// console.log(Math.E);

// z = Math.round(x);
// z = Math.floor(x);
// z = Math.ceil(x);
// z = Math.trunc(x);
// z = Math.pow(x, y);
// z = Math.sqrt(x);
// z = Math.log(x);
// z = Math.sin(x);
// z = Math.cos(x);
// z = Math.tan(x);
// z = Math.abs(x);
// z = Math.sign(x);
// let max = Math.max(x, y, z);
// let min = Math.min(x, y, z);

// console.log(min);

// RANDOM NUMBER GENERATOR
// const myButton = document.getElementById("myButton");
// const label1 = document.getElementById("label1");
// const label2 = document.getElementById("label2");
// const label3 = document.getElementById("label3");
// const min = 1;
// const max = 6;
// let randomNum1;
// let randomNum2;
// let randomNum3;

// myButton.onclick = function(){
//     randomNum1 = Math.floor(Math.random() * max) + min;
//     randomNum2 = Math.floor(Math.random() * max) + min;
//     randomNum3 = Math.floor(Math.random() * max) + min;
//     label1.textContent = randomNum1;
//     label2.textContent = randomNum2;
//     label3.textContent = randomNum3;
// }

//  CHECKED PROPERTY
// const myCheckBox = document.getElementById("myCheckBox");
// const visaBtn = document.getElementById("visaBtn");
// const masterCardBtn = document.getElementById("masterCardBtn");
// const payPalBtn = document.getElementById("payPalBtn");
// const mySubmit = document.getElementById("mySubmit");
// const subResult = document.getElementById("subResult");
// const paymentResult = document.getElementById("paymentResult");

// mySubmit.onclick = function(){

//     if(myCheckBox.checked){
//         subResult.textContent = `You are subscribed!`;
//     }
//     else{
//         subResult.textContent = `You are NOT subscribed!`;
//     }

//     if(visaBtn.checked){
//         paymentResult.textContent = `You are paying with Visa`;
//     }
//     else if(masterCardBtn.checked){
//         paymentResult.textContent = `You are paying with MasterCard`;
//     }
//     else if(payPalBtn.checked){
//         paymentResult.textContent = `You are paying with PayPal`;
//     }
//     else{
//         paymentResult.textContent = `You must select a payment type`;
//     }
// }


// NUMBER GUESSING GAME

// const minNum = 1;
// const maxNum = 100;
// const answer = Math.floor(Math.random()*(maxNum-minNum+1))+minNum;

// let attempts = 0;
// let guess;
// let running = true;

// while(running){

// guess = window.prompt(`Guess a number between ${minNum} - ${maxNum}`);
// guess = Number(guess);

//   if(isNaN(guess)){
//   window. alert("Please enter a valid number");
//   }
//   else if(guess < minNum || guess > maxNum) {
//   window.alert("Please enter a valid number");
//   }
//   else{
//     attempts++;
//     if(guess>answer){
//       window.alert("too high!try again");
//     }
//     else if(guess<answer){
//       window.alert("too low!try again");
//     }
//     else{
//       window.alert(`correct!the answer was ${answer} and it took you ${attempts}attempts`);
//       running=false;
//     }
    
//   }
//   }

// TEMPERATURE CONVERSION PROGRAM

// const textBox = document.getElementById("textBox");
// const toFahrenheit = document.getElementById("toFahrenheit");
// const toCelsius = document.getElementById("toCelsius");
// const result = document.getElementById("result");
// const mySubmit = document.getElementById("mySubmit");
// let temp;

// mySubmit.onclick=function convert(){

//     if(toFahrenheit.checked){
//         temp = Number(textBox.value);
//         temp = temp * 9 / 5 + 32;
//         result.textContent = temp.toFixed(1) + "°F";
//     }
//     else if(toCelsius.checked){
//         temp = Number(textBox.value);
//         temp = (temp - 32) * (5/9);
//         result.textContent = temp.toFixed(1) + "°C";
//     }
//     else{
//         result.textContent = "Select a unit"; 
//     }
// }

// ROLL DICE PROGRAM

// function rolldice(){
//   const numofdice=document.getElementById("numofdice").value;
//   const diceresult=document.getElementById("diceresult");
//   const diceimages=document.getElementById("diceimages");
//   const values=[];
//   const images=[];

//   for(let i=0 ; i < numofdice ; i++){
//     const value=Math.floor(Math.random()*6)+1;
//     values.push(value);
//     images.push(`<img src="images/dice${value}.png" alt="dice ${value}">`);
//   }

//   diceresult.textContent=`dice: ${values.join(', ')}`;
//   diceimages.innerHTML=images.join(' ');

// }

// RANDOM PASSWORD GENERATOR

// function generatepassword(length,includeLowercase,includeUppercase,includeSymbols,includeNumbers){

//   const lowercasechars="abcdefghijklmnopqrstuvwxyz";
//   const uppercasechars="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//   const symbolschars="!@#$%^&*()_+-=";
//   const numberchars="0123456789";

//   let allowedchars= "";
//   let password= "";

//   allowedchars+=includeLowercase?lowercasechars: "";
//   allowedchars+=includeUppercase?uppercasechars: "";
//   allowedchars+=includeSymbols?symbolschars: "";
//   allowedchars+=includeNumbers?numberchars: "";

//   if(length <= 0){
//     return `(password length must be at least 1)`;
//   }

//   if(allowedchars.length===0){
//     return "(at least 1 set of characters needs to be selected)";
//   }

//   for(let i=0; i < length; i++){
//     const randomIndex=Math.floor(Math.random() * allowedchars.length);
//     password+=allowedchars[randomIndex];
//   }

//   return password;

// }

// const passwordlength=10;
// const includeLowercase=false;
// const includeUppercase=false;
// const includeNumbers=false;
// const includeSymbols=false;

// const password=generatepassword(passwordlength,includeLowercase,includeUppercase,includeSymbols,includeNumbers);

// console.log(`generated password : ${password}`);


//COMPOUND INTEREST CALCULATOR

// function calculate(){

// const totalAmount = document.getElementById("total-amount");
// const principalInput = document.getElementById("principal");
// const rateInput = document.getElementById("rate");
// const yearsInput = document.getElementById("years");

// let principal = Number(principalInput.value);
// let rate = Number(rateInput.value / 100);
// let years = Number(yearsInput.value);

// if(principal < 0 || isNaN(principal)){
// principal = 0;
// principalInput.value = 0;
// }

// if(rate < 0 || isNaN(rate)){
// rate = 0;
// rateInput.value = 0;
// }

// if(years <0 || isNaN(years)){
// years = 0;
// yearsInput.value = 0;
// }

// const result = principal * Math.pow((1 + rate / 1), 1 * years);

// totalAmount.textContent = result.toLocaleString(undefined,
//                                                         {style: "currency",
//                                                         currency: "USD"});
// }

//DIGITAL CLOCK
// function updateClock(){

// const now = new Date();
// let hours = now.getHours();
// const meridiem = hours >= 12 ? "PM" : "AM";
// hours = hours % 12 || 12;
// hours = hours.toString().padStart(2, 0);
// const minutes = now.getMinutes().toString().padStart(2, 0);
// const seconds = now.getSeconds().toString().padStart(2, 0);
// const timeString = `${hours}:${minutes}:${seconds} ${meridiem}`;
// document.getElementById("clock").textContent = timeString;

// }
// updateClock();
// setTimeout(updateClock, 1000);

//STOPWATCH

const display = document.getElementById("display");
let timer = null;
let startTime = 0;
let elapsedTime = 0;
console.log(Date.now()-startTime);
let isRunning = false;

function start(){

  if(!isRunning){
  startTime = Date.now() - elapsedTime;
  timer = setInterval(update, 10);
  isRunning = true;
  }
}

function stop(){

  if(isRunning){
  clearInterval(timer);
  elapsedTime = Date.now() - startTime;
  isRunning = false;
  }
}

function reset(){
clearInterval(timer);
startTime = 0;
elapsedTime = 0;
isRunning = false;
display.textContent = "00:00:00:00";
}



function update(){

const currentTime = Date.now();
elapsedTime = currentTime - startTime;

let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
let seconds = Math.floor(elapsedTime / 1000 % 60);
let milliseconds = Math.floor(elapsedTime % 1000 / 10);

hours = String(hours).padStart(2, "0");
minutes = String(minutes).padStart(2, "0");
seconds = String(seconds).padStart(2, "0");
milliseconds = String(milliseconds).padStart(2, "0");

display.textContent = `${hours} :${minutes} :${seconds} :${milliseconds}`;

}
