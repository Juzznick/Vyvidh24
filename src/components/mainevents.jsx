import './mainevents.css'
import React, { useState } from "react";

function MainEvents() {
    const [isFlexAvishkar, setIsFlexAvishkar] = useState(false);
    const [isFlexExpremiere, setIsFlexExpremiere] = useState(false);
    const [isFlexNavayuva, setIsFlexNavayuva] = useState(false);
    const [isFlexIdeathon, setIsFlexIdeathon] = useState(false);

    const handleClickAvishkar = () => {
        setIsFlexAvishkar(prevIsFlex => !prevIsFlex)
    };
    const handleClickExpremiere = () => {
        setIsFlexExpremiere(prevIsFlex => !prevIsFlex)
    };
    const handleClickNavayuva = () => {
        setIsFlexNavayuva(prevIsFlex => !prevIsFlex)
    };
    const handleClickIdeathon = () => {
        setIsFlexIdeathon(prevIsFlex => !prevIsFlex)
    };


    return (
        <div className="mainevent-div" id="main_events">
            <h1>Main Events</h1>


            <div className="cards-div">
                <div id='eventcard' className="eventcard" onClick={handleClickAvishkar}>
                    <img src='../img/mainevents/avishkar.jpg' />
                    <div className="eventcard-desc" style={{ display: isFlexAvishkar ? "flex" : "none", cursor: "pointer" }}>
                        <h5>Avishkar</h5>
                        <p>4 Oct</p>
                        <p>Project Expo</p>
                        <p>Prizes worth 15K!</p><br />
                        <p>Mr.Arun Xavier (AP, EEE) - 9995658014<br />Mr.Anandhu Sajkumar (ECE) - 7994479707</p>
                        <a href='https://forms.gle/hQvHcgoVVzXxQE5F8' target='_blank'><button className='reg-button'>Register</button></a>
                    </div>
                </div>

                <div id='eventcard' className="eventcard" onClick={handleClickExpremiere}>
                    <img src='../img/mainevents/fluxforum.png' />
                    <div className="eventcard-desc" style={{ display: isFlexExpremiere ? "flex" : "none", cursor: "pointer" }}>
                        <h5>Flux Forum</h5>
                        <p>4 Oct</p>
                        <p>Paper Presentation</p>
                        <p>Prizes worth 10K!</p><br />
                        <p>Topic: Improving disaster mitigation in the event of the Wayanad tragedy.</p>
                        <p>Dr.A.P.Sobha (Prof,AS) - 8848566216 <br />Akhila V S (CE) - 9747941362</p>
                        <a href='https://docs.google.com/forms/d/e/1FAIpQLSfswjtvW14OAAMYMtXCwPhXj8qEku1CopNKxXNtGxmUbe00mA/viewform' target='_blank'><button className='reg-button'>Register</button></a>
                    </div>
                </div>

                <div id='eventcard' className="eventcard" onClick={handleClickIdeathon}>
                    <img src='../img/mainevents/ideathon.png' />
                    <div className="eventcard-desc" style={{ display: isFlexIdeathon ? "flex" : "none", cursor: "pointer" }}>
                        <h5>Ideathon</h5>
                        <p>5 Oct</p>
                        <p>Prizes worth 10K!</p><br />
                        <p>Ideathon is a brainstoriming event where participants from diverse backgrounds and interests to come up with innovative ideas to solve a complex specific real world problem.</p>
                        <p>Mr.Sivadasan.E.T (AP, CSE) - 8943157711<br />Shreyadas C (CE) - 6282107362<br />Jisymol P C (MCA) - 9539623287</p>
                        <a href='https://docs.google.com/forms/d/e/1FAIpQLSc68AiCpfalV86w426fzXlQTRCZFRm0Of5H-9mtlUYUsxTP5g/viewform' target='_blank'><button className='reg-button'>Register</button></a>
                    </div>
                </div>

                <div id='eventcard' className="eventcard" onClick={handleClickNavayuva}>
                    <img src='../img/mainevents/navayuva.png' />
                    <div className="eventcard-desc" style={{ display: isFlexNavayuva ? "flex" : "none", cursor: "pointer" }}>
                        <h5>Navayuva</h5>
                        <p>4 Oct</p>
                        <p>School Project Expo</p>
                        <p>Prizes worth 20K!</p><br />
                        <p>Technical feast for School students and also to show their talents at their early stages of studies!!! It is an opportunity for kids to find out their path in engineering field by knowing their own taste and to develop a basement of knowledge.</p>
                        <p>Mr.Manesh D (AP, MCA) - 9446370487<br />Advaidh Sanil (AIML) - 9544515805<br />Adwaith Krishna (EEE) - 8078131473</p>
                        <a href='https://docs.google.com/forms/d/e/1FAIpQLSeTlIFebUSjI8zpeKI0rdTwBa-lwhrVGKisoDNNzdPStR428A/viewform' target='_blank'><button>Register</button></a>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default MainEvents;