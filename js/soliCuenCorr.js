console.log("😼");

const formulario = document.querySelector("#formulario");
const btnCancelar = document.querySelector("#btnCancelar");

let usuarios = [];


const agregarUsuario = (rut,razonSocial,direccion,regiones,provincias,comunas,tipoCarga,kilosDiarios,rutContact,nombres,apellidos,telefono,emailContacto,archivos,comentario) =>{
    const objetoTodo = {
        Rut: rut,
        RazonSocial: razonSocial,
        Direccion: direccion,
        Region: regiones,
        Provincia: provincias,
        Comunas: comunas,
        TipoCarga: tipoCarga,
        KilosDiarios: kilosDiarios,
        RutContact: rutContact,
        Nombres: nombres,
        Apellidos: apellidos,
        Telefono: telefono,
        EmailContacto: emailContacto,
        Archivo: archivos,
        Comentario: comentario
    }
    usuarios.push(objetoTodo);
}

btnCancelar.addEventListener('click',(event) => {
    event.preventDefault();
    setTimeout(()=> location.href="./Cuencorri.html");
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
    const[rut,razonSocial,direccion,regiones,provincias,comunas,tipoCarga,kilosDiarios,rutContact,nombres,apellidos,telefono,emailContacto,archivos,comentario] = [...data.values()];
    if(!(rut).trim() || !(razonSocial).trim() || !(direccion).trim() || !(regiones).trim() || !(provincias).trim() || !(comunas).trim() || !(tipoCarga).trim() || !(kilosDiarios).trim() || !(rutContact).trim() || !(nombres).trim() || !(apellidos).trim() || !(telefono).trim() || !(emailContacto).trim() || !(comentario).trim()){
        console.log("Completa todos los campos");
        return;
    }
    agregarUsuario(rut,razonSocial,direccion,regiones,provincias,comunas,tipoCarga,kilosDiarios,rutContact,nombres,apellidos,telefono,emailContacto,archivos,comentario);
    console.log(usuarios);
    setTimeout(()=> location.href="./Cuencorri.html",2000);
});

//PARA QUE LOS DATOS SIGAN PRESENETES DESPUES DE ACTUALIZAR LA PAGINA
document.addEventListener("DOMContentLoaded", (e) => {
    if(localStorage.getItem("usuarios")){
        usuarios = JSON.parse(localStorage.getItem("usuarios"));

    }
})
