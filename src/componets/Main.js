import React from "react";
import '../componets/All.css'
import Heding from '../componets/Heding'
const Main = () => {
    const arrow = '<'
    const larrow = '>'

    return (
        <>
            <Heding />
            <div className="container ca pt-5 border-info">
                <h4 className="d-flex justify-content-between ">Face Drilling <span className="new">New</span></h4>
                <span className="jone">2022-06-03 Jame Johansson</span>
                <div className="car-colore">
                    <div className=" text-secondary car-firt d-flex ">

                        <div className="d-flex gap-2">
                            <p>Shaft</p>
                            <p className=" first ">1</p>
                            <p className="jone seconed">2</p>
                            <p className=" first ">3</p>
                            <p className=" first ">-</p>

                        </div>
                        <div className="d-flex gap-2">
                            <p>Group</p>
                            <p className=" first ">B</p>
                            <p className="jone seconed">0</p>
                            <p className=" first ">C</p>
                            <p className=" first ">A</p>

                        </div>

                    </div>
                    <h5>{">"}</h5>
                </div>
            </div>


            <div className="container ca pt-5 border-info">
                <h4 className="d-flex justify-content-between ">Production Drilling <span className="new">New</span></h4>
                <span className="jone">2022-06-03 Jame Johansson</span>
                <div className="car-colore">
                    <div className=" text-secondary car-firt d-flex ">

                        <div className="d-flex gap-2">
                            <p>Shaft</p>
                            <p className=" first ">1</p>
                            <p className="jone seconed">2</p>
                            <p className=" first ">3</p>
                            <p className=" first ">-</p>

                        </div>
                        <div className="d-flex gap-2">
                            <p>Group</p>
                            <p className=" first ">B</p>
                            <p className="jone seconed">0</p>
                            <p className=" first ">C</p>
                            <p className=" first ">A</p>

                        </div>

                    </div>
                    <h5>{">"}</h5>
                </div>
                <div className="m-5"></div>
            </div>

        </>

    )
}

export default Main;