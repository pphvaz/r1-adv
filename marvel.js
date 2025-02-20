class Personagem {
    constructor(nome, codinome, armaPrincipal, armaSecundaria, velocidade, forca, resistencia) {
        this.nome = nome;
        this.codinome = codinome;
        this.armaPrincipal = armaPrincipal;
        this.armaSecundaria = armaSecundaria || "Nenhuma"; // Se vazio, define como "Nenhuma"
        this.velocidade = velocidade;
        this.forca = forca;
        this.resistencia = resistencia;
    }

    descricao() {
        return `Nome do personagem: ${this.nome}\n` +
               `Codinome do personagem: ${this.codinome}\n` +
               `Arma principal: ${this.armaPrincipal}\n` +
               `Arma secundaria: ${this.armaSecundaria}\n` +
               `Nível de força: ${this.forca}\n` +
               `Nível de velocidade: ${this.velocidade}\n` +
               `Nível de resistência: ${this.resistencia}`;
    }
}

// Criando instâncias dos personagens
const capitaoAmerica = new Personagem("Steve Rogers", "Capitão América", "Escudo americano", "", 85, 75, 80);
const homemDeFerro = new Personagem("Tony Stark", "Homem de Ferro", "Armadura de Ferro", "Repulsores", 70, 90, 85);
const thor = new Personagem("Thor Odinson", "Thor", "Mjolnir", "Raio de Zeus", 80, 100, 90);
const hulk = new Personagem("Bruce Banner", "Hulk", "Força bruta", "", 60, 100, 95);
const thanos = new Personagem("Thanos", "Thanos", "Manopla do Infinito", "", 50, 100, 90);

// Criando um array com todos os personagens
const personagens = [capitaoAmerica, homemDeFerro, thor, hulk, thanos];