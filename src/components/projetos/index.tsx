import React, { useState, useEffect } from 'react';
import './styles.css'
import { TiSocialGithub } from "react-icons/ti";
import projectData from './projects.json'

interface ProjectData {
    id: number;
    title: string;
    text: string;
    image: string;
    link: string
}

const Projetos = () => {
    const [project, setProjects] = useState<ProjectData[]>([])

    useEffect(() => {
        setProjects(projectData)
    }, [])

    return (
        <div className="container">
            <div className="projects">
                <h4>My little projects...</h4>
                <div className="card">
                    {
                        projectData.map(project => (
                            <div key={project.id} className="card-list">
                                <div className="card-header">
                                    <img className="card-header-image" src={project.image} alt={project.title} />
                                </div>
                                <div className="card-footer">
                                    <a href={project.link} rel="noopener noreferrer" target="_blank">
                                        <span>
                                            <TiSocialGithub />
                                        </span>
                                        <strong className="card-title">
                                            Project {project.title}
                                        </strong>
                                    </a>
                                </div>
                                <div className="card-body">
                                    <p className="body-content">{project.text}</p>
                                </div>

                            </div>
                        ))
                    }
                    <div className="card-list">
                        <header className="card-header">
                            <img className="card-header-image" src={"https://raw.githubusercontent.com/hpbonfim/hpbonfim/master/src/assets/projetos-page/projects800x600.jpg"} alt={"projects"} />
                        </header>
                        <div className="card-footer">
                            <a href={"https://github.com/hpbonfim?tab=repositories"} rel="noopener noreferrer" target="_blank">
                                <span>
                                    <TiSocialGithub />
                                </span>
                                <strong>
                                    Repositório...
                                </strong>
                            </a>
                        </div>
                        <div className="card-body">
                            <h3>Confira outros projetos...</h3>
                            <p className="body-content">Tenho diversos projetos open-source para qualquer pessoa contribuir ou ser contribuído com minhas soluções, desde API's até aplicativos completos. be my guest!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projetos