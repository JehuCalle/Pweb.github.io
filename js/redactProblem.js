console.log("😼");

const formulario1 = document.querySelector("#formulario1");
//const btnIniciarSesion = document.querySelector("#btnIniciarSesion");
const btnCancelar1 = document.querySelector("#btnCancelar1");
const btnAceptar1 = document.querySelector("#btnAceptar1");

const btnAgregarProblema = document.querySelector("#btnAgregarProblema");

const alerta2 = document.querySelector("#divAlerta2");
const alerta1 = document.querySelector("#divAlerta1");
///////////////////////////////////////////////
const test = document.querySelectorAll("input.shadow-none");
const contenImputs = [];

const test2 = document.querySelectorAll("select.shadow-none");
const contenSelect = [];

const test3 = document.querySelectorAll("textarea.shadow-none");
const contenTextarea = [];
///////////////////////////////////////////////
let problemasEnvios = [];


const formulario2 = document.querySelector("#formulario2");
//const btnIniciarSesion = document.querySelector("#btnIniciarSesion");
const btnCancelar2 = document.querySelector("#btnCancelar2");
const btnAceptar2 = document.querySelector("#btnAceptar2");

const alerta3 = document.querySelector("#divAlerta3");
///////////////////////////////////////////////
const test4 = document.querySelectorAll("input.shadow-sm");
const contenImputs2 = [];

const test5 = document.querySelectorAll("select.shadow-sm");
const contenSelect2 = [];

const test6 = document.querySelectorAll("textarea.shadow-sm");
const contenTextarea2 = [];
///////////////////////////////////////////////
let problemasRetiros = [];

const tamañoPantalla = document.querySelector(".columnaDiv");
if (screen.width < 767){
    console.log("Pequeña");
    tamañoPantalla.classList.remove("columnaDiv");
}


function limpiarForm(){
    ///////////////////////////////////////////////
        const limpiaForm1 = document.querySelectorAll("input.shadow-none")
        const contenDelImputs1 = [];
        let j=0;
        while(j<7){
            const inputCorr = limpiaForm1[j];
            contenDelImputs1.push(inputCorr);
            contenDelImputs1[j].value = "";
            contenDelImputs1[j].classList.add("border-dark");
            j++;
        }

        const limpiaForm2 = document.querySelectorAll("select.shadow-none")
        const contenDelSelect1 = [];
        let v=0;
        while(v<1){
            const inputCorr2 = limpiaForm2[v];
            contenDelSelect1.push(inputCorr2);
            contenDelSelect1[v].value = limpiaForm2[0].options[0].value;
            contenDelSelect1[v].classList.add("border-dark");
            v++;
        }
        const limpiaForm3 = document.querySelectorAll("#comentario")
        const contenDelTextarea1 = [];
        let g=0;
        while(g<1){
            const inputCorr2 = limpiaForm3[g];
            contenDelTextarea1.push(inputCorr2);
            contenDelTextarea1[g].value = "";
            contenDelTextarea1[g].classList.add("border-dark");
            g++;
        }

        const limpiaForm4 = document.querySelectorAll("input.shadow-sm")
        const contenDelImputs2 = [];
        let y=0;
        while(y<7){
            const inputCorr = limpiaForm4[y];
            contenDelImputs2.push(inputCorr);
            contenDelImputs2[y].value = "";
            contenDelImputs2[y].classList.add("border-dark");
            y++;
        }

        const limpiaForm5 = document.querySelectorAll("select.shadow-sm")
        const contenDelSelect2 = [];
        let k=0;
        while(k<1){
            const inputCorr2 = limpiaForm5[k];
            contenDelSelect2.push(inputCorr2);
            contenDelSelect2[k].value = limpiaForm5[0].options[0].value;
            contenDelSelect2[k].classList.add("border-dark");
            k++;
        }
        const limpiaForm6 = document.querySelectorAll("#comentario2")
        const contenDelTextarea2 = [];
        let p=0;
        while(p<1){
            const inputCorr2 = limpiaForm6[p];
            contenDelTextarea2.push(inputCorr2);
            contenDelTextarea2[p].value = "";
            contenDelTextarea2[p].classList.add("border-dark");
            p++;
        }
    ///////////////////////////////////////////////
}
btnAgregarProblema.addEventListener("click",(e)=>{
    alerta2.classList.add("d-none");
    alerta3.classList.add("d-none");
    e.preventDefault();
    limpiarForm();
});

