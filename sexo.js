let menu_responsive = document.querySelector(".checkbtn");

menu_responsive.onclick = function(){
    navBar = document.querySelector(".navbar");
    navBar.classList.toggle("active");
}

const nombre = document.getElementById("name");
const email = document.getElementById("email");
const form = document.getElementById("form");
const parrafo = document.getElementById("warnings");

//function validarFormulario( ) {
    //let warnings = ""
    //let entrar = false
    //let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    //if (nombre.value.length < 3) {
        //warnings += `El nombre debe contener más de 3 caracteres`;
        //valido = false;
    //}
//}

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    parrafo.innerHTML = ""
    if(nombre.value.length < 2){
        warnings += `El nombre no es valido  <br> <br>`
        entrar = true
    }
    if(!regexEmail.test(email.value)){
        warnings += `El email no es valido  <br> <br> `
        entrar = true
    }

    if(entrar){
        parrafo.innerHTML = warnings
    }
})
