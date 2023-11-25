const btn = document.querySelector("button");

const printName = (name, income) =>{
    console.log(`Welcome, ${name}. Your income is ${income}`)
};

// Used for that rating pop-up  setTimeout is used for the setting the thing for displaying the thing after a perticular amount of time. 

// const customTimeout = setTimeout(printName, 2000, "Abhi", 20000);  // (function, timeInterval, name, income)

// btn.addEventListener("click",() =>{
// clearTimeout(customTimeout);   // passing variable of the button
// });



//Interval : repeat a same thing after an interval. 
const id = setInterval(printName, 2000, "Abhi", 2000);

btn.addEventListener("click",() =>{  // will remove the setInterval functionality on clicking the btn
clearInterval(id);
});