console.log("😼");

const formulario1 = document.querySelector("#formulario1");
const btnCancelar = document.querySelector("#btnCancelar1");
const alerta2 = document.querySelector("#divAlerta2");
const alerta1 = document.querySelector("#divAlerta1");

const btnAceptar1 = document.querySelector("#btnAceptar1");
const btnSolicicuencorr = document.querySelector("#btnSolicicuencorr");

///////////////////////////////////////////////
const test = document.querySelectorAll("input.shadow-none");
const contenImputs = [];

const test2 = document.querySelectorAll("select.shadow-none");
const contenSelect = [];

const test3 = document.querySelectorAll("textarea.shadow-none");
const contenTextarea = [];
///////////////////////////////////////////////

const tamañoPantalla = document.querySelector(".columnaDiv");
if (screen.width < 767){
    console.log("Pequeña");
    tamañoPantalla.classList.remove("columnaDiv");
}

let usuarios = [];

function limpiarForm(){
    ///////////////////////////////////////////////
        const limpiaForm1 = document.querySelectorAll("input.shadow-none")
        const contenDelImputs1 = [];
        let j=0;
        while(j<10){
            const inputCorr = limpiaForm1[j];
            contenDelImputs1.push(inputCorr);
            contenDelImputs1[j].value = "";
            contenDelImputs1[j].classList.add("border-dark");
            j++;
        }

        const limpiaForm2 = document.querySelectorAll("select.shadow-none")
        const contenDelSelect = [];
        let v=0;
        while(v<4){
            const inputCorr2 = limpiaForm2[v];
            contenDelSelect.push(inputCorr2);
            contenDelSelect[v].value = limpiaForm2[0].options[0].value;
            contenDelSelect[v].classList.add("border-dark");
            v++;
        }
        const limpiaForm3 = document.querySelectorAll("#comentario")
        const contenDelTextarea = [];
        let g=0;
        while(g<1){
            const inputCorr2 = limpiaForm3[g];
            contenDelTextarea.push(inputCorr2);
            contenDelTextarea[g].value = "";
            contenDelTextarea[g].classList.add("border-dark");
            g++;
        }
    ///////////////////////////////////////////////
}
btnSolicicuencorr.addEventListener("click",(e)=>{
    alerta2.classList.add("d-none");
    e.preventDefault();
    limpiarForm();
});

const agregarUsuario = (rut,direccion,provincias,tipoCarga,rutContact,apellidos,emailContacto,razonSocial,regiones,comunas,kilosDiarios,nombres,telefono,archivos,comentario) =>{
    const objetoTodo = {
        Rut: rut,
        Direccion: direccion,
        Provincia: provincias,
        TipoCarga: tipoCarga,
        RutContact: rutContact,
        Apellidos: apellidos,
        EmailContacto: emailContacto,
        RazonSocial: razonSocial,
        Region: regiones,
        Comunas: comunas,
        KilosDiarios: kilosDiarios,
        Nombres: nombres,
        Telefono: telefono,
        Archivo: archivos,
        Comentario: comentario
    }
    usuarios.push(objetoTodo);
}

btnAceptar1.addEventListener("click",(e)=>{
    e.preventDefault();
    alerta2.classList.add("d-none");
    //console.log("Testeo Formulario");

    //PARA QUE NO SE PUEDA AGREGAR MÁS USUARIOS AL APRETAR INICIAR SESION REPETIDAS VECES
    usuarios.pop();

    //CAPTURA TODOS LOS INPUT DE FORMULARIO
    const data = new FormData(formulario1);
    /*
    let test2 = JSON.stringify(usuarios);

    fetch('http://127.0.0.1:5500/Regis.html',{
        method: "POST",
        body: test2,
    })
    */
    //SE ALMACENAN TODOS LOS DATOS DE LOS INPUT EN EL [...data.values()] Y SE TRANSLADAN A [todo]
    const[rut,direccion,provincias,tipoCarga,rutContact,apellidos,emailContacto,razonSocial,regiones,comunas,kilosDiarios,nombres,telefono,archivos,comentario] = [...data.values()];
///////////////////////////////////////////////
    let i = 0
    contenImputs.splice(0,11);
    while (i < 10) {
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
    contenSelect.splice(0,5);
    while (a < 4) {
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
        a++
    }
    let b = 0
    contenTextarea.splice(0,2);
    while (b < 1) {
        const selectCorr = test3[b];
        contenTextarea.push(selectCorr);
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
        b++
    }

    if(!contenImputs[0].value == "" && !contenImputs[1].value == "" && !contenImputs[2].value == "" && !contenImputs[3].value == "" && !contenImputs[4].value == "" && !contenImputs[5].value == "" && !contenImputs[6].value == "" && !contenImputs[7].value == "" && !contenImputs[8].value == "" && !contenImputs[9].value == "" && !contenSelect[0].value == "" && !contenSelect[1].value == "" && !contenSelect[2].value == "" && !contenTextarea[0].value == ""){
        console.log("FIN")
        agregarUsuario(rut,direccion,provincias,tipoCarga,rutContact,apellidos,emailContacto,razonSocial,regiones,comunas,kilosDiarios,nombres,telefono,archivos,comentario);
        alerta2.classList.add("d-none");
        alerta1.textContent = "Cuenta corriente solicitada correctamente";
        alerta1.classList.remove("d-none");
        console.log(usuarios)
        //setTimeout(()=> location.href="./Cuencorri.html",2000);
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
