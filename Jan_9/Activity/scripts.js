const textOutPut = document.getElementById('display');

// Create an array out of all the buttons; this will be the reference once the button event is executed
const buttons = Array.from(document.getElementsByClassName('button'));

const add = document.querySelector('#add');    

buttons.map( button => {

    button.addEventListener(
        'click',
        (e) => {

            switch(e.target.innerText) {
                case 'C':
                    display.innerText = '';
                    break;

                case 'Del':
                    display.innerText = display.innerText.slice(0, -1);
                    break;    

                case '%':
                    display.innerText = display.innerText / 100;
                    break;
                
                case '=':
                    const add = 
                    if (e.target.innerText = '=') {

                        display.innerText = e.target.innerText;
                    }
                        

                    



                    break;


                default:
                    display.innerText += e.target.innerText;

            }
        }
    );

});


