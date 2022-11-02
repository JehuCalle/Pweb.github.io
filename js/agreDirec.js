console.log("😼");

const formulario = document.querySelector("#formulario");
const btnCancelar = document.querySelector("#btnCancelar");
const alerta = document.querySelector("#divAlerta");

///////////////////////////////////////////////
const test = document.querySelectorAll("input");
const contenImputs = [];

const test2 = document.querySelectorAll("select");
const contenSelect = [];

const test3 = document.querySelectorAll("#comentario");
const contenTextarea = [];
///////////////////////////////////////////////

const tamañoPantalla = document.querySelector(".columnaDiv");
if (screen.width < 767){
    console.log("Pequeña");
    tamañoPantalla.classList.remove("columnaDiv");
}

let usuarios = [];

btnCancelar.addEventListener('click',(event) => {
    event.preventDefault();
    setTimeout(()=> location.href="./Misdirecciones.html");
});

const agregarUsuario = (secPobVill,calle,numCasaDept,regiones,provincias,comunas,direcRef) =>{
    const objetoTodo = {
        SectorPoblaVilla: secPobVill,
        Calle: calle,
        NumeroCasaDept: numCasaDept,
        Region: regiones,
        Provincia: provincias,
        Comuna: comunas,
        DireccionRefe: direcRef
    }
    usuarios.push(objetoTodo);
}

formulario.addEventListener("submit",(e)=>{
    e.preventDefault();
    alerta.classList.add("d-none");
    //console.log("Testeo Formulario");

    //CAPTURA TODOS LOS INPUT DE FORMULARIO
    const data = new FormData(formulario);
    /*
    let test2 = JSON.stringify(usuarios);

    fetch('http://127.0.0.1:5500/Regis.html',{
        method: "POST",
        body: test2,
    })
    */
    //SE ALMACENAN TODOS LOS DATOS DE LOS INPUT EN EL [...data.values()] Y SE TRANSLADAN A [todo]
    const[secPobVill,calle,numCasaDept,regiones,provincias,comunas,direcRef] = [...data.values()];
///////////////////////////////////////////////
    let i = 0
    contenImputs.splice(0,4);
    while (i < 3) {
        const inputCorr = test[i];
        contenImputs.push(inputCorr);
        if(contenImputs[i].value == ""){
            contenImputs[i].classList.remove("border-dark");
            contenImputs[i].classList.add("border-danger");
            console.log("FALTAN-V1")
        }else if(!contenImputs[i].value == ""){
            contenImputs[i].classList.remove("border-danger");
            contenImputs[i].classList.remove("border-dark");
            contenImputs[i].classList.add("border-success");
            console.log("FALTAN-V2")
        }
        i++
    }
    let a = 0
    contenSelect.splice(0,4);
    while (a < 3) {
        const selectCorr = test2[a];
        contenSelect.push(selectCorr);
        if(contenSelect[a].value == ""){
            contenSelect[a].classList.remove("border-dark");
            contenSelect[a].classList.add("border-danger");
            alerta.classList.remove("d-none");
            console.log("FALTAN-V1")
        }else if(!contenSelect[a].value == ""){
            contenSelect[a].classList.remove("border-danger");
            contenSelect[a].classList.remove("border-dark");
            contenSelect[a].classList.add("border-success");
            alerta.classList.remove("d-none");
            console.log("FALTAN-V2")
        }
        a++
    }
    let b = 0
    contenTextarea.splice(0,2);
    while (b < 1) {
        const selectCorr = test3[b];
        contenTextarea.push(selectCorr);
        if(contenTextarea[b].value == ""){
            contenTextarea[b].classList.remove("border-dark");
            contenTextarea[b].classList.add("border-danger");
            alerta.classList.remove("d-none");
            console.log("FALTAN-V1")
        }else if(!contenTextarea[b].value == ""){
            contenTextarea[b].classList.remove("border-danger");
            contenTextarea[b].classList.remove("border-dark");
            contenTextarea[b].classList.add("border-success");
            alerta.classList.remove("d-none");
            console.log("FALTAN-V2")
        }
        b++
    }

if(!contenImputs[0].value == "" && !contenImputs[1].value == "" && !contenImputs[2].value == "" && !contenSelect[0].value == "" && !contenSelect[1].value == "" && !contenSelect[2].value == "" && !contenTextarea[0].value == ""){
    console.log("FIN")
    agregarUsuario(secPobVill,calle,numCasaDept,regiones,provincias,comunas,direcRef);
    alerta.classList.add("d-none");
    console.log(usuarios)
    setTimeout(()=> location.href="./Misdirecciones.html",2000);
    return;
}
///////////////////////////////////////////////
});

//PARA QUE LOS DATOS SIGAN PRESENETES DESPUES DE ACTUALIZAR LA PAGINA
document.addEventListener("DOMContentLoaded", (e) => {
    if(localStorage.getItem("usuarios")){
        usuarios = JSON.parse(localStorage.getItem("usuarios"));
    }
})
