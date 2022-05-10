//about us constants

const isaac = document.getElementById("Isaac");
const pedro = document.getElementById("Pedro");
const luan = document.getElementById("Luan");
const luis = document.getElementById("Luis");

const isaacLista = document.getElementById("isaacLista");
const pedroLista = document.getElementById("pedroLista");
const luanLista = document.getElementById("luanLista");
const luisLista = document.getElementById("luisLista");

//navbar constant

const navbar = document.getElementById("navbar");

//content constants
const contentOne = document.getElementById("cont1");
const contentTwo = document.getElementById("cont2");
const contentThree = document.getElementById("cont3");
const contentFour = document.getElementById("cont4");

const navList1 = document.getElementById("navList1");
const navList2 = document.getElementById("navList2");
const navList3 = document.getElementById("navList3");
const navList4 = document.getElementById("navList4");

//function to swwitch between the members 
//add Natan e Matheus 

function sumiu(integrante){
    if(integrante == "Isaac"){
        isaac.style.visibility = "visible";
        pedro.style.visibility = "hidden";
        luan.style.visibility = "hidden";
        luis.style.visibility = "hidden";

        isaacLista.style.color = "blue";
        pedroLista.style.color = "black";
        luanLista.style.color = "black";
        luisLista.style.color = "black";
    } else if(integrante == "Pedro"){
        isaac.style.visibility = "hidden";
        pedro.style.visibility = "visible";
        luan.style.visibility = "hidden";
        luis.style.visibility = "hidden";

        isaacLista.style.color = "black";
        pedroLista.style.color = "blue";
        luanLista.style.color = "black";
        luisLista.style.color = "black";
    } else if(integrante == "Luan"){
        isaac.style.visibility = "hidden";
        pedro.style.visibility = "hidden";
        luan.style.visibility = "visible";
        luis.style.visibility = "hidden";

        isaacLista.style.color = "black";
        pedroLista.style.color = "black";
        luanLista.style.color = "blue";
        luisLista.style.color = "black";
    } else if(integrante == "Luis"){
        isaac.style.visibility = "hidden";
        pedro.style.visibility = "hidden";
        luan.style.visibility = "hidden";
        luis.style.visibility = "visible";

        isaacLista.style.color = "black";
        pedroLista.style.color = "black";
        luanLista.style.color = "black";
        luisLista.style.color = "blue";
    }
}

//function to the back-to-top button

function toTheTop(){
    document.documentElement.scrollTop = 0;
}


let scrolled = false;
window.addEventListener('scroll', (e)=>{
    if(window.scrollY > 250){
        navbar.classList.add("follow");
    }else {
        navbar.classList.remove("follow");
    }

    if(contentOne.getBoundingClientRect().top <= window.innerHeight && contentOne.getBoundingClientRect().bottom >=0){
        navList1.style.color = "red"
    }else {
        navList1.style.color = "black";
    }
    if(contentTwo.getBoundingClientRect().top <= window.innerHeight && contentOne.getBoundingClientRect().bottom >=0){
        navList2.style.color = "red"
    }else {
        navList2.style.color = "black";
    }
    if(contentThree.getBoundingClientRect().top <= window.innerHeight && contentOne.getBoundingClientRect().bottom >=0){
        navList3.style.color = "red"
    }else {
        navList3.style.color = "black";
    }
    if(contentFour.getBoundingClientRect().top <= window.innerHeight && contentOne.getBoundingClientRect().bottom >=0){
        navList4.style.color = "red"
    }else {
        navList4.style.color = "black";
    }
})

//https://awik.io/check-if-element-is-inside-viewport-with-javascript/