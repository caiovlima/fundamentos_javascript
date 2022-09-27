class Heroi {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    atacar(){
        console.log(`${this.nome} Atacou`);
    }

    defender() {
        console.log(`${this.nome} Defender`);
    }
}