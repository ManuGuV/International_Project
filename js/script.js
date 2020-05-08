var help = true;

document.addEventListener("DOMContentLoaded", function() {
    $("#myModal").modal("show");

    $("#myModal").on('hidden.bs.modal', function(){
        if(help){
            homeSection();
        }
    });
});


function setHelp(){
    help = false;
}

function homeSection(){
    speak("Welcome to the happy paws site, find you're best friend! To continue to the next section, scroll down.");
}

var aboutBool = true;
var faqBool = true;
var galBool = true;
var conBool = true;

const aboutSection = document.getElementById('about');
const faqSection = document.getElementById('faq');
const gallerySection = document.getElementById('gallery');
const conSection = document.getElementById('contact');

aboutSection.addEventListener('mouseenter', e => {
    if(help && aboutBool){
        speak("Why to Adopt? Care, company, emergency");
        aboutBool = false;
    }

});

faqSection.addEventListener('mouseenter', e => {
    if(help && faqBool){
        speak("Frequently Asked Questions. In this section we answer some questions we get asked a lot by our potential adopters. " +
            "How to train your dog? You don't have to, all our candidates are already trained. " +
            "How to take care of your pets? We provide useful information in our daily blogs such as what food to give, best place for them to sleep, " +
            "an other things. " +
            "What is the best grooming for your pets? Try brushing them often, you can give them showers once a month. " +
            "What are the requirements for adopting?" +
            "1. Contact us by email or in the contact section. " +
            "2. Fill the aplication sent to you. 3. Pass the evaluation. 4. Pay the adoption fee. 5. Meet your new best friend!");
        faqBool = false;
    }

});


gallerySection.addEventListener('mouseenter', e => {
    if(help && galBool){
        speak("Pets Gallery. Adoption dog named spots. Adoption dog named Firulais. Adoption dog named Gege. Adoption dog named Daisy. " +
            "Adoption dog named Jack. Adoption dog named Scott.");
        galBool = false;
    }

});

conSection.addEventListener('mouseenter', e => {
    if(help && conBool){
        speak("Contact us! Your name. Email. Message. Send Message.");
        conBool = false;
    }

});

