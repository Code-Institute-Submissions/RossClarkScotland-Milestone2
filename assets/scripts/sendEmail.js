function sendMail(contactForm) {
    emailjs.send("gmail", "contact_form", {
      "from_name": contactForm.name.value,
      "from_email": contactForm.emailaddress.value,
      "contact_message": contactForm.contactmessage.value
    })
    .then(
        function(response) {
            console.log("success", response);
            $('#submitModal').modal('show');
            document.querySelector("#submitTitle").innerHTML = "Your form has been sent!";
            document.querySelector("#submitReport").innerHTML = "May the gods hear your call.";
            document.querySelector("#contact-header").innerHTML = "Your form has been sent!";
            document.querySelector("#contact-sub").innerHTML = "May the gods hear your call!";
            
        },
        function(error) {
            console.log("failed", error);
            $('#submitModal').modal('show');
            document.querySelector("#submitTitle").innerHTML = "There was a problem with your form submission.";
            document.querySelector("#submitReport").innerHTML = "Please try again later.";
            document.querySelector("#contact-header").innerHTML = "There was a problem with your form submission.";
            document.querySelector("#contact-sub").innerHTML = "Please try again later.";
        }
    );
        return false;
}

let windowBtn = document.querySelector(".windowBtn");
windowBtn.addEventListener("click", function() {
    $('.windowBtn').modal({ show: false});
});

