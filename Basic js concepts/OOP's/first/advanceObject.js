class MyClass{
    #a ;
    #b ;  // private variable
    constructor(age, name){
        console.log("Hello I am in OOP's now!!");
    }

    // getter function
    get getDataA(){
       return this.#a;
    }
    // setter function
    set setDataA(a){
        this.#a = a;
    }
      // getter function
    get getDataB(){
        return this.#b;
     }
 
     // setter function
    set setDataB(b){
         this.#b = b;
     }
      
     // Private method.
     #print(){
        let a = 19; 
        console.log("Don't want to show this code!!");
     }
}

// inheritance in javascript
class Child extends MyClass{
    constructor(age, name, qualification){
        super(age, name);
        this.qualification = qualification;
    }
}
const obj = new MyClass(18, "Harbinder Singh");
obj.setDataA = 40;
obj.setDataB = 39;
// console.log(obj.getDataB);
console.log(obj.getDataA);
console.log(obj.getDataB);

const objChild = new Child(15, "Harsh", "B.Tech");


