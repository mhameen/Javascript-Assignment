/*let val1 = 1
let val2 = 6
if (!val1+val2 == 8){
    console.log("this is true");
}
 else {
     console.log("this is false");
 } */
 /*const multiplaction =  (a ,b) =>  a * b
 let res= multiplaction(2,4);
 console.log(res);*/

/*console.log("assignment1");

 const numbers = [19,59,99,34,56,78];
 const largestNumber = (values) => {
     let highest = 0;
     for( let i=0; i<values.length; i++){
         if (values[i] > highest ){
             highest = values[i];
         }
     }
     return highest;
 } 
 console.log(largestNumber(numbers));




 console.log("assignment2");

 const obj1 = {a:"apple", b:"ball", c:"cat", d:"dog"};
 const obj2 = {a:"apple", b:"ball", c:"cat", d:"dog"};

 const objects = (obj1,obj2) => {
    const obj1keys = Object.keys(obj1);
    const obj2keys = Object.keys(obj2);

    if (obj1keys.length !== obj2keys.length){
        return false;
    }
    for (key of obj1keys){
        if (obj1[key] !== obj2[key]){
            return false
        }
    }
    return true
 }
 console.log(objects(obj1,obj2));


const Qulification = ["SSLC" , "PUC" , "ENGNEERING" , "STOP"];
const [quli1,quli2,quli3,quli4]=Qulification;
console.log(quli1)
console.log(quli2)
console.log(quli3)
console.log(quli4)


const Biodata = {name:"AMEEN" ,age:"20" , Education:"ComputerScience Engneering", Hobbies:"Gym,Sports,E-Sports"}
const {name,age,Education,Hobbies} = Biodata;
console.log(name);
console.log(age);
console.log(Education);
console.log(Hobbies);



const doast = "Adnan";
const greeting = "kaisa re hai potte";
const res = `${doast} ${greeting}`
console.log(res);*/

// let age=40;
// switch (age>18) {
//     case age<18 :
//         console.log("not elegible");
//         break;
//      case age>18:
//         console.log("eligible");
//         break;
//      default:
//     console.log("valid age");       
// }

// let animals = ['tiger', 'lion','elephant','cat','dog','panther','crocodile','snakes','monkey','bear' ]

// console.log(animals[0])
// console.log(animals[1])
// console.log(animals[2])
// console.log(animals[3])

// console.log(animals)

// animals.pop()
// console.log(animals)

// animals.push('bear')
// console.log(animals)

// animals.shift()
// console.log(animals)

// animals.unshift('tiger')
// console.log(animals)

// animals.splice(6)
// console.log(animals)


// animals.splice(5,0,'camel')
// console.log(animals)

// for (let i=0; i<=animals.length-1;i++){
//     console.log(animals[i])
// }

// console.log(animals.reverse())

// let a = [1,3,5]
// let b =[7,9]

// let c = a.concat(b)
// console.log(c)


// let profile = {
//       name:"Ameen",
//       age:"21",
//       mobile:7259693915,
//       Education:{
//           school:"willingTon English School",
//           puc:"Nataional pu college",
//           degree:"GCE"
//       },
//     Address:{
//         city:"Banglore",
//         state:'karnataka',
//         pin:560018
//     }
// }


// console.log(profile.name)
// console.log(profile.Education.puc)
// console.log(profile['Address']['city'])



// let viedo ={
//     name:"access101",
//     play:function (){
//         console.log("viedo played")
//     },
//     timer:[10 , 20, 30]
// }

// console.log(viedo.name)
// console.log(viedo.play())
// console.log(viedo.timer)


// let a= "ameen";
// let b ="Mohammed";

// console.log(this.a);
// console.log(this.b)

// const demo = (a ,  b=10 , c=10) =>{
//     return a + b + c;
// }

// let result = demo(10);
// console.log(result);


// var x;
// a=100;
// console.log(x)

// let headding1 = document.getElementById("part1")
// console.log(headding1)

// let headding2 = document.getElementsByClassName("part2")
// console.log(headding2)

// let headding3 = document.getElementsByTagName("h3")
// console.log(headding3)

// let headding4 = document.querySelector("#part1")
// console.log(headding4)

// let headding5 = document.querySelectorAll("h3")
// console.log(headding5)

// let headding6 = document.querySelectorAll(".part2")
// console.log(headding6)

// let headding7 = document.querySelectorAll("#part1")
// console.log(headding7)


let parentEl = document.getElementById("parent")
console.log(parentEl.firstChild)

let parentEl1 = document.getElementById("parent")
console.log(parentEl1.lastChild)

let parentElem = document.getElementById("parent")
console.log(parentElem.children)

let parentEl2 = document.getElementById("parent")
console.log(parentEl2.children[2])

let childEl = document.getElementById("part1")
console.log(childEl.nextElementSibling)

let childEle = document.getElementById("part1")
console.log(childEle.previousElementSibling)

let element = document.getElementById("part1")
console.log(element.parentElement)