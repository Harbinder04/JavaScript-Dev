const input = document.getElementById("numberOfWords");
const container = document.querySelector(".container");

const generateWord = (n)=>{
    let text = "";
    const letters = "ABCDEFGHIJKLMNOPQURSTUVWXYZ";
    
    for(let i = 0; i < n; i++){
      text += letters[(Math.random() * 25).toFixed(0)];
    }
    return text;
};

let numOfWords;
let para ;
const generatePara = ()=>{
    numOfWords = Number(input.value);

    para  = document.createElement("p");
   
    let data = "";
    for(let i = 0; i < numOfWords; ++i){
     data += generateWord((Math.random()*15).toFixed(0));
     data += " ";
    }

    para.innerText = data;
    para.setAttribute("class", "paras");

    container.append(para);
};

//  make a button to clear the last generated para. 

const deletePara = ()=> {
  let del = document.getElementsByClassName("paras");
  console.log(del);
  if(del.length == 0){
    alert("No para is there to delete!!");
    return;
  }
  let index ;
  for(let i = 0; i < del.length; i++){
    index = i;
  }
  let delPara = del[index];
  delPara.innerText = "";  // optional:: because remove() will delete the whole para class element and this is used to empty the para before that. 
  delPara.remove();
}

