console.log("😼");

const formulario = document.querySelector("#formulario");
//const btnIniciarSesion = document.querySelector("#btnIniciarSesion");
const btnCancelar = document.querySelector("#btnCancelar");

let usuarios = [];

const agregarUsuario = (passActual,nuevaPass,passRe) =>{
    const objetoTodo = {
        PassActual: passActual,
        NuevaPass: nuevaPass,
        PassRe: passRe
    }
    usuarios.push(objetoTodo);
}
/*
btnIniciarSesion.addEventListener('click',(event) => {
    event.preventDefault();
    setTimeout(()=> location.href="./Index.html");
});
*/
btnCancelar.addEventListener('click',(event) => {
    event.preventDefault();
    setTimeout(()=> location.href="./MisDatos.html");
});

formulario.addEventListener("submit",(e)=>{
    e.preventDefault();

    //console.log("Testeo Formulario");

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
    const[passActual,nuevaPass,passRe] = [...data.values()];
    if(!(passActual).trim() || !(nuevaPass).trim() || !(passRe).trim()){
        console.log("Completa todos los campos");
        return;
    }
    agregarUsuario(passActual,nuevaPass,passRe);
    console.log(usuarios);
    setTimeout(()=> location.href="./MisDatos.html",2000);
});

//PARA QUE LOS DATOS SIGAN PRESENETES DESPUES DE ACTUALIZAR LA PAGINA
document.addEventListener("DOMContentLoaded", (e) => {
    if(localStorage.getItem("usuarios")){
        usuarios = JSON.parse(localStorage.getItem("usuarios"));
    }
})