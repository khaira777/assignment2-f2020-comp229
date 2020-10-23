/*-Gurkirat Singh Khaira - #301112565 - 9 Oct 2020 */
// IIFE
(function () {
    function Start() {
        let deleteButtons = document.querySelectorAll('.btn-danger');

        for (button of deleteButtons) {
            button.addEventListener('click', (event) => {
                if (!confirm("Are you sure?")) {
                    event.preventDefault();
                    window.location.assign('/contact-list');
               } 
            });
        }

        if (document.title === "Contact Me") {
            let submitButton = document.getElementById("submit");
            let cancelButton = document.getElementById("reset");
            let name = document.getElementById("name");
            let contact = document.getElementById("number");
            let email = document.getElementById("email");
            let message = document.getElementById("message");

            submitButton.addEventListener('click', (event) => {
                event.preventDefault();
                if (confirm(`The following values will be submitted:
                Name: ${name.value}
                Email: ${email.value}
                Contact: ${contact.value}
                Message: ${message.value}`)) {
                    location.href = "/home";
                }
            });
            cancelButton.addEventListener('click', (event) => {
                event.preventDefault();
                if (confirm("Are you sure you want to reset the details filled?")) {
                    location.href = "/home";
                }
            });
        }
        console.log("App started...");
    }
    window.addEventListener("load", Start);
})();