document.getElementById('Submit-button').addEventListener('click', function () {
    //catch the mail value
    const userMail = document.getElementById('mail-id').value;

    //catch the password value
    const userPassword = document.getElementById('password-id').value;

    if (userMail == 'shaheen@gmail.com' && userPassword == '12345') {
        console.log("successfully Login!!")
        window.location.href = "banking.html";
    }


});