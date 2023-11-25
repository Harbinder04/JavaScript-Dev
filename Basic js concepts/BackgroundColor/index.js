const zodiac = document.getElementById("zodiac");

const body = document.body;
const changeBackground = ()=>{
    switch(zodiac.value){
       case "aries":
       body.style.backgroundColor = "#E6E6FA";
       break;
       
       case "tarus" :
        body.style.backgroundColor = "#98FB98";
       break;
       
       case "gemini" :
        body.style.backgroundColor = "#FFDAB9";
       break;

       case "cancer" :
        body.style.backgroundColor = "#87CEFA";
       break;

       case "leo" :
        body.style.backgroundColor = "#FF6B6B";
       break;

       case "virgo" :
        body.style.backgroundColor = "#20B2AA";
       break;

       case "libra" :
        body.style.backgroundColor = "#E0B0FF";
       break;

       case "scorpio" :
        body.style.backgroundColor = "#FFA07A";
       break;

       case "sagittarius" :
        body.style.backgroundColor = "#FAFAD2";
       break;

       case "aquarius" :
        body.style.backgroundColor = "D3D3D3";
       break;

       case "capicorn" :
        body.style.backgroundColor = "#FFA07A";
       break;

       case "pisces" :
        body.style.backgroundColor = "#E6E6FA";
       break;
       default:
        body.style.backgroundColor = "#FFF";
       break;
    }
    
};

