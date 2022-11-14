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
    //limpiarForm();
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

        //VALIDAR RUT   1
        const rutUser = document.querySelector("#rut");
        const rutCont = document.querySelector("#rutContact");
        const contenRut = [];
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
    
        
        let r = 0;
        contenRut.splice(0,3);
        while (r < 2) {
            const inputCorr = rutUser;
            contenRut.push(inputCorr);
            contenRut.push(rutCont);
            console.log(contenRut)
            console.log(contenRut)
            if(Fn.validaRut(contenRut[r].value) == false){
                contenRut[r].classList.remove("border-dark");
                contenRut[r].classList.add("border-danger");
                alerta2.textContent = "RUT invalido";
                console.log("RUT INC");
            }else if(Fn.validaRut(contenRut[r].value) == true){
                contenRut[r].classList.remove("border-danger");
                contenRut[r].classList.remove("border-dark");
                contenRut[r].classList.add("border-success");
                console.log("RUT CORR");
            }
            r++;
        }
        //VALIDAR RUT

    //VALIDAR TELEFONO  3
    const telefUser = document.querySelectorAll("#telefono");
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
            alerta2.classList.remove("d-none");
            alerta2.textContent = "Numero telefonico no valido";
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


    let i = 0
    contenImputs.splice(0,7);
    while (i < 6) {
        const inputCorr = test[i];
        contenImputs.push(inputCorr);
        if(contenImputs[i].value == ""){
            contenImputs[i].classList.remove("border-dark");
            contenImputs[i].classList.add("border-danger");
            alerta2.textContent = "Campos sin completar";
            alerta2.classList.remove("d-none");
            console.log("FALTAN INPUTS")
        }else if(!contenImputs[i].value == ""){
            contenImputs[i].classList.remove("border-danger");
            contenImputs[i].classList.remove("border-dark");
            contenImputs[i].classList.add("border-success");
            console.log("NO FALTAN INPUTS")
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
            alerta2.textContent = "Campos sin completar";
            alerta2.classList.remove("d-none");
            console.log("FALTAN SELECT")
        }else if(!contenSelect[a].value == ""){
            contenSelect[a].classList.remove("border-danger");
            contenSelect[a].classList.remove("border-dark");
            contenSelect[a].classList.add("border-success");
            alerta2.classList.remove("d-none");
            console.log("NO FALTAN SELECT")
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
            alerta2.textContent = "Campos sin completar";
            alerta2.classList.remove("d-none");
            console.log("FALTA TEXTAREA")
        }else if(!contenTextarea[b].value == ""){
            contenTextarea[b].classList.remove("border-danger");
            contenTextarea[b].classList.remove("border-dark");
            contenTextarea[b].classList.add("border-success");
            alerta2.classList.remove("d-none");
            console.log("NO FALTAN TEXTAREA")
        }
        b++
    }

    if(!contenImputs[0].value == "" && !contenImputs[1].value == "" && !contenImputs[2].value == "" && !contenImputs[3].value == "" && !contenImputs[4].value == "" && !contenImputs[5].value == "" && !contenSelect[0].value == "" && !contenSelect[1].value == "" && !contenSelect[2].value == "" && !contenSelect[3].value == "" && !contenTextarea[0].value == "" && Fn.validaRut(contenRut[0].value) == true && Fn.validaRut(contenRut[1].value) == true && validacionUserTel.test(contenTel[0].value) === true){
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
