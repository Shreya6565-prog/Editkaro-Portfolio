/* =====================================
        NAVBAR SCRIPT
===================================== */



const menuBtn =
document.querySelector(".menu-btn");



const navLinks =
document.querySelector(".nav-links");





// =====================================
// MOBILE MENU TOGGLE
// =====================================


if (menuBtn && navLinks) {


    menuBtn.addEventListener("click", () => {


        navLinks.classList.toggle("active");


        menuBtn.classList.toggle("open");


    });


}







// =====================================
// CLOSE MENU AFTER CLICK
// =====================================


const navItems =
document.querySelectorAll(".nav-links a");



navItems.forEach((item) => {


    item.addEventListener("click", () => {


        if (navLinks) {


            navLinks.classList.remove("active");


        }


        if (menuBtn) {


            menuBtn.classList.remove("open");


        }


    });


});







// =====================================
// NAVBAR BACKGROUND ON SCROLL
// =====================================


const header =
document.getElementById("header");



window.addEventListener("scroll", () => {


    if (header) {


        if (window.scrollY > 50) {


            header.style.background =
            "rgba(15,23,42,0.95)";


            header.style.backdropFilter =
            "blur(10px)";


        }


        else {


            header.style.background =
            "transparent";


        }


    }


});