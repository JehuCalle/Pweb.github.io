console.log("😼");

const formulario = document.querySelector("#formulario");
//const btnIniciarSesion = document.querySelector("#btnIniciarSesion");
const btnCancelar = document.querySelector("#btnCancelar");
const alerta = document.querySelector("#divAlerta");

const passActualUser = document.querySelector("#passActual");
const nuevaPassUser = document.querySelector("#nuevaPass");
const passReUser = document.querySelector("#passRe");

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
    setTimeout(()=> location.href="./MisDatos.html");
});

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
    const[passActual,nuevaPass,passRe] = [...data.values()];
    if(!(passActual).trim()){
        console.log("Completa todos los campos");
        alerta.classList.remove("d-none");
        passActualUser.classList.add("is-invalid");
        passActualUser.classList.remove("border-dark");
        passActualUser.classList.add("border-danger");
        return;
    }else{
        passActualUser.classList.remove("is-invalid");
        passActualUser.classList.add("is-valid");
        passActualUser.classList.remove("border-dark");
        passActualUser.classList.remove("border-danger");
        passActualUser.classList.add("border-success");
    }
    if(!(nuevaPass).trim()){
        console.log("Completa todos los campos");
        alerta.classList.remove("d-none");
        nuevaPassUser.classList.add("is-invalid");
        nuevaPassUser.classList.remove("border-dark");
        nuevaPassUser.classList.add("border-danger");
        return;
    }else{
        nuevaPassUser.classList.remove("is-invalid");
        nuevaPassUser.classList.add("is-valid");
        nuevaPassUser.classList.remove("border-dark");
        nuevaPassUser.classList.remove("border-danger");
        nuevaPassUser.classList.add("border-success");
    }
    if(!(passRe).trim()){
        console.log("Completa todos los campos");
        alerta.classList.remove("d-none");
        passReUser.classList.add("is-invalid");
        passReUser.classList.remove("border-dark");
        passReUser.classList.add("border-danger");
        return;
    }else{
        passReUser.classList.remove("is-invalid");
        passReUser.classList.add("is-valid");
        passReUser.classList.remove("border-dark");
        passReUser.classList.remove("border-danger");
        passReUser.classList.add("border-success");
    }
    agregarUsuario(passActual,nuevaPass,passRe);
    console.log(usuarios);
    setTimeout(()=> location.href="./MisDatos.html",2000);
});

//PARA QUE LOS DATOS SIGAN PRESENETES DESPUES DE ACTUALIZAR LA PAGINA
document.addEventListener("DOMContentLoaded", (e) => {
    if(localStorage.getItem("usuarios")){
        usuarios = JSON.parse(localStorage.getItem("usuarios"));
    }
})