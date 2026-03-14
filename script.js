function cadastrar() {
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;

    if (nome == "" || email == "") {
        document.getElementById("mensagem").style.color = "red";
        document.getElementById("mensagem").innerHTML = "Preencha todos os campos!";
    } else {
        document.getElementById("mensagem").style.color = "green";
        document.getElementById("mensagem").innerHTML = "Cadastrado com sucesso, " + nome + "!";
    }
}