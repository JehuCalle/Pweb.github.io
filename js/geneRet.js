console.log("😼");

const alerta1 = document.querySelector("#divAlerta1");
///////////////////////////////////////////////
const formulario1 = document.querySelector("#formulario1");
const btnCancelar1 = document.querySelector("#btnCancelar1");
const btnAceptar1 = document.querySelector("#btnAceptar1");
const btnAgregarCarga1 = document.querySelector("#agregarCarga");
const alerta2 = document.querySelector("#divAlerta2");
///////////////////////////////////////////////
const test = document.querySelectorAll("input.shadow-none");
const contenImputs = [];

const test2 = document.querySelectorAll("select.shadow-none");
const contenSelect = [];

const test3 = document.querySelectorAll("textarea.shadow-none");
const contenTextarea = [];

const test4 = document.querySelectorAll("input[name='flexRadioSiNO']");
const contenFlexRadio = [];

let agendarRetiroCM = [];
///////////////////////////////////////////////
const formulario2 = document.querySelector("#formulario2");
const btnCancelar2 = document.querySelector("#btnCancelar2");
const btnAceptar2 = document.querySelector("#btnAceptar2");
const btnAgregarCarga2 = document.querySelector("#agregarCarga2");
const alerta3 = document.querySelector("#divAlerta3");
///////////////////////////////////////////////
const test5 = document.querySelectorAll("input.shadow-sm");
const contenImputs2 = [];

const test6 = document.querySelectorAll("select.shadow-sm");
const contenSelect2 = [];

const test7 = document.querySelectorAll("textarea.shadow-sm");
const contenTextarea2 = [];

const test8 = document.querySelectorAll("input[name='flexRadioSiNO2']");
const contenFlexRadio2 = [];

let agendarRetiroCS = [];
///////////////////////////////////////////////



const tamañoPantalla = document.querySelector(".columnaDiv");
const tamañoPantalla3 = document.querySelector(".columnaDiv3");
if (screen.width < 767){
    console.log("Pequeña");
    tamañoPantalla.classList.remove("columnaDiv");
    tamañoPantalla3.classList.remove("columnaDiv3");
}



const agregarUsuario = (aOrigen,aDestino,cDestino,tipoCarga,ancho,valorComercial,cantidad,largo,peso,alto,tipoEmbalaje,flexRadioSiNO,archivo,descripcion) =>{
    const objetoTodo = {
        AgenciaOrigen: aOrigen,
        AgenciaDestino: aDestino,
        ComunaDestino: cDestino,
        TipoCarg: tipoCarga,
        Ancho: ancho,
        ValorComercial: valorComercial,
        Cantidad: cantidad,
        Largo: largo,
        Peso: peso,
        Alto: alto,
        TipoEmbalaje: tipoEmbalaje,
        ConSinHerramientas: flexRadioSiNO,
        Archivo: archivo,
        Descripcion: descripcion,
    }
    agendarRetiroCM.push(objetoTodo);
}

/*
btnAgregarCarga.addEventListener('click',(event) => {
    event.preventDefault();
    console.log("Paralalepipedo");
});
*/
/*
btnIniciarSesion.addEventListener('click',(event) => {
    event.preventDefault();
    setTimeout(()=> location.href="./index.html");
});
*/

