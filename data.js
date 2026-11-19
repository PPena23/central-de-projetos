// FONTE ÚNICA DE DADOS da Central de Projetos. Datas AAAA-MM-DD.
// Os projetos NÃO foram movidos: 'pasta' aponta para o local original em C:\Claude.
// Tarefas com proposta:true são sugestões do Claude, aguardando aprovação.
window.CENTRAL = {
  categorias: ["Site", "Sistema", "Canal YouTube", "Projeto para terceiros", "Negócio digital", "Ferramenta/Agente", "Redes sociais", "Blog", "Não iniciado", "Outro"],
  colunas: [{"id": "criar", "nome": "Criar"}, {"id": "fazer", "nome": "Fazer"}, {"id": "atualizar", "nome": "Atualizar"}, {"id": "manter", "nome": "Manter"}, {"id": "decidir", "nome": "Decidir"}, {"id": "feito", "nome": "Feito"}],
  // frequencia: diaria | semanal | quinzenal | mensal | vazio (sem rotina)
  projetos: [
 {
  "id": "agencia",
  "nome": "Agência (MazyOS)",
  "categoria": "Ferramenta/Agente",
  "status": "ativo",
  "prioridade": "alta",
  "pasta": "C:\\Claude\\agencia",
  "repo": "https://github.com/mazzeoia/MazyOS",
  "descricao": "MazyOS: sistema de marketing/SEO/ads dentro do Claude Code, com identidade e skills.",
  "frequencia": "semanal",
  "nota": "Remote aponta para o repositório do template (mazzeoia), não para um seu."
 },
 {
  "id": "instagram-techsolidario",
  "nome": "Instagram Tech Solidário",
  "categoria": "Redes sociais",
  "status": "ativo",
  "prioridade": "alta",
  "pasta": "C:\\Claude\\instagram-techsolidario",
  "repo": "https://github.com/mazzeoia/mazyos",
  "descricao": "Instância do MazyOS que produz o conteúdo do Instagram do Tech Solidário.",
  "frequencia": "semanal",
  "nota": "Remote aponta para o template; criar repo próprio se for versionar."
 },
 {
  "id": "techsolidario",
  "nome": "Tech Solidário (site)",
  "categoria": "Site",
  "status": "ativo",
  "prioridade": "alta",
  "pasta": "C:\\Claude\\techsolidario.com.br",
  "repo": "",
  "descricao": "Site institucional, fotos, patrocinadores e semana de informática básica.",
  "frequencia": "quinzenal",
  "nota": "Sem repositório git. Substitui a pasta 'Tech Solidário Antigo'."
 },
 {
  "id": "ativos-agro",
  "nome": "Ativos Agro (AgroSystem)",
  "categoria": "Sistema",
  "status": "ativo",
  "prioridade": "alta",
  "pasta": "C:\\Claude\\ativos-agro-git",
  "repo": "https://github.com/PedroPena-Agro/ativos-agro",
  "descricao": "Gestão de ativos de TI (patrimônio, telefonia, estoque, manutenção, termos). Fase de especificação: DER e dicionário de dados.",
  "frequencia": "semanal",
  "nota": "DUPLICADO: existe também C:\\Claude\\ativos-agrosystem (572 MB, sem git) com o mesmo conteúdo. Decidir qual é a oficial."
 },
 {
  "id": "casadacultura",
  "nome": "Casa da Cultura & Tech Solidário",
  "categoria": "Sistema",
  "status": "ativo",
  "prioridade": "media",
  "pasta": "C:\\Claude\\casadacultura",
  "repo": "https://github.com/PPena23/casa-da-cultura",
  "descricao": "Portal público + carteirinha PWA da Casa da Cultura de Serra Azul (Next.js, Vercel, Supabase).",
  "frequencia": "semanal",
  "nota": "Painel antigo marcava como pausado, mas teve commit em 17/11. Pode ser 'Projeto para terceiros' (município): confirmar."
 },
 {
  "id": "rockinroad",
  "nome": "Rock in Road",
  "categoria": "Site",
  "status": "ativo",
  "prioridade": "media",
  "pasta": "C:\\Claude\\rockinroad.com.br",
  "repo": "https://github.com/PPena23/rockinroad",
  "descricao": "Portal de notícias, radar de shows e caravanas (Next.js + Supabase, feeds automáticos por cron).",
  "frequencia": "diaria",
  "nota": ""
 },
 {
  "id": "soninho",
  "nome": "Soninho com Amiguinhos",
  "categoria": "Negócio digital",
  "status": "ativo",
  "prioridade": "media",
  "pasta": "C:\\Claude\\soninhocomamiguinhos.com.br",
  "repo": "https://github.com/PPena23/soninho-com-amiguinhos",
  "descricao": "Assinatura de histórias para dormir (2 a 8 anos): uma história nova toda noite, ilustrada e narrada.",
  "frequencia": "diaria",
  "nota": "Cadência de redes ainda a confirmar (REDES.md, PLAYBOOK.md)."
 },
 {
  "id": "ceciestudio-site",
  "nome": "Ceci Estúdio (site)",
  "categoria": "Site",
  "status": "ativo",
  "prioridade": "media",
  "pasta": "C:\\Claude\\ceciestudio.com.br",
  "repo": "",
  "descricao": "Site estático da marca Ceci Estúdio.",
  "frequencia": "mensal",
  "nota": "Sem repositório. Definir conteúdo e ligação com o 3D Print Hub."
 },
 {
  "id": "ceciestudio-src",
  "nome": "3D Print Hub (Ceci Estúdio)",
  "categoria": "Sistema",
  "status": "ativo",
  "prioridade": "media",
  "pasta": "C:\\Claude\\ceciestudio-src",
  "repo": "https://github.com/PPena23/ceciestudio",
  "descricao": "Sistema web para biblioteca técnica de modelos 3D: STL, custos, versões, produção.",
  "frequencia": "mensal",
  "nota": "Último commit em 13/09/2026."
 },
 {
  "id": "cecie-shopee",
  "nome": "Ceci Estúdio Shopee + TikTok Shop",
  "categoria": "Negócio digital",
  "status": "pausado",
  "prioridade": "media",
  "pasta": "C:\\Claude\\cecie-shopee-ttshop",
  "repo": "",
  "descricao": "Kit MEI dos dias 1–14: checklist de contas, precificação, modelo de anúncio.",
  "frequencia": "",
  "nota": "Mesma marca do Ceci Estúdio."
 },
 {
  "id": "feira-noturna",
  "nome": "Feira Noturna",
  "categoria": "Sistema",
  "status": "ativo",
  "prioridade": "media",
  "pasta": "C:\\Claude\\feira-noturna",
  "repo": "",
  "descricao": "App React + TypeScript + Vite com Supabase (RLS, comprovantes).",
  "frequencia": "mensal",
  "nota": "Remote git não configurado. Último commit em 21/08/2026."
 },
 {
  "id": "mei-saas",
  "nome": "MEI Fornecedores",
  "categoria": "Sistema",
  "status": "ativo",
  "prioridade": "media",
  "pasta": "C:\\Claude\\mei-saas",
  "repo": "https://github.com/PPena23/mei-fornecedores",
  "descricao": "App Next.js para cadastrar fornecedores e disparar pedidos de orçamento por e-mail e WhatsApp.",
  "frequencia": "mensal",
  "nota": ""
 },
 {
  "id": "viagem",
  "nome": "Viagem Compartilhada",
  "categoria": "Sistema",
  "status": "ativo",
  "prioridade": "media",
  "pasta": "C:\\Claude\\viagem",
  "repo": "https://github.com/PPena23/viagem-compartilhada",
  "descricao": "App com API (Vercel) e PWA instalável.",
  "frequencia": "mensal",
  "nota": ""
 },
 {
  "id": "jarvis",
  "nome": "J.A.R.V.I.S.",
  "categoria": "Ferramenta/Agente",
  "status": "ativo",
  "prioridade": "baixa",
  "pasta": "C:\\Claude\\jarvis",
  "repo": "",
  "descricao": "Assistente de voz no navegador com interface holográfica; cérebro é o Claude Code.",
  "frequencia": "",
  "nota": "Sem repositório. Objetivo de uso indefinido."
 },
 {
  "id": "produtora",
  "nome": "Produtora de vídeos",
  "categoria": "Ferramenta/Agente",
  "status": "ativo",
  "prioridade": "media",
  "pasta": "C:\\Claude\\produtora-de-videos",
  "repo": "",
  "descricao": "Contém OpenMontage e youtube-agent-skill para produção de vídeo.",
  "frequencia": "",
  "nota": "Sem repositório. Próximo passo não classificado."
 },
 {
  "id": "sistema-youtube",
  "nome": "Sistema YouTube",
  "categoria": "Canal YouTube",
  "status": "ativo",
  "prioridade": "media",
  "pasta": "C:\\Claude\\sistema-youtube",
  "repo": "",
  "descricao": "App, ferramentas, produção e levantamento de canais do YouTube (1 GB).",
  "frequencia": "semanal",
  "nota": "Sem repositório. Ligar ao calendário de canais."
 },
 {
  "id": "gta6",
  "nome": "GTA 6 (canal de Shorts)",
  "categoria": "Canal YouTube",
  "status": "ativo",
  "prioridade": "media",
  "pasta": "C:\\Claude\\GTA 6",
  "repo": "",
  "descricao": "Shorts de GTA VI: vídeos editados, textos de canais EN/ES, guia de canais (10 GB de mídia).",
  "frequencia": "diaria",
  "nota": "Sem repositório (mídia pesada). Rotina de Shorts a definir."
 },
 {
  "id": "em-noticias",
  "nome": "Em Notícias",
  "categoria": "Canal YouTube",
  "status": "ativo",
  "prioridade": "media",
  "pasta": "C:\\Claude\\em-noticias",
  "repo": "",
  "descricao": "Esteira de vídeos de notícias (conectar YouTube, importar roteiro, cenas). Não estava no painel antigo.",
  "frequencia": "semanal",
  "nota": "Sem repositório. Modificado hoje. Confirmar objetivo."
 },
 {
  "id": "youtube-scraping",
  "nome": "Picos (YouTube → Shorts)",
  "categoria": "Ferramenta/Agente",
  "status": "ativo",
  "prioridade": "media",
  "pasta": "C:\\Claude\\youtube-scraping-short",
  "repo": "",
  "descricao": "Transforma vídeos longos em shorts: busca por views, análise de picos, render. Não estava no painel antigo.",
  "frequencia": "",
  "nota": "Sem repositório. Modificado hoje."
 },
 {
  "id": "segue-a-dica",
  "nome": "Segue a Dica",
  "categoria": "Sistema",
  "status": "pausado",
  "prioridade": "baixa",
  "pasta": "C:\\Claude\\segue-a-dica",
  "repo": "",
  "descricao": "App Expo/Lovable. Há duas pastas: 'Segue a Dica' (web) e 'segue-a-dica' (Expo).",
  "frequencia": "",
  "nota": "Duas pastas para o mesmo projeto; unificar ao decidir."
 },
 {
  "id": "tr-motors",
  "nome": "TR Motors Multimarcas",
  "categoria": "Projeto para terceiros",
  "status": "pausado",
  "prioridade": "baixa",
  "pasta": "C:\\Claude\\tr-motors-multimarcas",
  "repo": "https://github.com/PPena23/tr-motors-multimarcas",
  "descricao": "Site Next.js de loja de veículos multimarcas.",
  "frequencia": "",
  "nota": "Último commit em 30/10/2026."
 },
 {
  "id": "tech-antigo",
  "nome": "Tech Solidário Antigo",
  "categoria": "Site",
  "status": "pausado",
  "prioridade": "baixa",
  "pasta": "C:\\Claude\\Tech Solidário Antigo",
  "repo": "",
  "descricao": "Versão antiga (arquivos, membros, site), 6 GB.",
  "frequencia": "",
  "nota": "Proposta: arquivar. Substituído por techsolidario.com.br."
 },
 {
  "id": "fut-titans",
  "nome": "Fut Titans",
  "categoria": "Canal YouTube",
  "status": "pausado",
  "prioridade": "baixa",
  "pasta": "C:\\Claude\\fut-titans",
  "repo": "",
  "descricao": "Análise de canais de trivias de futebol (só documento).",
  "frequencia": "",
  "nota": ""
 },
 {
  "id": "video-games-quiz",
  "nome": "Video Games Quiz",
  "categoria": "Canal YouTube",
  "status": "pausado",
  "prioridade": "baixa",
  "pasta": "C:\\Claude\\video-games-quiz",
  "repo": "",
  "descricao": "Estratégia de trivias de videogames em espanhol, com música e pasta de produção.",
  "frequencia": "",
  "nota": ""
 },
 {
  "id": "meckatube",
  "nome": "MeckaTube",
  "categoria": "Canal YouTube",
  "status": "pausado",
  "prioridade": "baixa",
  "pasta": "C:\\Claude\\MeckaTube",
  "repo": "",
  "descricao": "Contém OpenMontage e mazyos (sem descrição).",
  "frequencia": "",
  "nota": ""
 },
 {
  "id": "money-printer",
  "nome": "MoneyPrinterTurbo",
  "categoria": "Ferramenta/Agente",
  "status": "pausado",
  "prioridade": "baixa",
  "pasta": "C:\\Claude\\money-printer-turbo",
  "repo": "",
  "descricao": "Pasta MoneyPrinterTurbo (gerador de vídeos).",
  "frequencia": "",
  "nota": ""
 },
 {
  "id": "mp-digital",
  "nome": "MP Digital Agent",
  "categoria": "Ferramenta/Agente",
  "status": "pausado",
  "prioridade": "media",
  "pasta": "C:\\Claude\\mp-digital-agent",
  "repo": "",
  "descricao": "Script Python que extrai editais e fornecedores.",
  "frequencia": "",
  "nota": ""
 },
 {
  "id": "saas",
  "nome": "SaaS (dashtools/mazyos)",
  "categoria": "Não iniciado",
  "status": "pausado",
  "prioridade": "baixa",
  "pasta": "C:\\Claude\\saas",
  "repo": "",
  "descricao": "Pasta com dashtools e mazyos, sem descrição.",
  "frequencia": "",
  "nota": ""
 },
 {
  "id": "trader",
  "nome": "Trader",
  "categoria": "Não iniciado",
  "status": "pausado",
  "prioridade": "baixa",
  "pasta": "C:\\Claude\\trader",
  "repo": "",
  "descricao": "Pasta vazia. Skills trader-* já existem no Claude.",
  "frequencia": "",
  "nota": ""
 }
],
  // recorrencia: diaria | semanal | quinzenal | mensal
  tarefas: [
 {
  "id": "t1",
  "projeto": "soninho",
  "titulo": "Publicar a história da noite",
  "coluna": "atualizar",
  "data": "2026-11-18",
  "recorrencia": "diaria",
  "notas": "",
  "proposta": true
 },
 {
  "id": "t2",
  "projeto": "soninho",
  "titulo": "Posts nas redes (cadência a confirmar)",
  "coluna": "fazer",
  "data": "2026-11-19",
  "recorrencia": "semanal",
  "notas": "",
  "proposta": true
 },
 {
  "id": "t3",
  "projeto": "rockinroad",
  "titulo": "Revisar notícias e radar de shows",
  "coluna": "atualizar",
  "data": "2026-11-18",
  "recorrencia": "diaria",
  "notas": "",
  "proposta": true
 },
 {
  "id": "t4",
  "projeto": "rockinroad",
  "titulo": "Atualizar caravanas",
  "coluna": "atualizar",
  "data": "2026-11-20",
  "recorrencia": "semanal",
  "notas": "",
  "proposta": true
 },
 {
  "id": "t5",
  "projeto": "gta6",
  "titulo": "Publicar Short",
  "coluna": "atualizar",
  "data": "2026-11-18",
  "recorrencia": "diaria",
  "notas": "",
  "proposta": true
 },
 {
  "id": "t6",
  "projeto": "gta6",
  "titulo": "Planejar pauta da semana",
  "coluna": "fazer",
  "data": "2026-11-22",
  "recorrencia": "semanal",
  "notas": "",
  "proposta": true
 },
 {
  "id": "t7",
  "projeto": "instagram-techsolidario",
  "titulo": "Calendário de posts da semana",
  "coluna": "fazer",
  "data": "2026-11-23",
  "recorrencia": "semanal",
  "notas": "",
  "proposta": true
 },
 {
  "id": "t8",
  "projeto": "instagram-techsolidario",
  "titulo": "Postar no Instagram",
  "coluna": "atualizar",
  "data": "2026-11-19",
  "recorrencia": "semanal",
  "notas": "",
  "proposta": true
 },
 {
  "id": "t9",
  "projeto": "techsolidario",
  "titulo": "Atualizar site (fotos, patrocinadores)",
  "coluna": "atualizar",
  "data": "2026-11-25",
  "recorrencia": "quinzenal",
  "notas": "",
  "proposta": true
 },
 {
  "id": "t10",
  "projeto": "techsolidario",
  "titulo": "Confirmar se o Mazy gera conteúdo do site/blog",
  "coluna": "decidir",
  "data": "",
  "recorrencia": "",
  "notas": "",
  "proposta": true
 },
 {
  "id": "t11",
  "projeto": "agencia",
  "titulo": "Definir quais projetos o Mazy atende",
  "coluna": "fazer",
  "data": "2026-11-19",
  "recorrencia": "",
  "notas": "",
  "proposta": true
 },
 {
  "id": "t12",
  "projeto": "ativos-agro",
  "titulo": "Fechar DER e dicionário de dados",
  "coluna": "fazer",
  "data": "2026-11-18",
  "recorrencia": "semanal",
  "notas": "",
  "proposta": true
 },
 {
  "id": "t13",
  "projeto": "ativos-agro",
  "titulo": "Decidir pasta oficial (git x agrosystem)",
  "coluna": "decidir",
  "data": "",
  "recorrencia": "",
  "notas": "",
  "proposta": true
 },
 {
  "id": "t14",
  "projeto": "casadacultura",
  "titulo": "Deploy do portal na Vercel (Root = apps/web)",
  "coluna": "fazer",
  "data": "2026-11-19",
  "recorrencia": "",
  "notas": "",
  "proposta": true
 },
 {
  "id": "t15",
  "projeto": "casadacultura",
  "titulo": "Migrar banco para Supabase + carteirinha PWA",
  "coluna": "criar",
  "data": "2026-11-26",
  "recorrencia": "",
  "notas": "",
  "proposta": true
 },
 {
  "id": "t16",
  "projeto": "ceciestudio-site",
  "titulo": "Definir conteúdo do site",
  "coluna": "criar",
  "data": "2026-11-24",
  "recorrencia": "",
  "notas": "",
  "proposta": true
 },
 {
  "id": "t17",
  "projeto": "ceciestudio-site",
  "titulo": "Manutenção mensal",
  "coluna": "manter",
  "data": "2026-12-01",
  "recorrencia": "mensal",
  "notas": "",
  "proposta": true
 },
 {
  "id": "t18",
  "projeto": "ceciestudio-src",
  "titulo": "Manutenção e dependências",
  "coluna": "manter",
  "data": "2026-12-01",
  "recorrencia": "mensal",
  "notas": "",
  "proposta": true
 },
 {
  "id": "t19",
  "projeto": "feira-noturna",
  "titulo": "Classificar próximo passo técnico",
  "coluna": "fazer",
  "data": "2026-11-24",
  "recorrencia": "",
  "notas": "",
  "proposta": true
 },
 {
  "id": "t20",
  "projeto": "feira-noturna",
  "titulo": "Manutenção mensal",
  "coluna": "manter",
  "data": "2026-12-01",
  "recorrencia": "mensal",
  "notas": "",
  "proposta": true
 },
 {
  "id": "t21",
  "projeto": "mei-saas",
  "titulo": "Classificar próximo passo",
  "coluna": "fazer",
  "data": "2026-11-24",
  "recorrencia": "",
  "notas": "",
  "proposta": true
 },
 {
  "id": "t22",
  "projeto": "mei-saas",
  "titulo": "Manutenção mensal",
  "coluna": "manter",
  "data": "2026-12-01",
  "recorrencia": "mensal",
  "notas": "",
  "proposta": true
 },
 {
  "id": "t23",
  "projeto": "viagem",
  "titulo": "Classificar próximo passo",
  "coluna": "fazer",
  "data": "2026-11-24",
  "recorrencia": "",
  "notas": "",
  "proposta": true
 },
 {
  "id": "t24",
  "projeto": "viagem",
  "titulo": "Manutenção mensal",
  "coluna": "manter",
  "data": "2026-12-01",
  "recorrencia": "mensal",
  "notas": "",
  "proposta": true
 },
 {
  "id": "t25",
  "projeto": "sistema-youtube",
  "titulo": "Ligar ao calendário de canais do YouTube",
  "coluna": "fazer",
  "data": "2026-11-20",
  "recorrencia": "",
  "notas": "",
  "proposta": true
 },
 {
  "id": "t26",
  "projeto": "em-noticias",
  "titulo": "Rodar esteira e publicar (confirmar rotina)",
  "coluna": "fazer",
  "data": "2026-11-21",
  "recorrencia": "semanal",
  "notas": "",
  "proposta": true
 },
 {
  "id": "t27",
  "projeto": "youtube-scraping",
  "titulo": "Definir uso e ligar ao calendário de Shorts",
  "coluna": "fazer",
  "data": "2026-11-21",
  "recorrencia": "",
  "notas": "",
  "proposta": true
 },
 {
  "id": "t28",
  "projeto": "produtora",
  "titulo": "Classificar próximo passo",
  "coluna": "fazer",
  "data": "2026-11-25",
  "recorrencia": "",
  "notas": "",
  "proposta": true
 },
 {
  "id": "t29",
  "projeto": "jarvis",
  "titulo": "Definir objetivo de uso",
  "coluna": "decidir",
  "data": "",
  "recorrencia": "",
  "notas": "",
  "proposta": true
 },
 {
  "id": "t30",
  "projeto": "cecie-shopee",
  "titulo": "Decidir: retomar ou arquivar",
  "coluna": "decidir",
  "data": "",
  "recorrencia": "",
  "notas": "",
  "proposta": true
 },
 {
  "id": "t31",
  "projeto": "segue-a-dica",
  "titulo": "Decidir: retomar ou arquivar",
  "coluna": "decidir",
  "data": "",
  "recorrencia": "",
  "notas": "",
  "proposta": true
 },
 {
  "id": "t32",
  "projeto": "tr-motors",
  "titulo": "Decidir: retomar ou arquivar",
  "coluna": "decidir",
  "data": "",
  "recorrencia": "",
  "notas": "",
  "proposta": true
 },
 {
  "id": "t33",
  "projeto": "fut-titans",
  "titulo": "Decidir: retomar ou arquivar",
  "coluna": "decidir",
  "data": "",
  "recorrencia": "",
  "notas": "",
  "proposta": true
 },
 {
  "id": "t34",
  "projeto": "video-games-quiz",
  "titulo": "Decidir: retomar ou arquivar",
  "coluna": "decidir",
  "data": "",
  "recorrencia": "",
  "notas": "",
  "proposta": true
 },
 {
  "id": "t35",
  "projeto": "meckatube",
  "titulo": "Decidir: retomar ou arquivar",
  "coluna": "decidir",
  "data": "",
  "recorrencia": "",
  "notas": "",
  "proposta": true
 },
 {
  "id": "t36",
  "projeto": "money-printer",
  "titulo": "Decidir: retomar ou arquivar",
  "coluna": "decidir",
  "data": "",
  "recorrencia": "",
  "notas": "",
  "proposta": true
 },
 {
  "id": "t37",
  "projeto": "mp-digital",
  "titulo": "Decidir: retomar ou arquivar",
  "coluna": "decidir",
  "data": "",
  "recorrencia": "",
  "notas": "",
  "proposta": true
 },
 {
  "id": "t38",
  "projeto": "saas",
  "titulo": "Decidir: retomar ou arquivar",
  "coluna": "decidir",
  "data": "",
  "recorrencia": "",
  "notas": "",
  "proposta": true
 },
 {
  "id": "t39",
  "projeto": "trader",
  "titulo": "Decidir: retomar ou arquivar",
  "coluna": "decidir",
  "data": "",
  "recorrencia": "",
  "notas": "",
  "proposta": true
 },
 {
  "id": "t40",
  "projeto": "tech-antigo",
  "titulo": "Confirmar arquivamento",
  "coluna": "decidir",
  "data": "",
  "recorrencia": "",
  "notas": "",
  "proposta": true
 }
],
  ideias: [
    { id: "i-redes-sociais", titulo: "Criação de conteúdo para redes sociais (Instagram, Facebook, LinkedIn)", notas: "Conectar agentes que criem conteúdo para as 3 redes. Fazer depois do primeiro projeto. Avaliar conjunto de agentes visto no Instagram (link pendente).", data: "2026-11-18", status: "nova" }
  ]
};
