 const signupBtn = document.getElementById("signupBtn");
        const message = document.getElementById("message");

        signupBtn.addEventListener("click", () => {
            message.textContent = "Thank you for subscribing!";
        });
