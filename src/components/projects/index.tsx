import { useState, useEffect } from 'react';
import './styles.css'

interface ProjectData {
  id: number;
  title: string;
  text: string;
  image: string;
  link: string;
  idTag: string;
}

const projectsData = [
  {
    "id": 0,
    "title": "ArduEVE",
    "text": "Projeto feito em NodeJS, VueJS, MongoDB e Arduino, para realizar o feito de controlar um relé eletrônico, utilizado para ativar/desativar a luz e uma porta eletrônica e alguns sensores para transmitir em tempo real a leitura de dados.",
    "image": "/ardueve.gif",
    "link": "https://github.com/hpbonfim/ArduEVE",
    "idTag": "clicked_project_ardueve"
  },
  {
    "id": 1,
    "title": "Pet Porta App",
    "text": "Projeto feito em NodeJS, VueJS, MongoDB e Arduino, para realizar o feito de controlar um relé eletrônico para abrir a porta do PET SISTEMAS via celular. ",
    "image": "/pet.png",
    "link": "https://github.com/hpbonfim/pet-porta-app",
    "idTag": "clicked_project_petporta"
  },
  {
    "id": 2,
    "title": "Roça Eats ",
    "text": "Projeto vencedor no Hackatrouble SP 2020, construído com NodeJS, Angular e infraestrutura AWS para gerenciar um sistema de doação de alimentos hortaliços oriundos da produção excessiva dos produtores rurais, visando a distribuição para instituições de caridade.",
    "image": "/roca.png",
    "link": "https://github.com/hpbonfim/roca-eats",
    "idTag": "clicked_project_rocaeats"
  },
  {
    "id": 3,
    "title": "Mideal",
    "text": "Projeto Top 50 do Megahack v2 2020, plataforma construída com NodeJS, Angular e infraestrutura do Google Cloud, visa construir um sistema blockchain para criação de contratos jurídicos com 100% de integridade legal e transparência.",
    "image": "/mideal.png",
    "link": "https://github.com/hpbonfim/MegaHack-v2-2020-Projeto-Mideal",
    "idTag": "clicked_project_mideal"
  },
  {
    "id": 4,
    "title": "Canivete Perneta",
    "text": "Projeto criado no HackathonCCR, utilizando React-Native e AWS, visa auxiliar o caminhoneiro em suas tarefas diárias.",
    "image": "/canivete.png",
    "link": "https://github.com/hpbonfim/HackathonCCR",
    "idTag": "clicked_project_ccr"
  }
]
const PROJECTS_IMAGE_URL = '/projects.jpg';
const GITHUB_URL = 'https://github.com/hpbonfim?tab=repositories';

const ProjectCard = ({ project }: { project: ProjectData }) => (
  <div key={project.id} className="card-list">
    <div className="card-header">
      <img className="card-header-image" src={project.image} alt={project.title} />
    </div>

    <div className="card-footer">
      <a href={project.link} rel="noopener noreferrer" target="_blank" id={project.idTag}>
        <strong className="card-title">Project {project.title}</strong>
      </a>
    </div>

    <div className="card-body">
      <p className="body-content">{project.text}</p>
    </div>
  </div>
);

export const Projects = () => {
  const [projects, setProjects] = useState<ProjectData[]>([]);
  const [showProjects, setShowProjects] = useState(false);

  useEffect(() => {
    setProjects(projectsData);
  }, []);

  const toggleShowProjects = () => setShowProjects(!showProjects);

  return (
    <div className="container">
      <div className="projects">
        <span onClick={toggleShowProjects} id="clicked_my_projects">
          {showProjects ? "⇊" : "⇉"} My little projects...
        </span>

        <hr />

        {showProjects && (
          <div className="card">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}

            <div className="card-list">

              <header className="card-header">
                <img className="card-header-image" src={PROJECTS_IMAGE_URL} alt="projects" />
              </header>

              <div className="card-footer">
                <a href={GITHUB_URL} rel="noopener noreferrer" target="_blank" id='clicked_all_projects'>
                  <strong>Repositório...</strong>
                </a>
              </div>

              <div className="card-body">
                <h3>Confira outros projetos...</h3>
                <p className="body-content">Tenho diversos projetos open-source para qualquer pessoa contribuir ou ser contribuído com minhas soluções, desde API's até aplicativos completos. be my guest!</p>
              </div>

            </div>
          </div>
        )}
      </div>
    </div>
  );
};
