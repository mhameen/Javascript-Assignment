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

console.log("assignment1");

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
 const obj2 = {a:"apple", b:"bat", c:"car", d:"dog"};

 const objects = (obj1,obj2) => {
     let statement;
     if(JSON.stringify(obj1) === JSON.stringify(obj2)){
         statement = "objects are similar";
     } else{
         statement = "objects are not similar";
     }
     return statement;
 };

 console.log(objects(obj1,obj2));