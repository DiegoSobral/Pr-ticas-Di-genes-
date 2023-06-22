function logar(){

    var login     = document.getElementById('login').value;
    var senha    = document.getElementById('senha').value;

    if(login == "" && senha == ""){
        alert('Insira email e senha.')
    }
    else if(login == "" || senha == ""){
        alert('Insira todos os dados.')
    }
    else{
        window.location = "tela-principal.html";
    }
}
