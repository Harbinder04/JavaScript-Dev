const Roman = {
    weight: 265, 
    height: 175, 
    quote: ()=>{
        console.log("Head of the table");
    },
};

// What if we have 100 of the player in the game so we have do the above task 100 times not good write or suppuse we want to update one propertie then again 100.

//  so we make template for that purpose. 
// factory function
 function wwePlayer(w, h, quote){
    return { weight: w, 
    height: h, 
    quote: ()=>{
        console.log(quote);
    },
 };
};

const eth = wwePlayer(60, 175, "Hello everyone");
console.log(eth);

// this keyword
function Star(height, name){
    this.height = height;
    this.name = name;
}

// object created dinamically
console.log(new Star(129, "harbinder Singh"));

// creating array dynamically 
const arr = new Array(234, 185);

console.log(arr);
arr.sample = "Sample Boi"; // addend property in the array object with key- value pair
console.log(arr);

