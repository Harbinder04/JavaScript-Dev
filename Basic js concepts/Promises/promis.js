/* Promis is an object in javaScript by which we can perform asyncronous task which will either fail or pass.    *  *  Pormis is rescue of callBack hell.
* */

// Example : 1
// const a = new Promise((resolve, reject)=>{
//    let get = false;
//    if(get){
//     resolve("Data is fetched succesfully");
//    }else{
//     reject("There is some error..!");
//    }
// });

// a.then((parameter) =>{
//     console.log(parameter);
// }).catch((error)=>{
//     console.log(error);
// });


// Example 2: Assuming data fetching porcess
let arr = [];
const fetchData = (arr)=>{
    return new Promise((resolve, reject)=>{
      setTimeout(()=>{
        arr.push("First Item");
        if(arr.length>0) resolve("Item is fetched succesfully");
        else reject("Item is not fetched");
      })
    }, 2000);
}

fetchData(arr)
    .then((message)=>{console.log(message);})
    //can make chain of then.
    .catch((message) => console.log(message))
    .finally(() => console.log("Will Work Either Condition"))

