console.log("😼");

const formulario1 = document.querySelector("#formulario");
const btnCancelar1 = document.querySelector("#btnCancelar1");
const btnAceptar1 = document.querySelector("#btnAceptar1");

const btnActuaInfo = document.querySelector("#btnActuaInfo");
const btnModifContra = document.querySelector("#btnModifContra");

const alerta1 = document.querySelector("#divAlerta1");
const alerta2 = document.querySelector("#divAlerta2");
// INPUTS
const delInputs = document.querySelectorAll("input");
const contenDelImputs = [];

const emailUser1 = document.querySelector("#correo");
const emailUser2 = document.querySelector("#correoContact");
const contenEmail = [];
const validacionUserEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

const telefUser = document.querySelector("#telefono");
const telefContUser = document.querySelector("#telefonoContact");
const celularUser = document.querySelector("#celular");
const celularContactUser = document.querySelector("#celularContact");
const contenTelCel = [];
const validacionUserTel = /^(\s?)(0?9)(\s?)[98765432]\d{7}$/;
// INPUTS
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
const validacionUserPass = /^(\d|(([A-Za-zñÑáéíóúÁÉÍÓÚ\s])\3?(?!\3)))+$/;


const porteFormulario1 = document.querySelector("#modal1");
const porteFormulario2 = document.querySelector("#modal2");
const tamañoPantalla = document.querySelector(".columnaDiv");
if (screen.width < 767){
    console.log("Pequeña");
    tamañoPantalla.classList.remove("columnaDiv");
    porteFormulario1.classList.add("w-100");
    porteFormulario2.classList.add("w-100");
}
if (screen.width > 767){
    console.log("Grande");
    porteFormulario1.classList.remove("w-75");
}

    //=>=>=>=>=>=>=>2<=<=<=<=<=<=<=
    let url = 'https://localhost:44385/rut?rut=17748040-1';
    fetch(url)    
    .then((res)=> res.json())
    .then((data)=> mostrarData(data))
    .catch(error =>console.log(error))

    const mostrarData = (data) => {
        console.log(data)
        //const textest = document.querySelector("#rutTxt");    //OPCION 2?
        const body = document.querySelector("body");
        //textest.textContent = data.rut;                       //OPCION 1?
        body.querySelector("#rutTxt").textContent = data.rut;   //OPCION 2?
        body.querySelector("#razsocialTxt").textContent = data.razonSoc;
        if (data.frecuente == 0){
            frecuencia = "No"
            body.querySelector("#clienFrecu").textContent = frecuencia;
        }
        if (data.frecuente == 1){
            frecuencia = "Si"
            body.querySelector("#clienFrecu").textContent = frecuencia;
        }
        body.querySelector("#giroTxt").textContent = data.giro;
        body.querySelector("#direccionTxt").textContent = data.direccion;
        body.querySelector("#comunaTxt").textContent = data.comuna;
        body.querySelector("#ciudadTxt").textContent = data.ciudad;
        body.querySelector("#provinciaTxt").textContent = data.provincia;
        body.querySelector("#regionTxt").textContent = data.region;

        body.querySelector("#telefonoTxt").textContent = data.telefono1;
        body.querySelector("#correoTxt").textContent = data.mailCliente;
        body.querySelector("#correoConTxt").textContent = data.contactoOpMail;
        if(data.contactoOpMail == ""){
            body.querySelector("#correoConTxt").textContent = "-";
        }

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
    //limpiarForm();
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
    contenImputs.splice(0,4);
    while (i < 3) {
        const inputCorr = test[i];
        contenImputs.push(inputCorr);
        if(contenImputs[i].value == ""){
            contenImputs[i].classList.remove("border-dark");
            contenImputs[i].classList.add("border-danger");
            alerta2.textContent = "Campos sin completar";
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

            //VALIDAR EMAIL
        let c = 0;
        contenEmail.splice(0,2);
        while (c < 1) {
        const inputCorr = emailUser1;
        contenEmail.push(inputCorr);
        if(!validacionUserEmail.test(contenEmail[0].value) || contenEmail[0].value == ""){
            contenEmail[c].classList.remove("border-dark");
            contenEmail[c].classList.add("border-danger");
            alerta2.classList.remove("d-none");
            alerta2.textContent = "Formato del correo incorrecto";
            console.log("CORREO INC");
        }else if(validacionUserEmail.test(contenEmail[0].value)){
            contenEmail[c].classList.remove("border-danger");
            contenEmail[c].classList.remove("border-dark");
            contenEmail[c].classList.add("border-success");
            console.log("CORREO CORR");
        }
        
        if(!emailUser2.value == ""){
            if(!validacionUserEmail.test(emailUser2.value)){
                emailUser2.classList.remove("border-dark");
                emailUser2.classList.add("border-danger");
                alerta2.classList.remove("d-none");
                alerta2.textContent = "Formato del correo opcional incorrecto";
                console.log("CORREO OPC INC");
            }else if(validacionUserEmail.test(emailUser2.value)){
                emailUser2.classList.remove("border-danger");
                emailUser2.classList.remove("border-dark");
                emailUser2.classList.add("border-success");
                alerta2.classList.remove("d-none");
                console.log("CORREO OPC CORR");
            }
        }else{
            console.log("Correo opcional no deseado")
            emailUser2.classList.remove("border-danger");
            emailUser2.classList.remove("border-success");
            emailUser2.classList.add("border-dark");
        }
        
        c++;
        }
        //VALIDAR EMAIL

        //VALIDAR TELEFONO-CELULAR
    let m = 0;
    contenTelCel.splice(0,2);
    while (m < 2) {
        contenTelCel.push(telefUser);
        contenTelCel.push(celularUser);
        if(validacionUserTel.test(contenTelCel[m].value) === false){
            contenTelCel[m].classList.remove("border-dark");
            contenTelCel[m].classList.add("border-danger");
            alerta2.classList.remove("d-none");
            alerta2.textContent = "Formato de numero telefonico o celular incorrecto";
            console.log("TEL INC");
        }else if(validacionUserTel.test(contenTelCel[m].value) === true){
            contenTelCel[m].classList.remove("border-danger");
            contenTelCel[m].classList.remove("border-dark");
            contenTelCel[m].classList.add("border-success");
            console.log("TEL CORR");
        }
        m++;
    }
    /*
    if(!telefContUser.value == ""){
        if(!validacionUserTel.test(telefContUser.value) === true){
            telefContUser.classList.remove("border-dark");
            telefContUser.classList.add("border-danger");
            telefContUser.classList.remove("d-none");
            telefContUser.textContent = "Formato del telefono opcional incorrecto";
            console.log("CORREO OPC INC");
        }else if(validacionUserEmail.test(telefContUser.value) === true){
            telefContUser.classList.remove("border-danger");
            telefContUser.classList.remove("border-dark");
            telefContUser.classList.add("border-success");
            alerta2.classList.remove("d-none");
            console.log("CORREO OPC CORR");
        }
    }else{
        console.log("Correo opcional no deseado")
        telefContUser.classList.remove("border-danger");
        telefContUser.classList.remove("border-success");
        telefContUser.classList.add("border-dark");
    }

    if(!celularContactUser.value == ""){
        if(!validacionUserTel.test(celularContactUser.value) === true){
            celularContactUser.classList.remove("border-dark");
            celularContactUser.classList.add("border-danger");
            celularContactUser.classList.remove("d-none");
            celularContactUser.textContent = "Formato del celular opcional incorrecto";
            console.log("CORREO OPC INC");
        }else if(validacionUserEmail.test(celularContactUser.value) === true){
            celularContactUser.classList.remove("border-danger");
            celularContactUser.classList.remove("border-dark");
            celularContactUser.classList.add("border-success");
            alerta2.classList.remove("d-none");
            console.log("CORREO OPC CORR");
        }
    }
    else{
        console.log("Correo opcional no deseado")
        telefContUser.classList.remove("border-danger");
        telefContUser.classList.remove("border-success");
        telefContUser.classList.add("border-dark");
    }
    */
    //VALIDAR TELEFONO

    let a = 0
    contenSelect.splice(0,3);
    while (a < 3) {
        const selectCorr = test2[a];
        contenSelect.push(selectCorr);
        if(contenSelect[a].value == ""){
            contenSelect[a].classList.remove("border-dark");
            contenSelect[a].classList.add("border-danger");
            alerta2.textContent = "Campos sin completar";
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

    if(!emailUser2.value == "" /*|| !telefContUser.value == "" || !celularContactUser.value == "" */){
        if((!contenImputs[0].value == "" && !contenImputs[1].value == "" && !contenImputs[2].value == "" && validacionUserEmail.test(contenEmail[0].value) && !contenSelect[0].value == "" && !contenSelect[1].value == "" && !contenSelect[2].value == "" && validacionUserTel.test(contenTelCel[0].value) === true && validacionUserTel.test(contenTelCel[1].value) === true) /*OPCIONALES OBLIGATORIAS =>*/ && (validacionUserEmail.test(emailUser2.value) === true /* || !validacionUserTel.test(telefContUser.value) === true || !validacionUserTel.test(celularContactUser.value) === true */)){
            console.log("FIN")
            actualizarInformacion(razonSocial,giro,direccion,regiones,provincias,comunas,telefono,telefonoContact,correo,correoContact,celular,celularContact,contactoPago);
            alerta1.classList.remove("d-none");
            alerta1.textContent = "Informacion actualizada correctamente"
            
            alerta2.classList.add("d-none");
            console.log(nuevaInfor)
            //setTimeout(()=> location.href="./Misdatos.html",2000);
            return;
        }
    }else if(emailUser2.value == "" /*&& telefContUser.value == "" && celularContactUser.value == "" */){
        if(!contenImputs[0].value == "" && !contenImputs[1].value == "" && !contenImputs[2].value == "" && validacionUserEmail.test(contenEmail[0].value) && !contenSelect[0].value == "" && !contenSelect[1].value == "" && !contenSelect[2].value == "" && validacionUserTel.test(contenTelCel[0].value) === true && validacionUserTel.test(contenTelCel[1].value) === true){
            console.log("FIN")
            actualizarInformacion(razonSocial,giro,direccion,regiones,provincias,comunas,telefono,telefonoContact,correo,correoContact,celular,celularContact,contactoPago);
            alerta1.classList.remove("d-none");
            alerta1.textContent = "Informacion actualizada correctamente"
            
            alerta2.classList.add("d-none");
            console.log(nuevaInfor)
            //setTimeout(()=> location.href="./Misdatos.html",2000);
            return;
        }
    }

///////////////////////////////////////////////
});

////////////////////////////////// MODIFICAR CONTRASEÑA //////////////////////////////////////

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
        console.log(validacionUserPass.test(contenModContra[c].value))
        if(contenModContra[c].value == ""){
            contenModContra[c].classList.remove("border-dark");
            contenModContra[c].classList.remove("border-success");
            contenModContra[c].classList.add("border-danger");
            alerta3.textContent = "Campos incompletos";
            alerta3.classList.remove("d-none");
            console.log("IMPUTS VACIOS")
        }else if(validacionUserPass.test(contenModContra[c].value)){
            contenModContra[c].classList.remove("border-dark");
            contenModContra[c].classList.remove("border-success");
            contenModContra[c].classList.add("border-danger");
            alerta3.textContent = "Contraseña no cumple con lo minimo";
            alerta3.classList.remove("d-none");
            console.log("FALTAN MINIMO")
        }else{
            contenModContra[c].classList.remove("border-dark");
            contenModContra[c].classList.remove("border-danger");
            contenModContra[c].classList.add("border-success");
        }
        c++
    }
    

    if((contenModContra[1].value === contenModContra[2].value) && (!contenModContra[1].value == "" && !contenModContra[2].value == "") && (validacionUserPass.test(contenModContra[1].value) === false && validacionUserPass.test(contenModContra[2].value) === false)){
            contenModContra[1].classList.remove("border-dark");
            contenModContra[1].classList.remove("border-danger");
            contenModContra[1].classList.add("border-success");
            contenModContra[2].classList.remove("border-dark");
            contenModContra[2].classList.remove("border-danger");
            contenModContra[2].classList.add("border-success");
            console.log("FIN")
            modContra(passActual,nuevaPass,passRe);
            alerta3.classList.add("d-none");
            console.log(nuevaContra);
        }else if (contenModContra[1].value !== contenModContra[2].value){
            alerta3.textContent = "Nuevas contraseñas no coinciden";
            alerta3.classList.remove("d-none");
            contenModContra[1].classList.remove("border-dark");
            contenModContra[1].classList.remove("border-success");
            contenModContra[1].classList.add("border-danger");
            contenModContra[2].classList.remove("border-dark");
            contenModContra[2].classList.remove("border-success");
            contenModContra[2].classList.add("border-danger");
        } 
    
    
    /*
    if(!contenModContra[0].value == "" && !contenModContra[1].value == "" && !contenModContra[2].value == "" && !validacionUserPass.test(contenModContra[0].value) === true && !validacionUserPass.test(contenModContra[1].value) === true && !validacionUserPass.test(contenModContra[2].value) === true){
        console.log("FIN")
        modContra(passActual,nuevaPass,passRe);
        alerta3.classList.add("d-none");
        console.log(nuevaContra);
        //setTimeout(()=> location.href="./Misdatos.html",2000);
        return;
    }
    */
///////////////////////////////////////////////
});

//PARA QUE LOS DATOS SIGAN PRESENETES DESPUES DE ACTUALIZAR LA PAGINA
document.addEventListener("DOMContentLoaded", (e) => {
    if(localStorage.getItem("nuevaInfor")){
        nuevaInfor = JSON.parse(localStorage.getItem("nuevaInfor"));

    }
})
