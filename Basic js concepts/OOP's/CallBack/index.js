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

const arr = [2, 3, 4, 5, 6, 7, 8];

function CalculatorMultiply(arr = []){
    const ans = [];
    for(let i = 0; i < arr.length; i++){
       ans.push(arr[i]*10);
    }

    console.log(ans);
}
Calculator(arr);

