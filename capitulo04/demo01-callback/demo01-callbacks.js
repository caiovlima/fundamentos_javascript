const fs = require('fs');
fs.readFile('./arq1.txt', (error, resposta) => {
    if(error){
        console.log(`[Deu erro no arquivo 1] - Error: ${error.stack}`);
        return;
    };

    console.log(resposta.toString());
})