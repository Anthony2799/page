function sendMain(){
    const btn = document.getElementById("button");

    document.getElementById("form")
     .addEventListener("submit", function(event) {
       event.preventDefault();
    
       btn.value = "Sending...";
    
       const serviceID = "default_service";
       const templateID = "template_btz3qeh";
    
       emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
          btn.value = 'Send Email';
          alert('Sent!');
          window.location.reload(true);
        }, (err) => {
          btn.value = 'Send Email';
          alert(JSON.stringify(err));

        });
    });

}

location.hash = "conteiner",
location.hash = "form"
