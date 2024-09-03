const { stat } = require('node:fs');

// Caminhos a serem verificados
const pathsToCheck = ['./txtDir', './txtDir/file.txt'];

for (let i = 0; i < pathsToCheck.length; i++) {
  stat(pathsToCheck[i], (err, stats) => {
    if (err) {
      // Caso o caminho não exista ou tenha outro erro
      console.error(`Erro ao acessar o caminho ${pathsToCheck[i]}:`, err.message);
    } else {
      if (stats.isDirectory()) {
        
      } else {
        console.log(`${pathsToCheck[i]} é um arquivo.`);
      }
      console.log(stats); // Mostra os detalhes do arquivo ou diretório
    }
  });
}
