function calcularSaldoRankeadas(vitorias, derrotas) {
    return vitorias - derrotas;
  }
  
  function calcularRank(vitorias, derrotas) {
    const saldoRankeadas = calcularSaldoRankeadas(vitorias, derrotas);
  
    if (vitorias < 10) {
      return 'Ferro';
    } else if (vitorias >= 11 && vitorias <= 20) {
      return 'Bronze';
    } else if (vitorias >= 21 && vitorias <= 50) {
      return 'Prata';
    } else if (vitorias >= 51 && vitorias <= 80) {
      return 'Ouro';
    } else if (vitorias >= 81 && vitorias <= 90) {
      return 'Diamante';
    } else if (vitorias >= 91 && vitorias <= 100) {
      return 'Lendário';
    } else {
      return 'Imortal';
    }
  }
  
  // Exemplo de uso:
  const numeroVitorias = 75;
  const numeroDerrotas = 20;
  
  const resultadoSaldo = calcularSaldoRankeadas(numeroVitorias, numeroDerrotas);
  const resultadoRank = calcularRank(numeroVitorias, numeroDerrotas);
  
  console.log(`Saldo de Ranqueadas: ${resultadoSaldo}`);
  console.log(`Resultado: ${resultadoRank}`);