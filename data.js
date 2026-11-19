// FONTE ÚNICA DE DADOS da Central de Projetos.
// Atualizado via Claude a cada projeto/tarefa nova. Datas no formato AAAA-MM-DD.
window.CENTRAL = {
  categorias: ["Site", "Sistema", "Canal YouTube", "Projeto para terceiros", "Não iniciado", "Blog", "Redes sociais", "Outro"],
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
  tarefas: [],
  // { id, titulo, notas, data, status: "nova"|"avaliando"|"em andamento"|"virou projeto"|"descartada" }
  ideias: [
    { id: "i-redes-sociais", titulo: "Criação de conteúdo para redes sociais (Instagram, Facebook, LinkedIn)", notas: "Conectar agentes que criem conteúdo para as 3 redes. Fazer depois do primeiro projeto. Avaliar conjunto de agentes visto no Instagram (link pendente).", data: "2026-11-18", status: "nova" }
  ]
};
