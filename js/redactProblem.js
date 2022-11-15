console.log("😼");

const formulario1 = document.querySelector("#formulario1");
const btnBuscar1 = document.querySelector("#btnBuscar1");

const alerta1 = document.querySelector("#divAlerta1");

const fechasFiltro = [];
let almacenaFechaDoc = [];

const txtfiltroFecha = document.querySelectorAll("input[name='inputRndm']");

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
    const data = new FormData(formulario1);
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

//PARA QUE LOS DATOS SIGAN PRESENETES DESPUES DE ACTUALIZAR LA PAGINA
document.addEventListener("DOMContentLoaded", (e) => {
    if(localStorage.getItem("problemas")){
        almacenaFechaDoc = JSON.parse(localStorage.getItem("almacenaFechaDoc"));
    }
})