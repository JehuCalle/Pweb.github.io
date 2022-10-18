console.log("😼");

const formulario = document.querySelector("#formulario");
const btnCancelar = document.querySelector("#btnCancelar");
const alerta = document.querySelector("#divAlerta");

let usuarios = [];

const razonSocialUser = document.querySelector("#razonSocial");
const giroUser = document.querySelector("#giro");
const direccionUser = document.querySelector("#direccion");
const regionesUser = document.querySelector("#Regiones");
const provinciasUser = document.querySelector("#Provincias");
const comunasUser = document.querySelector("#Comunas");
const telefonoUser = document.querySelector("#telefono");
const telefonoContactUser = document.querySelector("#telefonoContact");
const correoUser = document.querySelector("#correo");
const correoContactUser = document.querySelector("#correoContact");
const celularUser = document.querySelector("#celular");
const celularContactUser = document.querySelector("#celularContact");
const contactoPagoUser = document.querySelector("#contactoPago");

const agregarUsuario = (razonSocial,giro,direccion,regiones,provincias,comunas,telefono,telefonoContact,correo,correoContact,celular,celularContact,contactoPago) =>{
    const objetoTodo = {
        RazonSocial: razonSocial,
        Giro: giro,
        Direccion: direccion,
        Region: regiones,
        Provincia: provincias,
        Comunas: comunas,
        Telefono: telefono,
        TelefonoContact: telefonoContact,
        Correo: correo,
        CorreoContact: correoContact,
        Celular: celular,
        CelularContact: celularContact,
        ContactoPago: contactoPago
    }
    usuarios.push(objetoTodo);
}

btnCancelar.addEventListener('click',(event) => {
    event.preventDefault();
    setTimeout(()=> location.href="./Misdatos.html");
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
    const[razonSocial,giro,direccion,regiones,provincias,comunas,telefono,telefonoContact,correo,correoContact,celular,celularContact,contactoPago] = [...data.values()];
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
    if(!(giro).trim()){
        console.log("Completa todos los campos");
        alerta.classList.remove("d-none");
        giroUser.classList.add("is-invalid");
        giroUser.classList.remove("border-dark");
        giroUser.classList.add("border-danger");
        return;
    }else{
        giroUser.classList.remove("is-invalid");
        giroUser.classList.add("is-valid");
        giroUser.classList.remove("border-dark");
        giroUser.classList.remove("border-danger");
        giroUser.classList.add("border-success");
    }
    if(!(direccion).trim()){
        console.log("Completa todos los campos");
        alerta.classList.remove("d-none");
        direccionUser.classList.add("is-invalid");
        direccionUser.classList.remove("border-dark");
        direccionUser.classList.add("border-danger");
        return;s
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
    if(!(telefonoContact).trim()){
        console.log("Completa todos los campos");
        alerta.classList.remove("d-none");
        telefonoContactUser.classList.add("is-invalid");
        telefonoContactUser.classList.remove("border-dark");
        telefonoContactUser.classList.add("border-danger");
        return;
    }else{
        telefonoContactUser.classList.remove("is-invalid");
        telefonoContactUser.classList.add("is-valid");
        telefonoContactUser.classList.remove("border-dark");
        telefonoContactUser.classList.remove("border-danger");
        telefonoContactUser.classList.add("border-success");
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
    if(!(correoContact).trim()){
        console.log("Completa todos los campos");
        alerta.classList.remove("d-none");
        correoContactUser.classList.add("is-invalid");
        correoContactUser.classList.remove("border-dark");
        correoContactUser.classList.add("border-danger");
        return;
    }else{
        correoContactUser.classList.remove("is-invalid");
        correoContactUser.classList.add("is-valid");
        correoContactUser.classList.remove("border-dark");
        correoContactUser.classList.remove("border-danger");
        correoContactUser.classList.add("border-success");
    }
    if(!(celular).trim()){
        console.log("Completa todos los campos");
        alerta.classList.remove("d-none");
        celularUser.classList.add("is-invalid");
        celularUser.classList.remove("border-dark");
        celularUser.classList.add("border-danger");
        return;
    }else{
        celularUser.classList.remove("is-invalid");
        celularUser.classList.add("is-valid");
        celularUser.classList.remove("border-dark");
        celularUser.classList.remove("border-danger");
        celularUser.classList.add("border-success");
    }
    if(!(celularContact).trim()){
        console.log("Completa todos los campos");
        alerta.classList.remove("d-none");
        celularContactUser.classList.add("is-invalid");
        celularContactUser.classList.remove("border-dark");
        celularContactUser.classList.add("border-danger");
        return;
    }else{
        celularContactUser.classList.remove("is-invalid");
        celularContactUser.classList.add("is-valid");
        celularContactUser.classList.remove("border-dark");
        celularContactUser.classList.remove("border-danger");
        celularContactUser.classList.add("border-success");
    }
    if(!(contactoPago).trim()){
        console.log("Completa todos los campos");
        alerta.classList.remove("d-none");
        contactoPagoUser.classList.add("is-invalid");
        contactoPagoUser.classList.remove("border-dark");
        contactoPagoUser.classList.add("border-danger");
        return;
    }else{
        contactoPagoUser.classList.remove("is-invalid");
        contactoPagoUser.classList.add("is-valid");
        contactoPagoUser.classList.remove("border-dark");
        contactoPagoUser.classList.remove("border-danger");
        contactoPagoUser.classList.add("border-success");
    }
    agregarUsuario(razonSocial,giro,direccion,regiones,provincias,comunas,telefono,telefonoContact,correo,correoContact,celular,celularContact,contactoPago);
    console.log(usuarios);
    setTimeout(()=> location.href="./Misdatos.html",2000);
});

//PARA QUE LOS DATOS SIGAN PRESENETES DESPUES DE ACTUALIZAR LA PAGINA
document.addEventListener("DOMContentLoaded", (e) => {
    if(localStorage.getItem("usuarios")){
        usuarios = JSON.parse(localStorage.getItem("usuarios"));

    }
})
