const loginForm=document.getElementById('login');

loginForm.addEventListener(
    "submit",
    (e) => {

        e.preventDefault();  
        const username = document.querySelector('#username');
        const password = document.querySelector('#password');

        console.log(`username is: ${username.value}  Password is: ${password.value}`);
    }
);


