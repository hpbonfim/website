import React from 'react';
import './styles.css'
import { AiFillLinkedin } from "react-icons/ai";
import { FaDocker, FaSoundcloud } from 'react-icons/fa'
import { TiSocialInstagram, TiSocialGithub } from "react-icons/ti";
import { IconContext } from "react-icons";

const Sobre = () => {
    const URI = "https://instagram.fcgh4-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/83895807_486590705372598_7389277521113129462_n.jpg?_nc_ht=instagram.fcgh4-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=DHnbSAKIyAgAX8dnnqZ&oh=3c2f7bc21a0f229a1f9aee20766befd0&oe=5F0CA443"
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
                <img className="sunrise" src={URI} alt="Minha Foto" />
                <p>
                    A cada dia que se passa, nossas vidas são vividas dentro de computadores.
                    Esse vasto universo virtual, que chamamos de <strong> Internet</strong>, é o
                    lar de inúmeros mundos e se expande a cada segundo de cada dia e a capacidade
                    para escrever <strong> códigos</strong>, se tornou-se um recurso precioso.
                </p>
                <p>
                    Desenvolvo sistemas desde 2016 e acredito que um bom desenvolvedor surge no momento onde você começa a perceber que um <span className="highlight"> código é uma extensão da maneira de pensar do ser humano</span>,
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