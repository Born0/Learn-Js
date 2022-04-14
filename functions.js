function addNums(num1=4,num2=3){
    return num1+num2;
}
console.log(addNums(5,2));

// const  add= (num1,num2)=>{ //retun works with curly
//    return num1+num2;
// }

const  add= (num1,num2)=> num1+num2; // no curly no return

console.log(add(5,7));