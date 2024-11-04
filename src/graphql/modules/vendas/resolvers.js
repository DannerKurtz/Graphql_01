const { db } = require("../../../db");

module.exports = {
  Query: {
    venda(_, args) {
      const { id, nome } = args;

      if (id) return db.vendas.find((venda) => venda.id == id);

      const idUser = db.usuarios.find((usuario) => usuario.nome == nome);
      return idUser
        ? db.vendas.find((venda) => venda.idUsuario == idUser.id)
        : null;
    },
  },

  Venda: {
    usuario(venda) {
      return db.usuarios.find((u) => u.id == venda.idUsuario);
    },
    produto(venda) {
      return db.produtos.find((p) => p.id == venda.idProduto);
    },
  },
};
