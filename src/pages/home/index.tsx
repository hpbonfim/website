
import { About } from '../../components/about'
import { Projects } from '../../components/projects'
import { Terminal } from '../../components/terminal'
import { I18nProvider } from "@lingui/react"
import { i18n } from "@lingui/core"
import './styles.css'
import { useEffect } from 'react'
import { dynamicLoadMessages } from '../../i18n'

const Home = () => {

  useEffect(() => {
    dynamicLoadMessages('pt')
  }, [])

  return (
    <I18nProvider i18n={i18n}>
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
    </I18nProvider>
  )
}

export default Home
