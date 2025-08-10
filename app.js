let btn = document.querySelector(".btn");

btn.addEventListener("click",function(){
  let h3=document.querySelector("h3");
  let randomcolor =getRandomColor();
  h3.innerText=randomcolor;
  let div=document.querySelector("div");
  div.style.backgroundColor=randomcolor;
});

function getRandomColor(){
     
    let red = Math.floor(Math.random()*255);
    let green =Math.floor(Math.random()*255);
    let black=Math.floor(Math.random()*255);

    let color=`rgb(${red},${green},${black})`;

    return color;
}