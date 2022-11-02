console.log("😼");

const formulario = document.querySelector("#formulario");
const btnCancelar = document.querySelector("#btnCancelar");
//const btnEnviar = document.querySelector("#btnEnviar");
const alerta = document.querySelector("#divAlerta");

///////////////////////////////////////////////
const test2 = document.querySelectorAll("select");
const contenSelect = [];

const test = document.querySelectorAll(".shadow-sm");
const contenImputs = [];

const test3 = document.querySelectorAll("#comentario");
const contenTextarea = [];
///////////////////////////////////////////////
const rutUser = document.querySelector("#rut");
const contenRut = [];

const emailUser = document.querySelector("#correo");
const contenEmail = [];
const validacionUserEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

const passNomRe = document.querySelectorAll("input.bg-light");
const contenPass = [];
const validacionUserPass = /^(\d|(([A-Za-zñÑáéíóúÁÉÍÓÚ\s])\3?(?!\3)))+$/;

const telefUser = document.querySelectorAll("#telefono");
const contenTel = [];
const validacionUserTel = /^(\s?)(0?9)(\s?)[98765432]\d{7}$/;

const tamañoPantalla = document.querySelector(".columnaDiv");


if (screen.width < 767){
    console.log("Pequeña"); 
    tamañoPantalla.classList.remove("columnaDiv");
}

let usuarios = [];

const agregarUsuario = (rut,razonSocial,correo,telefono,pass,passRe,nombreContact,direccion,regiones,provincias,comunas,direcRef) =>{
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
        Comuna: comunas,
        DireccionRefe: direcRef
    }
    usuarios.push(objetoTodo);
}

btnCancelar.addEventListener('click',(event) => {
    event.preventDefault();
    setTimeout(()=> location.href="./index.html");
});
/*
btnEnviar.addEventListener('click',(event) => {
    event.preventDefault();
    setTimeout(()=> location.href="./Misdatos.html");
});
*/

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
    const[rut,razonSocial,correo,telefono,pass,passRe,nombreContact,direccion,regiones,provincias,comunas,direcRef] = [...data.values()];
