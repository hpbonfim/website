import { useState, useEffect } from 'react';
import './styles.css'

export const Terminal = () => {
  const [time, setTime] = useState<string>(new Date().toLocaleString('pt-BR'))

  useEffect(() => {
    setInterval(() => setTime(new Date().toLocaleString('pt-BR')), 1000)
  }, [])

  return (
    <div className="terminal">
      <div>
        <p className="bash">#!/bin/bash</p>
      </div>

      <div>
        <p className="clock">
          &gt;&nbsp;{time}
        </p>
      </div>

      <div>
        <p className="message">
          &gt; Welcome to my universe!&nbsp;
          <picture>
            <span className="white-cloud">&#9729;</span>
            <img src='logo.webp' width={40} height={40} />
          </picture>
        </p>
      </div>

    </div>
  )
}