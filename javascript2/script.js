//Exercícios Fáceis




function averiguar() {
    let ok = document.getElementById("ok").value;
    if (ok == "ok") {
        alert("Ok");
    }
}

function vernum5() {
    let n5 = document.getElementById("num5").value;
    if (n5 == 5) {
        alert("O número é 5");
    }
}

function veradmsupremo(){
    let adm = document.getElementById("admsupremo").value;
    if (adm == "admin") {
        document.getElementById("resultadoadm").textContent = "Correto";
    }
}

function alterartexto() {
    let texto = document.getElementById("testar").value;
    if (texto == "teste") {
        document.getElementById("elemuda").textContent = "Você testou!"
    }
}

function mudarcor() {
    let cor = document.getElementById("divazul").value;
    if (cor == "azul") {
        document.getElementById("divzinha").style.backgroundColor = "#2dabffee";
        document.getElementById("divzinha").style.padding = "20px";
    }
}

function numbermaiorque10() {
    let num = document.getElementById("averiguarnumero10").value;
    if (num > 10) {
        alert("O número é maior que 10");
    }
}

function numbermenorque50() {
    let num = document.getElementById("menor50").value;
    if (num < 50) {
        alert("O número é menor que 50");
    }
}

function versenha() {
    let senha = document.getElementById("versenha").value;
    if (senha == "senha") {
        document.getElementById("resultadosenha").textContent = "Senha correta!";
    }
}

function mudarfundo() {
    let corfundo = document.getElementById("fundoescuro").value;
    if (corfundo == "escuro") {
        document.body.style.backgroundColor = "#6a7277ee";
    }
}

function lucas2() {
    let rodrigo = document.getElementById("cld").value;
    if (rodrigo == 67) {
        document.getElementById("ldc3").textContent = "ADS ta me chamando";
        document.getElementById("ldc3").style.color = "red";
    }
}

function slaoxe() {
    let x = document.getElementById("cesar244").value;
    if (x == "monkey") {
        document.getElementById("resultadosenha").style.color = "red";
        document.getElementById("resultadosenha").style.fontSize = "900px";
    }
}