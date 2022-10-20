console.log("😼");

const formulario = document.querySelector("#formulario");
//const btnIniciarSesion = document.querySelector("#btnIniciarSesion");
const btnCancelar = document.querySelector("#btnCancelar");
const btnAgregarCarga = document.querySelector("#agregarCarga");
const alerta = document.querySelector("#divAlerta");

///////////////////////////////////////////////
const test = document.querySelectorAll(".shadow-sm");
const contenImputs = [];

const test2 = document.querySelectorAll("select");
const contenSelect = [];

const test4 = document.querySelectorAll("input[type='radio']");
const contenFlexRadio = [];
///////////////////////////////////////////////

let usuarios = [];

const agregarUsuario = (aOrigen,aDestino,cDestino,tipoCarga,cantidad,alto,ancho,largo,tipoEmbalaje,valorComercial,peso,flexRadioSiNO,archivo) =>{
    const objetoTodo = {
        AgenciaOrigen: aOrigen,
        AgenciaDestino: aDestino,
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
    //PARA QUE NO SE PUEDA AGREGAR MÁS USUARIOS AL APRETAR INICIAR SESION REPETIDAS VECES
    usuarios.pop();
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
    const[aOrigen,aDestino,cDestino,tipoCarga,cantidad,alto,ancho,largo,tipoEmbalaje,valorComercial,peso,flexRadioSiNO,archivo] = [...data.values()];
///////////////////////////////////////////////
    let i = 0
    contenImputs.splice(0,8);
    while (i < 7) {
        const inputCorr = test[i];
        contenImputs.push(inputCorr);
        if(contenImputs[i].value == ""){
            contenImputs[i].classList.remove("border-dark");
            contenImputs[i].classList.add("border-danger");
            console.log("FALTAN-V1")
        }else if(!contenImputs[i].value == ""){
            contenImputs[i].classList.remove("border-danger");
            contenImputs[i].classList.remove("border-dark");
            contenImputs[i].classList.add("border-success");
            console.log("FALTAN-V2")
        }
        i++
    }
    let a = 0
    contenSelect.splice(0,6);
    while (a < 5) {
        const selectCorr = test2[a];
        contenSelect.push(selectCorr);
        if(contenSelect[a].value == ""){
            contenSelect[a].classList.remove("border-dark");
            contenSelect[a].classList.add("border-danger");
            alerta.classList.remove("d-none");
            console.log("FALTAN-V1")
        }else if(!contenSelect[a].value == ""){
            contenSelect[a].classList.remove("border-danger");
            contenSelect[a].classList.remove("border-dark");
            contenSelect[a].classList.add("border-success");
            alerta.classList.remove("d-none");
            console.log("FALTAN-V2")
        }
        a++
    }
    let c = 0;
    contenFlexRadio.splice(0,3);
    //console.log(contenTextarea)
    //contenTextarea[0].value == "on"
    while (c < 2) {
        const selectCorr = test4[c];
        contenFlexRadio.push(selectCorr);
        if(contenFlexRadio[c].checked === false){
            contenFlexRadio[c].classList.remove("border-success");
            contenFlexRadio[c].classList.add("border-dark");
            console.log("FALTAN-V1");
        }else if(!contenFlexRadio[c].checked === false){
            contenFlexRadio[c].classList.remove("border-danger");
            contenFlexRadio[c].classList.remove("border-dark");
            contenFlexRadio[c].classList.add("border-success");
            alerta.classList.remove("d-none");
            console.log("FALTAN-V2");
        }
        c++;
    }

    if(!contenImputs[0].value == "" && !contenImputs[1].value == "" && !contenImputs[2].value == "" && !contenImputs[3].value == "" && !contenImputs[4].value == "" && !contenImputs[5].value == "" && !contenImputs[6].value == "" && !contenFlexRadio[0].value == "" && !contenFlexRadio[1].value == "" && !contenSelect[0].value == "" && !contenSelect[1].value == "" && !contenSelect[2].value == "" && !contenSelect[3].value == "" && !contenSelect[4].value == ""){
        console.log("FIN")
        agregarUsuario(aOrigen,aDestino,cDestino,tipoCarga,cantidad,alto,ancho,largo,tipoEmbalaje,valorComercial,peso,flexRadioSiNO,archivo);
        alerta.classList.add("d-none");
        console.log(usuarios)
        setTimeout(()=> location.href="./Misordenes.html",2000);
        return;
    }
///////////////////////////////////////////////
});

//PARA QUE LOS DATOS SIGAN PRESENETES DESPUES DE ACTUALIZAR LA PAGINA
document.addEventListener("DOMContentLoaded", (e) => {
    if(localStorage.getItem("usuarios")){
        usuarios = JSON.parse(localStorage.getItem("usuarios"));
    }
})