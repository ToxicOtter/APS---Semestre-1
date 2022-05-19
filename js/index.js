//navbar constant
const navbar = document.getElementById("navbar");

//function to switch between the members content 
function sumiu(clickedIntegrante){
    const integrantsList = ['Isaac','Luan','Luis','Matheus','Natan','Pedro'];
    let index = integrantsList.indexOf(clickedIntegrante);

    integrantsList.splice(index,1);

    document.getElementById(clickedIntegrante).style.visibility = "visible";
    document.getElementById(clickedIntegrante.toLocaleLowerCase()+"Lista").style.color = "blue";

    for(let i = 0;i < integrantsList.length;i++){
        document.getElementById(integrantsList[i]).style.visibility = "hidden";
        document.getElementById(integrantsList[i].toLocaleLowerCase()+"Lista").style.color = "black";
    }

    integrantsList.push(clickedIntegrante);
}

//function to the back-to-top button

function toTheTop(){
    document.documentElement.scrollTop = 0;
}

//function to fix the navbar when the window is scrolled
window.addEventListener('scroll', (e)=>{
    if(window.scrollY > 250){
        navbar.classList.add("follow");
    }else {
        navbar.classList.remove("follow");
    }
})