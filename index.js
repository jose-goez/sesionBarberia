// import { gsap } from "gsap";
gsap.to('#caja1', {
    duration: 3,
    x: 200,
    delay: 1,
  });
// gsap.registerPlugin(ScrollTrigger);

// let sections = gsap.utils.toArray(".panel");

// gsap.to(sections,{
//     xPercent: -100 * (sections.length -1),
//     ease: "none",
//     ScrollTrigger:{
//         trigger: "#container",
//         pin:true,
//         scrub: 1,
//         snap: 1 / (sections.length -1),

//         end: () => "+=" + document.querySelector("#container").offsetWidth

//     }
// });

$(function() {

    var $body = $(document);
    $body.bind('scroll', function() {
        // "Desactivar" el scroll horizontal
        if ($body.scrollLeft() !== 0) {
            $body.scrollLeft(0);
        }
    });

}); 
