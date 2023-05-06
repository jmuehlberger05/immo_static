import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger);


// Parallax Effect


gsap.utils.toArray(".parallax").forEach(function (container) {
let image = container.querySelector("img");

let tl = gsap.timeline({
    scrollTrigger: {
    trigger: container,
    scrub: true,
    pin: false,
    },
});
tl.from(image, {
    yPercent: -20,
    ease: "none",
}).to(image, {
    yPercent: 20,
    ease: "none",
});
});