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
const homemDeFerro = new Personagem("Tony Stark", "Homem de Ferro", "Armadura de Ferro", "Repulsores", 70, 65, 85);
const thor = new Personagem("Thor Odinson", "Thor", "Mjolnir", "Raio de Zeus", 80, 100, 90);
const hulk = new Personagem("Bruce Banner", "Hulk", "Força bruta", "", 60, 92, 95);
const thanos = new Personagem("Thanos", "Thanos", "Manopla do Infinito", "", 50, 100, 90);

// Criando um array com todos os personagens
const personagens = [capitaoAmerica, homemDeFerro, thor, hulk, thanos];


// Função para comparar um atributo específico entre personagens
function compararAtributo(atributo, descricao) {
    console.log(`Fazendo a comparação de ${descricao} dos personagens......\n`);
    for (let i = 0; i < personagens.length; i++) {
        for (let j = i + 1; j < personagens.length; j++) {
            if (personagens[i][atributo] > personagens[j][atributo]) {
                console.log(`${personagens[i].nome} é mais ${descricao} que ${personagens[j].nome}`);
            } else if (personagens[i][atributo] < personagens[j][atributo]) {
                console.log(`${personagens[j].nome} é mais ${descricao} que ${personagens[i].nome}`);
            } else {
                console.log(`${personagens[i].nome} e ${personagens[j].nome} têm a mesma ${descricao}`);
            }
        }
    }
}

// Função para gerar ranking baseado em um atributo
function gerarRanking(atributo, descricao) {
    console.log(`Ranking de ${descricao} dos personagens.......\n`);
    const ranking = personagens.slice().sort((a, b) => b[atributo] - a[atributo]);
    ranking.forEach((personagem, index) => {
        console.log(`${index + 1}. ${personagem.nome} - ${descricao}: ${personagem[atributo]}`);
    });
}

// Comparação de atributos
compararAtributo("velocidade", "rápido");
compararAtributo("forca", "forte");
compararAtributo("resistencia", "resistente");

// Geração de rankings
gerarRanking("forca", "Força");
gerarRanking("velocidade", "Velocidade");
gerarRanking("resistencia", "Resistência");
