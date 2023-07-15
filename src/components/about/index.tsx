import { useEffect, useState } from "react";
import { SocialLinkProps } from "./types";
import "./styles.css";
import { PROFILE_IMAGE_URI, SOCIAL_LINKS } from "../../constant";

const SocialLink = ({ url, className, id, icon }: SocialLinkProps) => (
  <a href={url} rel="noopener noreferrer" target="_blank" className={className} id={id}>
    <img src={icon} alt={className} width={'30rem'} height={'30rem'} />
  </a>
);

export const About = () => {
  const [age, setAge] = useState<number>(0)
  useEffect(() => setAge(new Date(new Date().setTime(Date.parse(Date()) - Date.parse("05/21/1996"))).getFullYear() - 1970), [])

  return (
    <div className="container">
      <div className="story">
        <h4>Be my guest...</h4>

        <a id="clicked_photo" href={PROFILE_IMAGE_URI} target="_blank">
          <img className="perfil" src={PROFILE_IMAGE_URI} alt="Minha Foto" width={100} height={100} />
        </a>

        <p>
          Bem-vindo ao meu universo, um lugar onde a <strong>Internet</strong> é o espaço infinito e o <strong>código</strong> é a linguagem que nos permite navegar dentre mundos misteriosos. E como desenvolvedor de software, é meu dever navegar nesse vasto digital, descobrindo coisas novas, construindo pontes e criando novos mundos.
        </p>

        <p>
          Sou Henrique, tenho {age} anos e sou um explorador incansável do mundo da tecnologia. Desde a minha infância, sempre fui fascinado por como as coisas funcionam, uma curiosidade que me levou a desmontar brinquedos e, eventualmente, a montar linhas de código.
        </p>

        <p>
          No coração do meu trabalho, você encontrará <strong>DevOps</strong>, <strong>Cloud Architecture</strong> e <strong>SRE</strong>. Estas são as ferramentas que uso para transformar problemas em soluções, para transformar ideias em realidade.
        </p>

        <p>
          Sou um orgulhoso membro da comunidade <strong>open-source</strong>, um espaço onde a colaboração e a inovação andam de mãos dadas. Aqui, eu contribuo para projetos, aprendo com os melhores e participo de hackatons, sempre buscando expandir meus horizontes e aprimorar minhas habilidades.
        </p>

        <p>
          Acredito que o conhecimento é como uma chama: quanto mais você compartilha, mais ela se espalha. Então, junte-se a mim nesta jornada de aprendizado e descoberta, e vamos iluminar o mundo da tecnologia juntos.
        </p>

        <blockquote className="quote">
          "Poucos são aqueles que veem com seus próprios olhos e sentem com seus próprios corações"
          <footer>Albert Einstein</footer>
        </blockquote>

        <br></br>

        <div className="social">
          {SOCIAL_LINKS.map((link) => (
            <SocialLink key={link.className} {...link} />
          ))}
        </div>
      </div>
    </div>
  )

}