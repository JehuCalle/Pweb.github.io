console.log("😼");

const formulario1 = document.querySelector("#formulario");
const btnCancelar1 = document.querySelector("#btnCancelar1");
const btnAceptar1 = document.querySelector("#btnAceptar1");

const btnActuaInfo = document.querySelector("#btnActuaInfo");
const btnModifContra = document.querySelector("#btnModifContra");

const alerta1 = document.querySelector("#divAlerta1");
const alerta2 = document.querySelector("#divAlerta2");

const delInputs = document.querySelectorAll("input");
const contenDelImputs = [];

///////////////////////////////////////////////
const test2 = document.querySelectorAll("select");
const contenSelect = [];

const test = document.querySelectorAll(".shadow-sm");
const contenImputs = [];

let nuevaInfor = [];
///////////////////////////////////////////////

///////////////////////////////////////////////
const formulario2 = document.querySelector("#formulario2");
const alerta3 = document.querySelector("#divAlerta3");
const btnAceptar2 = document.querySelector("#btnAceptar2");
const passActualUser = document.querySelector("#passActual");
const nuevaPassUser = document.querySelector("#nuevaPass");
const passReUser = document.querySelector("#passRe");
const contenModContra = [];
const test3 = document.querySelectorAll(".shadow-none");
let nuevaContra = [];
///////////////////////////////////////////////

const porteFormulario1 = document.querySelector("#modal1");
const porteFormulario2 = document.querySelector("#modal2");
const tamañoPantalla = document.querySelector(".columnaDiv");
if (screen.width < 767){
    console.log("Pequeña");
    tamañoPantalla.classList.remove("columnaDiv");
}
if (screen.width > 767){
    console.log("Grande");
    porteFormulario1.classList.remove("w-75");
}

const actualizarInformacion = (razonSocial,direccion,provincias,telefono,correo,celular,contactoPago,giro,regiones,comunas,telefonoContact,correoContact,celularContact) =>{
    const objetoTodo = {
        RazonSocial: razonSocial,
        Direccion: direccion,
        Provincia: provincias,
        Telefono: telefono,
        Correo: correo,
        Celular: celular,
        ContactoPago: contactoPago,
        Giro: giro,
        Region: regiones,
        Comunas: comunas,
        TelefonoContact: telefonoContact,
        CorreoContact: correoContact,
        CelularContact: celularContact
    }
    nuevaInfor.push(objetoTodo);
}
/*  =>=>=>=>=>=>=>2<=<=<=<=<=<=<=
let url = 'https://localhost:44385/rut?rut=17748040-1';

fetch(url)    
.then((res)=> res.json())
.then((data)=> console.log(url));
*/
function limpiarForm(){
    ///////////////////////////////////////////////
        alerta2.classList.add("d-none");
    
        let i = 0
        contenDelImputs.splice(0,14);
        while (i < 13) {
            const inputCorr = delInputs[i];
            contenDelImputs.push(inputCorr);
            contenDelImputs[i].value = "";
            contenDelImputs[i].classList.add("border-dark");
            i++
        }
        let a = 0
        contenSelect.splice(0,3);
        while (a < 3) {
            const selectCorr = test2[a];
            contenSelect.push(selectCorr);
            contenSelect[a].value = "";
            contenSelect[a].classList.add("border-dark");
            a++
        }
    ///////////////////////////////////////////////
}
btnActuaInfo.addEventListener("click",(e)=>{
    e.preventDefault();
    limpiarForm();
});
btnModifContra.addEventListener("click",(e)=>{
    e.preventDefault();
    limpiarForm();
});

