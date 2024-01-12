//top offer section
const offerSection=document.getElementById("offersection")
const offerXmark=document.getElementById("offer-delete")

offerXmark.addEventListener("click",function(){
    offerSection.style.display="none"
})
// side nav section
const hamburger=document.getElementById("hamburger")
const sidebar=document.getElementById("sidenav")

// click event
hamburger.addEventListener("click",()=>{
    sidenav.style.right="0"
})
// remove event
const erase=document.querySelector("#fa-xmark")
erase.addEventListener("click",()=>{
    sidenav.style.right="-40rem"
})
// like button section
const blk=document.querySelectorAll(".blackheart img")

for(let i=0;i<blk.length;i++){
    let blackheart = blk[i];
//add event listener for each heart
    blackheart.addEventListener("click", function(){ 
       if(blackheart.src=="http://127.0.0.1:5500/img/icons/blackheart.png"){
        this.src="http://127.0.0.1:5500/img/icons/redheart.png"
       }else{
        this.src="http://127.0.0.1:5500/img/icons/blackheart.png"
       }
    });
}

// sliding images

const container=document.querySelector(".imgcontainer")
const left=document.querySelector(".fa-angle-left")
const right=document.querySelector(".fa-angle-right")

let imgname=["slider-one","slider-two","slider-three"]
let index=0

right.addEventListener("click",()=>{
    index++
    if(index==imgname.length){
        index=0
    }
    container.style.background=`url('./img/others/${imgname[index]}.jpg')center/cover`
})
left.addEventListener("click",()=>{
    index--
    if(index<0) {
        index=imgname.length-1
    }
    container.style.background=`url('./img/others/${imgname[index]}.jpg')center/cover`
})

// scrol animation

const initialScroll=document.querySelectorAll(".animate-scroll")

window.addEventListener("scroll",function(){
    initialScroll.forEach(scroll=>{
        windowheight=window.innerHeight
        var elbound=scroll.getBoundingClientRect()
         if(windowheight>elbound.top-100){
            console.log(scroll.classList.remove("reveal-scroll"))
         }
    })
})