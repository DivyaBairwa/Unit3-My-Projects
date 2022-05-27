//This information should be stored in 4 different objects. All of this objects should be stored in localstorage in advance. Their localstorage key should be their respective names.  For e.g Scope data will be stored in LocalStorage with key as "scope". ( Note: no capital letter in key )

//Information should be retrieved from localstorage only, avoid hard coding data.

function set(box1,box2,box3,box4,box5){
    this.one=box1;
    this.two=box2;
    this.three=box3;
    this.four=box4;
    this.five=box5;
}
var DataScope = new set(
    "Scope refers to the availability of variables and", 
    "functions in certain parts of the code. In JavaScript",
    "a variable has two types of scope: A variable declared",
    "at the top of a program or outside of a function is considered a global scope variable.",

);
localStorage.setItem("scope", JSON.stringify(DataScope));

var DataHoisting= new set(
    "Hoisting is (to many developers) an unknown or",
    "overlooked behavior of JavaScript. If a developer",
    "doesn't understand hoisting, programs may To avoid bugs",
    "always declare all variables at the beginning of every scope",
);
localStorage.setItem("hoisting", JSON.stringify(DataHoisting));

var DataConstructor= new set (
"The constructor method in JavaScript is a special",
"method used to create and initialize objects",
"within a class. This is what a constructor",
"in every programming language does",

);
localStorage.setItem("constructor function", JSON.stringify( DataConstructor));

var Dataprototype= new set(
"The answer is Prototype. The prototype is an",
"object that is associated with every",
"functions and objects by default in JavaScript",
"where function's prototype property is accessible and modifiable", 
);
localStorage.setItem("prototype", JSON.stringify(Dataprototype));

function display(element){
    document.querySelector("#data").innerHTML="";

    
    var data1=document.createElement("li");
    data1.innerText =element.one;

    var data2=document.createElement("li");
    data2.innerText =element.two;

    var data3=document.createElement("li");
    data3.innerText =element.three;

    var data4=document.createElement("li");
    data4.innerText =element.four;

    var data5=document.createElement("li");
    data5.innerText =element.five;

    document.querySelector("#data").append(data1, data2, data3, data4, data5);
    
}
function SD(){
    display(JSON.parse(localStorage.getItem("scope")));
}

function HD(){
    display(JSON.parse(localStorage.getItem("hoisting")));
}

function CD(){
    display(JSON.parse(localStorage.getItem("constructor function")));
}

function PD(){
    display(JSON.parse(localStorage.getItem("prototype")));
}



