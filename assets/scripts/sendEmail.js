function sendMail(contactForm) {
    emailjs.send("gmail", "contact_form", {
      "from_name": contactForm.name.value,
      "from_email": contactForm.emailaddress.value,
      "contact_message": contactForm.contactmessage.value
    })
    .then(
        function(response) {
            console.log("success", response);
            document.querySelector("#contact-header").innerHTML = "Your form has been sent!"
            document.querySelector("#contact-sub").innerHTML = "May the gods hear your call!"
            
        },
        function(error) {
            console.log("failed", error);
            document.querySelector("#contact-header").innerHTML = "There was a problem with your form submission."
            document.querySelector("#contact-sub").innerHTML = "Please try again later."
        }
    );
        return false;
}

