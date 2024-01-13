const pianoKeys=document.querySelectorAll(".piano-keys .key");
const volumeSlider=document.querySelector(".volume input");
const keyCheck=document.querySelector(".key-check input");


let audio=new Audio("scr/sounds/a.wav");
let mapedKeys=[];

const playSound=(sound)=>{
    audio.src= `scr/sounds/${sound}.wav`;
    audio.play();
    
    const clickedKey= document.querySelector(`[data-key=${sound}]`)
     clickedKey.classList.add("active")
     setTimeout(()=>{
         clickedKey.classList.remove("active")
     },150)
}


pianoKeys.forEach((key) => {
    key.addEventListener("click", ()=> playSound(key.dataset.key));
    mapedKeys.push(key.dataset.key);
});
document.addEventListener("keydown",(e)=>{
   if(mapedKeys.includes(e.key)){
    playSound(e.key);
   }
   
});
keyCheck.addEventListener("click",()=>{
    pianoKeys.forEach(e=>
       e.classList.toggle("hide"))
});
 
volumeSlider.addEventListener("input",(e)=>{
    audio.volume= e.target.value});
