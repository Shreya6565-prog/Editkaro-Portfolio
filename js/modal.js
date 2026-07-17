/* =====================================
        VIDEO MODAL SCRIPT
===================================== */



const modal =
document.getElementById("videoModal");



const closeModal =
document.querySelector(".close-modal");



const videoFrame =
document.querySelector(".modal-content iframe");



const videoButtons =
document.querySelectorAll(".view-video");





// =====================================
// OPEN VIDEO MODAL
// =====================================


videoButtons.forEach((button) => {


    button.addEventListener("click", () => {



        const videoURL =
        button.getAttribute("data-video");



        if (videoFrame) {


            videoFrame.src =
            videoURL;


        }



        if (modal) {


            modal.style.display =
            "flex";


        }



    });


});







// =====================================
// CLOSE MODAL
// =====================================


if (closeModal) {


    closeModal.addEventListener("click", () => {



        modal.style.display =
        "none";



        if (videoFrame) {


            videoFrame.src =
            "";


        }



    });


}







// =====================================
// CLOSE WHEN CLICK OUTSIDE
// =====================================


window.addEventListener("click", (event) => {



    if (event.target === modal) {



        modal.style.display =
        "none";



        if (videoFrame) {


            videoFrame.src =
            "";


        }



    }



});