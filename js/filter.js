/* =====================================
        PORTFOLIO FILTER SCRIPT
===================================== */



const filterButtons =
document.querySelectorAll(".filter-btn");



const portfolioItems =
document.querySelectorAll(".category-card");





filterButtons.forEach((button) => {


    button.addEventListener("click", () => {



        // Remove active class

        filterButtons.forEach((btn) => {


            btn.classList.remove("active");


        });




        // Add active class

        button.classList.add("active");



        const filterValue =
        button.getAttribute("data-filter");





        portfolioItems.forEach((item) => {



            const category =
            item.getAttribute("data-category");



            if (
                filterValue === "all" ||
                category === filterValue
            ) {



                item.style.display =
                "block";



            }

            else {



                item.style.display =
                "none";



            }



        });



    });



});