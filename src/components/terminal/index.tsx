import { useState, useEffect } from 'react';
import './styles.css'

export const Terminal = () => {
  const [time, setTime] = useState<string>(new Date().toLocaleString('pt-BR'))

  useEffect(() => {
    setInterval(() => setTime(new Date().toLocaleString('pt-BR')), 1000)
  }, [])

  return (
    <div className="terminal">
      <p className="bash">#!/bin/bash
        <span> echo $MESSAGE</span>
        <span className="cursor">_</span>
      </p>
      <p className="message">
        &nbsp;Welcome to my universe!
        <b className="red-heart"> &#x2764;</b>
      </p>
      <p className="clock">
        <b className="white-cloud"> &#9729;</b>
        &nbsp;{time}
      </p>
    </div>
  )
}