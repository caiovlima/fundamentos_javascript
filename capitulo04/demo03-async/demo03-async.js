const readline = require('readline');
const terminal = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function questionAsync(texto) {
    return new Promise((resolve, reject) => {
        terminal.question(`${texto} \n`, msg => {
            !!msg ? resolve(msg) : reject(new Error('O campo não deve ser vazio'))
        });
    });
}


async function main() {
    try {
        const name = await questionAsync('Qual é o seu nome?');
        
        const telefone = await questionAsync('Qual o seu telefone ?');
    } catch (error) {
        console.log(error.stack);
    } finally {
        terminal.close();
    }
}

main();

