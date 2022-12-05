//validation form 

//email.addEventlistener('textInput',email_Verify);
//password.addEventlistener('textInput',pass_Verify);
function validate(){
    let email = document.forms["form"]["email"].value;
    let password = document.forms["form"]["password"].value;

    //let email_error = document.getElementById('email_error');
    //let pass_error = document.getElementById('pass_error');
    if (email == ""){
        alert("Enter your Email Address")
        return false;
    }
    else if (password == ""){
        alert("Enter your password")
        return false;
    }
}
   

    function email_Verify(){
        if (email.value.length >=8){
            email.style.border ="1px solid silver";
            email_error.style.display = "none";
            return true;
        }
    }

   function pass_Verify(){
        if (password.value.length >=5){
            password.style.border ="1px solid silver";
            pass_error.style.display = "none";
            return true;
        }



   }