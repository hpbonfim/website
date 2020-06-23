import React from 'react';
import './styles.css';
import Sobre from '../../components/sobre'
import Projetos from '../../components/projetos';

const Home = () => {

  return (
    <div id="page-home">
      <div className="content">
        <main>
          <Sobre />
        </main>
        <main>
          <Projetos />
        </main>
        <main>
          <br></br>
        </main>
      </div>
    </div>
  );
}

export default Home;
