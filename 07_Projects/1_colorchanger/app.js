let buttons = document.querySelectorAll(".button");
let body = document.querySelector("body");

buttons.forEach((div)=>{
   div.addEventListener("click",()=>{
    if(div.id == "grey"){
        body.style.backgroundColor = "grey";
    }
    else if(div.id == "white"){
        body.style.backgroundColor = "white";
    }
    else if(div.id == "blue"){
        body.style.backgroundColor = "blue";
    }
    else if(div.id == "yellow"){
        body.style.backgroundColor = "yellow";
    }
    else if(div.id == "purple"){
        body.style.backgroundColor = "purple";
    }
   });
});