const agregarUsuario1 = (Envi_UsRut,Envi_UsCelular,tipoProblem,numOrden,Envi_UsNombre,Envi_UsCorreo,boletFacturGuia,archivo,comentario) =>{
    const objetoTodo = {
        RutUsuario: Envi_UsRut,
        CelularUs: Envi_UsCelular,
        TipoProblem: tipoProblem,
        NumOrden: numOrden,
        NombreUs: Envi_UsNombre,
        CorreoUs: Envi_UsCorreo,
        BoletFacturGuia: boletFacturGuia,
        Archivo: archivo,
        Comentario: comentario,
    }
    problemasEnvios.push(objetoTodo);
}

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
    problemasEnvios.pop();
    //CAPTURA TODOS LOS INPUT DE FORMULARIO
    const data = new FormData(formulario1);
    /*
    let test2 = JSON.stringify(problemasEnvios);

    fetch('http://127.0.0.1:5500/Regis.html',{
        method: "POST",
        body: test2,
    })
    */
    //SE ALMACENAN TODOS LOS DATOS DE LOS INPUT EN EL [...data.values()] Y SE TRANSLADAN A [todo]
    const[Envi_UsRut,Envi_UsCelular,tipoProblem,numOrden,Envi_UsNombre,Envi_UsCorreo,boletFacturGuia,archivo,comentario] = [...data.values()];
    
    ///////////////////////////////////////////////
    let i = 0;
    contenImputs.splice(0,4);
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
    contenSelect.splice(0,3);
    while (a < 1) {
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
    if(!contenImputs[0].value == "" && !contenImputs[1].value == "" && !contenImputs[2].value == "" && !contenImputs[3].value == "" && !contenImputs[4].value == "" && !contenImputs[5].value == "" && !contenImputs[6].value == "" && !contenSelect[0].value == "" && !contenTextarea[0].value == ""){
        console.log("FIN")
        agregarUsuario1(Envi_UsRut,Envi_UsCelular,tipoProblem,numOrden,Envi_UsNombre,Envi_UsCorreo,boletFacturGuia,archivo,comentario);
        alerta2.classList.add("d-none");
        alerta1.textContent = "Problema agendada correctamente";
        alerta1.classList.remove("d-none");
        console.log(problemasEnvios)
        //setTimeout(()=> location.href="./problemasEnvios.html",2000);
        return;
    }
///////////////////////////////////////////////

});

const agregarUsuario2 = (Reti_UsRut,Reti_UsCelular,tipoProblem2,numRetiro,Reti_UsNombre,Reti_UsCorreo,boletFacturGuia2,archivo2,comentario2) =>{
    const objetoTodo = {
        RutUsuario: Reti_UsRut,
        CelularUs: Reti_UsCelular,
        TipoProblem: tipoProblem2,
        NumRetiro: numRetiro,
        NombreUs: Reti_UsNombre,
        CorreoUs: Reti_UsCorreo,
        BoletFacturGuia: boletFacturGuia2,
        Archivo: archivo2,
        Comentario: comentario2,
    }
    problemasRetiros.push(objetoTodo);
}