btnAceptar1.addEventListener("click",(e)=>{
    e.preventDefault();
    alerta2.classList.add("d-none");

    //console.log("Testeo Formulario");
    //PARA QUE NO SE PUEDA AGREGAR MÁS USUARIOS AL APRETAR INICIAR SESION REPETIDAS VECES
    nuevaInfor.pop();
    //CAPTURA TODOS LOS INPUT DE FORMULARIO
    const data = new FormData(formulario1);
    /*  =>=>=>=>=>=>=>1<=<=<=<=<=<=<=
    let test2 = JSON.stringify(usuarios);

    fetch('http://127.0.0.1:5500/Regis.html',{
        method: "POST",
        body: test2,
    })*/


    
    
    
    //SE ALMACENAN TODOS LOS DATOS DE LOS INPUT EN EL [...data.values()] Y SE TRANSLADAN A [todo]
    const[razonSocial,giro,direccion,regiones,provincias,comunas,telefono,telefonoContact,correo,correoContact,celular,celularContact,contactoPago] = [...data.values()];
///////////////////////////////////////////////
    let i = 0
    contenImputs.splice(0,7);
    while (i < 6) {
        const inputCorr = test[i];
        contenImputs.push(inputCorr);
        if(contenImputs[i].value == ""){
            contenImputs[i].classList.remove("border-dark");
            contenImputs[i].classList.add("border-danger");
            alerta2.classList.remove("d-none");
            console.log("INPUTS INC")
        }else if(!contenImputs[i].value == ""){
            contenImputs[i].classList.remove("border-danger");
            contenImputs[i].classList.remove("border-dark");
            contenImputs[i].classList.add("border-success");
            alerta2.classList.remove("d-none");
            console.log("INPUTS CORR")
        }
        i++
    }
    let a = 0
    contenSelect.splice(0,3);
    while (a < 3) {
        const selectCorr = test2[a];
        contenSelect.push(selectCorr);
        if(contenSelect[a].value == ""){
            contenSelect[a].classList.remove("border-dark");
            contenSelect[a].classList.add("border-danger");
            alerta2.classList.remove("d-none");
            console.log("SELECT INC")
        }else if(!contenSelect[a].value == ""){
            contenSelect[a].classList.remove("border-danger");
            contenSelect[a].classList.remove("border-dark");
            contenSelect[a].classList.add("border-success");
            alerta2.classList.remove("d-none");
            console.log("SELECT CORR")
        }
        a++
    }

    if(!contenImputs[0].value == "" && !contenImputs[1].value == "" && !contenImputs[2].value == "" && !contenImputs[3].value == "" && !contenImputs[4].value == "" && !contenImputs[5].value == "" && !contenSelect[0].value == "" && !contenSelect[1].value == "" && !contenSelect[2].value == ""){
        console.log("FIN")
        actualizarInformacion(razonSocial,giro,direccion,regiones,provincias,comunas,telefono,telefonoContact,correo,correoContact,celular,celularContact,contactoPago);
        alerta1.classList.remove("d-none");
        alerta1.textContent = "Informacion actualizada correctamente"

        alerta2.classList.add("d-none");
        console.log(nuevaInfor)
        //setTimeout(()=> location.href="./Misdatos.html",2000);
        return;
    }

///////////////////////////////////////////////
});

const modContra = (passActual,nuevaPass,passRe) =>{
    const objetoTodo = {
        PassActual: passActual,
        NuevaPass: nuevaPass,
        PassRe: passRe
    }
    nuevaContra.push(objetoTodo);
}
btnAceptar2.addEventListener("click",(e)=>{
    e.preventDefault();
    alerta3.classList.add("d-none");
    //console.log("Testeo Formulario");

    //PARA QUE NO SE PUEDA AGREGAR MÁS USUARIOS AL APRETAR INICIAR SESION REPETIDAS VECES
    nuevaContra.pop();

    //CAPTURA TODOS LOS INPUT DE FORMULARIO
    const data = new FormData(formulario2);
    /*
    let test2 = JSON.stringify(usuarios);

    fetch('http://127.0.0.1:5500/Regis.html',{
        method: "POST",
        body: test2,
    })
    */
    //SE ALMACENAN TODOS LOS DATOS DE LOS INPUT EN EL [...data.values()] Y SE TRANSLADAN A [todo]
    const[passActual,nuevaPass,passRe] = [...data.values()];
///////////////////////////////////////////////
    let c = 0
    contenModContra.splice(0,4);
    while (c < 3) {
        const inputCorr = test3[c];
        contenModContra.push(inputCorr);
        if(contenModContra[c].value == ""){
            contenModContra[c].classList.remove("border-dark");
            contenModContra[c].classList.add("border-danger");
            alerta3.classList.remove("d-none");
            console.log("FALTAN-V1")
        }else if(!contenModContra[c].value == ""){
            contenModContra[c].classList.remove("border-danger");
            contenModContra[c].classList.remove("border-dark");
            contenModContra[c].classList.add("border-success");
            alerta3.classList.remove("d-none");
            console.log("FALTAN-V2")
        }
        c++
    }
    
    if(!contenModContra[0].value == "" && !contenModContra[1].value == "" && !contenModContra[2].value == ""){
        console.log("FIN")
        modContra(passActual,nuevaPass,passRe);
        alerta3.classList.add("d-none");
        console.log(nuevaContra);
        //setTimeout(()=> location.href="./Misdatos.html",2000);
        return;
    }
///////////////////////////////////////////////
});

//PARA QUE LOS DATOS SIGAN PRESENETES DESPUES DE ACTUALIZAR LA PAGINA
document.addEventListener("DOMContentLoaded", (e) => {
    if(localStorage.getItem("nuevaInfor")){
        nuevaInfor = JSON.parse(localStorage.getItem("nuevaInfor"));

    }
})
