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

const test3 = document.querySelector("#descripcion");
const contenTextarea = [];

const test4 = document.querySelector("input[name=flexRadioSiNo]:checked");
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

const test7 = document.querySelector("#descripcion2");
const contenTextarea2 = [];

const test8 = document.querySelectorAll("input[name='flexRadioSiNO2']");
const contenFlexRadio2 = [];

let agendarRetiroCS = [];
///////////////////////////////////////////////

const formulario3 = document.querySelector("#formulario3");
//const btnIniciarSesion = document.querySelector("#btnIniciarSesion");
const btnCancelar3 = document.querySelector("#btnCancelar3");
const btnAceptar3 = document.querySelector("#btnAceptar3");

const alerta4 = document.querySelector("#divAlerta4");
///////////////////////////////////////////////
const test9 = document.querySelectorAll("input[name='inputComun1']");
const contenImputs3 = [];

const test10 = document.querySelectorAll("select[name='selectComun1']");
const contenSelect3 = [];

const test11 = document.querySelector("#comentario2");
const contenTextarea3 = [];
///////////////////////////////////////////////
let problemasRetiros = [];

const tamañoPantalla = document.querySelector(".columnaDiv");
const tamañoPantalla3 = document.querySelector(".columnaDiv3");
if (screen.width < 767){
    console.log("Pequeña");
    tamañoPantalla.classList.remove("columnaDiv");
    tamañoPantalla3.classList.remove("columnaDiv3");
}

const btnAgendarRetiro1 = document.querySelector("#btnAgendarRetiro1");
const btnAgendarRetiro2 = document.querySelector("#btnAgendarRetiro2");
const btnProblema = document.querySelector("#btnProblema");

//CleanFiltro
const txtfiltroFecha = document.querySelectorAll("input[name='inputRndm']");
ds = 0;
function limpiarFiltro(){
    ///////////////////////////////////////////////
    while(ds < 2){
        txtfiltroFecha[ds].value = "";
        ds++
    }
    ///////////////////////////////////////////////
}
limpiarFiltro();
//CleanFiltro

const formulario0 = document.querySelector("#formulario0");
const btnBuscar1 = document.querySelector("#btnBuscar1");
const fechasFiltro = [];
let almacenaFechaDoc = [];
const filtroListProblem1 = (filtroFechaDes,filtroFechaHas) =>{
    const objetoTodo = {
        FiltroFechaDes: filtroFechaDes,
        FiltroFechaHas: filtroFechaHas,
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

    const valfecha = /^(19|20)(((([02468][048])|([13579][26]))-02-29)|(\d{2})-((02-((0[1-9])|1\d|2[0-8]))|((((0[13456789])|1[012]))-((0[1-9])|((1|2)\d)|30))|(((0[13578])|(1[02]))-31)))$/

    while (a < 2) {
        if(txtfiltroFecha[a].value == ""){
            alerta1.classList.remove("d-none");
            alerta1.textContent = "Campos incompletos"
            txtfiltroFecha[a].classList.remove("border-dark");
            txtfiltroFecha[a].classList.add("border-danger");
        }else{
            txtfiltroFecha[a].classList.remove("border-dark");
            txtfiltroFecha[a].classList.remove("border-danger");
            txtfiltroFecha[a].classList.add("border-success");
        }
        a++
    }

    if(!txtfiltroFecha[0].value == "" && !txtfiltroFecha[1].value == ""){
        console.log("FIN")
        filtroListProblem1(filtroFechaDes,filtroFechaHas);
        alerta1.classList.add("d-none");
        console.log(almacenaFechaDoc)
        //setTimeout(()=> location.href="./problemasEnvios.html",2000);
        return;
    }
});

const divSobrecarga = document.querySelector("#sobrecarga")
const divSobrecargaFal = document.querySelector("#sobrecargaFal")

function mostrar(valor){
    if(valor > 900){
        console.log("Sobrecarga")
        divSobrecarga.classList.remove("d-none")
        divSobrecargaFal.classList.add("d-none");
    }else{
        console.log("🐱‍🏍")
        divSobrecargaFal.classList.remove("d-none");
        divSobrecarga.classList.add("d-none")
    }
}

