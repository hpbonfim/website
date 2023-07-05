import { useState } from 'react'
import alienImage from './assets/alien_cloud.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://hpbonfim.web.app/" target="_blank">
          <img src={alienImage} className="logo" alt="React logo" />
        </a>
      </div>
      <h1>Hello World</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <code className="read-the-docs">
        Click <a href='https://hpbonfim.web.app/' target='_blank'>here</a> to learn more
      </code>
    </>
  )
}

export default App
