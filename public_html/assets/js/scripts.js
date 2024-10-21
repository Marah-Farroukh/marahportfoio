$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

$('#nav-toggle').click(function(){
    $(this).toggleClass('is-active')
    $('ul.nav').toggleClass('show');
});

function sendMail(){
    let params = {
        // Collect form data
        from_name : document.getElementById('name').value,
        from_email : document.getElementById('email').value,
        message : document.getElementById('message').value,
    }

    emailjs.send("service_q6uxqva", "template_68ofhqy", params).then(alert("Email Sent"))
}