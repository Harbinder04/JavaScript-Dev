// Arrow function. 

// let display = (a, b)=>{
//     console.log(a+b);
// }
// display(2, 3);

//Methods. 

const arr = [2, 3, 4, 5, 6];

// const myfunc = (value, index)=>{  // Arrow function must be called before function call.
//     if(value == 6){
//        console.log("Your value is at index: "+ index);
//     }
// };

// arr.find(myfunc);

// Second way to access the arr
let result = arr.find((value, index)=>{
    if(value === 6){
        // console.log('6 Exist at index: '+ index);
        return value;
    }
});
console.log(result);