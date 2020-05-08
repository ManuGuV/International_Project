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

const aboutSection = document.getElementById('about');

aboutSection.addEventListener('mouseenter', e => {
    if(help){
        speak("Why to Adopt?");
    }

});



