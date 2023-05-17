//botão tema
function tema1(){
    document.body.style.backgroundColor = "#c6c6c6";
}

function tema2(){
    document.body.style.backgroundColor = "#505050";
}

//calculo energia
function calcularConsumo() {
    var watts = parseFloat(document.getElementById("watts").value);
    var horas = parseFloat(document.getElementById("horas").value);
    var dias = parseFloat(document.getElementById("dias").value);
    var preco = parseFloat(document.getElementById("preco").value);

    var kwh = watts * horas * dias / 1000;
    var custo = kwh * preco;

    alert('Você vai gastar R$'+custo)
}