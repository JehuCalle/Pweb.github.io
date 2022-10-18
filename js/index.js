console.log("😼");

const formulario = document.querySelector("#formulario");
//const btnLink = document.querySelector("#btnIniciarSesion");
const alerta = document.querySelector("#divAlerta");

const alertaRut = document.querySelector("#alertaRut");
const validacionRut = /[0-9]/;
const rutUser = document.querySelector("#rut");

const alertaPass = document.querySelector("#alertaPass");
const validacionPass = /[0-9]/;
const passUser = document.querySelector("#pass");

let usuarios = [];

const agregarUsuario = (rut,pass) =>{
    const objetoTodo = {
        Rut: rut,
        Pass: pass
    }
    usuarios.push(objetoTodo);
}
/*
btnLink.addEventListener('click',(event) => {
    event.preventDefault();
    setTimeout(()=> location.href="./Misdatos.html");
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
    const[rut,pass] = [...data.values()];

    if(!(rut).trim() /*|| !validacionRut.test(rut)*/){
        console.log("Completa todos los campos 1 ");
        rutUser.classList.add("is-invalid");
        rutUser.classList.remove("border-dark");
        rutUser.classList.add("border-danger");
        alerta.classList.remove("d-none");
        return;
    }else{
        rutUser.classList.remove("is-invalid");
        rutUser.classList.add("is-valid");
        rutUser.classList.remove("border-dark");
        rutUser.classList.remove("border-danger");
        rutUser.classList.add("border-success");
    }
    if(!(pass).trim()){
        console.log("Completa todos los campos 2 ");
        passUser.classList.add("is-invalid");
        passUser.classList.remove("border-dark");
        passUser.classList.add("border-danger");
        alerta.classList.remove("d-none");
        return;
    }else{
        passUser.classList.remove("is-invalid");
        passUser.classList.add("is-valid");
        passUser.classList.remove("border-dark");
        passUser.classList.remove("border-danger");
        passUser.classList.add("border-success");
    }
    agregarUsuario(rut,pass);
    console.log(usuarios);
    setTimeout(()=> location.href="./Misdatos.html",2000);
});

//PARA QUE LOS DATOS SIGAN PRESENETES DESPUES DE ACTUALIZAR LA PAGINA
document.addEventListener("DOMContentLoaded", (e) => {
    if(localStorage.getItem("usuarios")){
        usuarios = JSON.parse(localStorage.getItem("usuarios"));
    }
})