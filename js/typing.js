/* =====================================
        TYPING EFFECT SCRIPT
===================================== */



const typingElement =
document.querySelector(".typing-text");



const words = [

    "Video Editing",

    "Motion Graphics",

    "Social Media Content",

    "Brand Films"

];



let wordIndex = 0;

let charIndex = 0;

let deleting = false;





function typeEffect() {



    if (!typingElement) return;



    const currentWord =
    words[wordIndex];





    if (!deleting) {



        typingElement.innerText =
        currentWord.substring(
            0,
            charIndex + 1
        );


        charIndex++;



        if (charIndex === currentWord.length) {


            deleting = true;


            setTimeout(
                typeEffect,
                1500
            );


            return;


        }



    }

    else {



        typingElement.innerText =
        currentWord.substring(
            0,
            charIndex - 1
        );


        charIndex--;



        if (charIndex === 0) {


            deleting = false;


            wordIndex++;



            if (wordIndex === words.length) {


                wordIndex = 0;


            }


        }



    }



    setTimeout(
        typeEffect,
        deleting ? 50 : 100
    );



}



typeEffect();