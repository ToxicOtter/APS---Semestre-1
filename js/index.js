//navbar path
const navbar = document.getElementById("navbar");

//arrow
const arrow = document.getElementById("back-to-top");

//members informations
const membersInformations = {
    Isaac: ["https://media-exp1.licdn.com/dms/image/C5603AQEJMAnsaa6u4Q/profile-displayphoto-shrink_800_800/0/1653406121168?e=1658966400&v=beta&t=sJFEH-PlbRY8INgxpO7XE4qzkK9jhiRHXzNd6-0NAf8","Isaac Kralik Passos Ribeiro","","https://github.com/IsaacKralik","https://www.linkedin.com/in/isaac-kralik-passos-ribeiro-682311194/"],
    Luan: ["https://media-exp1.licdn.com/dms/image/C4D03AQH12ZYuXLXbfw/profile-displayphoto-shrink_800_800/0/1637548544567?e=1658966400&v=beta&t=TNaB5ssipURuzkqAhjBP_evi_uPKYWtP6ZdfEELICeg","Luan Lima Lopes","","https://github.com/ToxicOtter","https://www.linkedin.com/in/luan-lima-lopes-836672189/"],
    Luis: ["https://avatars.githubusercontent.com/u/94473257?v=4","Luis Carlos dos Reis Pereira","","https://github.com/luiscarlosReis","https://www.linkedin.com/in/luis-reis-97202322a/?trk=public_profile_samename-profile&originalSubdomain=br"],
    Matheus: ["https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png","Matheus Gabriel Germano dos Santos","","https://github.com/MatheusGGermano","#"],
    Natan: ["https://avatars.githubusercontent.com/u/106124500?v=4","Natan Moraes dos Santos","","https://github.com/N22SENTINEL","https://www.linkedin.com/in/natan-moraes-dos-santos-883a1923b/"],
    Pedro: ["https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png","Pedro Henrique Maia de Medeiro","","https://github.com/Pedrinhomaia","https://www.linkedin.com/in/pedro-henrique-maia-de-medeiros-3a2733237/"]
};

//members card paths
const memberImage = document.getElementById("user-image");
const memberName = document.getElementById("title");
const memberDescription = document.getElementById("paragraph");
const memberGithub = document.getElementById("github");
const memberLinkedin = document.getElementById("linkedin");
const card = document.getElementById("userProfile");

//function to switch between the members content 
function sumiu(clickedIntegrant){
    if(window.getComputedStyle(card).visibility == "hidden"){
        card.style.visibility = "visible"
    }

    if(clickedIntegrant == "Matheus"){
        memberLinkedin.style.visibility = "hidden";
    } else {
        memberLinkedin.style.visibility = "visible";
    }

    memberImage.src = membersInformations[clickedIntegrant][0];
    memberName.innerHTML = membersInformations[clickedIntegrant][1];
    memberDescription.innerHTML = membersInformations[clickedIntegrant][2];
    memberGithub.href = membersInformations[clickedIntegrant][3];
    memberLinkedin.href = membersInformations[clickedIntegrant][4];
}

//function to the back-to-top button

function toTheTop(){
    document.documentElement.scrollTop = 0;
}

//function to fix the navbar when the window is scrolled
window.addEventListener('scroll', (e)=>{
    if(window.scrollY > 250){
        navbar.classList.add("follow");
        arrow.style.visibility = "visible";
    }else {
        navbar.classList.remove("follow");
        arrow.style.visibility = "hidden";
    }
})