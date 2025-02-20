# Comparador de Personagens Marvel

## Descrição do Projeto
Este projeto em JavaScript cria objetos que representam personagens do universo Marvel, especificamente os Vingadores e seu principal rival, Thanos. A aplicação permite comparar os atributos desses personagens, como velocidade, força e resistência, e gerar rankings com base nesses atributos.

## Funcionalidades
- Criar objetos para cada personagem com nome, codinome, armas, velocidade, força e resistência.
- Comparar os atributos entre os personagens e indicar qual deles é superior em cada quesito.
- Gerar rankings ordenados por força, velocidade e resistência.
- Exibir descrições detalhadas de cada personagem.

## Tecnologias Utilizadas
- JavaScript (ES6)

## Estrutura do Código
### 1. Classe `Personagem`
Cada personagem é representado por um objeto instanciado da classe `Personagem`, que contém:
- `nome`: Nome real do personagem
- `codinome`: Nome de herói ou vilão
- `armaPrincipal`: Arma principal utilizada pelo personagem
- `armaSecundaria`: Arma secundária (opcional, caso não tenha, o valor será "Nenhuma")
- `velocidade`: Pontuação de velocidade (0-100)
- `forca`: Pontuação de força (0-100)
- `resistencia`: Pontuação de resistência (0-100)

### 2. Instância dos Personagens
Os seguintes personagens são criados:
- Capitão América
- Homem de Ferro
- Thor
- Hulk
- Thanos

### 3. Comparação de Atributos
Usando loops `for`, cada personagem é comparado com os demais em termos de:
- **Velocidade**
- **Força**
- **Resistência**

O console exibe mensagens indicando qual personagem é superior em cada comparação.

### 4. Rankings
A aplicação também gera rankings dos personagens com base nos atributos:
- Ranking de Força
- Ranking de Velocidade
- Ranking de Resistência

## Como Executar o Projeto
1. Copie o código para um arquivo `.js` (por exemplo, `personagens.js`).
2. Execute o arquivo em um ambiente Node.js ou utilize um navegador com suporte a JavaScript.
3. Veja as comparações e rankings no console.

## Exemplo de Saída no Console
```bash
Fazendo a comparação da velocidade dos personagens......
Capitão América é mais rápido que Homem de Ferro
Thor é mais rápido que Homem de Ferro
...

Ranking de Força dos Personagens.......
1. Thor - Força: 100
2. Hulk - Força: 100
...
```