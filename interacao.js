const hora = new Date().toLocaleTimeString();
var nome = prompt("Qual o seu nome?").toUpperCase();

if (hora >= 6 && hora < 12 ){
    var dia = "Bom dia!";

}if (hora >= 12 && hora < 18) {
    dia = "Boa tarde!";
    
} else{
    dia = "Boa noite!";
}

const texto = "Olá, " + nome + ". " + dia + " seja bem vinda(o)!";
alert(texto);