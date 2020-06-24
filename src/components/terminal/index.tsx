import React, { useState, useEffect } from 'react';
import './styles.css'

const Terminal = () => {
    const date: string = new Date().toLocaleString('pt-BR')

    const [time, setTime] = useState<string>(date)

    useEffect(() => {
        const Tick = () => {
            let nextTick = new Date().toLocaleString('pt-BR')
            setTime(nextTick)
        }
        setInterval(() => Tick(), 1000)
    }, []);

    return (
        <div className="terminal">
            <p className="bash">#!/bin/bash
                <span> echo $MESSAGE</span>
                <span className="cursor">_</span>
            </p>
            <p className="message">
                <b className="red-heart"> &#x2765;</b>
                &nbsp;Bem vindo ao meu Website!
            </p>
            <p className="clock">
                <b className="red-heart-clock"> &#x2765;</b>
                &nbsp;{time}
            </p>
        </div>
    )
}


export default Terminal