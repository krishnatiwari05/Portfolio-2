// Cursor Glow
const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e)=>{
cursor.style.left=e.clientX+"px";
cursor.style.top=e.clientY+"px";
});

// Typing Animation (clean)
const words=["Data Analyst","Python Developer","SQL Specialist","Power BI Expert"];
let i=0,j=0,current="",deleting=false;

function type(){
let full=words[i];

if(deleting){
j--;
}else{
j++;
}

current=full.substring(0,j);
document.getElementById("typing").textContent=current;

if(!deleting && j===full.length){
deleting=true;
setTimeout(type,1200);
return;
}

if(deleting && j===0){
deleting=false;
i=(i+1)%words.length;
}

setTimeout(type,deleting?50:100);
}

type();

// Scroll Progress
window.onscroll=()=>{
let scrollTop=document.documentElement.scrollTop;
let height=document.documentElement.scrollHeight-document.documentElement.clientHeight;
document.getElementById("progress-bar").style.width=(scrollTop/height)*100+"%";
};

// Fade Animation
const sections=document.querySelectorAll(".section");

window.addEventListener("scroll",()=>{
sections.forEach(sec=>{
if(sec.getBoundingClientRect().top<window.innerHeight-100){
sec.classList.add("show");
}
});
});