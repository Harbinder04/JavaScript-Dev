// assuming a real world synario 

const productList = [];
const product = {};

// assume we are fecthing data in x time with the help of setTimeOut()
const fetchData = (callback)=>{
  setTimeout(()=>{
   productList.push({
    name: "T-shirt",
    id: "23fsde",
   },
   {
    name: "Shirt",
    id: "24fsde",
   },
   {
    name: "Pant",
    id: "25fsde",
   });
   console.log("Printing after fetching..!!");
// 3 step  - Making hell
setTimeout((callback)=>{
    product.id="26sgewe";
    product.name = "Shirt";
    callback();
    console.log(product);
}, 2000, callback);
// 2 step
//    callback();
// 1 step
//    console.log(productList);  // to see objects after 4 sec. 
  }, 4000, callback);  // takes 4s to fetch 
}


const displayProduct = ()=>{
    setTimeout(()=>{
        for(let i = 0; i < productList.length; i++){
            const p = document.createElement("p");
            p.innerText = productList[i].name;
            document.body.append(p);
        }
        console.log("Printing after displaying ");
    }, 1000);
};

// displayProduct();  // this will not execute as the data is enter in array after 4 sec. and this function will execute after 1sec. so, we use this as callback to make it asyncronous. 
fetchData(displayProduct);