import { useState } from "react";
import { SocialLinkProps } from "./types";
import "./styles.css";
import { PROFILE_IMAGE_URI, SOCIAL_LINKS } from "../../constant";

const SocialLink = ({ url, className, id, icon }: SocialLinkProps) => (
  <a href={url} rel="noopener noreferrer" target="_blank" className={className} id={id}>
    <img src={icon} alt={className} width={30} height={30} />
  </a>
);

export const About = () => {
  const [URL] = useState<string>(SOCIAL_LINKS.filter(x => x.className === 'linkedin')[0].url)
  const [AGE] = useState<number>(
    new Date(
      new Date()
        .setTime(
          Date.parse(Date()) - Date.parse("05/21/1996")
        )
    )
      .getFullYear() - 1970
  )

  return (
    <div className="container">
      <main className="story">
        <h4>BE MY GUEST...</h4>

        <a id="clicked_photo" href={PROFILE_IMAGE_URI} target="_blank">
          <img className="perfil" src={PROFILE_IMAGE_URI} alt="Minha Foto" width={100} height={100} />
        </a>

        <p>
          Bem-vind@s ao <strong className="highlight">meu universo</strong>, um lugar onde as <strong className="highlight">infinitas linhas de código</strong> são responsáveis por nos permitir <strong className="highlight">navegar dentre mundos misteriosos...</strong> E como engenheiro de software há alguns anos, é meu dever guiá-los nessa jornada, desafiando o vasto mundo digital, <strong className="highlight">descobrindo novas possibilidades</strong>, construindo novas pontes e por fim, <strong className="highlight"><a href={URL}>a solução ideal</a></strong>.
        </p>

        <p>
          Sou Henrique, tenho {AGE} anos e sou um <strong className="highlight">explorador incansável</strong> do mundo da tecnologia.
        </p>

        <p>
          Quando criança, minha <strong className="highlight">curiosidade</strong> sobre as coisas me fazia fazer diversas artimanhas, uma delas era quebrar meus carrinhos para <strong className="highlight">descobrir como funcionava</strong> e montava tudo novamente para minha mãe não descobrir <abbr>(😂😅)</abbr> e essa curiosidade, eventualmente, <strong className="highlight">se faz presente nas linhas de código</strong> que escrevo diariamente.
        </p>


        <p>
          Trabalho sob os cargos de <strong className="highlight">Engenheiro de Software / Arquiteto Cloud / Engenheiro DevOps / Engenheiro SRE</strong>, e sou conhecido por:
        </p>

        <p>
          &gt;
          Desenvolver <strong className="highlight">códigos simples para problemas complexos</strong>, ou vice-versa, depende do problema xD <small>(a simplicidade sempre será melhor alternativa)</small>;
          <br /><br />
          &gt;
          Produzir e/ou utilizar softwares de <strong className="highlight">alta produtividade, segurança, desempenho, sustentabilidade, escalabilidade e afins</strong>;
          <br /><br />
          &gt;
          Prover as melhores <strong className="highlight">infraestruturas como código</strong>; <small>(cloud / hybrid / on-premise)</small>;
          <br /><br />
          &gt;
          Correr sempre atrás das <strong className="highlight">melhores soluções</strong> para resolver os problemas; <small>(não importa o quão difícil seja)</small>
          <br /><br />
          &gt;
          Aniquilar bugs em troca de recompensas. <small>(buguei o GitHub commitando mais de 40k linhas de código tempos atrás...)</small>.
        </p>

        <p>
          No coração do meu trabalho, você encontrará <strong className="highlight">DevOps</strong>, <strong className="highlight">Design Patterns</strong> e <strong className="highlight">Clean Code</strong>. Estas são a chave para quebrar problemas complexos e conquistar a simplicidade.
        </p>

        <p>
          Sou um orgulhoso membro da comunidade <strong className="highlight">open-source</strong>, um espaço onde a colaboração e a inovação andam de mãos dadas. Aqui, eu contribuo para projetos, aprendo com os melhores e participo de hackatons, sempre buscando expandir meus horizontes e aprimorar minhas habilidades. <small>(inclusive, já ganhei um evento Hackathon, mais isso é história para outro momento...)</small>
        </p>

        <p>
          <strong className="highlight">Vamos explorar a tecnologia, <a href={URL}>juntos</a>!</strong>
        </p>

        <blockquote className="quote">
          "A <b>imaginação</b> é mais importante que o conhecimento"
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