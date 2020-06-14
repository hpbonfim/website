import React from 'react';
import './styles.css';
import Sobre from '../../components/sobre'
import Footer from '../../components/footer';

const Home = () => {

  return (
    <div id="page-home">
      <div className="content">
        <main>
          <Sobre />
        </main>
        <main>
          <Footer/>
        </main>
      </div>
    </div>
  );
}

export default Home;
