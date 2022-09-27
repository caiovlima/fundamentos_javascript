const pessoa = {
    _nome: '',

    get nome() { return this._nome },
    set nome(valor) { this._nome = valor.toLocaleUpperCase(); },
}

pessoa.nome = 'maria do céu';
console.log(pessoa.nome);