console.log("😼");

const btnCotizar = document.querySelector("#btnCotizar");
const btnGenerarPreEnv = document.querySelector("#btnGenerarPreEnv");
const alerta1 = document.querySelector("#divAlerta1");

///////////////////////////////////////////////
const test1 = document.querySelectorAll("input.shadow-sm");
const contenImputs1 = [];
const test2 = document.querySelectorAll('select.shadow-sm');
const contenSelect1 = [];
const test3 = document.querySelectorAll("input[name='flexRadioSiNO']");
const contenFlexRadio1 = [];

const porteFormulario1 = document.querySelector("#modal1");
const alerta2 = document.querySelector("#divAlerta2");
const formulario1 = document.querySelector("#formulario1");
const btnCancelar1 = document.querySelector("#btnCancelar1");
const btnAceptar1 = document.querySelector("#btnAceptar1");
const btnAgregarCarga1 = document.querySelector("#agregarCarga1");

let cotizacion = [];
///////////////////////////////////////////////

///////////////////////////////////////////////
const test4 = document.querySelectorAll("input.shadow-none");
const contenImputs2 = [];
const test5 = document.querySelectorAll("select.shadow-none");
const contenSelect2 = [];
const test6 = document.querySelectorAll("input[name='flexRadioSiNO2']");
const contenFlexRadio2 = [];

const porteFormulario2 = document.querySelector("#modal2");
const alerta3 = document.querySelector("#divAlerta3");
const formulario2 = document.querySelector("#formulario2");
const btnCancelar2 = document.querySelector("#btnCancelar2");
const btnAceptar2 = document.querySelector("#btnAceptar2");
const btnAgregarCarga2 = document.querySelector("#agregarCarga2");

let genPreEnv = [];
///////////////////////////////////////////////

const formulario3 = document.querySelector("#formulario3");
//const btnIniciarSesion = document.querySelector("#btnIniciarSesion");
const btnCancelar3 = document.querySelector("#btnCancelar3");
const btnAceptar3 = document.querySelector("#btnAceptar3");

const btnProblema = document.querySelector("#btnProblema");

const alerta4 = document.querySelector("#divAlerta4");
///////////////////////////////////////////////
const test7 = document.querySelectorAll("input[name='inputComun1']");
const contenImputs3 = [];

const test8 = document.querySelectorAll("select[name='selectComun1']");
const contenSelect3 = [];

const test9 = document.querySelector("#comentario1");
const contenTextarea3 = [];
///////////////////////////////////////////////
let problemasEnvios = [];

const tamañoPantalla = document.querySelector(".columnaDiv");
const tamañoPantalla2 = document.querySelector("#columnaDiv2");
const tamañoPantalla3 = document.querySelector(".columnaDiv3");
const tamañoPantalla4 = document.querySelector("div #collapseTwo");

const formulario0 = document.querySelector("#formulario0");
const btnBuscar1 = document.querySelector("#btnBuscar1");
const txtfiltroFecha = document.querySelectorAll("input[name='inputRndm']");
const fechasFiltro = [];
let almacenaFechaDoc = [];

if (screen.width < 576 && screen.width > 0){
    console.log("Pequeña1");
    porteFormulario1.classList.remove("w-75");
    porteFormulario1.classList.add("w-650");
    tamañoPantalla.classList.remove("columnaDiv");
    tamañoPantalla2.classList.remove("columnaDiv");
    tamañoPantalla3.classList.remove("columnaDiv3");
    tamañoPantalla4.classList.remove("columnaDiv3");
}
if (screen.width < 767 && screen.width > 576){
    console.log("Pequeña2");
    tamañoPantalla.classList.remove("columnaDiv");
    tamañoPantalla2.classList.remove("columnaDiv");
    tamañoPantalla3.classList.remove("columnaDiv3");
    tamañoPantalla4.classList.remove("columnaDiv3");

    porteFormulario1.classList.remove("w-650");
    porteFormulario1.classList.add("w-75");

    porteFormulario2.classList.remove("w-650");
    porteFormulario2.classList.add("w-75");
}
if (screen.width > 767){
    console.log("Grande");
    porteFormulario1.classList.remove("w-75");
}



