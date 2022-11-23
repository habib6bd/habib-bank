document.getElementById('submitButton').addEventListener('click', function () {
    const userEmailField = document.getElementById('userEmail');
    userEmail = userEmailField.value;
    // console.log(userEmail);

    const userPassField = document.getElementById('userPassword')
    userPassword = userPassField.value;

    if (userEmail == 'habib@gmail.com' && userPassword == '12345') {
        window.location.href = "banking.html";
    }
})