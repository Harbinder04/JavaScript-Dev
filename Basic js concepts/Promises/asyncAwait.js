const url = "https://catfact.ninja/fact";
const h1 = document.querySelector("h1");

// const fetchData = async ()=>{
//  const response = await fetch(url);
//  const data = await response.json();
//  console.log(data);
// }
// fetchData();

// Part : 2   // will Understand later event loop in detail. 
// Guess the printing pattern 
// console.log("a");  // 1

// setTimeout(()=>{   // 4
//     console.log("Time Out")
// }, 0);

// Promise.resolve().then(()=> console.log("Promise"));  // 3

// console.log("Z");  // 2

// Let's see await : await keyword freeze the code below it in the scope of function. 

// console.log("a");

// const fetchData = async ()=>{
//     console.log("b");

//     const response = await fetch(url);  // freeze the below code print "e".
//     console.log(response);
//     console.log(response.fact);   //While a Promise object is "pending" (working), the result is undefined.
//     const data = await response.json();  // freeze
//     console.log("c");
//     h1.innerText = data.fact;
//     console.log("d");
// };
// fetchData();
// console.log("e");


// Using Tyr - Catch Block 
const fetchData = async ()=>{
   try {
    const response = await fetch(url);  
        console.log(response);
        const data = await response.json();  
        h1.innerText = data.fact;
        // throw new Error("Unable to fetch the data.");
   } catch (error) {
      console.log(error);  // if url is wrong or unable to fetch
   }
   finally{
    console.log("Optional");
   }
};
fetchData();