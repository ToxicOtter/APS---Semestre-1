const isaac = document.getElementById("Isaac");
const pedro = document.getElementById("Pedro");
const luan = document.getElementById("Luan");
const luis = document.getElementById("Luis");

const isaacLista = document.getElementById("isaacLista");
const pedroLista = document.getElementById("pedroLista");
const luanLista = document.getElementById("luanLista");
const luisLista = document.getElementById("luisLista");

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

function toTheTop(){
    document.documentElement.scrollTop = 0;
}