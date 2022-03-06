/*
CURSO DIO:  PROGRAMAÇÃO PARA INTERNET COM JAVASCRIPT
*/

// >> o ';' e opcional no javascript.
// >> porem se for mais de uma instrucao na mesma linha, sera necessario o ';'


// === AULA:  INTRODUÇÃO AO JAVASCRIPT ===

var bemVindo = "Bem-vindo ao site!";
var num1 = num2 = 2;

/* COLOCAR CAIXA ALTA - toUpperCase() / SUBSTITUIR - replace()
alert("Meu primeiro javascript!!!!");
alert(bemVindo.toUpperCase() + " versão 2021!");
alert(bemVindo.replace("vindo", "assado") + " versão 2021!");

// operador '+' com numeros soma; com strings concatena
alert("numeros: " + num1 + num2);
alert(num1 + num2);
*/

console.log("primeira mensagem no console do browser!");





// === AULA:  ARRAY E DICIONARIOS === [PAREI > AULA COMPLETA]
var minhaLista = ["pera", "carambola", "uva", "caja", "goiaba", "manga", "maracuja"];
console.log("primeiro versão da lista:  " + minhaLista.join(" | "));

// adcionado nomes intens a minhLista
minhaLista.push("caju");
console.log("segunda versão da lista, com adição de caju. com toString:  " + minhaLista);


// posicao e tamanho da lista
console.log(minhaLista);
console.log("primeiro item da lista acima:  " + minhaLista[0]);
console.log("tamanho da lista acima:  " + minhaLista.length);
console.log("posicao do elemento 'uva':  " + minhaLista.indexOf("uva"));

//removendo itens com 'pop' e 'shift'
minhaLista.pop(); //remove ultimo elemento/mais recente
console.log("minha lista, depois de ter dar 'pop()':  " + minhaLista);
minhaLista.shift();//remove o primeiro elemento/mais antigo
console.log("minha lista, depois de ter dar 'shift()':  " + minhaLista);

//removendo itens com splice
minhaLista.splice(1, 2); // arg1 - início; arg2 - quantos elementos subsequentes serão removidos
console.log("minha lista, depois de ter dar 'splice(1, 2)':  " + minhaLista);
//para remover apenas um elemento usa o splice(1,1)


//escolhendo o separador usando 'join'
//minhaLista.join("-");
// >> aparentemente o join nao funciona sozinho
// >> apenas dentro do 'console.log'
// >> ou dar o 'join' antes, e depois dar um 'console.log' depois, ele volta a string padrao
console.log("terceira versão da lista, com joins:  " + minhaLista.join(" ++ "));


//dicionario
var meuDicionario = {cidade: "Natal", regiao: "Nordeste", pais: "Brasil"};
console.log("meu dicionario:  ");
console.log(meuDicionario);
console.log("meu dicionario a cidade:  " + meuDicionario.cidade);

// criando uma lista de dicionarios
var dicionarioCidades = [
    {cidade: "João Pessoa", regiao: "Nordeste", pais: "Brasil"},
    {cidade: "München", regiao: "Süden", pais: "Deutschland"}
];
console.log("meu segundo dicionario");
console.log(dicionarioCidades);
console.log("região da segunda cidade:  " + dicionarioCidades[1].regiao);





// === AULA:  CONDICIONAIS, LACOS, REPETICAO, DATE ===
var idade = prompt("qual sua idade?");
if(idade >= 18) {
    alert("pessoa maior de idade, ela tem: " + idade);
}
else {
    alert("pessoa menor de idade, ela tem " + idade);
}

var count = 0;
while(count < 4) {
    console.log("no while < 3, variavel count:  " + count);
    count++;
}

for(count = 0; count <= 2; count++) {
    console.log("novo valor count no for:  " + count);
}

var minhaData = new Date();
console.log("data de hoje: dia " + minhaData.getDay() 
            + " mes "  + minhaData.getMonth() 
            + " ano " + minhaData.getYear());

