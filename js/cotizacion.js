console.log("😼");

const btnCotizar = document.querySelector("#btnCotizar");
const btnGenerarPreEnv = document.querySelector("#btnGenerarPreEnv");

const formulario1 = document.querySelector("#formulario");
const btnCancelar1 = document.querySelector("#btnCancelar1");
const btnAceptar1 = document.querySelector("#btnAceptar1");
const btnAgregarCarga = document.querySelector("#agregarCarga");

const alerta1 = document.querySelector("#divAlerta1");
const alerta2 = document.querySelector("#divAlerta2");

///////////////////////////////////////////////
const test = document.querySelectorAll(".shadow-sm");
const contenImputs = [];

const test2 = document.querySelectorAll("select");
const contenSelect = [];

const test4 = document.querySelectorAll("input[type='radio']");
const contenFlexRadio = [];

//console.log(document.querySelector("#formulario1"));

///////////////////////////////////////////////
const porteFormulario1 = document.querySelector("#modal1");
const porteFormulario2 = document.querySelector("#modal2");
const tamañoPantalla = document.querySelector(".columnaDiv");
const tamañoPantalla3 = document.querySelector(".columnaDiv3");
if (screen.width < 767){
    console.log("Pequeña");
    tamañoPantalla.classList.remove("columnaDiv");
    tamañoPantalla3.classList.remove("columnaDiv3");
}
if (screen.width > 767){
    console.log("Grande");
    porteFormulario1.classList.remove("w-75");
}

let usuarios = [];


let url = 'https://localhost:44385/fechadocreferencia?fechaboleta=2016-03-02&fechaboleta2=2016-03-03&rutpagador=92475000-6';
fetch(url)    
.then((res)=> res.json())
.then((data)=> mostrarData(data))
.catch(error =>console.log(error))

const mostrarData = (data) => {
    console.log(data)
    //const textest = document.querySelector("#rutTxt");    //OPCION 2?
    let body = "";
    console.log(data[0].despachoA)
    console.log(data.length)
    for(let h = 0; h<data.length; h++){
        body += `<tr><td class=" rounded rounded-2 bg-light h6 fw-normal">${data[h].despachoA}</td></tr>`
    }
    //textest.textContent = data.rut;                       //OPCION 1?
    //body.querySelector("#rutTxt").textContent = data.rut;   //OPCION 2?
    document.querySelector("#tablaRemitente").innerHTML = body

}

function limpiarForm(){
    ///////////////////////////////////////////////
        alerta2.classList.add("d-none");
        const limpiaForm1 = document.querySelectorAll("body input")
        console.log(limpiaForm1)
        const contenDelImputs = [];
        let j=0;
        while(j<22){
            const inputCorr = limpiaForm1[j];
            contenDelImputs.push(inputCorr);
            contenDelImputs[j].value = "";
            j++;
        }

        const limpiaForm2 = document.querySelectorAll("body .shadow-none")
        console.log(limpiaForm2);
        console.log(limpiaForm2[0].options[0]);
        const contenDelSelect = [];
        let v=0;
        while(v<10){
            const inputCorr2 = limpiaForm2[v];
            contenDelSelect.push(inputCorr2);

            console.log(inputCorr2);
            console.log(contenDelSelect[v].value);
            contenDelSelect[v].value = limpiaForm2[0].options[0].value;
            v++;
        }

        /*
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
        */
    ///////////////////////////////////////////////
}
btnCotizar.addEventListener("click",(e)=>{
    e.preventDefault();
    limpiarForm();
});
btnGenerarPreEnv.addEventListener("click",(e)=>{
    e.preventDefault();
    limpiarForm();
});

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

btnAceptar1.addEventListener("click",(e)=>{
    e.preventDefault();
    alerta.classList.add("d-none");
    //console.log("Testeo Formulario");
    //PARA QUE NO SE PUEDA AGREGAR MÁS USUARIOS AL APRETAR INICIAR SESION REPETIDAS VECES
    usuarios.pop();
    //CAPTURA TODOS LOS INPUT DE FORMULARIO
    const data = new FormData(formulario);

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