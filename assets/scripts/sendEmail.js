function sendMail(contactForm) {
    emailjs.send("gmail", "contact_form", {
      "from_name": contactForm.name.value,
      "from_email": contactForm.emailaddress.value,
      "contact_message": contactForm.contactmessage.value
    })
    .then(
        function(response) {
            console.log("success", response);
        },
        function(error) {
            console.log("failed", error);
        }
    );
        return false;
}

