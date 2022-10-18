console.log("😼");

const formulario = document.querySelector("#formulario");
//const btnLink = document.querySelector("#btnIniciarSesion");

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
    const[rut,pass] = [...data.values()];
    if(!(rut).trim() || !(pass).trim()){
        console.log("Completa todos los campos");
        return;
    }
    agregarUsuario(rut,pass);
    console.log(usuarios);
    setTimeout(()=> location.href="./Misdatos.html",2000);
});

//PARA QUE LOS DATOS SIGAN PRESENETES DESPUES DE ACTUALIZAR LA PAGINA
document.addEventListener("DOMContentLoaded", (e) => {
    if(localStorage.getItem("usuarios")){
        usuarios = JSON.parse(localStorage.getItem("usuarios"));
    }
})