console.log("data completa pelo Date:  " + minhaData);





// === AULA:  FUNCOES === concluida

function funcaoSoma() {
    // com funcao 'prompt' o num vira como string
    // necessario usar funcao 'parseInt()' para converter
    // para converter para string a maioria das variaveis possui um metodo toString()
    // testei para variaveis a palavra reservada 'var' nao e obrigatoria
    var n1 = parseInt(prompt("digite o primeiro numero para soma: "));
    n2 = parseInt(prompt("digite o segundo numero para soma: "));
    // codigo acima nao da erro

    // dentro da funcao tambem e opcional palavra 'var' para variaves
    // nao da erro essa funcao abaixo dentro da funcao acima
    function minhaSoma(n1, n2) {
        var soma = n1 + n2;
        return soma;
    }
    alert("resultado da soma dos numeros informados:  " + minhaSoma(n1, n2));
}



// === AULA:  MANIPULANDO ELEMENTOS DA PAGINA === parei em 16min31s

var cliqueVezes = 0
function clicaBotao() {
    cliqueVezes++;
    if(cliqueVezes == 1)
        document.getElementById("clicado").innerHTML =
            "<i>Botão clicado " + cliqueVezes + ", usando getElementById()</i>"; 
    else
        if(cliqueVezes%2 == 0) {
            document.getElementById("clicado").innerHTML = 
                "<u>Botão clicado " + cliqueVezes + ", usando getElementById()</u>";
        }
        else {
            document.getElementById("clicado").innerHTML = 
                "<i>Botão clicado " + cliqueVezes + ", usando getElementById()</i>";
        }
}


function irPagina2() {
    // nessa forma ele abre a nova pagina na mesma aba; nao pq do 'false';
    //window.open("pagina2.html", "_self", false);

    // outra forma; tambem abre na mesma aba
    window.location.href = "pagina2.html";
}

function voltarParaIndex(){
    // nessa forma ele sempre vai abrir uma nova aba
    // window.open("index.html");
    
    // nessa forma ele abre a nova pagina na mesma aba; nao pq do 'false'; acima deu certo;
    window.open("index.html", "_self");
}

// com getElementById recupero o elemento para fazer anexacao da tag '<img>'
function mostrarImg() {
    document.getElementById("mostrarImg").innerHTML = '<img src="Mondrian.jpg" height="40" width="40">';
}
function esconderImg() {
    document.getElementById("mostrarImg").innerHTML = '<p>Mostrar imagem</p>';
}

// neste outro caso foi passado como parametro o proprio elemento DOM
// assim nao e necessario fazer o getElementById
function mostrarImg2(batata) {
    batata.innerHTML = '<img src="Mondrian2.jpg" height="40" width="40">';
}
function esconderImg2(batata) {
    batata.innerHTML = '<p>Mostrar imagem</p>';
}

// funcao para quando a pagina terminar de carregar totalmente
function indexCarregado() {
    alert("PÁGINA CARREGADA!");
}


function valorSelect1(tomate) {
    var valorSelect = tomate.value;
    console.log(valorSelect);
    document.getElementById("escolhaSelect").innerHTML = 
    // #1   "<p>Valor escolhido: " + valorSelect + "</p>"
    /* #2*/ `<p>Valor escolhido: ${valorSelect}</p>`
    // tanto a opcao #1 como a #2 pegam uma string "" e concatena com variavel 'valorSelect'
}
// TESTAR OU NAO
function valorSelect2(tomate) {
    //var valorSelect = tomate.value;
    tomate.op
    console.log(valorSelect);
    document.getElementById("escolhaSelect").innerHTML = 
    // #1   "<p>Valor escolhido: " + valorSelect + "</p>"
    /* #2*/ `<p>Valor escolhido: ${valorSelect}</p>`
    // tanto a opcao #1 como a #2 pegam uma string "" e concatena com variavel 'valorSelect'
}

