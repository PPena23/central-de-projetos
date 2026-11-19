// FONTE ÚNICA DE DADOS da Central de Projetos.
// Atualizado via Claude a cada projeto/tarefa nova. Datas no formato AAAA-MM-DD.
window.CENTRAL = {
  categorias: ["Site", "Blog", "YouTube", "Redes sociais", "App/Sistema", "Outro"],
  // Colunas do Kanban
  colunas: [
    { id: "criar", nome: "Criar" },
    { id: "fazer", nome: "Fazer" },
    { id: "atualizar", nome: "Atualizar" },
    { id: "manter", nome: "Manter" },
    { id: "feito", nome: "Feito" }
  ],
  // { id, nome, categoria, pasta, descricao, cor, frequencia }
  projetos: [],
  // { id, projeto, titulo, coluna, data, recorrencia(opcional: "diaria"|"semanal"|"mensal"), notas }
  tarefas: []
};
