import React from 'react';
import './styles.css'

const Terminal = () => {
    return (
        <div className="terminal">
            <p className="bash">#!/bin/bash
                <span> echo $MESSAGE</span>
                <span className="cursor">_</span>
            </p>
            <p className="message"> <b className="red-heart"> &#x2765;</b> Bem vindo ao meu Website!</p>
        </div>
    )
}


export default Terminal