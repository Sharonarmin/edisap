// mentor carousel
$('.mentor-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    nav:false,
    dots:true,
    autoplay:true,
    responsive:{
        0:{
            items:1,
            loop:false,
        },
        600:{
            items:3,
        },
        1000:{
            items:4,
            margin:20,
        }
    }
})

// blog carousel
$('.blog-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    nav:true,
    dots:false,
    navText: ["<i class='fa-solid fa-arrow-left'></i>", "<i class='fa-solid fa-arrow-right'></i>"],
    autoplay:true,
    responsive:{
        0:{
            items:1,
        },
        700:{
            items:2,
        },
        1000:{
            items:3,
        }
    }
})

// aos
AOS.init();


// sticky navbar
const navbar = document.querySelector('.edisap-navbar');
const offset = 30
const hero = document.querySelector('.hero-section')

function scroll(){
    if(window.scrollY  >= offset){
        navbar.classList.add('sticky')
        hero.style.marginTop = '70px'
    }else{
        navbar.classList.remove('sticky')
        hero.style.marginTop = '0px'
    }
}

window.onscroll = function() {
    scroll();
};