/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navBar").style.top = "0";
    
  } else {
    document.getElementById("navBar").style.top = "-75px";
  }
  prevScrollpos = currentScrollPos;
}

window.onload = function() {
  document.getElementById('contactForm').addEventListener('submit', function(event) {
      event.preventDefault();
      form = document.getElementById('contactForm')
      // generate a five digit number for the contact_number variable
      // contact_number.value = Math.random() * 100000 | 0;
      // these IDs from the previous steps
      emailjs.sendForm('default_service', 'contact_form', form,'user_knfi5j6m7vkvvq6hJgVWV')
          .then(function(res) {
              console.log('SUCCESS!', res.status);
          }, function(error) {
              console.log('FAILED...', error);
          });
      form.reset();
  });
}
