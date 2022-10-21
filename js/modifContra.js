console.log("😼");

const formulario = document.querySelector("#formulario");
//const btnIniciarSesion = document.querySelector("#btnIniciarSesion");
const btnCancelar = document.querySelector("#btnCancelar");
const alerta = document.querySelector("#divAlerta");

const passActualUser = document.querySelector("#passActual");
const nuevaPassUser = document.querySelector("#nuevaPass");
const passReUser = document.querySelector("#passRe");
///////////////////////////////////////////////
const test = document.querySelectorAll("input");
const contenImputs = [];
///////////////////////////////////////////////
let usuarios = [];

const agregarUsuario = (passActual,nuevaPass,passRe) =>{
    const objetoTodo = {
        PassActual: passActual,
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
    setTimeout(()=> location.href="./Misdatos.html");
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
    const[passActual,nuevaPass,passRe] = [...data.values()];
///////////////////////////////////////////////
    let i = 0
    contenImputs.splice(0,4);
    while (i < 3) {
        const inputCorr = test[i];
        contenImputs.push(inputCorr);
        if(contenImputs[i].value == ""){
            contenImputs[i].classList.remove("border-dark");
            contenImputs[i].classList.add("border-danger");
            alerta.classList.remove("d-none");
            console.log("FALTAN-V1")
        }else if(!contenImputs[i].value == ""){
            contenImputs[i].classList.remove("border-danger");
            contenImputs[i].classList.remove("border-dark");
            contenImputs[i].classList.add("border-success");
            alerta.classList.remove("d-none");
            console.log("FALTAN-V2")
        }
        i++
    }
    
    if(!contenImputs[0].value == "" && !contenImputs[1].value == "" && !contenImputs[2].value == ""){
        console.log("FIN")
        agregarUsuario(passActual,nuevaPass,passRe);
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
