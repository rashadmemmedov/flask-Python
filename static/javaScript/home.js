let upLogoHeader=document.querySelector('.up-logo-header')
let li0=document.querySelectorAll('.li')[0]
console.log(li0)
k=70;
let headInterval=setInterval(Go,200)
function Go(){
    for(i=0;i<100;i++){
    if(k<=70){
    k=k+88
    upLogoHeader.style.left=k+'px';} 
}
}
li0.addEventListener('click',Go)
let upLogoHeader2=document.querySelector('.up-logo-header2')
z=70;
let headInterval2=setInterval(Go2,4000)
function Go2(){
    for(i=0;i<100;i++){
    if(z<=70){
    z=z+88
    upLogoHeader2.style.left=z+'px';
} 
else{
    z=z-88
}
}
}
let upLogoHeader3=document.querySelector('.up-logo-header3')
f=70;
let headInterval3=setInterval(Go3,8000)
function Go3(){
    for(i=0;i<100;i++){
    if(f<=70){
    f=f+88
    upLogoHeader3.style.left=f+'px';
} 
else{
    f=f-88
}
}
}
let upLogoHeader4=document.querySelector('.up-logo-header4')
d=70;
let headInterval4=setInterval(Go4,12000)
function Go4(){
    for(i=0;i<100;i++){
    if(d<=70){
    d=d+88
    upLogoHeader4.style.left=d+'px';
} 
else{
    d=d-88
}
}
}

let letter=document.querySelector('.letter')
letter.style.display='none'
setInterval(Appear,300)
function Appear(){
    letter.style.display='block';
}
let letter2=document.querySelector('.letter2')
letter2.style.display='none'
setInterval(Appear2,4300)
function Appear2(){
    letter2.style.display='block';
}
let letter3=document.querySelector('.letter3')
letter3.style.display='none'
setInterval(Appear3,8300)
function Appear3(){
    letter3.style.display='block';
}
let letter4=document.querySelector('.letter4')
letter4.style.display='none'
setInterval(Appear4,12300)
function Appear4(){
    letter4.style.display='block';
}

// li0.addEventListener('click',function(){
//     upHand.style.top=560+'px'
// })
let serviceUl=document.querySelectorAll('ul')[1]
console.log(serviceUl)
let li2=document.querySelectorAll('.li')[2]
console.log(li2)
li2.addEventListener('mouseover',function(){
    serviceUl.style.display="block"
})
li2.addEventListener('mouseout',function(){
    serviceUl.style.display="none"})
    let largeblockStickyH=document.querySelector('.largeblock-header')
    let largeblockStickyColor=document.querySelectorAll('.largeblock-header ul li a')
    let largeblockStickySearch=document.querySelector('.search-icon-header')
    let largeblockStickyBag=document.querySelector('.bag-icon-header')
    let logoSticky=document.querySelectorAll("img")[0]
    let HeaderMenu=document.querySelector(".rightblock-header")
    let largeblockStickySingle=document.querySelectorAll('.largeblock-header ul li a')[3]
    let refreshBtn=document.querySelector('.refresh-button')
    console.log(refreshBtn)
    window.addEventListener('scroll',function(){
        if(window.scrollY>300){
            console.log(window.scroll)
        largeblockStickyH.style.position='fixed'
        refreshBtn.style.display="block"
        refreshBtn.style.position="fixed"
        largeblockStickyH.style.maxHeight=75+'px';
        largeblockStickyH.style.zIndex=10;
        logoSticky.style.maxHeight=75+'px'
        largeblockStickyH.style.background='white'
        largeblockStickySearch.style.color='black'
        largeblockStickyBag.style.color='black'
        largeblockStickySingle.style.color="black"
        logoSticky.setAttribute('src','../static/img/logo/2.logo.png')
        largeblockStickyColor.forEach(element => {
            element.style.color="black"
            
    }) 
    
        }
        else{
            refreshBtn.style.display="none"
            largeblockStickyH.style.position='absolute'
            largeblockStickyH.style.maxHeight=130+'px';
            logoSticky.style.maxHeight=120+'px'
            serviceUl.style.top=59+'px'
            largeblockStickyH.style.background='none'
            HeaderMenu.style.marginTop=17+'px'
            largeblockStickySearch.style.color='white'
            largeblockStickyBag.style.color='white'
            logoSticky.setAttribute('src','../static/img/logo/konstrakt-logo-inv.png')
            largeblockStickyColor.forEach(element => {
                element.style.color="white"})
                largeblockStickySingle.style.color="red"
            }
    })
    m=0
refreshBtn.addEventListener('click',function(){
        window.scrollTo(0, 0)
        m++
        console.log(m)
    })
const back=document.querySelectorAll('.right-buttons button')[0];
const next=document.querySelectorAll('.right-buttons button')[1];
const sliderCountainer=document.querySelector('#slider-countainer');
let radio_btn1=document.querySelector(".manual-btn1")
let radio_btn2=document.querySelector(".manual-btn2")
let radio_btn3=document.querySelector(".manual-btn3")
let radio_btn4=document.querySelector(".manual-btn4")
// const radioBtn=document.querySelector(".manual-navigation");
// console.log(radioBtn)
// radioBtn.forEach(element=>{
// element.addEventListener("mouseover",stopTime)
// })
const max=3
let counter=0;
function sliderRun1() {
    if(counter<max){
        counter++
        sliderCountainer.style.left="-" + 1720 * counter + 'px'
}  
    else{
        counter=0;
        sliderCountainer.style.left="-" + 1720 * counter + 'px'
    }
 }
 function sliderRun2(){
    if(counter>0){
        counter--
        console.log(counter)
        sliderCountainer.style.left="-" + 1720 * counter + 'px'
    }
    else{
        counter=max
        sliderCountainer.style.left="-" + 1720 * counter + 'px'
    }
 }
 let timer =setInterval(sliderRun1,4000)
next.addEventListener('click',sliderRun1)
back.addEventListener('click',stopTime)
next.addEventListener('click',stopTime)
back.addEventListener('click',sliderRun2)
function stopTime(){
    clearInterval(timer)
}
const count_left_btn=document.querySelectorAll('.count-button')[0];
const count_right_btn=document.querySelectorAll('.count-button')[1];
const count_img1=document.querySelector('.count-imgs');
const max_loop=2
inflexive=0
count_right_btn.addEventListener("click",countRun1)
function countRun1(){
    if(inflexive<max_loop){
        inflexive++
        count_img1.style.left="-"+ 100*inflexive + "%";
    }
    else{
       inflexive=0;
       count_img1.style.left="-"+ 100*inflexive + "%";
    }
}
count_left_btn.addEventListener("click",countRun2)
function countRun2(){
    if(inflexive>0){
        inflexive--
        count_img1.style.left="-"+ 100*inflexive + "%";
    }
    else{
       inflexive=max_loop;
       count_img1.style.left="-"+ 100*inflexive + "%";
    }
}
let count_setInterval=setInterval(countRun1,3000)
function Stop_coun_Interval(){
    clearInterval(count_setInterval)
}
count_left_btn.addEventListener("click",Stop_coun_Interval)
count_right_btn.addEventListener("click",Stop_coun_Interval)