
// Função para calcular o saldo de partidas e determinar o nível
function calcMatches(wins, loses) {
    // Cálculo do saldo de partidas
    let winBalance = wins - loses;
    let level;

    // Estrutura de decisão para determinar o nível
    if (wins < 10) {
        level = "Ferro";
    } else if (wins >= 11 && wins <= 20) {
        level = "Bronze";
    } else if (wins >= 21 && wins <= 50) {
        level = "Prata";
    } else if (wins >= 51 && wins <= 80) {
        level = "Ouro";
    } else if (wins >= 81 && wins <= 90) {
        level = "Diamante";
    } else if (wins >= 91 && wins <= 100) {
        level = "Lendário";
    } else if (wins >= 101) {
        level = "Imortal";
    }

    // Retorna os resultados
    return { winBalance, level };
}

// Teste da função
let wins = 200; // Substitua pelo número de vitórias
let loses = 110; // Substitua pelo número de derrotas

// Obtém o resultado da função
let result = calcMatches(wins, loses);

// Exibe a mensagem final no console
console.log(`O Herói tem de saldo de ${result.winBalance} está no nível de ${result.level}`);
