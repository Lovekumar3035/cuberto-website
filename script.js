Shery.mouseFollower();
Shery.makeMagnet(".magnet, nav img");
Shery.hoverWithMediaCircle(".heading", { videos: ["pinterst\video3.mp4"] });

gsap.to(".elem", {
    scrollTrigger: {
        trigger: ".page5",
        pin: true,
        start: "top top",
        end: "bottom bottom",
        endTrigger: ".last",
        scrub: 1
    },
    y: "-300%",
    ease: Power1
})

let sections = document.querySelectorAll(".elem");
Shery.imageEffect(".videos", {
    style: 5,
    slideStyle: (setScroll) => {
        sections.forEach(function (section, index) {
            ScrollTrigger.create({
                trigger: section,
                start: "top top",
                scrub: 1,
                onUpdate: function (prog) {
                    setScroll(prog.progress + index)
                }
            })
        })
    },
});

// let tl = gsap.timeline();

// tl.from(".page1 nav", {
//     y: -200,
//     opacity: 0,
//     stagger: 0.1
// })