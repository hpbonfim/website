import { useState, useEffect } from 'react';
import './styles.css'
import { GITHUB_URL, PROJECTS_IMAGE_URL, LIST_PROJECTS } from '../../constant';

interface ProjectData {
  id: number;
  title: string;
  text: string;
  image: string;
  link: string;
  idTag: string;
}

const ProjectCard = ({ project }: { project: ProjectData }) => (
  <div key={project.id} className="card-list">
    <div className="card-header">
      <img className="card-header-image" src={project.image} alt={project.title} width={300} height={300} onClick={() => window.open(project.link, '_blank')} id={project.idTag} />
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
  const [showProjects, setShowProjects] = useState(true);

  useEffect(() => {
    setProjects(LIST_PROJECTS);
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
