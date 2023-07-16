import { useEffect, useState } from "react";
import { SocialLinkProps } from "./types";
import "./styles.css";
import { PROFILE_IMAGE_URI, SOCIAL_LINKS } from "../../constant";

const SocialLink = ({ url, className, id, icon }: SocialLinkProps) => (
  <a href={url} rel="noopener noreferrer" target="_blank" className={className} id={id}>
    <img src={icon} alt={className} width={'30rem'} height={'30rem'} />
  </a>
);

const small = (text: string) => (<small><i>{text}</i></small>)

export const About = () => {
  const [age, setAge] = useState<number>(0)
  useEffect(() => setAge(new Date(new Date().setTime(Date.parse(Date()) - Date.parse("05/21/1996"))).getFullYear() - 1970), [])

  return (
    <div className="container">
      <main className="story">
        <h4>BE MY GUEST...</h4>

        <a id="clicked_photo" href={PROFILE_IMAGE_URI} target="_blank">
          <img className="perfil" src={PROFILE_IMAGE_URI} alt="Minha Foto" width={100} height={100} />
        </a>

        <p>
          Bem-vind@s ao meu universo, um lugar onde as infinitas linhas de código são responsáveis por nos permitir navegar dentre mundos, misteriosos. E como desenvolvedor de software há mais de 10 anos, é meu dever guiá-los nessa jornada, desafiando o vasto mundo digital, descobrindo novas possibilidades, construindo novas pontes e por fim, a solução ideal.
        </p>

        <p>
          Quando criança, minha curiosidade sobre as coisas me fazia fazer diversas artimanhas, uma delas era quebrar meus carrinhos para descobrir como funcionava e montava tudo novamente para minha mãe não descobrir {small('(rsrsrs)')} e essa curiosidade, eventualmente, se faz presente nas linhas de código que escrevo diariamente.
        </p>

        <p>
          Sou Henrique, tenho {age} anos e sou um explorador incansável do mundo da tecnologia.
        </p>

        <p>
          Trabalho sob os cargos de <strong>Engenheiro de Software / Arquiteto Cloud / Engenheiro DevOps / Engenheiro SRE</strong>, e sou conhecido por:
          <ul style={{ listStyleType: 'none' }}>
            <li>- Desenvolver códigos simples para problemas complexos {small('(a simplicidade é a melhor resposta)')};</li>
            <li>- Produzir e utilizar softwares de alta produtividade, segurança, desempenho e escalabilidade;</li>
            <li>- Prover as melhores infraestruturas como código em qualquer <i>public/private cloud</i>;</li>
            <li>- Correr sempre atrás das melhores soluções para resolver os problemas; <br /></li>
            <li>- Buscar bugs em troca de recompensas {small('(buguei o GitHub commitando mais de 10k em alguns anos passados... rsrsrs)')}.</li>
          </ul>
        </p>

        <p>
          No coração do meu trabalho, você encontrará <strong>DevOps</strong>, <strong>Design Patterns</strong> e <strong>Clean Code</strong>. Estas são a chave para transformar problemas em soluções, para transformar ideias em realidade.
        </p>

        <p>
          Sou um orgulhoso membro da comunidade <strong>open-source</strong>, um espaço onde a colaboração e a inovação andam de mãos dadas. Aqui, eu contribuo para projetos, aprendo com os melhores e participo de hackatons, sempre buscando expandir meus horizontes e aprimorar minhas habilidades. {small('(inclusive, já ganhei um evento Hackathon, mais isso é história para outro momento...)')}
        </p>

        <p>
          Acredito que o conhecimento é como uma chama: quanto mais você compartilha, mais ela se espalha. Então, vamos juntos nesta jornada de aprendizado e descoberta, vamos iluminar o mundo, vamos explorar a tecnologia, juntos!
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
      </main>
    </div>
  )

}