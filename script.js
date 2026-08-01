/* ===============================
   LOADER
================================ */

window.addEventListener("load", () => {

const loader = document.getElementById("loader");

setTimeout(() => {

loader.style.opacity = "0";

setTimeout(() => {

loader.style.display = "none";

},1000);

},2200);

});


/* ===============================
   MUSIC
================================ */

const music=document.getElementById("bgMusic");

const musicBtn=document.getElementById("musicBtn");

let playing=false;

musicBtn.addEventListener("click",()=>{

if(!playing){

music.play();

playing=true;

musicBtn.innerHTML="⏸";

}else{

music.pause();

playing=false;

musicBtn.innerHTML="🎵";

}

});


/* ===============================
   START BUTTON
================================ */

const start=document.getElementById("openBook");

start.addEventListener("click",()=>{

document.getElementById("book").scrollIntoView({

behavior:"smooth"

});

});


/* ===============================
   FLOATING HEARTS
================================ */

const heartContainer=document.getElementById("floating-hearts");

function createHeart(){

const heart=document.createElement("div");

heart.className="floating-heart";

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(18+Math.random()*25)+"px";

heart.style.animationDuration=(5+Math.random()*6)+"s";

heartContainer.appendChild(heart);

setTimeout(()=>{

heart.remove();

},10000);

}

setInterval(createHeart,700);


/* ===============================
   SCROLL FADE
================================ */

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{threshold:.15});

document.querySelectorAll(".page").forEach(page=>{

page.classList.add("fade");

observer.observe(page);

});


/* ===============================
   POLAROID HOVER RANDOM
================================ */

document.querySelectorAll(".polaroid").forEach(card=>{

card.addEventListener("mouseenter",()=>{

let angle=(Math.random()*8)-4;

card.style.transform="rotate("+angle+"deg) scale(1.06)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="";

});

});


/* ===============================
   LIGHTBOX
================================ */

const gallery=document.querySelectorAll(".gallery img");

const lightbox=document.createElement("div");

lightbox.id="lightbox";

lightbox.style.position="fixed";

lightbox.style.left="0";

lightbox.style.top="0";

lightbox.style.width="100%";

lightbox.style.height="100%";

lightbox.style.background="rgba(0,0,0,.9)";

lightbox.style.display="none";

lightbox.style.justifyContent="center";

lightbox.style.alignItems="center";

lightbox.style.zIndex="99999";

document.body.appendChild(lightbox);

const lightImage=document.createElement("img");

lightImage.style.maxWidth="90%";

lightImage.style.maxHeight="90%";

lightImage.style.border="12px solid white";

lightImage.style.borderRadius="10px";

lightbox.appendChild(lightImage);

gallery.forEach(img=>{

img.addEventListener("click",()=>{

lightbox.style.display="flex";

lightImage.src=img.src;

});

});

lightbox.addEventListener("click",()=>{

lightbox.style.display="none";

});


/* ===============================
   ENVELOPE
================================ */

const envelopes=document.querySelectorAll(".envelope");

envelopes.forEach(item=>{

item.addEventListener("click",()=>{

const letter=item.querySelector(".letter");

if(letter.style.transform=="translateY(-120px)"){

letter.style.transform="translateY(0px)";

}else{

letter.style.transform="translateY(-120px)";

}

});

});


/* ===============================
   LOVE BOXES
================================ */

document.querySelectorAll(".love-box").forEach(box=>{

box.addEventListener("click",()=>{

box.innerHTML="❤️";

box.style.background="#d94c67";

box.style.color="white";

});

});


/* ===============================
   PLAYLIST
================================ */

const songs={

"Until I Found You":"https://open.spotify.com/search/until%20i%20found%20you",

"Khat":"https://open.spotify.com/search/khat",

"Vachindama":"https://open.spotify.com/search/vachindama",

"Bairan":"https://open.spotify.com/search/bairan"

};

document.querySelectorAll(".playlist a").forEach(link=>{

link.addEventListener("click",(e)=>{

e.preventDefault();

window.open(

songs[link.innerText],

"_blank"

);

});

});


/* ===============================
   PARALLAX
================================ */

window.addEventListener("mousemove",(e)=>{

const x=e.clientX/window.innerWidth;

const y=e.clientY/window.innerHeight;

document.querySelectorAll(".page").forEach(page=>{

page.style.backgroundPosition=

x*30+"px "+y*30+"px";

});

});


/* ===============================
   TYPING EFFECT
================================ */

const title=document.querySelector(".paper h1");

if(title){

const text=title.innerText;

title.innerHTML="";

let i=0;

function typing(){

if(i<text.length){

title.innerHTML+=text.charAt(i);

i++;

setTimeout(typing,70);

}

}

typing();

}


/* ===============================
   RANDOM STICKERS
================================ */

const emojis=["🌸","🤍","🧸","✨","💌","🌼"];

setInterval(()=>{

const e=document.createElement("div");

e.innerHTML=emojis[Math.floor(Math.random()*emojis.length)];

e.style.position="fixed";

e.style.left=Math.random()*100+"vw";

e.style.top="-40px";

e.style.fontSize="30px";

e.style.opacity=".5";

e.style.pointerEvents="none";

e.style.transition="8s linear";

document.body.appendChild(e);

setTimeout(()=>{

e.style.top="105vh";

},50);

setTimeout(()=>{

e.remove();

},8000);

},2500);


/* ===============================
   FINAL MESSAGE
================================ */

window.addEventListener("scroll",()=>{

const final=document.querySelector(".final");

if(!final) return;

const rect=final.getBoundingClientRect();

if(rect.top<250){

document.body.style.background="#f3ede5";

}

});


/* ===============================
   CONFETTI HEART
================================ */

function burstHearts(){

for(let i=0;i<25;i++){

const h=document.createElement("div");

h.innerHTML="❤️";

h.style.position="fixed";

h.style.left="50%";

h.style.top="50%";

h.style.fontSize=(18+Math.random()*25)+"px";

h.style.pointerEvents="none";

h.style.transition="1.5s";

document.body.appendChild(h);

setTimeout(()=>{

h.style.transform=

`translate(${(Math.random()-.5)*700}px,${(Math.random()-.5)*700}px)`;

h.style.opacity="0";

},20);

setTimeout(()=>{

h.remove();

},1700);

}

}

document.querySelectorAll(".love-box").forEach(box=>{

box.addEventListener("click",burstHearts);

});


/* ===============================
   END
================================ */
