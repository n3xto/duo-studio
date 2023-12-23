let section2 = gsap.timeline({
    scrollTrigger:{
        trigger:".section-2",
        scroller:".main",
        start: "top center",
        end: "bottom center",
        scrub:3,
        // markers:true,
        // start:"top -117%",
        // end:"top -120",
    }
})

section2.to(".main",{
    backgroundColor:"#fff",
})
