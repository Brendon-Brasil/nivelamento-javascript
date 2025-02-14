
function verificarNumero(num) {
    if (num > 0) {
        console.log("O número é positivo.");
    } else if (num < 0) {
        console.log("O número é negativo.");
    } else {
        console.log("O número é zero.");
    }
}

console.log("Números de 1 a 10:");
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

let soma = 0;
let contador = 1;
while (contador <= 5) {
    soma += contador;
    contador++;
}
console.log("A soma dos números de 1 a 5 é:", soma);

verificarNumero(5);  // Exemplo com número positivo
verificarNumero(-3); // Exemplo com número negativo
verificarNumero(0);  // Exemplo com zero

do {
    let opcao = prompt("Digite uma opção (A, B ou S para sair):").toUpperCase();
    switch (opcao) {
        case "A":
            console.log("Opção A selecionada");
            break;
        case "B":
            console.log("Opção B selecionada");
            break;
        case "S":
            console.log("Saindo do menu...");
            break;
        default:
            console.log("Opção inválida");
    }
} while (opcao !== "S");