const capitao = {
    nome: 'Steve Rogers',
    codinome: 'Capitao America',
    armaPrincipal: "Escudo de Vibranium",
    armaSecundaria: '',
    velocidade: 85,
    forca: 75,
    resistencia: 80,
    descricao: function(){
        return "Nome do personagem: " + this.nome + "\n" +
        "Codinome: " + this.codinome + "\n" +
        "Arma Principal: " + this.armaPrincipal + "\n" +
        "Arma Secundaria: " + this.armaSecundaria + "\n" +
        "Nivel de força: " + this.forca + "\n" +
        "Nivel de velocidade: " + this.velocidade + "\n" +
        "Nivel de resistencia: " + this.resistencia
    }   
}

const thanos = {
    nome: 'Thanos',
    codinome: 'Thanos',
    armaPrincipal: "Manopla",
    armaSecundaria: 'Espada',
    velocidade: 45,
    forca: 80,
    resistencia: 90,
    descricao: function(){
        return "Nome do personagem: " + this.nome + "\n" +
        "Codinome: " + this.codinome + "\n" +
        "Arma Principal: " + this.armaPrincipal + "\n" +
        "Arma Secundaria: " + this.armaSecundaria + "\n" +
        "Nivel de força: " + this.forca + "\n" +
        "Nivel de velocidade: " + this.velocidade + "\n" +
        "Nivel de resistencia: " + this.resistencia
    }   
}

const ironman = {
    nome: 'Tony Stark',
    codinome: 'Homem de Ferro',
    armaPrincipal: "Armadura",
    armaSecundaria: 'Jarvis/Friday',
    velocidade: 100,
    forca: 85,
    resistencia: 80,
    descricao: function(){
        return "Nome do personagem: " + this.nome + "\n" +
        "Codinome: " + this.codinome + "\n" +
        "Arma Principal: " + this.armaPrincipal + "\n" +
        "Arma Secundaria: " + this.armaSecundaria + "\n" +
        "Nivel de força: " + this.forca + "\n" +
        "Nivel de velocidade: " + this.velocidade + "\n" +
        "Nivel de resistencia: " + this.resistencia
    }   
}

const thor = {
    nome: 'Thor Odinson',
    codinome: 'Thor',
    armaPrincipal: "Mjolnir",
    armaSecundaria: 'Stormbreaker',
    velocidade: 90,
    forca: 90,
    resistencia: 90,
    descricao: function(){
        return "Nome do personagem: " + this.nome + "\n" +
        "Codinome: " + this.codinome + "\n" +
        "Arma Principal: " + this.armaPrincipal + "\n" +
        "Arma Secundaria: " + this.armaSecundaria + "\n" +
        "Nivel de força: " + this.forca + "\n" +
        "Nivel de velocidade: " + this.velocidade + "\n" +
        "Nivel de resistencia: " + this.resistencia
    }   
}

const hulk = {
    nome: 'Bruce Banner',
    codinome: 'Hulk',
    armaPrincipal: "Murro",
    armaSecundaria: '',
    velocidade: 45,
    forca: 100,
    resistencia: 100,
    descricao: function(){
        return "Nome do personagem: " + this.nome + "\n" +
        "Codinome: " + this.codinome + "\n" +
        "Arma Principal: " + this.armaPrincipal + "\n" +
        "Arma Secundaria: " + this.armaSecundaria + "\n" +
        "Nivel de força: " + this.forca + "\n" +
        "Nivel de velocidade: " + this.velocidade + "\n" +
        "Nivel de resistencia: " + this.resistencia
    }   
}

const strange = {
    nome: 'Steve Strange',
    codinome: 'Dr Estranho',
    armaPrincipal: "Magia",
    armaSecundaria: '',
    velocidade: 50,
    forca: 95,
    resistencia: 40,
    descricao: function(){
        return "Nome do personagem: " + this.nome + "\n" +
        "Codinome: " + this.codinome + "\n" +
        "Arma Principal: " + this.armaPrincipal + "\n" +
        "Arma Secundaria: " + this.armaSecundaria + "\n" +
        "Nivel de força: " + this.forca + "\n" +
        "Nivel de velocidade: " + this.velocidade + "\n" +
        "Nivel de resistencia: " + this.resistencia
    }   
}

const personas = [thanos, capitao, strange, thor, ironman]

function compara(lista){
    let maior;
    let menor= lista[0].forca
    for(p in lista){
        if(lista[p].forca > menor){
            maior = lista[p].nome
        }else if(lista[p].forca > maior){
            maior = lista[p].forca
        }else{
            menor = lista[p].forca

        }
    }

    return "O mais forte é " + maior

}



console.log(compara(personas))