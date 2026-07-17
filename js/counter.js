/* =====================================
        NUMBER COUNTER SCRIPT
===================================== */



const counters =
document.querySelectorAll(".counter");



let started = false;





function startCounter() {


    if (started) return;



    counters.forEach((counter) => {



        const target =
        Number(
            counter.getAttribute("data-target")
        );



        let count = 0;



        const updateCounter = () => {



            const increment =
            target / 100;



            if (count < target) {



                count += increment;



                counter.innerText =
                Math.ceil(count);



                setTimeout(
                    updateCounter,
                    20
                );


            }

            else {


                counter.innerText =
                target;


            }



        };



        updateCounter();



    });



    started = true;


}







// Start counter when visible


window.addEventListener("scroll", () => {



    const statsSection =
    document.querySelector(".stats");



    if (statsSection) {



        const position =
        statsSection.getBoundingClientRect().top;



        if (
            position <
            window.innerHeight - 100
        ) {


            startCounter();


        }



    }



});