//MOSTRAR DIV ENROLAR INFORMACION EX
const divOpcion = document.querySelector("#divEnrutar")
const radiosEnrolar = document.querySelectorAll("input[name=flexRadioSiNO5]")

radiosEnrolar[0].addEventListener("click",(e)=>{
    divOpcion.classList.remove("d-none")
});
radiosEnrolar[1].addEventListener("click",(e)=>{
    divOpcion.classList.add("d-none")
});

//DIV ENROLAR INFORMACION EX


//CleanFormularios
function limpiarForm(){
    ///////////////////////////////////////////////
        // FORMULARIO N1
/*
        const limpiaForm1 = document.querySelectorAll("input[name='formu1']")
        const contenDelImputs1 = [];
        let ja=0;
        while(ja<7){
            const inputCorr = limpiaForm1[ja];
            contenDelImputs1.push(inputCorr);
            contenDelImputs1[ja].value = "";
            contenDelImputs1[ja].classList.add("border-dark");
            ja++;
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
*/
        if(test4 != null){
            test4.checked = false;
        }
/*
        test4[1].checked = false;

        FlexOpcion[0].checked = false;
        FlexOpcion[1].checked = false;

        //LIMPIAR TEXTAREA FORMULARIO 1
        test3.value = "";
        
        // FORMULARIO N1

        // FORMULARIO N2
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
        test7.value = "";

        test8[0].checked = false;
        test8[1].checked = false;

        // FORMULARIO N2
    
        // FORMULARIO N3
            //EMAIL 
        const emailUser = document.querySelector("#Reti_UsCorreo");
        let c = 0;
        while (c < 1) {
            emailUser.value = "";
            emailUser.classList.add("border-dark");
            c++;
        }
        //EMAIL

        //TELEFONO  
        const telefUser = document.querySelector("#Reti_UsCelular");
        let m = 0;
        while (m < 1) {
            telefUser.value = "";
            telefUser.classList.add("border-dark");
            m++;
        }
        //TELEFONO

        //RUT
        const rutUser = document.querySelector("#Reti_UsRut");
        let i = 0;
        while (i < 1) {
            rutUser.value = "";
            rutUser.classList.add("border-dark");
            i++;
        }
        //RUT

        let t = 0;
        while (t < 4) {
            test9[t].value = "";
            test9[t].classList.add("border-dark");
            t++;
        }
        let a = 0;
        while (a < 1) {
            test10[a].value = "";
            test10[a].classList.add("border-dark");
            a++;
        }
        let b = 0;
        while (b < 1) {
            test11.value = "";
            test11.classList.add("border-dark");
            b++;
        }
*/
        // FORMULARIO N3
    ///////////////////////////////////////////////
}

btnAgendarRetiro1.addEventListener("click",(e)=>{
    alerta2.classList.add("d-none");
    e.preventDefault();
    limpiarForm();
});
btnAgendarRetiro2.addEventListener("click",(e)=>{
    alerta3.classList.add("d-none");
    e.preventDefault();
    limpiarForm();
});
btnProblema.addEventListener("click",(e)=>{
    alerta4.classList.add("d-none");
    e.preventDefault();
    limpiarForm();
});
//CleanFormularios

const FlexOpcion = document.querySelector("input[name=flexRadioSiNO5]:checked")
console.log(test4)
console.log(FlexOpcion)


const agregarUsuario = (aOrigen,aDestino,cDestino,tipoCarga,ancho,valorComercial,cantidad,largo,peso,alto,tipoEmbalaje,flexRadioSiNo,flexRadioSiNO5,nombreEnru,TelefonoEnru,archivo,descripcion) =>{
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
        ConSinHerramientas: flexRadioSiNo,
        EnrutarONo: flexRadioSiNO5,
        NombreEnru: nombreEnru,
        TelefonoEnru: TelefonoEnru,
        Archivo: archivo,
        Descripcion: descripcion,
    }
    agendarRetiroCM.push(objetoTodo);
}