/*
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
*/

ds = 0;
function limpiarFiltro(){
    ///////////////////////////////////////////////
    while(ds < 3){
        txtfiltroFecha[ds].value = "";
        ds++
    }
    ///////////////////////////////////////////////
}
limpiarFiltro();
const filtroListProblem1 = (filtroFechaDes,filtroFechaHas) =>{
    const objetoTodo = {
        FiltroFechaDes: filtroFechaDes,
        FiltroFechaHas: filtroFechaHas,
    }
    almacenaFechaDoc.push(objetoTodo);
}
const filtroListProblem2 = (docRef) =>{
    const objetoTodo = {
        DocRef: docRef,
    }
    almacenaFechaDoc.push(objetoTodo);
}

btnBuscar1.addEventListener("click",(e)=>{
    e.preventDefault();
    alerta1.classList.add("d-none");
    //console.log("Testeo Formulario");
    //PARA QUE NO SE PUEDA AGREGAR MÁS USUARIOS AL APRETAR BUSCAR REPETIDAS VECES
    almacenaFechaDoc.pop();
    //CAPTURA TODOS LOS INPUT DE FORMULARIO
    const data = new FormData(formulario0);
    /*
    let test2 = JSON.stringify(almacenaFechaDoc);

    fetch('http://127.0.0.1:5500/Regis.html',{
        method: "POST",
        body: test2,
    })
    */

    //SE ALMACENAN TODOS LOS DATOS DE LOS INPUT EN EL [...data.values()] Y SE TRANSLADAN A [todo]
    const[filtroFechaDes,filtroFechaHas,docRef] = [...data.values()];

    let a = 0
    fechasFiltro.splice(0,3);
    fechasFiltro.push(txtfiltroFecha);
    console.log(txtfiltroFecha[0].value)
    
    const valfecha = /^(19|20)(((([02468][048])|([13579][26]))-02-29)|(\d{2})-((02-((0[1-9])|1\d|2[0-8]))|((((0[13456789])|1[012]))-((0[1-9])|((1|2)\d)|30))|(((0[13578])|(1[02]))-31)))$/

    while (a < 3) {
        if((txtfiltroFecha[a].value == "") && (valfecha.test(txtfiltroFecha[0].value) === false && valfecha.test(txtfiltroFecha[1].value) === false)){
            alerta1.classList.remove("d-none");
            alerta1.textContent = "Fechas o documento de referencia incompleto"
            txtfiltroFecha[a].classList.remove("border-dark");
            txtfiltroFecha[a].classList.add("border-danger");
            console.log("1")
        }else if((valfecha.test(txtfiltroFecha[0].value) === true && valfecha.test(txtfiltroFecha[1].value) === true)){
            txtfiltroFecha[a].classList.remove("border-dark");
            txtfiltroFecha[a].classList.remove("border-danger");
            txtfiltroFecha[a].classList.add("border-success");
            console.log("2")
        }else if(!txtfiltroFecha[2].value == ""){
            txtfiltroFecha[a].classList.remove("border-dark");
            txtfiltroFecha[a].classList.remove("border-danger");
            txtfiltroFecha[a].classList.add("border-success");
            console.log("3")
        }
        a++
    }

    if(!txtfiltroFecha[0].value == "" && !txtfiltroFecha[1].value == "" && valfecha.test(txtfiltroFecha[0].value) === true && valfecha.test(txtfiltroFecha[1].value) === true && txtfiltroFecha[2].value == ""){
        console.log("FIN")
        filtroListProblem1(filtroFechaDes,filtroFechaHas);
        alerta1.classList.add("d-none");
        console.log(almacenaFechaDoc)
        //setTimeout(()=> location.href="./problemasEnvios.html",2000);
        return;
    }
    if(!txtfiltroFecha[2].value == ""){
        console.log("FIN")
        filtroListProblem2(docRef);
        alerta1.classList.add("d-none");
        console.log(almacenaFechaDoc)
        //setTimeout(()=> location.href="./problemasEnvios.html",2000);
        return;
    }
});

