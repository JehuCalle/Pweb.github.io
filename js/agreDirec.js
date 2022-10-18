console.log("😼");

const formulario = document.querySelector("#formulario");
const btnCancelar = document.querySelector("#btnCancelar");

let usuarios = [];

btnCancelar.addEventListener('click',(event) => {
    event.preventDefault();
    setTimeout(()=> location.href="./Misdirecciones.html");
});

const agregarUsuario = (secPobVill,calle,numCasaDept,regiones,provincias,comunas) =>{
    const objetoTodo = {
        SectorPoblaVilla: secPobVill,
        Calle: calle,
        NumeroCasaDept: numCasaDept,
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
    const[secPobVill,calle,numCasaDept,regiones,provincias,comunas] = [...data.values()];
    if(!(secPobVill).trim() || !(calle).trim() || !(numCasaDept).trim() || !(regiones).trim() || !(provincias).trim() || !(comunas).trim()){
        console.log("Completa todos los campos");
        return;
    }
    agregarUsuario(secPobVill,calle,numCasaDept,regiones,provincias,comunas);
    console.log(usuarios);
    setTimeout(()=> location.href="./Misdirecciones.html",2000);
});

//PARA QUE LOS DATOS SIGAN PRESENETES DESPUES DE ACTUALIZAR LA PAGINA
document.addEventListener("DOMContentLoaded", (e) => {
    if(localStorage.getItem("usuarios")){
        usuarios = JSON.parse(localStorage.getItem("usuarios"));
    }
})
