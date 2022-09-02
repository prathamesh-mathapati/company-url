import React from "react";
import '../componets/All.css'
const Heding = () => {
    const arrow = '<'
    const larrow = '>'

    return (
        <div>
            <nav className="navbar navbar-dark bg-dark  container d-flex gap ">
                <div className="container d-flex">
                    <span className="text-light font">
                        <span className="home">{arrow}</span>

                        Home
                    </span>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">

                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div className="d-flex container start1 justify-content-start flex-column">

                    <h1 className="text-warning text-start">Shift Reports</h1>
                    <span className="text-light">Costomer , Site</span>
                    <span className="text-light date bg-opacity-25">30 June 2022 <span className="larrow">{larrow}</span></span>
                </div>
            </nav>
        </div>

    )
}

export default Heding;