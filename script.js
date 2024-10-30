const slides = document.querySelectorAll('.slide'); // Select all slides
let counter = 0;

slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`; // Position each slide horizontally
});

const slideImage = () => {
    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${counter * 100}%)`; // Move all slides
    });
};

// Example of how to trigger the sliding
const nextSlide = () => {
    counter++;
    if (counter >= slides.length) {
        counter = 0; // Reset to the first slide if we go past the last one
    }
    slideImage();
};

const prevSlide = () => {
    counter--;
    if (counter < 0) {
        counter = slides.length - 1; // Go to the last slide if we go before the first
    }
    slideImage();
};

// Call the nextSlide or prevSlide function when necessary
setInterval(nextSlide, 2000);

var type= new Typed(".auto-typed",{
    strings : ["WELCOME TO DASHMESH IMMIGRATION SERVICES"],
    typeSpeed: 100,
    // backSpeed:100,
    
    
    loop: true,
    
    
   

})
var type2= new Typed(".auto-typed2",{
    strings: ["LEAD WITH ULTIMATE DEED"],
    typeSpeed: 100,
    backSpeed: 100,
    
    
})

function toggleMenu() {
    const navMenu = document.getElementById("nav-menu");
    const navbar= document.getElementById('navbar-h')
    navMenu.classList.toggle("active");
    navbar.classList.toggle("nav-h")
}

// let title= document.querySelector('.auto-typed');
// let name= "WELCOME TO DASHMESH IMMIGRATION SERVICES";
// let index;

// const trypewriter = ()=>{
//   let new_title= name.slice(0,1)
// }
// trypewriter();