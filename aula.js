class Pessoa {
    nome;
    idade;
    peso;

    constructor(nome,idade,peso){
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
    }

    informacoes()
    {
        if(this.nome == undefined || this.idade == undefined || this.peso == undefined)
        {
            console.log('Informações incompletas!');
            console.log(this)
        }
        else{
            console.log(`Meu nome é ${this.nome} , Minha idade é ${this.idade} e Meu Peso é ${this.peso}!`);
        }
        
    }
}

(function(){
 const gilmar = new Pessoa();
 gilmar.informacoes();
})();