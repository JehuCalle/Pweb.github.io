console.log("😼");

const formulario = document.querySelector("#formulario");
//const btnLink = document.querySelector("#btnIniciarSesion");
const alerta = document.querySelector("#divAlerta");

const rutUser = document.querySelector("#rut");
const contra = document.querySelector("#pass");
const contenRut = [];
const contenPass = [];
/*
const alertaRut = document.querySelector("#alertaRut");
const validacionRut = /[0-9]/;
const rutUser = document.querySelector("#rut");

const alertaPass = document.querySelector("#alertaPass");
const validacionPass = /[0-9]/;
const passUser = document.querySelector("#pass");
*/
let usuarios = [];

const agregarUsuario = (rut,pass) =>{
    const objetoTodo = {
        Rut: rut,
        Pass: pass
    }
    usuarios.push(objetoTodo);
}
/*
btnLink.addEventListener('click',(event) => {
    event.preventDefault();
    setTimeout(()=> location.href="./Misdatos.html");
});
*/

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
//VALIDAR RUT


formulario.addEventListener("submit",(e)=>{
    e.preventDefault();
    alerta.classList.add("d-none");

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
    //SE ALMACENAN TODOS LOS DATOS DE LOS INPUT EN EL [...data.values()] Y SE TRANSLADAN A [rut,pass]
    const[rut,pass] = [...data.values()];
    let i = 0
    contenRut.splice(0,2);
    while (i < 1) {
        const inputCorr = rutUser;
        contenRut.push(inputCorr);
        if(Fn.validaRut(contenRut[i].value) == false){
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
    let a = 0
    contenPass.splice(0,2);
    while (a < 1) {
        const selectCorr = contra;
        contenPass.push(selectCorr);
        if(contenPass[a].value == ""){
            contenPass[a].classList.remove("border-dark");
            contenPass[a].classList.add("border-danger");
            alerta.classList.remove("d-none");
            console.log("FALTAN-V1")
        }else if(!contenPass[a].value == ""){
            contenPass[a].classList.remove("border-danger");
            contenPass[a].classList.remove("border-dark");
            contenPass[a].classList.add("border-success");
            alerta.classList.remove("d-none");
            console.log("FALTAN-V2")
        }
        a++
    }
    if(!rutUser.value == "" && !contra.value == "" && Fn.validaRut(contenRut[0].value) == true){
        console.log("FIN")
        agregarUsuario(rut,pass);
        alerta.classList.add("d-none");
        console.log(usuarios)
        //setTimeout(()=> location.href="./Misdatos.html",2000);
        return;
    }
    /*
    let i = 0
    contenRut.splice(0,2);
    contenPass.splice(0,2);



    while (i < 2) {
        const inputCorr = test[i];
        contenRut.push(inputCorr);
        contenPass.push(inputCorr);
        valrut = Fn.validaRut(contenImputs[0].value);
        console.log(valrut);

        i++
    }

    */
});

//PARA QUE LOS DATOS SIGAN PRESENETES DESPUES DE ACTUALIZAR LA PAGINA
document.addEventListener("DOMContentLoaded", (e) => {
    if(localStorage.getItem("usuarios")){
        usuarios = JSON.parse(localStorage.getItem("usuarios"));
    }
})