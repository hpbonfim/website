import React, { useState, useEffect } from 'react';
import './styles.css'
import { TiSocialGithub } from "react-icons/ti";

interface ProjectData {
    id: number;
    title: string;
    text: string;
    image: string;
    link: string
}

const projectData = [
    {
        "id": 0,
        "title": "ArduEVE",
        "text": "Projeto feito em NodeJS, VueJS, MongoDB e Arduino, para realizar o feito de controlar um relé eletrônico, utilizado para ativar/desativar a luz e uma porta eletrônica e alguns sensores para transmitir em tempo real a leitura de dados.",
        "image": "https://raw.githubusercontent.com/hpbonfim/hpbonfim/master/src/assets/ardueve800x600.gif",
        "link": "https://github.com/hpbonfim/ArduEVE"
    },
    {
        "id": 1,
        "title": "Pet Porta App",
        "text": "Projeto feito em NodeJS, VueJS, MongoDB e Arduino, para realizar o feito de controlar um relé eletrônico para abrir a porta do PET SISTEMAS via celular. ",
        "image": "https://raw.githubusercontent.com/hpbonfim/hpbonfim/master/src/assets/pet800x600.png",
        "link": "https://github.com/hpbonfim/pet-porta-app"
    },
    {
        "id": 2,
        "title": "Roça Eats ",
        "text": "Projeto vencedor no Hackatrouble SP 2020, construído com NodeJS, Angular e infraestrutura AWS para gerenciar um sistema de doação de alimentos hortaliços oriundos da produção excessiva dos produtores rurais, visando a distribuição para instituições de caridade.",
        "image": "https://raw.githubusercontent.com/hpbonfim/hpbonfim/master/src/assets/roca800x600.png",
        "link": "https://github.com/hpbonfim/roca-eats"
    },
    {
        "id": 3,
        "title": "Mideal",
        "text": "Projeto Top 50 do Megahack v2 2020, plataforma construída com NodeJS, Angular e infraestrutura do Google Cloud, visa construir um sistema blockchain para criação de contratos jurídicos com 100% de integridade legal e transparência.",
        "image": "https://raw.githubusercontent.com/hpbonfim/hpbonfim/master/src/assets/mideal800x600.pngf",
        "link": "https://github.com/hpbonfim/MegaHack-v2-2020-Projeto-Mideal"
    },
    {
        "id": 4,
        "title": "Canivete Perneta",
        "text": "Projeto criado no HackathonCCR, utilizando React-Native e AWS tools, visa auxiliar o caminhoneiro em suas tarefas diárias.",
        "image": "https://raw.githubusercontent.com/hpbonfim/hpbonfim/master/src/assets/canivete800x600.png",
        "link": "https://github.com/hpbonfim/HackathonCCR"
    }
]


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
                        project.map(project => (
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
                            <img className="card-header-image" src={"https://raw.githubusercontent.com/hpbonfim/hpbonfim/master/src/assets/projects800x600.png"} alt={"projects"} />
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