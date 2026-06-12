/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { LunarPhase, AtuacaoCard, CorporateInfo } from "./types";

export const LUNAR_PHASES: LunarPhase[] = [
  {
    id: "nova",
    name: "Lua Nova",
    icon: "new-moon",
    astrologicalMeaning: "O começo absoluto. O céu escuro nos convida ao recolhimento, à introspecção profunda e à conexão com nossos desejos mais íntimos.",
    recommendation: "Escreva suas metas e intenções claras para os próximos 28 dias. Evite assinar contratos de última hora, prefira idealizar e planejar os próximos passos em silêncio.",
    energyLevel: "Sutil / Introspectiva",
    rulingAspect: "Metas & Intenções",
    color: "from-slate-700 to-slate-900"
  },
  {
    id: "crescente",
    name: "Lua Crescente",
    icon: "waxing-crescent",
    astrologicalMeaning: "A primeira luz. O momento ideal para colocar os planos em movimento prático, superar resistências e alimentar as sementes que você plantou.",
    recommendation: "Tome as primeiras atitudes concretas para seu plano de desenvolvimento. Faça chamadas importantes, organize sua semana e coloque energia física no que deseja ver crescer.",
    energyLevel: "Ativa / Construtiva",
    rulingAspect: "Ação & Iniciativa",
    color: "from-indigo-600 to-blue-700"
  },
  {
    id: "cheia",
    name: "Lua Cheia",
    icon: "full-moon",
    astrologicalMeaning: "Culminação absoluta do ciclo lunar. A iluminação máxima revela a verdade, amplifica as emoções e expande o poder da intuição espiritual e criativa.",
    recommendation: "Celebre suas conquistas recentes. Confie em insights intuitivos e sonhos expressivos. Excelente momento para lançamentos públicos e interações sociais intensas.",
    energyLevel: "Máxima / Expressiva",
    rulingAspect: "Clareza & Celebração",
    color: "from-amber-400 to-amber-600"
  },
  {
    id: "minguante",
    name: "Lua Minguante",
    icon: "waning-crescent",
    astrologicalMeaning: "A sabedoria do desapego. À medida que a luz diminui, somos convidados a liberar o que não serve mais, perdoar, purificar e descansar.",
    recommendation: "Faça uma limpeza espacial e mental (destralhar). Finalize relatórios pendentes, faça reflexões críticas sobre o que falhou no ciclo e reserve tempo de repouso.",
    energyLevel: "Decrescente / Restauradora",
    rulingAspect: "Purificação & Reflexão",
    color: "from-slate-500 to-slate-700"
  }
];

export const ATUACAO_CARDS: AtuacaoCard[] = [
  {
    title: "Astrologia e Mapas Astrais",
    description: "Análise profunda dos posicionamentos celestes baseada em cálculos astronômicos e interpretação arquetípica. Fornecemos ferramentas de decodificação que auxiliam na compreensão da personalidade, vocação e trânsitos de vida com seriedade e clareza analítica.",
    benefit: "Mapeamento completo do seu panorama de potenciais.",
    features: ["Cálculo preciso de coordenadas de nascimento", "Leitura humanista e psicológica", "Foco em autonomia e decisão informada", "Clareza nos ciclos de trânsito planetário"]
  },
  {
    title: "Conteúdo Educacional",
    description: "Desenvolvimento de artigos técnicos, boletins informativos de trânsitos celestes e materiais conceituados. Criamos metodologias didáticas sobre técnicas astrológicas clássicas e modernas, desmistificando o saber milenar e aproximando-o da psicologia moderna.",
    benefit: "Formação sólida para interpretação autônoma do céu.",
    features: ["Newsletter periódica gratuita dos ciclos", "Artigos sobre psicologia e arquétipos", "Guias de autoconhecimento prático", "Explicação didática de conceitos de trânsito"]
  },
  {
    title: "Desenvolvimento Pessoal",
    description: "Programas integrados de reflexão, mentoria pessoal e ferramentas práticas criadas para alinhar metas cotidianas com seus ciclos individuais de energia. Incentivamos que o estudo do céu seja um catalisador prático de melhoria de qualidade de vida e produtividade consciente.",
    benefit: "Integração prática de hábitos saudáveis ao seu ritmo.",
    features: ["Planejadores alinhados aos ciclos naturais", "Cadernos de exercícios reflexivos", "Estímulo à saúde mental e organização", "Rotinas baseadas no autoconhecimento"]
  }
];

export const CORPORATE_INFO: CorporateInfo = {
  brandName: "Lunara",
  companyName: "MT Enterprises LTDA",
  cnpj: "58.691.094/0001-72",
  website: "https://mtenterprises.com.br",
  address: "São Paulo, SP - Brasil",
  contactEmail: "contato@mtenterprises.com.br"
};
