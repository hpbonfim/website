
import { About } from '../../components/about'
import { Projects } from '../../components/projects'
import { Terminal } from '../../components/terminal'
import { I18nProvider } from "@lingui/react"
import { i18n } from "@lingui/core"
import './styles.css'
import { useEffect } from 'react'
import { dynamicLoadMessages, LOCALES } from '../../i18n'

const SelectComponent = () => {
  function changeLanguage(event: React.ChangeEvent<HTMLSelectElement>) {
    dynamicLoadMessages(event.target.value as keyof typeof LOCALES)
  }

  return (
    <div style={{ display: "flex", flexDirection: 'row', justifyContent: 'end', margin: '10px' }}>
      <select onChange={changeLanguage} >
        {Object.entries(LOCALES).map(([key, value]) => (<option key={key} value={key}>{value}</option>))}
      </select>
    </div>
  )
}

const Home = () => {

  useEffect(() => {
    dynamicLoadMessages('en')
  }, [])

  return (
    <I18nProvider i18n={i18n}>
      <SelectComponent />

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
