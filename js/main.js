// Introducao
var nome = "Adelson";
var idade = 32;
console.log(nome + " tem " + idade + " anos");
var frase = "Japao é o melhor time";
console.log(frase.replace("Japao", "Brasil"));
console.log(frase.toLowerCase());
console.log(frase.toUpperCase());
console.log(frase.replace("Japao", "Brasil").toUpperCase());

// Array
var lista = ["maca", "pera", "laranha"];
console.log(lista);
lista.push("uva"); // acrescenta uva no array
console.log(lista);
lista.pop(); // remove a ultima posicao do array
console.log(lista);
console.log(lista.length); // mostra a quantidade de itens no array
console.log(lista.reverse()); // inverte a ordem
console.log(lista.toString()); // transforma em string
console.log(lista.join(" - ")); // transforma em string

// Dicionario (Objeto)
var fruta = { nome: "maca", cor: "vermelha" };
console.log(fruta.nome);
console.log(fruta.cor);

var frutas = [
  { nome: "maca", cor: "vermelha" },
  { nome: "pera", cor: "verde" },
  { nome: "uva", cor: "roxa" },
];
console.log(frutas[1].nome);
console.log(frutas[1].cor);

// Condicionais, laço de repetiçao e Date
/*
var idade = prompt("Qual sua idade?");
//var idade = 18;
if (idade >= 18) {
  alert("maior de idade");
} else {
  alert("menor de idade");
}

var count = 0;
while (count <= 5) {
  console.log(count);
  count++;
}


var count;
for (count = 0; count <= 5; count++) {
  console.log(count);
}


// Data
var d = new Date();
console.log(d);
console.log(d.getFullYear());
console.log(d.getMonth() + 1);
*/
// Funcoes
/*
function soma(n1, n2) {
  return n1 + n2;
}
console.log(soma(5, 10));


function validaIdade(idade) {
  if (idade >= 18) {
    return true;
  } else {
    return false;
  }
}
var idade = prompt("Qual a idade?");
console.log(validaIdade(idade));
*/

function botao() {
  //console.log("click ok");
  document.getElementById("click").innerHTML = "Clique Aqui";
}
function redirect() {
  window.open("https://google.com");
}
function troca(elemento) {
  //document.getElementById("troca").innerHTML = "Trocou";
  elemento.innerHTML = "Trocou";
}
function volta(elemento) {
  //document.getElementById("troca").innerHTML = "Click Aqui";
  elemento.innerHTML = "Passe o Mouse";
}
function load() {
  console.log("Pagina Carregada!");
}
function funcaoChange(elemento) {
  console.log(elemento.value);
}
