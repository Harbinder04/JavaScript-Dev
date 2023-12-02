const dayElement = document.querySelector(".days");
const hourElement = document.querySelector(".hour");
const minuteElement = document.querySelector(".minute");
const secondElement = document.querySelector(".second");
const heading = document.querySelector("h1");
const counterTimer = document.querySelector(".counterTimer");

const second = 1000, minute = 60 * second, hour = minute * 60, day = 24 * hour;

const timefunction = () =>{
    let now = new Date();
    let dd = String(now.getDate()).padStart(2, "0"),
    mm = String(now.getMonth() + 1).padEnd(2, "0"),
    yyyy = now.getFullYear();

    let enterMonth = prompt("Enter the month").padStart(2,"0");
    if(enterMonth > 12){
        alert("This is not a valid Month");
        enterMonth =prompt("Enter a valid Month").padStart(2, "0");
    }
    let enterDate= prompt("Enter the date").padStart(2,"0");
    if(enterMonth === 2 && enterDate > 28){
        alert("This is not a valid Date");
        enterDate = prompt("Enter a valid Date").padStart(2, "0");
    }
    if(enterMonth !== 2 && enterDate > 31){
        alert("This is not a valid Date");
        enterDate = prompt("Enter a valid Date").padStart(2, "0");
    }
    
    now = `${dd}/${mm}/${yyyy}`;
    // console.log(`${enterMonth}/${enterDate}/${yy}`);
    let targetDate = `${enterMonth}/${enterDate}/${yyyy}`;

    if(now > targetDate){
      targetDate = `${enterMonth}/${enterDate}/${yyyy + 1}`;
    }

    const interValid = setInterval(()=>{
        const timer = new Date(targetDate).getTime();
        const today = new Date().getTime();
         
       const difference = timer - today;
       const leftDay = (Math.floor(difference/day));
       const leftHour = (Math.floor((difference%day)/hour));
       const leftMinute = (Math.floor((difference%hour)/minute));
       const leftSecond = (Math.floor((difference%minute)/second));
       
       dayElement.innerText = leftDay;
       hourElement.innerText = leftHour;
       minuteElement.innerText = leftMinute;
       secondElement.innerText = leftSecond;
    //    console.log(`${leftDay}: ${leftHour}: ${leftMinute}: ${leftSecond}`);
       if(difference < 0){
         counterTimer.style.display = "none";
         heading.innerText = "Time's Up";
         clearInterval(interValid);
       }
    }, 0);
};

timefunction();