function limpiarForm(){
    ///////////////////////////////////////////////
        const limpiaForm1 = document.querySelectorAll("input[name='formu1']")
        const contenDelImputs1 = [];
        let j=0;
        while(j<7){
            const inputCorr = limpiaForm1[j];
            contenDelImputs1.push(inputCorr);
            contenDelImputs1[j].value = "";
            contenDelImputs1[j].classList.add("border-dark");
            j++;
        }
        const limpiaForm4 = document.querySelectorAll("input[name='formu2']")
        const contenDelImputs2 = [];
        let f=0;
        while(f<7){
            const inputCorr = limpiaForm4[f];
            contenDelImputs2.push(inputCorr);
            contenDelImputs2[f].value = "";
            contenDelImputs2[f].classList.add("border-dark");
            f++;
        }

        const limpiaForm2 = document.querySelectorAll("select.shadow-sm")
        const contenDelSelect = [];
        let v=0;
        while(v<5){
            const inputCorr2 = limpiaForm2[v];
            contenDelSelect.push(inputCorr2);
            contenDelSelect[v].value = limpiaForm2[0].options[0].value;
            contenDelSelect[v].classList.add("border-dark");
            v++;
        }
        const limpiaForm3 = document.querySelectorAll("select.shadow-none")
        const contenDelSelect2 = [];
        let g=0;
        while(g<5){
            const inputCorr2 = limpiaForm3[g];
            contenDelSelect2.push(inputCorr2);
            contenDelSelect2[g].value = limpiaForm3[0].options[0].value;
            contenDelSelect2[g].classList.add("border-dark");
            g++;
        }

    //EMAIL 
    const emailUser = document.querySelector("#Envi_UsCorreo");
    let c = 0;
    while (c < 1) {
        emailUser.value = "";
        emailUser.classList.add("border-dark");
        c++;
    }
    //EMAIL

    //TELEFONO  
    const telefUser = document.querySelector("#Envi_UsCelular");
    let m = 0;
    while (m < 1) {
        telefUser.value = "";
        telefUser.classList.add("border-dark");
        m++;
    }
    //TELEFONO

    //RUT
    const rutUser = document.querySelector("#Envi_UsRut");
    let i = 0;
    while (i < 1) {
        rutUser.value = "";
        rutUser.classList.add("border-dark");
        i++;
    }
    //RUT

    let t = 0;
    while (t < 4) {
        test7[t].value = "";
        test7[t].classList.add("border-dark");
        t++;
    }
    let a = 0;
    while (a < 1) {
        test8[a].value = "";
        test8[a].classList.add("border-dark");
        a++;
    }
    let b = 0;
    while (b < 1) {
        test9.value = "";
        test9.classList.add("border-dark");
        b++;
    }
    ///////////////////////////////////////////////
}

btnCotizar.addEventListener("click",(e)=>{
    alerta2.classList.add("d-none");
    e.preventDefault();
    limpiarForm();
});
btnGenerarPreEnv.addEventListener("click",(e)=>{
    alerta3.classList.add("d-none");
    e.preventDefault();
    limpiarForm();
});
btnProblema.addEventListener("click",(e)=>{
    alerta4.classList.add("d-none");
    e.preventDefault();
    limpiarForm();
});

const agregarUsuario = (aOrigen,aDestino,cDestino,tipoCarga,ancho,valorComercial,cantidad,largo,peso,alto,tipoEmbalaje,flexRadioSiNO,archivo) =>{
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
    }
    cotizacion.push(objetoTodo);
}

