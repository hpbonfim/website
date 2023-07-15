
import { About } from '../../components/about'
import { Projects } from '../../components/projects'
import { Terminal } from '../../components/terminal'
import './styles.css'

const Home = () => {
  return (
    <div id="page-home">
      <div className="content">
        <main>
          <Terminal />
        </main>

        <main>
          <About />
        </main>

        <main>
          <Projects />
        </main>

        <br />
        <br />
      </div>
    </div>
  )
}

export default Home
