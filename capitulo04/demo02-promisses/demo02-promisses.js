const readline = require('readline');
const terminal = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// terminal.question('Qual seu nome ? \n', nome => {
//     terminal.question('Qual seu telefone ? \n', telefone => {
//         console.log(`Nome: ${nome} \n`, `Telefone: ${telefone}`)
//     })
// });

function questionAsync(texto) {
    return new Promise((resolve, reject) => {
        terminal.question(`${texto} \n`, resolve);
    });
}

let nome = "";
let telefone = "";

Promise.resolve()
    .then(() => questionAsync('Qual é o seu nome ?'))
    .then(respostaNome => {
        nome = respostaNome;
    })
    .then(() => questionAsync('Qual seu telefone ?'))
    .then(respostaTelef => {
        telefone = respostaTelef;
    })
    .then(() => {
        console.log(`Nome:  ${nome} \n`, `Telefone: ${telefone}`);
    })
    .catch(error => {
        console.log(`Error: ${error}`);
    })
    .finally(() => terminal.close());