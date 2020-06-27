import React, { useState, useEffect } from 'react'
import './styles.css'
import backendJson from './back.json'
import frontendJson from './front.json'
import infraJson from './infra.json'
import toolsJson from './tools.json'
import mobileJson from './mobile.json'
import dbJson from './db.json'

interface Skills {
    id: number
    title: string
    image: string
    link: string
}

const Skills = () => {

    const [db, setDb] = useState<Skills[]>([])
    const [tools, setTools] = useState<Skills[]>([])
    const [mobile, setMobile] = useState<Skills[]>([])
    const [backend, setBackend] = useState<Skills[]>([])
    const [frontend, setFrontend] = useState<Skills[]>([])
    const [infrastructure, setInfrastructure] = useState<Skills[]>([])

    useEffect(() => {
        setDb(dbJson)
        setTools(toolsJson)
        setMobile(mobileJson)
        setBackend(backendJson)
        setFrontend(frontendJson)
        setInfrastructure(infraJson)
    }, [])


    return (
        <div className="container">
            <div className="skills">
                <h4 >
                    My Skills...
                </h4>
                <div className="infra">
                    <h3> Infrastruture </h3>
                    <ul>
                        {
                            infrastructure.map(info => (
                                <li key={info.id}>
                                    <div className="outside">
                                        <a href={info.link} rel="noopener noreferrer" target="_blank">
                                            <div className="inside">
                                                <img src={info.image} alt={info.title} />
                                                <p>{info.title}</p>
                                            </div>
                                        </a>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="tools">
                    <h3> Tools | Test </h3>
                    <ul>
                        {
                            tools.map(info => (
                                <li key={info.id}>
                                    <div className="outside">
                                        <a href={info.link} rel="noopener noreferrer" target="_blank">
                                            <div className="inside">
                                                <img src={info.image} alt={info.title} />
                                                <p>{info.title}</p>
                                            </div>
                                        </a>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="mobile">
                    <h3> Mobile </h3>
                    <ul>
                        {
                            mobile.map(info => (
                                <li key={info.id}>
                                    <div className="outside">
                                        <a href={info.link} rel="noopener noreferrer" target="_blank">
                                            <div className="inside">
                                                <img src={info.image} alt={info.title} />
                                                <p>{info.title}</p>
                                            </div>
                                        </a>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="front">
                    <h3> Front-end </h3>
                    <ul>
                        {
                            frontend.map(info => (
                                <li key={info.id}>
                                    <div className="outside">
                                        <a href={info.link} rel="noopener noreferrer" target="_blank">
                                            <div className="inside">
                                                <img src={info.image} alt={info.title} />
                                                <p>{info.title}</p>
                                            </div>
                                        </a>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>

                <div className="back">
                    <h3> Back-end </h3>
                    <ul>
                        {
                            backend.map(info => (
                                <li key={info.id}>
                                    <div className="outside">
                                        <a href={info.link} rel="noopener noreferrer" target="_blank">
                                            <div className="inside">
                                                <img src={info.image} alt={info.title} />
                                                <p>{info.title}</p>
                                            </div>
                                        </a>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>

                <div className="back">
                    <h3> Databases </h3>
                    <ul>
                        {
                            db.map(info => (
                                <li key={info.id}>
                                    <div className="outside">
                                        <a href={info.link} rel="noopener noreferrer" target="_blank">
                                            <div className="inside">
                                                <img src={info.image} alt={info.title} />
                                                <p>{info.title}</p>
                                            </div>
                                        </a>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )

}

export default Skills