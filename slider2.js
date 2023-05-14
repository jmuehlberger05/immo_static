/* Slider Logic for the fancy Slider */
// @Author: Jakob Mühlberger

// Get the slider container and the buttons
var container = document.querySelector(".slider2");
var prev = document.querySelector(".prev2");
var next = document.querySelector(".next2");
const slides = container.querySelectorAll(".slide");

// Execute the moveCursor function on mousemove event on the window and the buttons
window.onmousemove = (event) => moveCursor(event);
prev.onmousemove = (event) => moveCursor(event);
next.onmousemove = (event) => moveCursor(event);

// Check the cursor position and move the buttons
const moveCursor = (event) => {
    let windowWidth = window.innerWidth;

    var x = event.clientX;
    var y = event.clientY;

    // Check which button should be active
    if (windowWidth / 2 < x) {
        next.style.top = `${y}px`;
        next.style.left = `${x}px`;
        next.classList.add("active");
        prev.classList.remove("active");
    } else {
        prev.style.top = `${y}px`;
        prev.style.left = `${x}px`;
        prev.classList.add("active");
        next.classList.remove("active");
    }

    // Get the slider position and height

    let windowScrollTop = window.pageYOffset;
    let sliderOffset = container.offsetTop;
    let sliderHeight = container.offsetHeight;

    let relativeTop = sliderOffset - windowScrollTop;

    let relativeBottom = relativeTop + sliderHeight;


    // Check if cursor is in slider
    if (y > relativeTop && y < relativeBottom) {
        // checkIfOverButton(x, y, windowScrollTop)
    } else {
        prev.style.top = 0;
        next.style.top = 0;
        prev.classList.remove("active");
        next.classList.remove("active");
    }

};


let index = 0;
if(window.innerWidth > 40 * 16){
    index = 1;
}

const breakWidth = 100 * 16;
const mobileBreakWidth = 40 * 16;
const tabletBreakWidth = 60 * 16;

let offset = breakWidth * 0.1;
let sideMargin = 0;

let slideOffset = 0;

window.onresize = () => handleResize();

// set margin of first slide
const handleResize = () => {
    if (window.innerWidth > breakWidth) {
        sideMargin = (window.innerWidth - breakWidth) / 2;
    } else {
        sideMargin = 16;
        offset = (window.innerWidth - 32) * 0.1;
    }

    if (window.innerWidth > mobileBreakWidth) {
        slides[0].style.marginLeft = `${offset + sideMargin}px`;
    }

    // Make all slides active on mobile and disable buttons
    if (window.innerWidth <= tabletBreakWidth) {
        slides.forEach((slide) => {
        slide.classList.add("active-slide");
        // console.log("active-slide");
        });
        next.style.display = "none";
        prev.style.display = "none";
    } else {
        slides.forEach((slide) => slide.classList.remove("active-slide"));
        slides[index].classList.add("active-slide");
        next.style.display = "block";
        prev.style.display = "block";
    }

    updateSlider();
};

handleResize();

prev.addEventListener("click", () => decreaseIndex1());
next.addEventListener("click", () => increaseIndex1());

// onclick function of buttons
function increaseIndex1() {
    if (index < slides.length - 1) {
        index++;
        updateSlider();
    }
}

function decreaseIndex1() {
    if (index > 0) {
        index--;
        updateSlider();
    }
}

// update slider
function updateSlider() {
    slides.forEach((slide) => slide.classList.remove("active-slide"));
    slides[index].classList.add("active-slide");
    console.log("Index1: " + index);

    slideOffset = index * (640 + 32);

    slides.forEach(
        (slide) => (slide.style.transform = `translateX(${-slideOffset}px)`)
    );
    // console.log(offset + sideMargin - slideOffset);
}

// const checkIfOverButton = (x, y, windowScrollTop) => {


//     let activeButton = slides[index].querySelector(".btn");
    
//     if (activeButton){
//         // console.log("activeButton");

//         var absoluteTop = cumulativeOffset(activeButton).top;
//         let buttonOffset = absoluteTop - windowScrollTop;

//         // let buttonOffset = umulativeOffset(activeButton).;
//         console.log(buttonOffset);
//         let buttonLeft = cumulativeOffset(activeButton).left;
//         console.log(buttonLeft);

//         // let buttonOffset = activeButton.offsetTop;
//         let buttonHeight = activeButton.offsetHeight;
//         // let buttonLeft = activeButton.;
//         let buttonWidth = activeButton.offsetWidth;

//         let relativeTop = buttonOffset - windowScrollTop;

//         let relativeBottom = relativeTop + buttonHeight;

//         let relativeLeft = buttonLeft;
//         let relativeRight = relativeLeft + buttonWidth;

//         if ((y > relativeTop) && y < relativeBottom && x > relativeLeft && x < relativeRight) {
//             console.log("overButton");
//             // prev.style.top = 0;
//             // next.style.top = 0;
//             // prev.classList.remove("active");
//             // next.classList.remove("active");
//         }

//     }
// }

// var cumulativeOffset = function(element) {
//     var top = 0, left = 0;
//     do {
//         top += element.offsetTop  || 0;
//         left += element.offsetLeft || 0;
//         element = element.offsetParent;
//     } while(element);

//     return {
//         top: top,
//         left: left
//     };
// };