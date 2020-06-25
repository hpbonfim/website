import React from "react"
import "./styles.css"
import { Link } from "react-router-dom"

const NotFound = () => {
    return (
        <div>
            <div className="central-body">
                <img className="image-404" src="https://raw.githubusercontent.com/hpbonfim/hpbonfim/master/src/assets/404.png" alt="404 message" />
                <Link to="/" className="btn-go-home">
                    GO BACK
                </Link>
            </div>
            <div className="objects">
                <img className="object_rocket" src="https://raw.githubusercontent.com/hpbonfim/hpbonfim/master/src/assets/rocket.png" alt="rocket" />
                <div className="earth-moon">
                    <img className="object_earth" src="https://raw.githubusercontent.com/hpbonfim/hpbonfim/master/src/assets/planet.png" alt="planet" />
                    <img className="object_moon" src="https://raw.githubusercontent.com/hpbonfim/hpbonfim/master/src/assets/moon.png" alt="moon" />
                </div>
                <div className="box_astronaut">
                    <img className="object_astronaut" src="https://raw.githubusercontent.com/hpbonfim/hpbonfim/master/src/assets/astronaut.png" alt="astronaut" />
                </div>
            </div>
        </div>
    )
}

export default NotFound