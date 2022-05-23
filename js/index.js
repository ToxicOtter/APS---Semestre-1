//navbar path
const navbar = document.getElementById("navbar");

//arrow
const arrow = document.getElementById("back-to-top");

//members informations
const membersInformations = {
    Isaac: ["https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png","Isaac Kralik Passos Ribeiro","","#","#"],
    Luan: ["https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png","Luan Lima Lopes","","https://github.com/ToxicOtter","https://www.linkedin.com/in/luan-lima-lopes-836672189/"],
    Luis: ["https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png","Luis Carlos dos Reis Pereira","","#","#"],
    Matheus: ["https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png","Matheus Gabriel Germano dos Santos","","#","#"],
    Natan: ["https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png","Natan Moraes dos Santos","","#","#"],
    Pedro: ["https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png","Pedro Henrique Maia de Medeiro","","#","#"]
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