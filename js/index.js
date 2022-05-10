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
const one = document.getElementById("cont1");
const two = document.getElementById("cont2");
const three = document.getElementById("cont3");
const four = document.getElementById("cont4");

const navList1 = document.getElementById("navList1");

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
    if(four.getBoundingClientRect().bottom <= window.innerHeight && four.getBoundingClientRect().top >= 0){
        navList1.style.color = "red"
    }else {
        navList1.style.color = "black";
    }
    /*if(window.scrollY >= four.getBoundingClientRect().y && window.scrollY <= (four.getBoundingClientRect().y + four.getBoundingClientRect().height)){
        navList1.style.color = "red";
        console.log("w " + window.scrollY);
        console.log("y1 " + four.getBoundingClientRect().y)
        console.log(four.getBoundingClientRect())
    }else {
        navList1.style.color = "black";
        console.log("w " + window.scrollY);
        console.log("y1 " + four.getBoundingClientRect().y)
        console.log(Number(four.getBoundingClientRect().y) + Number(four.getBoundingClientRect().height))
    }*/
})

//https://awik.io/check-if-element-is-inside-viewport-with-javascript/