btnAceptar1.addEventListener("click",(e)=>{
    e.preventDefault();
    alerta2.classList.add("d-none");
    //console.log("Testeo Formulario");

    //PARA QUE NO SE PUEDA AGREGAR MÁS USUARIOS AL APRETAR INICIAR SESION REPETIDAS VECES
    agendarRetiroCM.pop();

    //CAPTURA TODOS LOS INPUT DE FORMULARIO
    const data = new FormData(formulario1);
    /*
    let test2 = JSON.stringify(agendarRetiroCM);

    fetch('http://127.0.0.1:5500/Regis.html',{
        method: "POST",
        body: test2,
    })
    */
    //SE ALMACENAN TODOS LOS DATOS DE LOS INPUT EN EL [...data.values()] Y SE TRANSLADAN A [todo]
    const[aOrigen,aDestino,cDestino,tipoCarga,ancho,valorComercial,cantidad,largo,peso,alto,tipoEmbalaje,flexRadioSiNO,archivo,descripcion] = [...data.values()];

///////////////////////////////////////////////
    let i = 0;
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
        i++;
    }
    let a = 0;
    contenSelect.splice(0,6);
    while (a < 5) {
        const selectCorr = test2[a];
        contenSelect.push(selectCorr);
        if(contenSelect[a].value == ""){
            contenSelect[a].classList.remove("border-dark");
            contenSelect[a].classList.add("border-danger");
            alerta2.classList.remove("d-none");
            console.log("FALTAN-V1")
        }else if(!contenSelect[a].value == ""){
            contenSelect[a].classList.remove("border-danger");
            contenSelect[a].classList.remove("border-dark");
            contenSelect[a].classList.add("border-success");
            alerta2.classList.remove("d-none");
            console.log("FALTAN-V2")
        }
        a++;
    }
    let b = 0;
    contenTextarea.splice(0,2);
    //console.log(contenTextarea)
    //contenTextarea[0].value == "on"
    while (b < 1) {
        const selectCorr = test3[b];
        contenTextarea.push(selectCorr)
        if(contenTextarea[b].value == ""){
            contenTextarea[b].classList.remove("border-dark");
            contenTextarea[b].classList.add("border-danger");
            alerta2.classList.remove("d-none");
            console.log("FALTAN-V1")
        }else if(!contenTextarea[b].value == ""){
            contenTextarea[b].classList.remove("border-danger");
            contenTextarea[b].classList.remove("border-dark");
            contenTextarea[b].classList.add("border-success");
            alerta2.classList.remove("d-none");
            console.log("FALTAN-V2")
        }
        b++;
    }
    let c = 0;
    contenFlexRadio.splice(0,3);
    //console.log(contenTextarea)
    //contenTextarea[0].value == "on"
    while (c < 2) {
        const selectCorr = test4[c];
        contenFlexRadio.push(selectCorr);
        c++;
    }
    if(contenFlexRadio[0].checked === false && contenFlexRadio[1].checked === false){
        alerta2.classList.remove("d-none");
        console.log("F1 FALTAN FLEX RADIO");
    }else if(!contenFlexRadio[0].checked === false || !contenFlexRadio[1].checked === false){
        alerta2.classList.remove("d-none");
        console.log("F1 NO FALTAN FLEX RADIO");
    }

    if((!contenImputs[0].value == "" && !contenImputs[1].value == "" && !contenImputs[2].value == "" && !contenImputs[3].value == "" && !contenImputs[4].value == "" && !contenImputs[5].value == "" && !contenImputs[6].value == "" && !contenSelect[0].value == "" && !contenSelect[1].value == "" && !contenSelect[2].value == "" && !contenSelect[3].value == "" && !contenSelect[4].value == "" && !contenTextarea[0].value == "") && (!contenFlexRadio[0].checked === false || !contenFlexRadio[1].checked === false)){
        console.log("FIN")
        agregarUsuario(aOrigen,aDestino,cDestino,tipoCarga,ancho,valorComercial,cantidad,largo,peso,alto,tipoEmbalaje,flexRadioSiNO,archivo,descripcion);
        alerta2.classList.add("d-none");
        console.log(agendarRetiroCM)
        //setTimeout(()=> location.href="./Misretiros.html",2000);
        return;
    }
///////////////////////////////////////////////
});





const agregarUsuario2 = (aOrigen2,aDestino2,cDestino2,tipoCarga2,ancho2,valorComercial2,cantidad2,largo2,peso2,alto2,tipoEmbalaje2,flexRadioSiNO2,archivo2,descripcion2) =>{
    const objetoTodo = {
        AgenciaOrigen: aOrigen2,
        AgenciaDestino: aDestino2,
        ComunaDestino: cDestino2,
        TipoCarg: tipoCarga2,
        Ancho: ancho2,
        ValorComercial: valorComercial2,
        Cantidad: cantidad2,
        Largo: largo2,
        Peso: peso2,
        Alto: alto2,
        TipoEmbalaje: tipoEmbalaje2,
        ConSinHerramientas: flexRadioSiNO2,
        Archivo: archivo2,
        Descripcion: descripcion2,
    }
    agendarRetiroCS.push(objetoTodo);
}

