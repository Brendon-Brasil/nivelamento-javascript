
function converterParaMaiusculas(texto) {
    let mensagem = "Convertendo para maiúsculas";
    return texto.toUpperCase();
}

console.log(converterParaMaiusculas("teste")); 

const converterParaMaiusculasArrow = (texto) => {
    let mensagem = "Convertendo para maiúsculas";
    return texto.toUpperCase();
};

console.log(converterParaMaiusculasArrow("exemplo")); 

console.log(mensagem);

/*
   O erro ocorre porque a variável "mensagem" foi declarada com "let" dentro das funções.
   Em JavaScript, variáveis declaradas dentro de uma função possuem escopo local (ou escopo de função),
   ou seja, só podem ser acessadas dentro da função onde foram definidas.
*/

function processarDados(callback) {
    console.log("Processando dados...");
    callback();
}

processarDados(() => console.log("Processo concluído"));

async function buscarUsuario() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({ nome: "Brendon", id: 1 });
        }, 1000);
    });
}

buscarUsuario().then(usuario => console.log(usuario));