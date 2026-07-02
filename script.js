function showSection(sectionId){

document.getElementById("home-page").style.display="none";

let sections=document.querySelectorAll(".section-page");

sections.forEach(function(section){
section.style.display="none";
});

document.getElementById(sectionId).style.display="block";

}

function goBack(){

let sections=document.querySelectorAll(".section-page");

sections.forEach(function(section){
section.style.display="none";
});

document.getElementById("home-page").style.display="block";
}
