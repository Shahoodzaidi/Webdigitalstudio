var item=document.getElementById("items");
var hum=document.getElementById("icon");
var list = document.querySelectorAll("li");
var cursor = document.querySelector(".cursor");
var page = document.querySelector(".page");
var nav = document.querySelector("nav");
var page2 = document.querySelector(".page2")
var page3 = document.querySelector(".page3")
var load = document.querySelector(".loader")
var tl=gsap.timeline();

function show (){
    item.classList.toggle("active");
    hum.classList.toggle("fa-times");
}

function cursorAnimation () {
    page.addEventListener("mousemove",function(dets){
        gsap.to(".cursor",{
          x:dets.x,
          y:dets.y,
        })
      })
      nav.addEventListener("mouseenter",function(){
          gsap.to(".cursor",{
              scale:0,
              opacity:0,
          })
      })
      nav.addEventListener("mouseleave",function(){
          gsap.to(".cursor",{
              scale:1,
              opacity:1,
          })
      })
      page2.addEventListener("mouseenter",function(){
        gsap.to(".cursor",{
            scale:0,
            opacity:0,
        })
      })
      page2.addEventListener("mouseleave",function(){
        gsap.to(".cursor",{
            scale:1,
            opacity:1,
        })
      })
      page3.addEventListener("mouseenter",function(){
        gsap.to(".cursor",{
            scale:0,
            opacity:0,
        })
      })
      page3.addEventListener("mouseleave",function(){
        gsap.to(".cursor",{
            scale:1,
            opacity:1,
        })
      })
}
cursorAnimation ();

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
     loop:true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
  
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

function animate (){
  tl.from(".load1 h1",{
    y:-900,
    duration:1,
    opacity:0,
  })

setTimeout(() => {
  tl.to(".load1 h1",{
    x:-1600,
    duration:1,
    opacity:0,
  })

}, 2000);
setTimeout(() => {
  tl.to(".load1 h2",{
    x:-700,
    duration:1,
    
  })
}, 3000);
setTimeout(() => {
  tl.to(".load1 h2",{
    x:-1800,
    duration:1,
    opacity:0,
 
  })
}, 5000);

setTimeout(() => {
   tl.to(".loader",{
  y:-1200,
  duration:1.6,

})
}, 6000);



}
animate ()