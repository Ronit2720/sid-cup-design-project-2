var crsr = document.querySelector("#cursor")
var blur = document.querySelector("#cursor-blur")


document.addEventListener("mousemove",function(dets){
    crsr.style.left=dets.x-8 +"px"
    crsr.style.top=dets.y-8 +"px"
    blur.style.left=dets.x-150 +"px"
    blur.style.top=dets.y- 150 +"px"
})

var h4all=document.querySelectorAll("#nav h4")
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale=4
        crsr.style.transition="all ease 0.3s"
        crsr.style.border="0.5px solid #fff"
        crsr.style.backgroundColor="transparent"
    })
    elem.addEventListener("mouseleave",function(){
        crsr.style.scale=1
        crsr.style.border="0px solid #95c11e"
        crsr.style.backgroundColor="#95c11e"
    })
})

gsap.to("#nav",{
    backgroundColor : '#000',
    height:"100px",
    duration:0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        start:"top -10%",
        end:"top -11%",
        scrub:0.8
    }
})

gsap.to("#main",{
    backgroundColor : '#000',
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start:"top -50%",
        end:"top -60%",
        scrub:0.8
    }
})

gsap.from("#about-us img,#about",{
    y:80,
    opacity:0,
    duration:1,
    stagger:0.4,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        start:"top 60%",
        end:"top 58%",
        scrub:3
    }
})

// gsap.from(".card",{
//     scale:0.3,
//     opacity:0,
//     duration:1,

//     scrollTrigger:{
//         trigger:"#about-us",
//         scroller:"body",
//         start:"top 80%",
//         end:"top 78%",
//         scrub:3
//     }
// })

gsap.from("#colon1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 100%",
        end:"top 45%",
        scrub:4
    }
})

gsap.from("#colon2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#colon2",
        scroller:"body",
        start:"top 100%",
        end:"top 45%",
        scrub:4
    }
})

gsap.from("#page4 h1",{
    y:50,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        start:"top 75%",
        end:"top 70%",
        scrub:2
    }
})