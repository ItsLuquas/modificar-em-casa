function VerificarIdade() {
    let idade = document.getElementById("idade").value;
    let resultado = document.getElementById("resultado");
    if (idade == "" || idade == 0) {
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













