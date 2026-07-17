/* =====================================
        EDITKARO MAIN SCRIPT
===================================== */



// =====================================
// PAGE LOADER
// =====================================


window.addEventListener("load", () => {


    const loader = document.getElementById("loader");


    if (loader) {


        setTimeout(() => {


            loader.style.display = "none";


        }, 1000);


    }


});







// =====================================
// SCROLL PROGRESS BAR
// =====================================


window.addEventListener("scroll", () => {


    const progressBar =
    document.getElementById("progress-bar");



    if (progressBar) {


        let scrollTop =
        document.documentElement.scrollTop;



        let height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;



        let progress =
        (scrollTop / height) * 100;



        progressBar.style.width =
        progress + "%";


    }


});







// =====================================
// BACK TO TOP BUTTON
// =====================================


const backToTop =
document.getElementById("backToTop");



window.addEventListener("scroll", () => {


    if (backToTop) {


        if (window.scrollY > 400) {


            backToTop.style.display =
            "flex";


        }

        else {


            backToTop.style.display =
            "none";


        }


    }


});





if (backToTop) {


    backToTop.addEventListener("click", () => {


        window.scrollTo({


            top: 0,


            behavior: "smooth"


        });


    });


}







// =====================================
// SCROLL REVEAL ANIMATION
// =====================================


const revealElements =
document.querySelectorAll(".reveal");



function revealOnScroll() {


    revealElements.forEach((element) => {


        let windowHeight =
        window.innerHeight;


        let elementTop =
        element.getBoundingClientRect().top;



        if (elementTop < windowHeight - 100) {


            element.classList.add("active");


        }


    });


}



window.addEventListener(
    "scroll",
    revealOnScroll
);


revealOnScroll();