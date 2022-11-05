//nevigation button opening closing

//element selector
let menuButton = document.querySelector("#menu-btn");
let nevigationSection = document.querySelectorAll(".nevigation")[0];
let navBar = document.querySelector("nav");

var count = 0;
menuButton.addEventListener("click", ()=>{
    count++;
   if(count == 1){
    nevigationSection.style.height = "86vh";
    nevigationSection.style.display = "block";
    navBar.style.display = "block";
   }else if(count==2){
    nevigationSection.style.height = "0";
    nevigationSection.style.display = "none";
    count = 0;
   }
});