btnAceptar1.addEventListener("click",(e)=>{
    e.preventDefault();
    alerta2.classList.add("d-none");
    //console.log("Testeo Formulario");
    //PARA QUE NO SE PUEDA AGREGAR MÁS USUARIOS AL APRETAR INICIAR SESION REPETIDAS VECES
    cotizacion.pop();
    //CAPTURA TODOS LOS INPUT DE FORMULARIO
    const data = new FormData(formulario1);

    //SE ALMACENAN TODOS LOS DATOS DE LOS INPUT EN EL [...data.values()] Y SE TRANSLADAN A [todo]
    const[aOrigen,aDestino,cDestino,tipoCarga,ancho,valorComercial,cantidad,largo,peso,alto,tipoEmbalaje,flexRadioSiNO,archivo] = [...data.values()];
///////////////////////////////////////////////
    let i = 0
    contenImputs1.splice(0,8);
    while (i < 7) {
        const inputCorr = test1[i];
        contenImputs1.push(inputCorr);
        if(contenImputs1[i].value == ""){
            contenImputs1[i].classList.remove("border-dark");
            contenImputs1[i].classList.add("border-danger");
            alerta2.classList.remove("d-none");
            console.log("F1 FALTAN IMPUTS")
        }else if(!contenImputs1[i].value == ""){
            contenImputs1[i].classList.remove("border-danger");
            contenImputs1[i].classList.remove("border-dark");
            contenImputs1[i].classList.add("border-success");
            console.log("F1 NO FALTAN INPUTS")
        }
        i++
    }

    let a = 0
    contenSelect1.splice(0,6);
    while (a < 5) {
        const selectCorr = test2[a];
        contenSelect1.push(selectCorr);
        if(contenSelect1[a].value == ""){
            contenSelect1[a].classList.remove("border-dark");
            contenSelect1[a].classList.add("border-danger");
            alerta2.classList.remove("d-none");
            console.log("F1 FALTAN SELECT")
        }else if(!contenSelect1[a].value == ""){
            contenSelect1[a].classList.remove("border-danger");
            contenSelect1[a].classList.remove("border-dark");
            contenSelect1[a].classList.add("border-success");
            alerta2.classList.remove("d-none");
            console.log("F1 NO FALTAN SELECT")
        }
        a++
    }
    let c = 0;
    contenFlexRadio1.splice(0,3);
    //console.log(contenTextarea)
    //contenTextarea[0].value == "on"
    while (c < 2) {
        const selectCorr = test3[c];
        contenFlexRadio1.push(selectCorr);
        c++;
    }
    if(contenFlexRadio1[0].checked === false && contenFlexRadio1[1].checked === false){
        alerta2.classList.remove("d-none");
        console.log("F1 FALTAN FLEX RADIO");
    }else if(!contenFlexRadio1[0].checked === false || !contenFlexRadio1[1].checked === false){
        alerta2.classList.remove("d-none");
        console.log("F1 NO FALTAN FLEX RADIO");
    }

    if((!contenImputs1[0].value == "" && !contenImputs1[1].value == "" && !contenImputs1[2].value == "" && !contenImputs1[3].value == "" && !contenImputs1[4].value == "" && !contenImputs1[5].value == "" && !contenImputs1[6].value == "" &&  !contenSelect1[0].value == "" && !contenSelect1[1].value == "" && !contenSelect1[2].value == "" && !contenSelect1[3].value == "" && !contenSelect1[4].value == "") && (!contenFlexRadio1[0].checked === false || !contenFlexRadio1[1].checked === false)){
        console.log("FIN")
        agregarUsuario(aOrigen,aDestino,cDestino,tipoCarga,ancho,valorComercial,cantidad,largo,peso,alto,tipoEmbalaje,flexRadioSiNO,archivo);
        alerta2.classList.add("d-none");
        alerta1.textContent = "Cotizacion enviada correctamente";
        alerta1.classList.remove("d-none");
        console.log(cotizacion)
        //setTimeout(()=> location.href="./Misordenes.html",2000);
        return;
    }else{
        console.log("MALO")
    }
///////////////////////////////////////////////
});

