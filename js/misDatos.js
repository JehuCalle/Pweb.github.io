console.log("😼");

const formulario = document.querySelector("#formulario");

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
    const[rut,razonSocial,correo,telefono,pass,passRe,nombreContact,direccion,regiones,provincias,comunas] = [...data.values()];
    if(!(rut).trim() || !(razonSocial).trim() || !(correo).trim() || !(telefono).trim() || !(pass).trim() || !(passRe).trim() || !(nombreContact).trim() || !(direccion).trim() || !(regiones).trim() || !(provincias).trim() || !(comunas).trim()){
        console.log("Completa todos los campos");
        return;
    }
    agregarUsuario(rut,razonSocial,correo,telefono,pass,passRe,nombreContact,direccion,regiones,provincias,comunas);
    console.log(usuarios);
});

//PARA QUE LOS DATOS SIGAN PRESENETES DESPUES DE ACTUALIZAR LA PAGINA
document.addEventListener("DOMContentLoaded", (e) => {
    if(localStorage.getItem("usuarios")){
        usuarios = JSON.parse(localStorage.getItem("usuarios"));

    }
})