const agregarUsuarioExt = (aOrigen,aDestino,cDestino,tipoCarga,ancho,valorComercial,cantidad,largo,peso,alto,tipoEmbalaje,flexRadioSiNO5,nombreEnru,TelefonoEnru,archivo,descripcion) =>{
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
        EnrutarONo: flexRadioSiNO5,
        NombreEnru: nombreEnru,
        TelefonoEnru: TelefonoEnru,
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
btnAceptar1.addEventListener("click",(e)=>{
    e.preventDefault();

    const test4 = document.querySelector("input[name=flexRadioSiNo]:checked");
    const FlexOpcion = document.querySelector("input[name=flexRadioSiNO5]:checked")




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
    const[aOrigen,aDestino,cDestino,tipoCarga,ancho,valorComercial,cantidad,largo,peso,alto,tipoEmbalaje,flexRadioSiNo,flexRadioSiNO5,nombreEnru,TelefonoEnru,archivo,descripcion] = [...data.values()];

///////////////////////////////////////////////
    let i = 0;
    contenImputs.splice(0,8);
    while (i < 7) {
        const inputCorr = test[i];
        contenImputs.push(inputCorr);
        if(contenImputs[i].value == ""){
            contenImputs[i].classList.remove("border-dark");
            contenImputs[i].classList.add("border-danger");
            console.log("FALTAN INPUTS")
        }else if(!contenImputs[i].value == ""){
            contenImputs[i].classList.remove("border-danger");
            contenImputs[i].classList.remove("border-dark");
            contenImputs[i].classList.add("border-success");
            console.log("NO FALTAN INPUTS")
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
            console.log("FALTAN SELECT")
        }else if(!contenSelect[a].value == ""){
            contenSelect[a].classList.remove("border-danger");
            contenSelect[a].classList.remove("border-dark");
            contenSelect[a].classList.add("border-success");
            alerta2.classList.remove("d-none");
            console.log("NO FALTAN SELECT")
        }
        a++;
    }
    let b = 0;
    contenTextarea.splice(0,2);
    //console.log(contenTextarea)
    //contenTextarea[0].value == "on"
    while (b < 1) {
        const selectCorr = test3;
        contenTextarea.push(selectCorr)
        if(contenTextarea[b].value == ""){
            contenTextarea[b].classList.remove("border-dark");
            contenTextarea[b].classList.add("border-danger");
            alerta2.classList.remove("d-none");
            console.log("FALTA TEXTAREA")
        }else if(!contenTextarea[b].value == ""){
            contenTextarea[b].classList.remove("border-danger");
            contenTextarea[b].classList.remove("border-dark");
            contenTextarea[b].classList.add("border-success");
            alerta2.classList.remove("d-none");
            console.log("NO FALTA TEXTAREA")
        }
        b++;
    }
    let c = 0;
    contenFlexRadio.splice(0,3);
    //console.log(contenTextarea)
    //contenTextarea[0].value == "on"
    /*
    while (c < 1) {
        const selectCorr = test4[c];
        contenFlexRadio.push(selectCorr);
        c++;
    }
    */
    const contenInputEx = document.querySelectorAll("input[name='inputEnrola']");
    console.log(contenInputEx[0])
    console.log(contenInputEx[1])

    if((contenImputs[4].value > 900) && (!contenImputs[0].value == "" && !contenImputs[1].value == "" && !contenImputs[2].value == "" && !contenImputs[3].value == "" && !contenImputs[4].value == "" && !contenImputs[5].value == "" && !contenImputs[6].value == "" && !contenSelect[0].value == "" && !contenSelect[1].value == "" && !contenSelect[2].value == "" && !contenSelect[3].value == "" && !contenSelect[4].value == "" && !contenTextarea[0].value == "")){

        if(FlexOpcion.value === "Si" && !contenInputEx[0].value == "" && !contenInputEx[1].value == ""){
            console.log("FIN")
            agregarUsuario(contenSelect[0].value,contenSelect[1].value,contenSelect[2].value,contenSelect[3].value,contenImputs[0].value,contenImputs[1].value,contenImputs[2].value,contenImputs[3].value,contenImputs[4].value,contenImputs[5].value,contenSelect[4].value,test4.value,FlexOpcion.value,contenInputEx[0].value,contenInputEx[1].value,contenImputs[6].value,contenTextarea[0].value);
            alerta2.classList.add("d-none");
            contenInputEx[0].classList.remove("border-dark");
            contenInputEx[0].classList.remove("border-danger");
            contenInputEx[0].classList.add("border-success")
            contenInputEx[1].classList.remove("border-dark");
            contenInputEx[1].classList.remove("border-danger");
            contenInputEx[1].classList.add("border-success")
            alerta1.textContent = "Retiro agendado correctamente 1.1"
            alerta1.classList.remove("d-none");
            console.log(agendarRetiroCM)
        }else if(FlexOpcion.value === "Si" && (contenInputEx[0].value == "" || contenInputEx[1].value == "")){
            alerta2.classList.remove("d-none")
            contenInputEx[0].classList.remove("border-dark");
            contenInputEx[0].classList.remove("border-success");
            contenInputEx[0].classList.add("border-danger")
            contenInputEx[1].classList.remove("border-dark");
            contenInputEx[1].classList.remove("border-success");
            contenInputEx[1].classList.add("border-danger")
            alerta2.textContent = "AAAAAAAAAAAA"
        }





    }
    /*
    else if((contenImputs[4].value < 900) && (!contenImputs[0].value == "" && !contenImputs[1].value == "" && !contenImputs[2].value == "" && !contenImputs[3].value == "" && !contenImputs[4].value == "" && !contenImputs[5].value == "" && !contenImputs[6].value == "" && !contenSelect[0].value == "" && !contenSelect[1].value == "" && !contenSelect[2].value == "" && !contenSelect[3].value == "" && !contenSelect[4].value == "" && !contenTextarea[0].value == "")){
        console.log("FIN")
        agregarUsuarioExt(aOrigen,aDestino,cDestino,tipoCarga,ancho,valorComercial,cantidad,largo,peso,alto,tipoEmbalaje,FlexOpcion.value,contenInputEx[0].value,contenInputEx[1].value,contenImputs[6].value,contenTextarea[0].value);
        alerta2.classList.add("d-none");
        alerta1.textContent = "Retiro agendado correctamente 1.2"
        alerta1.classList.remove("d-none");
        console.log(agendarRetiroCM)
    }
*/
    /*


    //FLEX ENROLAMIENTO EX
    if(FlexOpcion[0].checked == true){
        //PONER QUE SE DEBE DE COMPROBAR QUE ESTAN COMPLETOS LOS NOMBRE Y TELEFONO Y COMPROBAR QUE EL TELEFONO SEA UN TELEFONO MEDIANTE REGEX

        const contenInputEx = document.querySelectorAll("input[name='inputEnrola']");

    }else if(FlexOpcion[1].checked == true){
        
    }
    //FLEX ENROLAMIENTO EX
*/
/*
    if((!contenImputs[0].value == "" && !contenImputs[1].value == "" && !contenImputs[2].value == "" && !contenImputs[3].value == "" && !contenImputs[4].value == "" && !contenImputs[5].value == "" && !contenImputs[6].value == "" && !contenSelect[0].value == "" && !contenSelect[1].value == "" && !contenSelect[2].value == "" && !contenSelect[3].value == "" && !contenSelect[4].value == "" && !contenTextarea[0].value == "") && (!contenFlexRadio[0].checked === false || !contenFlexRadio[1].checked === false)){
        console.log("FIN")
        agregarUsuario(aOrigen,aDestino,cDestino,tipoCarga,ancho,valorComercial,cantidad,largo,peso,alto,tipoEmbalaje,test4.value,FlexOpcion.value,nombreEnru,TelefonoEnru,contenImputs[6].value,contenTextarea[0].value);
        alerta2.classList.add("d-none");
        alerta1.textContent = "Retiro agendado correctamente 1"
        alerta1.classList.remove("d-none");
        console.log(agendarRetiroCM)
        //setTimeout(()=> location.href="./Misretiros.html",2000);
        return;
    }
    */
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
        const selectCorr = test7;
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
        alerta1.textContent = "Retiro agendado correctamente 2"
        alerta1.classList.remove("d-none");
        console.log(agendarRetiroCS)
        //setTimeout(()=> location.href="./Misretiros.html",2000);
        return;
    }
///////////////////////////////////////////////
});

