import { msg } from "@lingui/macro";

export const PROJECTS_IMAGE_URL = '/projects.webp';
export const GITHUB_URL = 'https://github.com/hpbonfim?tab=repositories';
export const PROFILE_IMAGE_URI = "https://avatars3.githubusercontent.com/u/40275173?s=460&u=fbc8036afb33b27a0758c0d091959cdc31676f66&v=4";
export const SOCIAL_LINKS = [
  { url: "https://hub.docker.com/u/hpbonfim", className: "dockerhub", id: "clicked_dockerhub", icon: "/docker.webp" },
  { url: "https://github.com/hpbonfim", className: "github", id: "clicked_github", icon: "/github.webp" },
  { url: "https://gitlab.com/hpbonfim", className: "gitlab", id: "clicked_gitlab", icon: "/gitlab.webp" },
  { url: "https://www.linkedin.com/in/henriquebonfim", className: "linkedin", id: "clicked_linkedin", icon: "/linkedin.webp" },
  { url: "https://instagram.com/hpbonfim", className: "instagram", id: "clicked_instagram", icon: "/instagram.webp" }
];

export const LIST_PROJECTS: any = [
  {
    "id": 0,
    "title": "ArduEVE",
    "text": msg`Projeto feito com arquitetura orientada a micro serviços e Docker Swarm, utilizando NodeJS, VueJS, MongoDB, Arduino e outros, para realizar o feito de controlar um relé eletrônico, utilizado para ativar/desativar a luz e uma porta eletrônica e alguns sensores para transmitir em tempo real a leitura de dados.`,
    "image": "/ardueve.gif",
    "link": "https://github.com/hpbonfim/ArduEVE",
    "idTag": "clicked_project_ardueve"
  },
  {
    "id": 1,
    "title": "Pet Porta App",
    "text": msg`Projeto feito com arquitetura orientada a micro serviços e Docker Swarm, utilizando NodeJS, VueJS, MongoDB e Arduino, para realizar o feito de controlar um relé eletrônico para abrir a porta do PET SISTEMAS via celular. `,
    "image": "/pet.webp",
    "link": "https://github.com/hpbonfim/pet-porta-app",
    "idTag": "clicked_project_petporta"
  },
  {
    "id": 2,
    "title": "Roça Eats",
    "text": msg`Projeto vencedor no Hackatrouble SP 2020, construído com NodeJS, Angular e infraestrutura AWS para gerenciar um sistema de doação de alimentos hortaliços oriundos da produção excessiva dos produtores rurais, visando a distribuição para instituições de caridade.`,
    "image": "/roca.webp",
    "link": "https://github.com/hpbonfim/roca-eats",
    "idTag": "clicked_project_rocaeats"
  },
  {
    "id": 3,
    "title": "Mideal",
    "text": msg`Projeto Top 50 do Megahack v2 2020, plataforma construída com NodeJS, Angular e infraestrutura do Google Cloud, visa construir um sistema blockchain para criação de contratos jurídicos com 100% de integridade legal e transparência.`,
    "image": "/mideal.webp",
    "link": "https://github.com/hpbonfim/MegaHack-v2-2020-Projeto-Mideal",
    "idTag": "clicked_project_mideal"
  },
  {
    "id": 4,
    "title": "Canivete Perneta",
    "text": msg`Projeto criado no HackathonCCR, utilizando React-Native e infraestrutura AWS, visa auxiliar o caminhoneiro em suas tarefas diárias.`,
    "image": "/canivete.webp",
    "link": "https://github.com/hpbonfim/HackathonCCR",
    "idTag": "clicked_project_ccr"
  }
]
