console.log("😼");

const formulario = document.querySelector("#formulario");
const btnCancelar = document.querySelector("#btnCancelar");
//const btnEnviar = document.querySelector("#btnEnviar");
const alerta = document.querySelector("#divAlerta");

const rutUser = document.querySelector("#rut");
const razonSocialUser = document.querySelector("#razonSocial");
const correoUser = document.querySelector("#correo");
const telefonoUser = document.querySelector("#telefono");
const passUser = document.querySelector("#pass");
const passReUser = document.querySelector("#passRe");
const nombreContactUser = document.querySelector("#nombreContact");
const direccionUser = document.querySelector("#direccion");
const regionesUser = document.querySelector("#Regiones");
const provinciasUser = document.querySelector("#Provincias");
const comunasUser = document.querySelector("#Comunas");

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
    if(!(rut).trim()){
        console.log("Completa todos los campos");
        alerta.classList.remove("d-none");
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
    if(!(razonSocial).trim()){
        console.log("Completa todos los campos");
        alerta.classList.remove("d-none");
        razonSocialUser.classList.add("is-invalid");
        razonSocialUser.classList.remove("border-dark");
        razonSocialUser.classList.add("border-danger");
        return;
    }else{
        razonSocialUser.classList.remove("is-invalid");
        razonSocialUser.classList.add("is-valid");
        razonSocialUser.classList.remove("border-dark");
        razonSocialUser.classList.remove("border-danger");
        razonSocialUser.classList.add("border-success");
    }
    if(!(correo).trim()){
        console.log("Completa todos los campos");
        alerta.classList.remove("d-none");
        correoUser.classList.add("is-invalid");
        correoUser.classList.remove("border-dark");
        correoUser.classList.add("border-danger");
        return;
    }else{
        correoUser.classList.remove("is-invalid");
        correoUser.classList.add("is-valid");
        correoUser.classList.remove("border-dark");
        correoUser.classList.remove("border-danger");
        correoUser.classList.add("border-success");
    }
    if(!(telefono).trim()){
        console.log("Completa todos los campos");
        alerta.classList.remove("d-none");
        telefonoUser.classList.add("is-invalid");
        telefonoUser.classList.remove("border-dark");
        telefonoUser.classList.add("border-danger");
        return;
    }else{
        telefonoUser.classList.remove("is-invalid");
        telefonoUser.classList.add("is-valid");
        telefonoUser.classList.remove("border-dark");
        telefonoUser.classList.remove("border-danger");
        telefonoUser.classList.add("border-success");
    }
    if(!(pass).trim()){
        console.log("Completa todos los campos");
        alerta.classList.remove("d-none");
        passUser.classList.add("is-invalid");
        passUser.classList.remove("border-dark");
        passUser.classList.add("border-danger");
        return;
    }else{
        passUser.classList.remove("is-invalid");
        passUser.classList.add("is-valid");
        passUser.classList.remove("border-dark");
        passUser.classList.remove("border-danger");
        passUser.classList.add("border-success");
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
    if(!(nombreContact).trim()){
        console.log("Completa todos los campos");
        alerta.classList.remove("d-none");
        nombreContactUser.classList.add("is-invalid");
        nombreContactUser.classList.remove("border-dark");
        nombreContactUser.classList.add("border-danger");
        return;
    }else{
        nombreContactUser.classList.remove("is-invalid");
        nombreContactUser.classList.add("is-valid");
        nombreContactUser.classList.remove("border-dark");
        nombreContactUser.classList.remove("border-danger");
        nombreContactUser.classList.add("border-success");
    }
    if(!(direccion).trim()){
        console.log("Completa todos los campos");
        alerta.classList.remove("d-none");
        direccionUser.classList.add("is-invalid");
        direccionUser.classList.remove("border-dark");
        direccionUser.classList.add("border-danger");
        direccionUser;
    }else{
        direccionUser.classList.remove("is-invalid");
        direccionUser.classList.add("is-valid");
        direccionUser.classList.remove("border-dark");
        direccionUser.classList.remove("border-danger");
        direccionUser.classList.add("border-success");
    }
    if(!(regiones).trim()){
        console.log("Completa todos los campos");
        alerta.classList.remove("d-none");
        regionesUser.classList.add("is-invalid");
        regionesUser.classList.remove("border-dark");
        regionesUser.classList.add("border-danger");
        return;
    }else{
        regionesUser.classList.remove("is-invalid");
        regionesUser.classList.add("is-valid");
        regionesUser.classList.remove("border-dark");
        regionesUser.classList.remove("border-danger");
        regionesUser.classList.add("border-success");
    }
    if(!(provincias).trim()){
        alerta.classList.remove("d-none");
        provinciasUser.classList.add("is-invalid");
        provinciasUser.classList.remove("border-dark");
        provinciasUser.classList.add("border-danger");
        return;
    }else{
        provinciasUser.classList.remove("is-invalid");
        provinciasUser.classList.add("is-valid");
        provinciasUser.classList.remove("border-dark");
        provinciasUser.classList.remove("border-danger");
        provinciasUser.classList.add("border-success");
    }
    if(!(comunas).trim()){
        alerta.classList.remove("d-none");
        comunasUser.classList.add("is-invalid");
        comunasUser.classList.remove("border-dark");
        comunasUser.classList.add("border-danger");
        return;
    }else{
        comunasUser.classList.remove("is-invalid");
        comunasUser.classList.add("is-valid");
        comunasUser.classList.remove("border-dark");
        comunasUser.classList.remove("border-danger");
        comunasUser.classList.add("border-success");
    }
    agregarUsuario(rut,razonSocial,correo,telefono,pass,passRe,nombreContact,direccion,regiones,provincias,comunas);
    console.log(usuarios);
    setTimeout(()=> location.href="./Misdatos.html",2000);
});

//PARA QUE LOS DATOS SIGAN PRESENETES DESPUES DE ACTUALIZAR LA PAGINA
document.addEventListener("DOMContentLoaded", (e) => {
    if(localStorage.getItem("usuarios")){
        usuarios = JSON.parse(localStorage.getItem("usuarios"));

    }
})