const agregarUsuario3 = (Reti_UsRut,Reti_UsCelular,tipoProblem2,numRetiro,Reti_UsNombre,Reti_UsCorreo,boletFacturGuia2,archivo2,comentario2) =>{
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
btnAceptar3.addEventListener("click",(e)=>{
    e.preventDefault();
    alerta4.classList.add("d-none");
    //console.log("Testeo Formulario");

    //PARA QUE NO SE PUEDA AGREGAR MÁS USUARIOS AL APRETAR INICIAR SESION REPETIDAS VECES
    agendarRetiroCS.pop();

    //CAPTURA TODOS LOS INPUT DE FORMULARIO
    const data = new FormData(formulario3);
    /*
    let test2 = JSON.stringify(agendarRetiroCM);
    */
    //SE ALMACENAN TODOS LOS DATOS DE LOS INPUT EN EL [...data.values()] Y SE TRANSLADAN A [todo]
    const[Reti_UsRut,Reti_UsCelular,tipoProblem2,numRetiro,Reti_UsNombre,Reti_UsCorreo,boletFacturGuia2,archivo2,comentario2] = [...data.values()];

///////////////////////////////////////////////
    //VALIDAR EMAIL 
    const emailUser = document.querySelector("#Reti_UsCorreo");
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
    const telefUser = document.querySelectorAll("#Reti_UsCelular");
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

    const rutUser = document.querySelector("#Reti_UsRut");
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
    contenImputs3.splice(0,4);
    while (t < 4) {
        const inputCorr = test9[t];
        contenImputs3.push(inputCorr);
        if(contenImputs3[t].value == ""){
            contenImputs3[t].classList.remove("border-dark");
            contenImputs3[t].classList.add("border-danger");
            alerta4.textContent = "Campos incompletos";
            alerta4.classList.remove("d-none");
            console.log("FALTAN-V1")
        }else if(!contenImputs3[t].value == ""){
            contenImputs3[t].classList.remove("border-danger");
            contenImputs3[t].classList.remove("border-dark");
            contenImputs3[t].classList.add("border-success");
            alerta4.classList.remove("d-none");
            console.log("FALTAN-V2")
        }
        t++;
    }
    let v = 0;
    contenSelect3.splice(0,3);
    while (v < 1) {
        const selectCorr = test10[v];
        contenSelect3.push(selectCorr);
        if(contenSelect3[v].value == ""){
            contenSelect3[v].classList.remove("border-dark");
            contenSelect3[v].classList.add("border-danger");
            alerta4.textContent = "Campos incompletos";
            alerta4.classList.remove("d-none");
            console.log("FALTAN-V1")
        }else if(!contenSelect3[v].value == ""){
            contenSelect3[v].classList.remove("border-danger");
            contenSelect3[v].classList.remove("border-dark");
            contenSelect3[v].classList.add("border-success");
            alerta4.classList.remove("d-none");
            console.log("FALTAN-V2")
        }
        v++;
    }
    let q = 0;
    contenTextarea3.splice(0,2);
    //console.log(contenTextarea)
    //contenTextarea[0].value == "on"
    while (q < 1) {
        const selectCorr = test11;
        contenTextarea3.push(selectCorr)
        if(contenTextarea3[q].value == ""){
            contenTextarea3[q].classList.remove("border-dark");
            contenTextarea3[q].classList.add("border-danger");
            alerta4.textContent = "Campos incompletos";
            alerta4.classList.remove("d-none");
            console.log("FALTAN-V1")
        }else if(!contenTextarea3[q].value == ""){
            contenTextarea3[q].classList.remove("border-danger");
            contenTextarea3[q].classList.remove("border-dark");
            contenTextarea3[q].classList.add("border-success");
            alerta4.classList.remove("d-none");
            console.log("FALTAN-V2")
        }
        q++;
    }

    if(!contenImputs3[0].value == "" && !contenImputs3[1].value == "" && !contenImputs3[2].value == "" && !contenImputs3[3].value == "" && !contenSelect3[0].value == "" && !contenTextarea3[0].value == "" && validacionUserTel.test(contenTel[0].value) === true && Fn.validaRut(contenRut[0].value) == true && validacionUserEmail.test(contenEmail[0].value)){
        console.log("FIN")
        agregarUsuario3(Reti_UsRut,Reti_UsCelular,tipoProblem2,numRetiro,Reti_UsNombre,Reti_UsCorreo,boletFacturGuia2,archivo2,comentario2);
        alerta4.classList.add("d-none");
        alerta1.textContent = "Problema agendada correctamente 3";
        alerta1.classList.remove("d-none");
        console.log(problemasRetiros)
        //setTimeout(()=> location.href="./problemasRetiros.html",2000);
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