import { gsap } from "gsap";

// Reveal H1

const tl = gsap.timeline();

let skew = 8;
let delay = 0.5;
let duration = 1;

if (window.innerWidth < 640) {
    skew = 30;
    delay = 0.8;
    duration = 1.5;
}

tl.from(".line span", 1, {
    y: 200,
    ease: "power-ease-4",
    delay: 0,
    skewY: skew,
    stagger: {
        amount: 0.3,
    },
});

tl.from(
    ".hero-section__content",
    duration,
    {
        ease: "power-ease-4",
        delay: delay,
        opacity: 0,
        stagger: {
        amount: 0.3,
        },
    },
    "-=1"
);