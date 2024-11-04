module.exports = {
  generatorId(lista) {
    let novoId;

    if (lista.length === 0) {
      novoId = 1; // Se a lista estiver vazia, começa a partir de 1
    } else {
      const maiorId = Math.max(...lista.map((item) => item.id));
      novoId = maiorId + 1; // Novo ID é o maior ID + 1
    }

    return novoId;
  },
};
