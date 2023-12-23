
let herotext = gsap.timeline({
    scrollTrigger:{
        scroller:".main",
        trigger:".hero-text1",
        start:"top center",
        end:"bottom",
        scrub:3,
        // markers:true,
    }
})

herotext.to(".hero-text1",{
    x:-100,
},"anim")
herotext.to(".hero-text2",{
    x:100,
},"anim")
herotext.to("#hero-video",{
    width:"95%",
},"anim")
herotext.to(".section-1-description",{
    opacity: 0,
    y:100,
},"anim")
