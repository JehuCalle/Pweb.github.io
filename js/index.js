console.log("😼");

const formulario = document.querySelector("#formulario");
//const btnLink = document.querySelector("#btnIniciarSesion");
const alerta = document.querySelector("#divAlerta");

const rutUser = document.querySelector("#rut");
const contenRut = [];

let usuarios = [];

const passUser = document.querySelector("#pass");
const contenPass = [];
const validacionUserPass = /^(\d|(([A-Za-zñÑáéíóúÁÉÍÓÚ\s])\3?(?!\3)))+$/;

const tamañoPantalla = document.querySelector("footer");
const tamañoPantalla2 = document.querySelector("footer div");
const tamañoPantalla3 = document.querySelector("footer div .mx-4");
if (screen.width < 767){
    console.log("Pequeña");
    tamañoPantalla.classList.remove("d-flex");
    tamañoPantalla2.classList.remove("d-flex");
    tamañoPantalla3.classList.remove("mx-4");
}

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
    
    function b(){
        let a = 0
        contenPass.splice(0,3);
        while (a < 1) {
            const inputCorr = passUser;
            contenPass.push(inputCorr);
            if(contenPass[a].value == ""){
                alerta.classList.remove("d-none");
                alerta.textContent = "Campo contraseña incompleta"
                contenPass[a].classList.remove("border-dark");
                contenPass[a].classList.add("border-warning");
            }else if(!validacionUserPass.test(contenPass[0].value) === false){
                contenPass[a].classList.remove("border-dark");
                contenPass[a].classList.add("border-warning");
                alerta.classList.remove("d-none");
                console.log(!validacionUserPass.test(contenPass[0].value))
                alerta.textContent = "Contraseña incorrecta"
                console.log("FALTA-CONTRA-MIN")
            }else if(!validacionUserPass.test(contenPass[0].value) === true){
                contenPass[0].classList.remove("border-dark");
                contenPass[0].classList.remove("border-warning");
                contenPass[0].classList.add("border-success");
                alerta.classList.add("d-none");
                console.log("CUMPLE-CONTRA-MIN");
            }
            a++
        }
        console.log(!validacionUserPass.test(contenPass[0].value));
        if(!rutUser.value == "" && !passUser.value == "" && !validacionUserPass.test(contenPass[0].value) === true && Fn.validaRut(contenRut[0].value) == true){
            console.log("FIN")
            agregarUsuario(rut,pass);
            alerta.classList.add("d-none");
            console.log(usuarios)
            setTimeout(()=> location.href="./Misdatos.html",2000);
            return;
        }
    }

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
        if(contenRut[i].value == ""){
            alerta.classList.remove("d-none");
            alerta.textContent = "Rut no ingresado"
            contenRut[i].classList.remove("border-dark");
            contenRut[i].classList.add("border-warning");
        }else if(Fn.validaRut(contenRut[i].value) == false || contenRut[i].value == ""){
            contenRut[i].classList.remove("border-dark");
            contenRut[i].classList.add("border-warning");
            alerta.textContent = "RUT invalido";
            alerta.classList.remove("d-none");
            console.log("FALTAN-V1")
        }else if(Fn.validaRut(contenRut[0].value) == true){
            contenRut[i].classList.remove("border-warning");
            contenRut[i].classList.remove("border-dark");
            contenRut[i].classList.add("border-success");
            alerta.classList.add("d-none");
            console.log("NO-FALTAN-V1")
            b();
        }
        i++
    }
});

//PARA QUE LOS DATOS SIGAN PRESENETES DESPUES DE ACTUALIZAR LA PAGINA
document.addEventListener("DOMContentLoaded", (e) => {
    if(localStorage.getItem("usuarios")){
        usuarios = JSON.parse(localStorage.getItem("usuarios"));
    }
})