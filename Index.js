class heroiDoDesafio {
    constructor (nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;        
    }
    
    tipoDeAtaque () {
        if (this.tipo == "Mago") {
         return this.ataque = "magia"
        } else if (this.tipo == "Guerreiro") {
         return this.ataque = "espada"
        } else if (this.tipo == "Monge") {
         return this.ataque = "artes marciais"
        } else if (this.tipo == "Ninja") {
         return this.ataque = "shuriken"
        }
    }     

    atacar () {
        console.log (`O ${this.tipo} atacou usando ${this.tipoDeAtaque()}!`)
    }
}

let heroi = new heroiDoDesafio ("Daniel", "35", "Monge");

heroi.atacar();