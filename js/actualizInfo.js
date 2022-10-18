console.log("😼");

const formulario = document.querySelector("#formulario");
const btnCancelar = document.querySelector("#btnCancelar");

let usuarios = [];


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
    if(!(razonSocial).trim() || !(giro).trim() || !(direccion).trim() || !(regiones).trim() || !(provincias).trim() || !(comunas).trim() || !(telefono).trim() || !(correo).trim() || !(celular).trim()){
        console.log("Completa todos los campos");
        return;
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
