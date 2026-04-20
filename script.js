let para = document.querySelector(".main p");
let text =para.innerText;
let surprise = document.querySelector(".main h2");
let surp =surprise.innerText;
surprise.style.display = "none";
const charac = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
let interation = 0;

para.addEventListener('click',()=>{
function randomText(){
    str = surp.split("").map((char, index)=>{
        if(index < interation){
            return char;
        }
        return charac[Math.floor(Math.random()*charac.length)]
    }).join('')
    para.innerText = str;
    interation += 0.2;
}
setInterval(randomText,30)

});