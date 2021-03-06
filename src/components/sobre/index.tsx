import React from 'react';
import './styles.css'
import { AiFillLinkedin } from "react-icons/ai";
import { FaDocker, FaSoundcloud } from 'react-icons/fa'
import { TiSocialInstagram, TiSocialGithub } from "react-icons/ti";
import { IconContext } from "react-icons";

const Sobre = () => {
    const URI = "https://avatars3.githubusercontent.com/u/40275173?s=460&u=fbc8036afb33b27a0758c0d091959cdc31676f66&v=4"
    /* SOCIAL NETWORK */
    const dockerhub: string = "hub.docker.com/u/hpbonfim"
    const github: string = "github.com/hpbonfim"
    const instagram: string = "instagram.com/hpbonfim"
    const linkedin: string = "linkedin.com/in/hpbonfim"
    const soundcloud: string = "soundcloud.com/hpbonfim"

    return (
        <div className="container">
            <div className="story">
                <h4>The story so far...</h4>
                <img className="perfil" src={URI} alt="Minha Foto" />
                <p>
                    A cada dia que se passa, nossas vidas são vividas dentro de computadores.
                    Esse vasto universo virtual, que chamamos de <strong> Internet</strong>, é o
                    lar de inúmeros mundos e se expande a cada segundo de cada dia e a capacidade
                    para escrever <strong> códigos</strong>, tornou-se um recurso precioso.
                </p>
                <p>
                    Meu nome é Henrique, tenho 24 anos e sou apaixonado pelo mundo tech desde pequeno. Sempre fui uma criança curiosa sobre as coisas e fazia diversas artimanhas,
                    quebrava meus carrinhos para descobrir como funcionava e montava tudo novamente para minha mãe não descobrir (rsrsrs) e essa curiosidade me fez estudar, descobrir e criar cada vez mais.
                </p>
                <p>
                    Desenvolvo sistemas desde 2015 e acredito que um bom desenvolvedor surge no momento onde você começa a perceber que um <span className="highlight"> código é uma extensão da maneira de pensar do ser humano</span>,
                    nossa forma de pensar e agir pode ser totalmente interpretada e escrita por computadores e a forma de resolver problemas sempre será uma qualidade essencial para
                    qualquer pessoa que goste de resolvê-las &#128378;.
                </p>
                <p> Faço parte da comunidade open-source onde contribuo até hoje
                para diversos projetos públicos e privados.
                Atualmente estou estudando para certificação da
                    <b>
                        <a href="https://docs.microsoft.com/en-us/learn/certifications/devops-engineer" rel="noopener noreferrer" target="_blank">
                            &nbsp;Microsoft Certified: DevOps Engineer Expert&nbsp;
                        </a>
                    </b>
                    pois o conhecimento deve ser algo constantemente renovado...
                </p>
                <blockquote className="quote">
                    "Few are those who see with their own eyes and feel with their own hearts"
                    <footer>Albert Einstein</footer>
                </blockquote>
                <br></br>
                <div className="social">
                    <IconContext.Provider value={{ color: "#fff", size: "2em", className: "dockerhub" }}>
                        <a href={`https://${dockerhub}`} rel="noopener noreferrer" target="_blank" >
                            <FaDocker />
                        </a>
                    </IconContext.Provider>

                    <IconContext.Provider value={{ color: "#fff", size: "2em", className: "github" }}>
                        <a href={`https://${github}`} rel="noopener noreferrer" target="_blank">
                            <TiSocialGithub />
                        </a>
                    </IconContext.Provider>

                    <IconContext.Provider value={{ color: "#fff", size: "2em", className: "linkedin" }}>
                        <a href={`https://${linkedin}`} rel="noopener noreferrer" target="_blank">
                            <AiFillLinkedin />
                        </a>
                    </IconContext.Provider>

                    <IconContext.Provider value={{ color: "#fff", size: "2em", className: "instagram" }}>
                        <a href={`https://${instagram}`} rel="noopener noreferrer" target="_blank">
                            <TiSocialInstagram />
                        </a>
                    </IconContext.Provider>

                    <IconContext.Provider value={{ color: "#fff", size: "2em", className: "soundcloud" }}>
                        <a href={`https://${soundcloud}`} rel="noopener noreferrer" target="_blank">
                            <FaSoundcloud />
                        </a>
                    </IconContext.Provider>
                </div>
            </div>
        </div>
    )
}

export default Sobre
