let produtos = [];
let precos = [];
let posicao = 0;
let quantidade = 0;

function cadastro(){
    let nome = document.getElementById("produto").value;
    let valor = document.getElementById("preco").value;
    if (valor == "" || nome == "") {
        document.getElementById("mensagem").textContent = "Preencha todos os campos";
        document.getElementById("mensagem").style.color = "red";
    }

    else {
        produtos.push(nome);
        precos.push(valor);
        quantidade = quantidade + 1;
        document.getElementById("mensagem").textContent = "Produto cadastrado com sucesso";
        document.getElementById("mensagem").style.color = "green";
        document.getElementById("quantidade").textContent = "Quantidade de produtos cadastrados: " + quantidade;
        document.getElementById("produto").value = "";
        document.getElementById("preco").value = "";
    }
}

function mostrar(){
    let escrito = document.getElementById("itens").textContent;
    document.getElementById("itens").textContent = escrito + " " + produtos[posicao] + ", preço:" + precos[posicao] + " " + "     |     ";
    posicao = posicao +1;
}
