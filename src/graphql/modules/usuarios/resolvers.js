const { db } = require("../../../db");
const deletar = require("../../../services/deletar");
const { generatorId } = require("../../../services/geradorId");

module.exports = {
  Query: {
    usuarios() {
      return db.usuarios;
    },
    usuario(_, args) {
      const { nome, id } = args;
      if (id) return db.usuarios.find((usuario) => usuario.id == id);
      return db.usuarios.find((usuario) => usuario.nome == nome);
    },
  },
  Mutation: {
    criarUsuario(__, args) {
      const novoUsuario = {
        ...args,
        id: generatorId(db.usuarios),
      };
      db.usuarios.push(novoUsuario);
      return novoUsuario;
    },
    atualizarUsuario(__, { id, data }) {
      const usuario = db.usuarios.find((u) => u.id == id);
      const indice = db.usuarios.findIndex((u) => u.id == id);

      const novoUsuario = {
        ...usuario,
        ...data,
      };

      db.usuarios.splice(indice, 1, novoUsuario);

      return novoUsuario;
    },
    deletarUsuario(__, { filtro: { id, email } }) {
      return deletar.deletarUsuario(id ? { id } : { email });
    },
  },
};
