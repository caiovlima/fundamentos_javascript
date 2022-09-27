const minhaLista = [];

const minhaListaDeTarefas = [
    'mandar email',
    'colocar comida para o dog',
    'limpar quarto'
];


// quantidade de itens
console.log(minhaListaDeTarefas.length);

//adicionar item
minhaListaDeTarefas.push('formatar pc');
console.log(minhaListaDeTarefas);

// remover ultimo item
const ultimo = minhaListaDeTarefas.pop();

// remover o primeiro item
const primeiro = minhaListaDeTarefas.shift();

//remover item especifico a partir do index
//splice (qual o index, quantos a partir do index remover)
minhaListaDeTarefas.splice(2,1);

//ordernar números, strings ou por algum parâmetro
const numeros = [8, 6, 50, 1, 3, 2, 4];
console.log(numeros.sort());

