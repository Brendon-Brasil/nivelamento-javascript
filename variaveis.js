
let nome = "João Silva";
let idade = 25;
let aprovado = true;
let notas = [8.5, 9.0, 7.8];
let usuario = { email: "joao.silva@email.com", senha: "123456" };


console.log("Nome:", nome);
console.log("Idade:", idade);
console.log("Aprovado:", aprovado);
console.log("Notas:", notas);
console.log("Usuário:", usuario);

//O valor null é atribuído intencionalmente a uma variável para indicar que ela está vazia ou sem valor válido.
//O undefined aparece quando uma variável foi declarada, mas ainda não recebeu valor.

//Essa é a diferença de null e undefined.

let valorNulo = null;
let valorIndefinido;

if (valorNulo === null) {
    console.log("valorNulo é null");
} else {
    console.log("valorNulo não é null");
}

if (typeof valorIndefinido === "undefined") {
    console.log("valorIndefinido é undefined");
} else {
    console.log("valorIndefinido não é undefined");
}
