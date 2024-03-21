var btnSignup = document.getElementById('signup');
var formInput = document.getElementById('form-input');
var btnSubmit = document.getElementById('data-sub');
var dataEntered = document.querySelector('.data-entered');
var username = document.getElementById('name');
var email = document.getElementById('email');
var pass = document.getElementById('password');
var display = document.getElementById('display_info');
var complete = document.getElementById('completed');
var isValid = true;

btnSignup.addEventListener('click', function (event) {
    formInput.style.display = 'block';
    btnSignup.style.display = 'none';
});

btnSubmit.addEventListener('click', function (event) {
    if (username.value == '') {
        username.classList.add('error');
        isValid = false;
    } else {
        username.classList.remove('error');
        isValid = true;
    }
    if (email.value == '') {
        email.classList.add('error');
        isValid = false;
    } else {
        email.classList.remove('error');
        isValid = true;
    }
    if (pass.value == '') {
        pass.classList.add('error');
        isValid = false;
    } else {
        pass.classList.remove('error');
        isValid = true; 
    }
    if(isValid == true){
        formInput.style.display = 'none';
        display.style.display = 'block';
        display.style.whiteSpace = "pre-line";
        display.innerHTML = `Username: ${username.value}\n\nEmail: ${email.value}\n\nPassword: ${pass.value} \n\nSuccessfully registered`;
        complete.style.display = 'block';
        complete.addEventListener('click', function(event) {
            display.style.display = 'none';
            btnSignup.style.display = 'block';
            complete.style.display = 'none';
            username.value = "";
            email.value = "";
            pass.value = "";
        });
    }
});

