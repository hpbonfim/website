import { useState } from 'react'
import alienImage from '/alien_cloud.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://hpbonfim.web.app/" target="_blank">
          <img src={alienImage} className="logo" alt="Alien logo" />
        </a>
      </div>
      <h1>Hello World</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          clicked {count} times!
        </button>
      </div>
      <code className="read-the-docs">
        <a href='https://hpbonfim.web.app/' target='_blank'>Click here</a> to learn more
      </code>
    </>
  )
}

export default App