const agregarUsuario2 = (aOrigen2,aDestino2,cDestino2,tipoCarga2,ancho2,valorComercial2,cantidad2,largo2,peso2,alto2,tipoEmbalaje2,flexRadioSiNO2,archivo2) =>{
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
    }
    genPreEnv.push(objetoTodo);
}

btnAceptar2.addEventListener("click",(e)=>{
    e.preventDefault();
    alerta2.classList.add("d-none");
    //console.log("Testeo Formulario");
    //PARA QUE NO SE PUEDA AGREGAR MÁS USUARIOS AL APRETAR INICIAR SESION REPETIDAS VECES
    genPreEnv.pop();
    //CAPTURA TODOS LOS INPUT DE FORMULARIO
    const data = new FormData(formulario2);

    //SE ALMACENAN TODOS LOS DATOS DE LOS INPUT EN EL [...data.values()] Y SE TRANSLADAN A [todo]
    const[aOrigen2,aDestino2,cDestino2,tipoCarga2,cantidad2,alto2,ancho2,largo2,tipoEmbalaje2,valorComercial2,peso2,flexRadioSiNO2,archivo2] = [...data.values()];
///////////////////////////////////////////////
    let u = 0
    contenImputs2.splice(0,8);
    while (u< 7) {
        const inputCorr = test4[u];
        contenImputs2.push(inputCorr);
        if(contenImputs2[u].value == ""){
            contenImputs2[u].classList.remove("border-dark");
            contenImputs2[u].classList.add("border-danger");
            console.log("F2 FALTAN INPUTS")
        }else if(!contenImputs2[u].value == ""){
            contenImputs2[u].classList.remove("border-danger");
            contenImputs2[u].classList.remove("border-dark");
            contenImputs2[u].classList.add("border-success");
            console.log("F2 NO FALTAN INPUTS")
        }
        u++
    }
    let s = 0
    contenSelect2.splice(0,6);

    while (s < 5) {
        const selectCorr = test5[s];
        contenSelect2.push(selectCorr);
        if(contenSelect2[s].value == ""){
            contenSelect2[s].classList.remove("border-dark");
            contenSelect2[s].classList.add("border-danger");
            alerta2.classList.remove("d-none");
            console.log("F2 FALTAN SELECTS")
        }else if(!contenSelect2[s].value == ""){
            contenSelect2[s].classList.remove("border-danger");
            contenSelect2[s].classList.remove("border-dark");
            contenSelect2[s].classList.add("border-success");
            alerta2.classList.remove("d-none");
            console.log("F2 NO FALTAN SELECT")
        }
        s++
    }
    let z = 0;
    contenFlexRadio2.splice(0,3);

    //console.log(contenTextarea)
    //contenTextarea[0].value == "on"
    while (z < 2) {
        const selectCorr = test6[z];
        contenFlexRadio2.push(selectCorr);
        z++;
    }

    if(contenFlexRadio2[0].checked === false && contenFlexRadio2[1].checked === false){
        alerta2.classList.remove("d-none");
        console.log("F2 FALTAN FLEX RADIO");
    }else if(!contenFlexRadio2[0].checked === false || !contenFlexRadio2[1].checked === false){
        alerta2.classList.remove("d-none");
        console.log("F2 NO FALTAN FLEX RADIO");
    }

    if((!contenImputs2[0].value == "" && !contenImputs2[1].value == "" && !contenImputs2[2].value == "" && !contenImputs2[3].value == "" && !contenImputs2[4].value == "" && !contenImputs2[5].value == "" && !contenImputs2[6].value == "" && !contenSelect2[0].value == "" && !contenSelect2[1].value == "" && !contenSelect2[2].value == "" && !contenSelect2[3].value == "" && !contenSelect2[4].value == "") && (!contenFlexRadio2[0].value == "" || !contenFlexRadio2[1].value == "")){
        console.log("FIN")
        agregarUsuario2(aOrigen2,aDestino2,cDestino2,tipoCarga2,cantidad2,alto2,ancho2,largo2,tipoEmbalaje2,valorComercial2,peso2,flexRadioSiNO2,archivo2);
        alerta3.classList.add("d-none");
        alerta1.textContent = "Pre-envio agendado correctamente";
        alerta1.classList.remove("d-none");
        console.log(genPreEnv)
        
        //setTimeout(()=> location.href="./Misordenes.html",2000);
        return;
    }else{
        console.log("MALO")
    }
///////////////////////////////////////////////
});


