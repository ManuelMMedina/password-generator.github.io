document.addEventListener("DOMContentLoaded", () => {
    const passwordField = document.getElementById("password");
    const generateBtn = document.getElementById("generate-btn");
    const copyBtn = document.getElementById("copy-btn");

    generateBtn.addEventListener("click", generatePassword)
    copyBtn.addEventListener("click", copyToClickBoard)

    function generatePassword() {
        const length = 12;
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghigklmnopqrstuvwxyz1234567890'@#$%&/?¿¡!+-*"
        let password = "";
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * chars.length);
            password += chars[randomIndex];
        }

        passwordField.value = password;
        animateButton(generateBtn)
    }

    function copyToClickBoard() {
        if (passwordField.value) {
            passwordField.ariaSelected;
            document.execCommand('copy');

            copyBtn.innerHTML = "<i class='fas fa-check'></i>"

            setTimeout(() => {
                copyBtn.innerHTML = "<i class='fas fa-copy'></i>"
            }, 1500)
        }
    }

    function animateButton(button) {
        button.style.transform = "scale(0.9)";
        setTimeout(() => {
            button.style.transform = "scale(1.02)";
        }, 150)
    }

    generatePassword();

});
