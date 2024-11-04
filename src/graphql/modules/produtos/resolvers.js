const { db } = require("../../../db");

module.exports = {
  Query: {
    produtos() {
      return db.produtos;
    },
    produto(_, args) {
      const { nome, id, preco } = args;
      if (id) return db.produtos.find((produto) => produto.id == id);

      if (nome) return db.produtos.find((produto) => produto.nome == nome);

      return db.produtos.find((produto) => produto.preco == preco);
    },
  },
};
