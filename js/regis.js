console.log("😼");

const formulario = document.querySelector("#formulario");
const btnCancelar = document.querySelector("#btnCancelar");
//const btnEnviar = document.querySelector("#btnEnviar");
const alerta = document.querySelector("#divAlerta");

///////////////////////////////////////////////
const test2 = document.querySelectorAll("select");
const contenSelect = [];

const test = document.querySelectorAll("input");
const contenImputs = [];
///////////////////////////////////////////////
let usuarios = [];

const agregarUsuario = (rut,razonSocial,correo,telefono,pass,passRe,nombreContact,direccion,regiones,provincias,comunas) =>{
    const objetoTodo = {
        Rut: rut,
        RazonSocial: razonSocial,
        Correo: correo,
        Telefono: telefono,
        Pass: pass,
        ConfirmPass: passRe,
        NombreContact: nombreContact,
        Direccion: direccion,
        Region: regiones,
        Provincia: provincias,
        Comuna: comunas
    }
    usuarios.push(objetoTodo);
}

btnCancelar.addEventListener('click',(event) => {
    event.preventDefault();
    setTimeout(()=> location.href="./index.html");
});
/*
btnEnviar.addEventListener('click',(event) => {
    event.preventDefault();
    setTimeout(()=> location.href="./Misdatos.html");
});
*/

formulario.addEventListener("submit",(e)=>{
    e.preventDefault();
    alerta.classList.add("d-none");
    //console.log("Testeo Formulario");

    //PARA QUE NO SE PUEDA AGREGAR MÁS USUARIOS AL APRETAR INICIAR SESION REPETIDAS VECES
    usuarios.pop();

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
    const[rut,razonSocial,correo,telefono,pass,passRe,nombreContact,direccion,regiones,provincias,comunas] = [...data.values()];
///////////////////////////////////////////////
    let i = 0
    contenImputs.splice(0,9);
    while (i < 8) {
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
    contenSelect.splice(0,3);
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

    if(!contenImputs[0].value == "" && !contenImputs[1].value == "" && !contenImputs[2].value == "" && !contenImputs[3].value == "" && !contenImputs[4].value == "" && !contenImputs[5].value == "" && !contenImputs[6].value == "" && !contenImputs[7].value == "" && !contenSelect[0].value == "" && !contenSelect[1].value == "" && !contenSelect[2].value == ""){
        console.log("FIN")
        agregarUsuario(rut,razonSocial,correo,telefono,pass,passRe,nombreContact,direccion,regiones,provincias,comunas);
        alerta.classList.add("d-none");
        console.log(usuarios)
        setTimeout(()=> location.href="./Misdatos.html",2000);
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