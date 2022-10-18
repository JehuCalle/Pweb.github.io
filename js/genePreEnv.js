console.log("😼");

const formulario = document.querySelector("#formulario");
//const btnIniciarSesion = document.querySelector("#btnIniciarSesion");
const btnCancelar = document.querySelector("#btnCancelar");
const btnAgregarCarga = document.querySelector("#agregarCarga");
const alerta = document.querySelector("#divAlerta");

let usuarios = [];

const agregarUsuario = (agOrigen,agDestino,cDestino,tipoCarga,cantidad,alto,ancho,largo,tipoEmbalaje,valorComercial,peso,flexRadioSiNO,archivo) =>{
    const objetoTodo = {
        AgenciaOrigen: agOrigen,
        AgenciaDestino: agDestino,
        ComunaDestino: cDestino,
        TipoCarg: tipoCarga,
        Cantidad: cantidad,
        Alto: alto,
        Ancho: ancho,
        Largo: largo,
        TipoEmbalaje: tipoEmbalaje,
        ValorComercial: valorComercial,
        Peso: peso,
        ConSinHerramientas: flexRadioSiNO,
        Archivo: archivo,
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
    setTimeout(()=> location.href="./Misordenes.html");
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
    const[agOrigen,agDestino,cDestino,tipoCarga,cantidad,alto,ancho,largo,tipoEmbalaje,valorComercial,peso,flexRadioSiNO,archivo] = [...data.values()];
    if(!(agOrigen).trim() || !(agDestino).trim() || !(cDestino).trim() || !(tipoCarga).trim() || !(cantidad).trim() || !(alto).trim() || !(ancho).trim() || !(largo).trim() || !(tipoEmbalaje).trim() || !(valorComercial).trim() || !(peso).trim()){
        console.log("Completa todos los campos");
        alerta.classList.remove("d-none");
        return;
    }
    agregarUsuario(agOrigen,agDestino,cDestino,tipoCarga,cantidad,alto,ancho,largo,tipoEmbalaje,valorComercial,peso,flexRadioSiNO,archivo);
    console.log(usuarios);
    setTimeout(()=> location.href="./Misordenes.html",500);
});

//PARA QUE LOS DATOS SIGAN PRESENETES DESPUES DE ACTUALIZAR LA PAGINA
document.addEventListener("DOMContentLoaded", (e) => {
    if(localStorage.getItem("usuarios")){
        usuarios = JSON.parse(localStorage.getItem("usuarios"));
    }
})