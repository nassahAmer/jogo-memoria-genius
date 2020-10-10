
let order = []; // var para ordem aleatórias criada pelo jogo
let clickedOrder = []; // var para ordem dos cliques do jogador
let score = 0;

/** 
 * 0 - verde
 * 1 - vermelho
 * 2 - amarelo
 * 3 - azul
 * **/

 // criando variável para cada classe criada no HTML
 const blue = document.querySelector('.blue');
 const red = document.querySelector('.red');
 const yellow = document.querySelector('.yellow');
 const green = document.querySelector('.green');

 /**
  * Cria ordem aleatória de cores e adiciona no array order
  * Adiciona cor ao primeiro índice do array order
  * Chama função para colorir os demais índices do array order
  */
 let shuffleOrder = () => {
     let colorOrder = Math.floor(Math.random() * 4); // número aleatório de 0 a 3
     order[order.length] = colorOrder; //adiciona no array order o número aleatório
     clickedOrder = [];

     for(let i in order) {
         let elementColor = createColorElement(order[i]); //acende a primeira cor do array order
         lightColor(elementColor,Number(i) + 1); //chama função para colorir as próximas ordens do array order
     }
 }

/** Acende a próxima cor **/
 let lightColor = (element, number) => {
    number = number * 100;
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 20);
    setTimeout(() => {
        element.classList.remove('selected');
    });
 }

 /**
  * Função para verificar se a ordem clicada pelo jogador
  * é igual a ordem gerada pelo jogo
  */
 let checkOrder = () => {
     for(let i in clickedOrder) {
         if(clickedOrder[i] != order[i]) {
             gameOver(); // função quando o jogador perde
             break;
         }
     }
     if(clickedOrder.length == order.length) {
         alert('Pontuação: ${score}\nVocê acertou! Iniciando próximo nível!');
         nextLevel(); // função para passar para o próximo level do jogo
     }
 }

 /**
  * Função para o clique do usuário 
  */
 let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    }, 250);
 }

 /**
  * Função para retornar a cor
  */
 let createColorElement = (color) => {
    if(color == 0) {
        return green;
    } else if(color == 1) {
        return red;
    } else if(color == 2) {
        return yellow;
    } else if(color == 3) {
        return blue;
    }
 }

 /**
  * Função para o próximo level do jogo
  */
 let nextLevel = () => {
     score++;
     shuffleOrder();
 }

 /**
  * Função para o game over
  */
 let gameOver = () => {
    alert('Pontuação: ${score}!\nVocê perdeu o jogo!\nClique em OK para iniciar um novo jogo');
    order = [];
    clickedOrder = [];

    playGame();
 }

 /**
  * Início do jogo
  */
 let playGame = () => {
    alert('Bem vindo(a) ao Gênesis! Iniciando Novo Jogo!');
    score = 0;

    nextLevel();
 }

 /*
 green.addEventListener('click', click(0));
 red.addEventListener('click', click(1));
 yellow.addEventListener('click', click(2));
 blue.addEventListener('click', click(3));
 */
/**
 * Eventos de clique para as cores
 */
 green.onclick = () => click(0);
 red.onclick = () => click(1);
 yellow.onclick = () => click(2);
 blue.onclick = () => click(3);

 playGame();