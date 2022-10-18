console.log("😼");

const formulario = document.querySelector("#formulario");
const btnCancelar = document.querySelector("#btnCancelar");
//const btnRestablecer = document.querySelector("#btnRestablecer");
const alerta = document.querySelector("#divAlerta");
const correoUser = document.querySelector("#correo")

let usuarios = [];

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
    if(!(correo).trim()){
        console.log("Completa todos los campos");
        alerta.classList.remove("d-none");
        correoUser.classList.remove("border-dark");
        correoUser.classList.remove("is-valid");
        correoUser.classList.add("border-danger");
        correoUser.classList.add("is-invalid");
        return;
    }else{
        correoUser.classList.remove("border-dark");
        correoUser.classList.remove("border-danger");
        correoUser.classList.remove("is-invalid");
        correoUser.classList.add("is-valid");
        correoUser.classList.add("border-success");
    }
    agregarUsuario(correo);
    console.log(usuarios);
    setTimeout(()=> location.href="./Cambcontra.html",2000);
});

//PARA QUE LOS DATOS SIGAN PRESENETES DESPUES DE ACTUALIZAR LA PAGINA
document.addEventListener("DOMContentLoaded", (e) => {
    if(localStorage.getItem("usuarios")){
        usuarios = JSON.parse(localStorage.getItem("usuarios"));

    }
})