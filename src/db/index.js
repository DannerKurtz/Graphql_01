module.exports = {
  db: {
    usuarios: [
      { idade: 22, salario: 2564.25, nome: "Danner", ativo: true, id: 1 },
      { idade: 45, salario: 25887.87, nome: "João", ativo: false, id: 2 },
    ],
    produtos: [
      { id: 1, nome: "TV", preco: 8799.5 },
      { id: 2, nome: "monitor", preco: 1000.99 },
      { id: 3, nome: "mesa", preco: 1000.99 },
    ],
    vendas: [{ id: 1, idUsuario: 1, idProduto: 3 }],
  },
};
