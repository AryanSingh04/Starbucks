// let img1 = document.getElementById("img1");
// let img2 = document.getElementById("img2");
// let img3 = document.getElementById("img3");
let display = document.getElementById("display");
let circle  = document.querySelector(".circle")

let dash = document.getElementById("dash");
let cross = document.getElementById("cross");
let navLink = document.getElementById("link");
 
dash.onclick = function(){
    dash.classList.toggle("active");
    navLink.classList.toggle("active");
    cross.classList.toggle("active");
    
}

function change(link){
   
display.src = link;
gsap.from("#display",{
    x:500,
    y:-500,
   
}) 

}

function color(link){
 circle.style.background = link
}
gsap.from("#display",{
    y:50,
  repeat:-1,
    duration:2.5,
   yoyo:5,
  
   
}) 
