var crsr = document.querySelector("#cursor")
var blur = document.querySelector("#cursor-blur")
document.addEventListener("mousemove", function (dets) {
  crsr.style.left = dets.x + "px"
  crsr.style.top = dets.y + "px"
  blur.style.left = dets.x - 250 + "px"
  blur.style.top = dets.y - 250 + "px"
})

const icon = document.getElementById("arrow");
const target = document.querySelector(".page-2");

function scrollToAnchor() {
  window.scroll(0, target.getBoundingClientRect().top);
}

icon.addEventListener("click", scrollToAnchor);

gsap.to("#nav", {
  backgroundColor: "#000",
  height: "110px",
  duration: 0.5,
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    start: "top -10%",
    end: "top -11%",
    scrub: 1,
  }
})

gsap.to("main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: "main",
    scroller: "body",
    start: "top -25%",
    end: "top -70%",
    scrub: 2,
  }
})
var h4all = document.querySelectorAll("#nav h4")
h4all.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    crsr.style.scale = 3
    crsr.style.border = "1px solid #fff"
    crsr.style.backgroundColor = "transparent"
  })
  elem.addEventListener("mouseleave", function () {
    crsr.style.scale = 1
    crsr.style.border = "0px solid #95C11E"
    crsr.style.backgroundColor = "#95C11E"
  })
})
var h4all = document.querySelectorAll("footer h3,h4")
h4all.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    crsr.style.scale = 3
    crsr.style.border = "1px solid #fff"
    crsr.style.backgroundColor = "transparent"
  })
  elem.addEventListener("mouseleave", function () {
    crsr.style.scale = 1
    crsr.style.border = "0px solid #95C11E"
    crsr.style.backgroundColor = "#95C11E"
  })
})

gsap.from(".about-us-img,#about-us-in",{
  y:50,
  opacity:0,
  duration:1,
  scrollTrigger:{
    trigger:"#about-us",
    scroller:"body",
    start:"top 60%",
    end:"top 50%",
    scrub:7,
  }
})

gsap.from("#cards-container",{
  scale:0.8,
  opacity:0,
  duration:4,
  scrollTrigger:{
    trigger:"#cards-container",
    scroller:"body",
    start:"top 80%",
    end:"top 40%",
    scrub:5,
  },
})

gsap.from("#col-left",{
  x:-70,
  y:-70,
  scrollTrigger:{
    trigger:".page-3",
    scroller:"body",
    start:"top 60%",
    end:"top 50%",
    scrub:3,
  }
})
gsap.from("#col-right",{
  x:70,
  y:70,
  scrollTrigger:{
    trigger:".page-3",
    scroller:"body",
    start:"top 60%",
    end:"top 50%",
    scrub:3,
  }
})
gsap.from(".page-4 h1",{
  y:40,
  scrollTrigger:{
    trigger:".page-4",
    scroller:"body",
    start:"top 85%",
    end:"top 70%",
    scrub:2,
  }
})
