import React from "react";

import home2 from "../img/home2.png";
import diapharam from "../img/diaphragm.svg";
import clock from "../img/clock.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";

const ServicesSection = () => {
    return (
        <div className="services">
            <div className="description">
                <div className="title">
                    <h2>High <span>Quality</span> Services</h2>
                </div>
                <div className="cards">
                    <div className="card">
                        <div className="icon">
                            <img src={clock} alt="Clock Image Icon" />
                            <h3>Efficient</h3>
                        </div>
                        <p>Lorem Ipsum is simply dummy text of the printting.</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img src={money} alt="Money Image Icon" />
                            <h3>Affordable</h3>
                        </div>
                        <p>Lorem Ipsum is simply dummy text of the printting.</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img src={diapharam} alt="Camera Diaphragm Image Icon" />
                            <h3>Pro Grade Gear</h3>
                        </div>
                        <p>Lorem Ipsum is simply dummy text of the printting.</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img src={teamwork} alt="Clock Image Icon" />
                            <h3>Teamwork</h3>
                        </div>
                        <p>Lorem Ipsum is simply dummy text of the printting.</p>
                    </div>
                </div>
            </div>
            <div className="image">
                <img src={home2} alt="guy holding camera" />
            </div>
        </div>
    );
}

export default ServicesSection;