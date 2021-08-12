
//  wie kann verknüfung überprüfen?
console.log("test");



// wie deklariert man Variableen?
// let,var, const

const pi= 3.14;
let x= "hallo";
console.log(pi);
console.log(x);
x = "world"; 
console.log(x);

// welche wete kann man mit variablen deklarieren?
// string, Number, Boolean
var text="hello";
var text='ola';
console.log(text);

let y= 5;
console.log(y);
// const pi=3.14;
let isDone=true;
console.log(isDone);

// wie kann man den JS output ausgeben lassen?
// console.log("test");

// document.write("ollllo");
// alert("komm");

document.getElementById("myHeadline").innerHTML+="klaus";

// auf welcher Art vergibt man JS namen?
// camelCase
let fabianElaine
// let fAbianeLaine------wrong!

// interaction
// let myName= prompt("give your name");
// console.log(myName);
// let isCool =confirm('are you cool?');
// console.log(isCool);


// wie kann man Werte in JS verketten?
// +
// +=
// string + Number =String
// Number + String =string

// wie kann man button mit einer function verknüfen?
// onclick
//  wie deklariere ich eine function?
function simon(){
    console.log("test");
    console.log(document.getElementById("myPic"));
    document.getElementById("myPic").style.display="none" ;
}

    document.getElementById("myHeadline").style.color= "gold" ;
    document.getElementById("myHeadline").style.textDecoration= "underline" ;
    document.getElementById("myHeadline").style.backgroundColor= "tomato" ;

// text ändern
function changeText(){
    console.log("test");
    document.getElementById("newText").innerHTML="Andreas";

}
// userText
function userText(){
    console.log("it works");

}
function sendText(){
    console.log(document.getElementById("userValue").value);
}

// welcher Data type?
// typeof()

// 1.1 Number 
console.log(typeof(3));
// 1.2 string
console.log(typeof("hi"));
// 1.3 boolean
console.log(typeof(false));
//  1.4 null
let box = null;
console.log(typeof(box));  //object : referencing to an unexisting object
console.log(box);

// 1.5 undefined
let unknown = undefined;
console.log(unknown);
console.log(typeof(unknown));
let unknown2;
console.log(unknown2);
console.log(typeof(unknown2));

// 1.6 object
let arr =[0, 1, 4];
console.log(typeof(arr));

// 1.7 functions
// alert()
console.log(typeof(alert));
console.log(typeof(sendText));





const num1=document.getElementById("num1");
const num2=document.getElementById("num2");
function multiply(){

console.log("test");
console.log(document.getElementById("num1").value);
console.log(document.getElementById("num2").value);
console.log(typeof(num1.value));
console.log(typeof(num2.value));

document.getElementById("result").innerHTML = num1.value*num2.value;
}

// string * Number =twoNumber
let myString ="String";
let z=2;
console.log(typeof(myString));
console.log(typeof(z));
let w= myString *z;
console.log(typeof(w));
console.log(w);

// type conversion
// Number conversion

const result2=document.getElementById("result2");
const num3 = document.getElementById("num3");
const num4 = document.getElementById("num4");

function add(){
    console.log("test");
    // result2.innerHTML =num3.value + num4.value;
    // result2.innerHTML =(num3.value*1) + (num4.value*1);
    result2.innerHTML =Number(num3.value) + Number(num4.value);
}

    let four ="4";
    four=Number(four);
    console.log(four);
    console.log(typeof(four));

    // NaN: Not a Number 
    console.log("------");
    let superman = "superman";
    superman = Number(superman);
    console.log(typeof(superman));
    console.log(superman);

    //String Conversion 
    let isDone2 = true; //boolean
    isDone2 = String(isDone2);
    console.log(typeof(isDone2));
    console.log(isDone2);

    //arithmetics
    // a+=b => a=a+b 1+=1 2=1+1
    // a-=b => a=a-b
    // a*=b => a=a*b
    // a/=b => a=a/b
    // i++ => i=i+i increment
    // i-- => i=i-i decrement

// Comparison

console.log(true == 1); //true 
console.log(true === 1); //false
console.log(1 === 1); //true
console.log(false == 0);
console.log((false === 0));
console.log(false === Boolean("0"));
console.log(false === Boolean(Number("0")));
console.log(3 < 3);
console.log(3 <= 3);
console.log(true !== 0);
console.log(Number("hello world") == typeof(2));
console.log(typeof(Number("hello world")) === typeof(2));

// classList: add, remove, toggle 
console.log(document.getElementById("myPic"));
let myPic = document.getElementById("myPic");

console.log(myPic.classList);

// add 

// myPic.classList.add("hide");

myPic.classList.add("block");
myPic.classList.add("center");
myPic.classList.add("block", "center");

// remove 
myPic.classList.remove("block");
console.log(myPic.className);
console.log(myPic.classList);

myPic.className = "";
console.log(myPic.className);
console.log(myPic.classList);

// toggle 
function simon() {
    myPic.classList.toggle("hide");
}

//random number 
// Match.random

console.log(Math.random()); // x>=0 x<1
console.log(Math.random() * 10);
console.log(Math.floor(Math.random() * 10));