console.log("😼");

const formulario = document.querySelector("#formulario");
const btnCancelar = document.querySelector("#btnCancelar");
//const btnRestablecer = document.querySelector("#btnRestablecer");
const alerta = document.querySelector("#divAlerta");
const correoUser = document.querySelector("#correo")
///////////////////////////////////////////////
const test = document.querySelectorAll("input");
const contenImputs = [];
///////////////////////////////////////////////
let usuarios = [];

const validacionUserEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

const agregarUsuario = (correo) =>{
    const objetoTodo = {
        Correo: correo,
    }
    usuarios.push(objetoTodo);
}

btnCancelar.addEventListener('click',(event2) => {
    event2.preventDefault();
    setTimeout(()=> location.href="./index.html");
}); 
/*
btnRestablecer.addEventListener('click',(event) => {
    event.preventDefault();
    setTimeout(()=> location.href="./Cambcontra.html");
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
    const[correo] = [...data.values()];

///////////////////////////////////////////////
let i = 0
contenImputs.splice(0,2);
while (i < 1) {
    const inputCorr = test[i];
    contenImputs.push(inputCorr);
    if(contenImputs[0].value == ""){
        alerta.classList.remove("d-none");
        alerta.textContent = "Campos incompletos"
        contenImputs[0].classList.remove("border-dark");
        contenImputs[0].classList.add("border-danger");
        return
    }
    if(!validacionUserEmail.test(contenImputs[0].value)){
        contenImputs[i].classList.remove("border-dark");
        contenImputs[i].classList.remove("border-success");
        contenImputs[i].classList.add("border-danger");
        alerta.classList.remove("d-none");
        alerta.textContent = "Formato del correo incorrecto"
        console.log("FALTAN-V1")
    }else if(validacionUserEmail.test(contenImputs[0].value)){
        contenImputs[i].classList.remove("border-danger");
        contenImputs[i].classList.remove("border-dark");
        contenImputs[i].classList.add("border-success");
        alerta.classList.remove("d-none");
        console.log("FALTAN-V2")
    }
    i++
}

if(validacionUserEmail.test(contenImputs[0].value)){
    console.log("FIN")
    agregarUsuario(correo);
    alerta.classList.add("d-none");
    console.log(usuarios)
    setTimeout(()=> location.href="./Cambcontra.html",2000);
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