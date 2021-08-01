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

let animals = ['tiger', 'lion','elephant','cat','dog','panther','crocodile','snakes','monkey','bear' ]

console.log(animals[0])
console.log(animals[1])
console.log(animals[2])
console.log(animals[3])

console.log(animals)

animals.pop()
console.log(animals)

animals.push('bear')
console.log(animals)

animals.shift()
console.log(animals)

animals.unshift('tiger')
console.log(animals)

animals.splice(6)
console.log(animals)


animals.splice(5,0,'camel')
console.log(animals)

for (let i=0; i<=animals.length-1;i++){
    console.log(animals[i])
}

console.log(animals.reverse())

let a = [1,3,5]
let b =[7,9]

let c = a.concat(b)
console.log(c)