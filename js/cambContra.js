console.log("😼");

const formulario = document.querySelector("#formulario");
//const btnIniciarSesion = document.querySelector("#btnIniciarSesion");
const btnCancelar = document.querySelector("#btnCancelar");
const alerta = document.querySelector("#divAlerta");

const nuevaPassUser = document.querySelector("#nuevaPass");
const passReUser = document.querySelector("#passRe");

const validacionUserPass = /^(\d|(([A-Za-zñÑáéíóúÁÉÍÓÚ\s])\3?(?!\3)))+$/;

///////////////////////////////////////////////
const test = document.querySelectorAll("input");
const contenImputs = [];
///////////////////////////////////////////////

let usuarios = [];

const agregarUsuario = (nuevaPass,passRe) =>{
    const objetoTodo = {
        NuevaPass: nuevaPass,
        PassRe: passRe
    }
    usuarios.push(objetoTodo);
}
/*
btnIniciarSesion.addEventListener('click',(event) => {
    event.preventDefault();
    setTimeout(()=> location.href="./index.html");
});
*/
btnCancelar.addEventListener('click',(event) => {
    event.preventDefault();
    setTimeout(()=> location.href="./index.html");
});

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
    const[NuevaPass,PassRe] = [...data.values()];
///////////////////////////////////////////////
    let i = 0
    contenImputs.splice(0,3);
    while (i < 1) {
        const inputCorr = test[i];
        contenImputs.push(inputCorr);
        if(contenImputs[i].value == ""){
            alerta.classList.remove("d-none");
            alerta.textContent = "Campos incompletos"
            contenImputs[i].classList.remove("border-dark");
            contenImputs[i].classList.add("border-danger");
        }else if(!validacionUserPass.test(contenImputs[0].value) === false){
            contenImputs[i].classList.remove("border-dark");
            contenImputs[i].classList.add("border-danger");
            alerta.classList.remove("d-none");
            console.log(!validacionUserPass.test(contenImputs[0].value))
            alerta.textContent = "Contraseña no cumple con lo minimo"
            console.log("FALTA-CONTRA-MIN")
        }else if(!validacionUserPass.test(contenImputs[0].value) === true){
            contenImputs[0].classList.remove("border-dark");
            contenImputs[0].classList.remove("border-danger");
            contenImputs[0].classList.add("border-success");
            alerta.classList.add("d-none");
            console.log("CUMPLE-CONTRA-MIN");
        }
        if(i===0){
            i++
            const inputCorr = test[i];
            contenImputs.push(inputCorr);
            aaaa();
        }
        i++
    }
    
    function aaaa(){
        let a = contenImputs[0].value;
        let b = contenImputs[1].value;
    
        if(a !== b){
            contenImputs[1].classList.remove("border-dark");
            contenImputs[1].classList.remove("border-success");
            contenImputs[1].classList.add("border-danger");
            alerta.textContent = "Contraseña no coinciden"
            alerta.classList.remove("d-none");
            console.log("FALTA-CONTRA-COINCI")
        }else if(!validacionUserPass.test(contenImputs[1].value) === false && contenImputs[1].value == ""){
            contenImputs[1].classList.remove("border-dark");
            contenImputs[1].classList.add("border-danger");
            alerta.classList.remove("d-none");
            alerta.textContent = "Contraseña no cumple con lo minimo"
            console.log("FALTA-CONTRA2-MIN")
        }else if(a === b && !contenImputs[1].value == ""){
            contenImputs[1].classList.remove("border-danger");
            contenImputs[1].classList.remove("border-dark");
            contenImputs[1].classList.add("border-success");
            alerta.classList.remove("d-none");
            console.log("CUMPLE-CONTRA-COINCI")
        }
        if(!contenImputs[0].value == "" && !contenImputs[1].value == "" && a === b && !validacionUserPass.test(contenImputs[0].value) === true && a === b && !validacionUserPass.test(contenImputs[1].value) === true){
            console.log("FIN")
            agregarUsuario(NuevaPass,PassRe);
            alerta.classList.add("d-none");
            console.log(usuarios)
            setTimeout(()=> location.href="./index.html",2000);
            return;
        }
    }
///////////////////////////////////////////////
});

//PARA QUE LOS DATOS SIGAN PRESENETES DESPUES DE ACTUALIZAR LA PAGINA
document.addEventListener("DOMContentLoaded", (e) => {
    if(localStorage.getItem("usuarios")){
        usuarios = JSON.parse(localStorage.getItem("usuarios"));
    }
})