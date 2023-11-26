// function sum(a, b, fun){ //high order function because it takes a function as argument. 
//     const result = a + b;
//     fun(result);
// }

// function displaySum(result){
//     const h1 = document.querySelector("h1");
//     h1.innerText = result;
// }

// sum(34, 23, displaySum); // Callback function 
// sum(12, 34, alert); // Callback function
  
//---------------Calculator Example--------------//

// Q: perform the all the calculation task with 10 and array element.
const arr = [2, 3, 4, 5, 6, 7, 8];

function Calculator(arr = [], callback){   // we give call back function to perform various task with the help of same function either we have to create every task different time.
    const ans = [];
    for(let i = 0; i < arr.length; i++){
        const element = callback(arr[i]);
       ans.push(element);
    }
    console.log(ans);
}

function multiply(a){
    return a*10;
}

function divide(a){
  return a/10;
}

function add(a){
    return a+10;
}

// perform substraction
Calculator(arr, (a)=>{
    return a - 10;
});
Calculator(arr, divide);