btnAceptar2.addEventListener("click",(e)=>{
    e.preventDefault();
    alerta2.classList.add("d-none");
    //console.log("Testeo Formulario");

    //PARA QUE NO SE PUEDA AGREGAR MÁS USUARIOS AL APRETAR INICIAR SESION REPETIDAS VECES
    agendarRetiroCS.pop();

    //CAPTURA TODOS LOS INPUT DE FORMULARIO
    const data = new FormData(formulario2);
    /*
    let test2 = JSON.stringify(agendarRetiroCM);

    fetch('http://127.0.0.1:5500/Regis.html',{
        method: "POST",
        body: test2,
    })
    */
    //SE ALMACENAN TODOS LOS DATOS DE LOS INPUT EN EL [...data.values()] Y SE TRANSLADAN A [todo]
    const[aOrigen2,aDestino2,cDestino2,tipoCarga2,ancho2,valorComercial2,cantidad2,largo2,peso2,alto2,tipoEmbalaje2,flexRadioSiNO2,archivo2,descripcion2] = [...data.values()];

///////////////////////////////////////////////
    let u = 0;
    contenImputs2.splice(0,8);
    while (u < 7) {
        const inputCorr = test5[u];
        contenImputs2.push(inputCorr);
        if(contenImputs2[u].value == ""){
            contenImputs2[u].classList.remove("border-dark");
            contenImputs2[u].classList.add("border-danger");
            alerta3.classList.remove("d-none");
            console.log("FALTAN INPUTS")
        }else if(!contenImputs2[u].value == ""){
            contenImputs2[u].classList.remove("border-danger");
            contenImputs2[u].classList.remove("border-dark");
            contenImputs2[u].classList.add("border-success");
            alerta3.classList.remove("d-none");
            console.log("NO FALTAN INPUTS")
        }
        u++;
    }
    let m = 0;
    contenSelect2.splice(0,6);
    while (m < 5) {
        const selectCorr = test6[m];
        contenSelect2.push(selectCorr);
        if(contenSelect2[m].value == ""){
            contenSelect2[m].classList.remove("border-dark");
            contenSelect2[m].classList.add("border-danger");
            alerta3.classList.remove("d-none");
            console.log("FALTAN SELECT")
        }else if(!contenSelect2[m].value == ""){
            contenSelect2[m].classList.remove("border-danger");
            contenSelect2[m].classList.remove("border-dark");
            contenSelect2[m].classList.add("border-success");
            alerta3.classList.remove("d-none");
            console.log("NO FALTAN SELECT")
        }
        m++;
    }
    let q = 0;
    contenTextarea2.splice(0,2);
    //console.log(contenTextarea)
    //contenTextarea[0].value == "on"
    while (q < 1) {
        const selectCorr = test7[q];
        contenTextarea2.push(selectCorr)
        if(contenTextarea2[q].value == ""){
            contenTextarea2[q].classList.remove("border-dark");
            contenTextarea2[q].classList.add("border-danger");
            alerta3.classList.remove("d-none");
            console.log("FALTAN TEXTAREAS")
        }else if(!contenTextarea2[q].value == ""){
            contenTextarea2[q].classList.remove("border-danger");
            contenTextarea2[q].classList.remove("border-dark");
            contenTextarea2[q].classList.add("border-success");
            alerta3.classList.remove("d-none");
            console.log("NO FALTAN TEXTAREAS")
        }
        q++;
    }
    let f = 0;
    contenFlexRadio2.splice(0,3);
    //console.log(contenTextarea)
    //contenTextarea[0].value == "on"
    while (f < 2) {
        const selectCorr = test8[f];
        contenFlexRadio2.push(selectCorr);
        f++;
    }
    if(contenFlexRadio2[0].checked === false && contenFlexRadio2[1].checked === false){
        alerta3.classList.remove("d-none");
        console.log("FALTAN FLEX RADIO");
    }else if(!contenFlexRadio2[0].checked === false || !contenFlexRadio2[1].checked === false){
        alerta3.classList.remove("d-none");
        console.log("NO FALTAN FLEX RADIO");
    }

    if((!contenImputs2[0].value == "" && !contenImputs2[1].value == "" && !contenImputs2[2].value == "" && !contenImputs2[3].value == "" && !contenImputs2[4].value == "" && !contenImputs2[5].value == "" && !contenImputs2[6].value == "" && !contenSelect2[0].value == "" && !contenSelect2[1].value == "" && !contenSelect2[2].value == "" && !contenSelect2[3].value == "" && !contenSelect2[4].value == "" && !contenTextarea2[0].value == "") && (!contenFlexRadio2[0].checked === false || !contenFlexRadio2[1].checked === false)){
        console.log("FIN")
        agregarUsuario2(aOrigen2,aDestino2,cDestino2,tipoCarga2,ancho2,valorComercial2,cantidad2,largo2,peso2,alto2,tipoEmbalaje2,flexRadioSiNO2,archivo2,descripcion2);
        alerta3.classList.add("d-none");
        console.log(agendarRetiroCS)
        //setTimeout(()=> location.href="./Misretiros.html",2000);
        return;
    }
///////////////////////////////////////////////
});
//PARA QUE LOS DATOS SIGAN PRESENETES DESPUES DE ACTUALIZAR LA PAGINA
document.addEventListener("DOMContentLoaded", (e) => {
    if(localStorage.getItem("agendarRetiroCM")){
        agendarRetiroCM = JSON.parse(localStorage.getItem("agendarRetiroCM"));
    }
})