///////////////////////////////////////////////

    //VALIDAR RUT
    var Fn = {
        validaRut : function (rutCompleto) {
            if (!/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test( rutCompleto ))
                return false;
            var tmp 	= rutCompleto.split('-');
            var digv	= tmp[1]; 
            var rut 	= tmp[0];
            if ( digv == 'K' ) digv = 'k' ;
            return (Fn.dv(rut) == digv );
        },
        dv : function(T){
            var M=0,S=1;
            for(;T;T=Math.floor(T/10))
                S=(S+T%10*(9-M++%6))%11;
            return S?S-1:'k';
        }
    }

    let i = 0
    contenRut.splice(0,2);
    while (i < 1) {
        const inputCorr = rutUser;
        contenRut.push(inputCorr);
        if(Fn.validaRut(contenRut[0].value) == false){
            contenRut[i].classList.remove("border-dark");
            contenRut[i].classList.add("border-danger");
            alerta.textContent = "RUT invalido";
            console.log("FALTAN-V1")
        }else if(Fn.validaRut(contenRut[0].value) == true){
            contenRut[i].classList.remove("border-danger");
            contenRut[i].classList.remove("border-dark");
            contenRut[i].classList.add("border-success");
            console.log("FALTAN-V2")
        }
        i++
    }
    //VALIDAR RUT

    //VALIDAR EMAIL
    let c = 0
    contenEmail.splice(0,2);
    while (c < 1) {
    const inputCorr = emailUser;
    contenEmail.push(inputCorr);
    if(!validacionUserEmail.test(contenEmail[0].value)){
        contenEmail[c].classList.remove("border-dark");
        contenEmail[c].classList.add("border-danger");
        alerta.classList.remove("d-none");
        alerta.textContent = "Formato del correo incorrecto";
        console.log("FALTAN-V1");
    }else if(validacionUserEmail.test(contenEmail[0].value)){
        contenEmail[c].classList.remove("border-danger");
        contenEmail[c].classList.remove("border-dark");
        contenEmail[c].classList.add("border-success");
        alerta.classList.add("d-none");
        console.log("FALTAN-V2");
    }
    c++
    }
    //VALIDAR EMAIL

    //VALIDAR PASS
    let p = 0
    contenPass.splice(0,3);
    while (p < 1) {
        const inputCorr = passNomRe[p];
        contenPass.push(inputCorr);
        if(contenPass[p].value == ""){
            alerta.classList.remove("d-none");
            alerta.textContent = "Campos incompletos"
            contenPass[p].classList.remove("border-dark");
            contenPass[p].classList.add("border-danger");
        }else if(!validacionUserPass.test(contenPass[0].value) === false){
            contenPass[p].classList.remove("border-dark");
            contenPass[p].classList.add("border-danger");
            alerta.classList.remove("d-none");
            console.log(!validacionUserPass.test(contenPass[0].value))
            alerta.textContent = "Contraseña no cumple con lo minimo"
            console.log("FALTA-CONTRA-MIN")
        }else if(!validacionUserPass.test(contenPass[0].value) === true){
            contenPass[0].classList.remove("border-dark");
            contenPass[0].classList.remove("border-danger");
            contenPass[0].classList.add("border-success");
            alerta.classList.add("d-none");
            console.log("CUMPLE-CONTRA-MIN");
        }
        if(p===0){
            p++
            const inputCorr = passNomRe[p];
            contenPass.push(inputCorr);
            aaaa();
        }
        p++
    }

    function aaaa(){
        let a = contenPass[0].value;
        let b = contenPass[1].value;
        if(a !== b){
            contenPass[1].classList.remove("border-dark");
            contenPass[1].classList.remove("border-success");
            contenPass[1].classList.add("border-danger");
            alerta.textContent = "Contraseña no coinciden"
            alerta.classList.remove("d-none");
            console.log("FALTA-CONTRA-COINCI")
        }else if(!validacionUserPass.test(contenPass[1].value) === false && contenPass[1].value == ""){
            contenPass[1].classList.remove("border-dark");
            contenPass[1].classList.add("border-danger");
            alerta.classList.remove("d-none");
            alerta.textContent = "Contraseña no cumple con lo minimo"
            console.log("FALTA-CONTRA2-MIN")
        }else if(a === b && !contenPass[1].value == ""){
            contenPass[1].classList.remove("border-danger");
            contenPass[1].classList.remove("border-dark");
            contenPass[1].classList.add("border-success");
            alerta.classList.remove("d-none");
            console.log("CUMPLE-CONTRA-COINCI")
        }
    }
    //VALIDAR PASS
    
    //VALIDAR TELEFONO
    let m = 0
    contenTel.splice(0,2);
    while (m < 1) {
    const inputCorr = telefUser[m];
    contenTel.push(inputCorr);
    console.log(validacionUserTel.test(contenTel[m].value))
    if(validacionUserTel.test(contenTel[m].value) === false){
        contenTel[m].classList.remove("border-dark");
        contenTel[m].classList.add("border-danger");
        alerta.classList.remove("d-none");
        alerta.textContent = "Numero telefonico no valido";
        console.log("FALTAN-V1");
    }else if(validacionUserTel.test(contenTel[m].value) === true){
        contenTel[m].classList.remove("border-danger");
        contenTel[m].classList.remove("border-dark");
        contenTel[m].classList.add("border-success");
        alerta.classList.add("d-none");
        console.log("FALTAN-V2");
    }
    m++
    }
    //VALIDAR TELEFONO

    let x = 0
    contenImputs.splice(0,4);
    while (x < 3) {
        const inputCorr = test[x];
        contenImputs.push(inputCorr);
        if(contenImputs[x].value == ""){
            contenImputs[x].classList.remove("border-dark");
            contenImputs[x].classList.add("border-danger");
            alerta.classList.remove("d-none");
            alerta.textContent = "Campos sin completar"
            console.log("FALTAN-V1")
        }else if(!contenImputs[x].value == ""){
            contenImputs[x].classList.remove("border-danger");
            contenImputs[x].classList.remove("border-dark");
            contenImputs[x].classList.add("border-success");
            alerta.classList.add("d-none");
            console.log("FALTAN-V2")
        }
        x++
    }
    //////////////////////////

    let l = 0
    contenSelect.splice(0,3);
    while (l < 3) {
        const selectCorr = test2[l];
        contenSelect.push(selectCorr);
        if(contenSelect[l].value == ""){
            contenSelect[l].classList.remove("border-dark");
            contenSelect[l].classList.add("border-danger");
            alerta.classList.remove("d-none");
            console.log("FALTAN-V1")
        }else if(!contenSelect[l].value == ""){
            contenSelect[l].classList.remove("border-danger");
            contenSelect[l].classList.remove("border-dark");
            contenSelect[l].classList.add("border-success");
            alerta.classList.remove("d-none");
            console.log("FALTAN-V2")
        }
        l++
    }
    let t = 0
    contenTextarea.splice(0,2);
    while (t < 1) {
        const selectCorr = test3[t];
        contenTextarea.push(selectCorr);
        if(contenTextarea[t].value == ""){
            contenTextarea[t].classList.remove("border-dark");
            contenTextarea[t].classList.add("border-danger");
            alerta.classList.remove("d-none");
            console.log("FALTAN-V1")
        }else if(!contenTextarea[t].value == ""){
            contenTextarea[t].classList.remove("border-danger");
            contenTextarea[t].classList.remove("border-dark");
            contenTextarea[t].classList.add("border-success");
            alerta.classList.remove("d-none");
            console.log("FALTAN-V2")
        }
        t++
    }

    if(!contenImputs[0].value == "" && !contenImputs[1].value == "" && !contenImputs[2].value == "" &&  Fn.validaRut(contenRut[0].value) == true && validacionUserEmail.test(contenEmail[0].value) && validacionUserTel.test(contenTel[0].value) && !contenPass[0].value == "" && !contenPass[1].value == "" && !validacionUserPass.test(contenPass[0].value) === true && !validacionUserPass.test(contenPass[1].value) === true && !contenSelect[0].value == "" && !contenSelect[1].value == "" && !contenSelect[2].value == "" && !contenTextarea[0].value == ""){
        console.log("FIN")
        agregarUsuario(rut,razonSocial,correo,telefono,pass,passRe,nombreContact,direccion,regiones,provincias,comunas,direcRef);
        alerta.classList.add("d-none");
        console.log(usuarios)
        setTimeout(()=> location.href="./Misdatos.html",2000);
        return;
    }
    //////////////////////////
///////////////////////////////////////////////
});

//PARA QUE LOS DATOS SIGAN PRESENETES DESPUES DE ACTUALIZAR LA PAGINA
document.addEventListener("DOMContentLoaded", (e) => {
    if(localStorage.getItem("usuarios")){
        usuarios = JSON.parse(localStorage.getItem("usuarios"));

    }
})