btnAceptar2.addEventListener("click",(e)=>{
    e.preventDefault();
    alerta3.classList.add("d-none");
    //console.log("Testeo Formulario");
    //PARA QUE NO SE PUEDA AGREGAR MÁS USUARIOS AL APRETAR INICIAR SESION REPETIDAS VECES
    problemasRetiros.pop();
    //CAPTURA TODOS LOS INPUT DE FORMULARIO
    const data = new FormData(formulario2);
    /*
    let test2 = JSON.stringify(problemasRetiros);

    fetch('http://127.0.0.1:5500/Regis.html',{
        method: "POST",
        body: test2,
    })
    */
    //SE ALMACENAN TODOS LOS DATOS DE LOS INPUT EN EL [...data.values()] Y SE TRANSLADAN A [todo]
    const[Reti_UsRut,Reti_UsCelular,tipoProblem2,numRetiro,Reti_UsNombre,Reti_UsCorreo,boletFacturGuia2,archivo2,comentario2] = [...data.values()];
    
    ///////////////////////////////////////////////
    let t = 0;
    contenImputs2.splice(0,4);
    while (t < 7) {
        const inputCorr = test4[t];
        contenImputs2.push(inputCorr);
        if(contenImputs2[t].value == ""){
            contenImputs2[t].classList.remove("border-dark");
            contenImputs2[t].classList.add("border-danger");
            alerta3.classList.remove("d-none");
            console.log("FALTAN-V1")
        }else if(!contenImputs2[t].value == ""){
            contenImputs2[t].classList.remove("border-danger");
            contenImputs2[t].classList.remove("border-dark");
            contenImputs2[t].classList.add("border-success");
            alerta3.classList.remove("d-none");
            console.log("FALTAN-V2")
        }
        t++;
    }
    let v = 0;
    contenSelect2.splice(0,3);
    while (v < 1) {
        const selectCorr = test5[v];
        contenSelect2.push(selectCorr);
        if(contenSelect2[v].value == ""){
            contenSelect2[v].classList.remove("border-dark");
            contenSelect2[v].classList.add("border-danger");
            alerta3.classList.remove("d-none");
            console.log("FALTAN-V1")
        }else if(!contenSelect2[v].value == ""){
            contenSelect2[v].classList.remove("border-danger");
            contenSelect2[v].classList.remove("border-dark");
            contenSelect2[v].classList.add("border-success");
            alerta3.classList.remove("d-none");
            console.log("FALTAN-V2")
        }
        v++;
    }
    let q = 0;
    contenTextarea2.splice(0,2);
    //console.log(contenTextarea)
    //contenTextarea[0].value == "on"
    while (q < 1) {
        const selectCorr = test6[q];
        contenTextarea2.push(selectCorr)
        if(contenTextarea2[q].value == ""){
            contenTextarea2[q].classList.remove("border-dark");
            contenTextarea2[q].classList.add("border-danger");
            alerta3.classList.remove("d-none");
            console.log("FALTAN-V1")
        }else if(!contenTextarea2[q].value == ""){
            contenTextarea2[q].classList.remove("border-danger");
            contenTextarea2[q].classList.remove("border-dark");
            contenTextarea2[q].classList.add("border-success");
            alerta3.classList.remove("d-none");
            console.log("FALTAN-V2")
        }
        q++;
    }
    if(!contenImputs2[0].value == "" && !contenImputs2[1].value == "" && !contenImputs2[2].value == "" && !contenImputs2[3].value == "" && !contenImputs2[4].value == "" && !contenImputs2[5].value == "" && !contenImputs2[6].value == "" && !contenSelect2[0].value == "" && !contenTextarea2[0].value == ""){
        console.log("FIN")
        agregarUsuario2(Reti_UsRut,Reti_UsCelular,tipoProblem2,numRetiro,Reti_UsNombre,Reti_UsCorreo,boletFacturGuia2,archivo2,comentario2);
        alerta3.classList.add("d-none");
        alerta1.textContent = "Problema agendada correctamente";
        alerta1.classList.remove("d-none");
        console.log(problemasRetiros)
        //setTimeout(()=> location.href="./problemasRetiros.html",2000);
        return;
    }
///////////////////////////////////////////////

});


//PARA QUE LOS DATOS SIGAN PRESENETES DESPUES DE ACTUALIZAR LA PAGINA
document.addEventListener("DOMContentLoaded", (e) => {
    if(localStorage.getItem("problemas")){
        problemasRetiros = JSON.parse(localStorage.getItem("problemasRetiros"));
    }
})