btnProblema.addEventListener("click",(e)=>{
    alerta4.classList.add("d-none");
    e.preventDefault();
    //limpiarForm();
});

const agregarUsuario3 = (Envi_UsRut,Envi_UsCelular,tipoProblem,numOrden,Envi_UsNombre,Envi_UsCorreo,boletFacturGuia,archivo,comentario) =>{
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

btnAceptar3.addEventListener("click",(e)=>{
    e.preventDefault();
    alerta4.classList.add("d-none");
    //console.log("Testeo Formulario");
    //PARA QUE NO SE PUEDA AGREGAR MÁS USUARIOS AL APRETAR INICIAR SESION REPETIDAS VECES
    problemasEnvios.pop();
    //CAPTURA TODOS LOS INPUT DE FORMULARIO
    const data = new FormData(formulario3);
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

    //VALIDAR EMAIL 
    const emailUser = document.querySelector("#Envi_UsCorreo");
    const contenEmail = [];
    const validacionUserEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    let c = 0;
    contenEmail.splice(0,2);
    while (c < 1) {
    const inputCorr = emailUser;
    contenEmail.push(inputCorr);
    if(!validacionUserEmail.test(contenEmail[0].value)){
        contenEmail[c].classList.remove("border-dark");
        contenEmail[c].classList.add("border-danger");
        alerta4.classList.remove("d-none");
        alerta4.textContent = "Formato del correo incorrecto";
        console.log("CORREO INC");
    }else if(validacionUserEmail.test(contenEmail[0].value)){
        contenEmail[c].classList.remove("border-danger");
        contenEmail[c].classList.remove("border-dark");
        contenEmail[c].classList.add("border-success");
        console.log("CORREO CORR");
    }
    c++;
    }
    //VALIDAR EMAIL

    //VALIDAR TELEFONO  
    const telefUser = document.querySelectorAll("#Envi_UsCelular");
    const contenTel = [];
    const validacionUserTel = /^(\s?)(0?9)(\s?)[98765432]\d{7}$/;

    let m = 0;
    contenTel.splice(0,2);
    while (m < 1) {
        const inputCorr = telefUser[m];
        contenTel.push(inputCorr);
        if(validacionUserTel.test(contenTel[m].value) === false){
            contenTel[m].classList.remove("border-dark");
            contenTel[m].classList.add("border-danger");
            alerta4.classList.remove("d-none");
            alerta4.textContent = "Numero telefonico no valido";
            console.log("TEL INC");
        }else if(validacionUserTel.test(contenTel[m].value) === true){
            contenTel[m].classList.remove("border-danger");
            contenTel[m].classList.remove("border-dark");
            contenTel[m].classList.add("border-success");
            console.log("TEL CORR");
        }
        m++;
    }
    //VALIDAR TELEFONO

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
    
    const rutUser = document.querySelector("#Envi_UsRut");
    const contenRut = [];

    let i = 0;
    contenRut.splice(0,2);
    while (i < 1) {
        const inputCorr = rutUser;
        contenRut.push(inputCorr);
        if(Fn.validaRut(contenRut[0].value) == false){
            contenRut[i].classList.remove("border-dark");
            contenRut[i].classList.add("border-danger");
            alerta4.textContent = "RUT invalido";
            console.log("RUT INC");
        }else if(Fn.validaRut(contenRut[0].value) == true){
            contenRut[i].classList.remove("border-danger");
            contenRut[i].classList.remove("border-dark");
            contenRut[i].classList.add("border-success");
            console.log("RUT CORR");
        }
        i++;
    }
    //VALIDAR RUT

    let t = 0;
    contenImputs3.splice(0,5);
    while (t < 4) {
        const inputCorr = test7[t];
        contenImputs3.push(inputCorr);
        if(contenImputs3[t].value == ""){
            contenImputs3[t].classList.remove("border-dark");
            contenImputs3[t].classList.add("border-danger");
            alerta4.textContent = "Campos incompletos";
            alerta4.classList.remove("d-none");
            console.log("FALTAN INPUTS")
        }else if(!contenImputs3[t].value == ""){
            contenImputs3[t].classList.remove("border-danger");
            contenImputs3[t].classList.remove("border-dark");
            contenImputs3[t].classList.add("border-success");
            console.log("NO FALTAN INPUTS")
        }
        t++;
    }
    let a = 0;
    contenSelect3.splice(0,3);
    while (a < 1) {
        const selectCorr = test8[a];
        contenSelect3.push(selectCorr);
        if(contenSelect3[a].value == ""){
            contenSelect3[a].classList.remove("border-dark");
            contenSelect3[a].classList.add("border-danger");
            alerta4.textContent = "Campos incompletos";
            alerta4.classList.remove("d-none");
            console.log("FALTAN SELECT")
        }else if(!contenSelect3[a].value == ""){
            contenSelect3[a].classList.remove("border-danger");
            contenSelect3[a].classList.remove("border-dark");
            contenSelect3[a].classList.add("border-success");
            alerta4.classList.remove("d-none");
            console.log("NO FALTA SELECT")
        }
        a++;
    }
    let b = 0;
    contenTextarea3.splice(0,2);
    //console.log(contenTextarea)
    //contenTextarea[0].value == "on"
    while (b < 1) {
        const selectCorr = test9;
        contenTextarea3.push(selectCorr)
        if(contenTextarea3[b].value == ""){
            contenTextarea3[b].classList.remove("border-dark");
            contenTextarea3[b].classList.add("border-danger");
            alerta4.textContent = "Campos incompletos";
            alerta4.classList.remove("d-none");
            console.log("FALTA TEXTAREA")
        }else if(!contenTextarea3[b].value == ""){
            contenTextarea3[b].classList.remove("border-danger");
            contenTextarea3[b].classList.remove("border-dark");
            contenTextarea3[b].classList.add("border-success");
            alerta4.classList.remove("d-none");
            console.log("NO FALTA TEXTAREA")
        }
        b++;
    }
    if(!contenImputs3[0].value == "" && !contenImputs3[1].value == "" && !contenImputs3[2].value == "" && !contenImputs3[3].value == "" && !contenSelect3[0].value == "" && !contenTextarea3[0].value == "" && validacionUserTel.test(contenTel[0].value) === true && Fn.validaRut(contenRut[0].value) == true && validacionUserEmail.test(contenEmail[0].value)){
        console.log("FIN")
        agregarUsuario3(Envi_UsRut,Envi_UsCelular,tipoProblem,numOrden,Envi_UsNombre,Envi_UsCorreo,boletFacturGuia,archivo,comentario);
        alerta4.classList.add("d-none");
        alerta1.textContent = "Problema agendada correctamente";
        alerta1.classList.remove("d-none");
        console.log(problemasEnvios)
        //setTimeout(()=> location.href="./problemasEnvios.html",2000);
        return;
    }
///////////////////////////////////////////////

});



//PARA QUE LOS DATOS SIGAN PRESENETES DESPUES DE ACTUALIZAR LA PAGINA
document.addEventListener("DOMContentLoaded", (e) => {
    if(localStorage.getItem("cotizacion")){
        cotizacion = JSON.parse(localStorage.getItem("cotizacion"));
    }
})