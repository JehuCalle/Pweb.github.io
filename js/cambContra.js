console.log("😼");

const formulario = document.querySelector("#formulario");
//const btnIniciarSesion = document.querySelector("#btnIniciarSesion");
const btnCancelar = document.querySelector("#btnCancelar");
const alerta = document.querySelector("#divAlerta");

const nuevaPassUser = document.querySelector("#nuevaPass");
const passReUser = document.querySelector("#passRe");


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
    if(!(NuevaPass).trim()){
        console.log("Completa todos los campos");
        alerta.classList.remove("d-none");
        nuevaPassUser.classList.remove("border-dark");
        nuevaPassUser.classList.remove("border-success");
        nuevaPassUser.classList.remove("is-valid");
        nuevaPassUser.classList.add("border-danger");
        nuevaPassUser.classList.add("is-invalid");
        return;
    }else{
        nuevaPassUser.classList.remove("border-dark");
        nuevaPassUser.classList.remove("border-danger");
        nuevaPassUser.classList.remove("is-invalid");
        nuevaPassUser.classList.add("border-success");
        nuevaPassUser.classList.add("is-valid");
    }
    if(!(PassRe).trim()){
        console.log("Completa todos los campos");
        alerta.classList.remove("d-none");
        passReUser.classList.remove("border-dark");
        passReUser.classList.remove("border-success");
        passReUser.classList.remove("is-valid");
        passReUser.classList.add("border-danger");
        passReUser.classList.add("is-invalid");
        return;
    }else{
        passReUser.classList.remove("border-dark");
        passReUser.classList.remove("border-danger");
        passReUser.classList.remove("is-invalid");
        passReUser.classList.add("border-success");
        passReUser.classList.add("is-valid");
    }
    agregarUsuario(NuevaPass,PassRe);
    console.log(usuarios);
    setTimeout(()=> location.href="./index.html",2000);
});

//PARA QUE LOS DATOS SIGAN PRESENETES DESPUES DE ACTUALIZAR LA PAGINA
document.addEventListener("DOMContentLoaded", (e) => {
    if(localStorage.getItem("usuarios")){
        usuarios = JSON.parse(localStorage.getItem("usuarios"));
    }
})