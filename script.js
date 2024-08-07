document.addEventListener('DOMContentLoaded', function() {
    const registerContainer = document.getElementById('register-container');
    const loginContainer = document.getElementById('login-container');
    const finalContainer = document.getElementById('final-container');
    const nextToLogin = document.getElementById('next-to-login');
    const previousToLogin = document.getElementById('previous-to-login');
    const nextToFinal = document.getElementById('next-to-final');
    const previousToLoginFinal = document.getElementById('previous-to-login-final');

    nextToLogin.addEventListener('click', function() {
        registerContainer.style.display = 'none';
        loginContainer.style.display = 'block';
    });

    previousToLogin.addEventListener('click', function() {
        loginContainer.style.display = 'none';
        registerContainer.style.display = 'block';
    });

    nextToFinal.addEventListener('click', function() {
        loginContainer.style.display = 'none';
        finalContainer.style.display = 'block';
    });

    previousToLoginFinal.addEventListener('click', function() {
        finalContainer.style.display = 'none';
        loginContainer.style.display = 'block';
    });
});
