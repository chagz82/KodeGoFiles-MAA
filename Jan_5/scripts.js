const btnToggle=document.querySelector('#toggle');
const content=document.querySelector('#content');

btnToggle.addEventListener(
    "click"
    () => {
        /*
            1. Check the display property of content div
            2. if display is none, show the div
            3. Else, hide the div

            element.style.cssProperty
        */

        // content.style.display

        if(content.style.display==="none") {
           
            content.style.display = "block";
        } else {
            
            content.style.display = "none";
        }

    }

);