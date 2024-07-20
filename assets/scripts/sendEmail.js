function sendMail (contactForm) {
    emailjs.send("gmail", "bruna_onlineresume", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value,
    })
    .then(
        function(response) {
            console.log("SUCCESS!", response.status, response);
        },
        function(error) {
            console.error("FAILED...", error);
        },
    )
    return false;
}