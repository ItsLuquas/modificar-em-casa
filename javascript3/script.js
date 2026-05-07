function VerificarIdade() {
    let idade = document.getElementById("idade").value;
    let resultado = document.getElementById("resultado");
    if (idade == "" || idade <= 0) {
        resultado.textContent = "Idade inválida";
    }
    else if (idade < 12) {
        resultado.textContent = "Você é criança";
    }
    else if (idade >= 18 && idade <= 59) {
        resultado.textContent = "Você é adulto";
    }
    else if (idade >= 60) {
        resultado.textContent = "Você é idoso";
    }
    else if (idade >= 12 && idade <= 17) {
        resultado.textContent = "Você é adolescente";
    }
}

function Hooh() {
    let usuario = document.getElementById("usuario").value;
    let senha = document.getElementById("senha").value;
    let resultado2 = document.getElementById("resultado2");
    if (usuario == "admin" && senha == "1234") {
        resultado2.textContent = "Login realizado com sucesso";
    }

    else if (usuario == "professor" && senha == "senac"){
        resultado2.textContent = "Bem-vindo, professor";
    }

    else if (usuario == "" && senha == ""){
        resultado2.textContent = "Preencha todos os campos";
    }

    else {
        resultado2.textContent = "Usuário ou senha incorretos"
    }
}