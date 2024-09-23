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
                        <p>Feb 29</p>
                        <p>Project Expo</p>
                        <p>Topic - 'Youth empowerment via enterprise, education and sustainable technology.'</p><br />
                        <p>Arun Xavier (AP, EEE) - 9895658014<br />Akhil Venugopal (AP, ME) - 7736248532<br />Albin Shju (ECE) - 8383443275</p>
                    </div>
                </div>

                <div id='eventcard' className="eventcard" onClick={handleClickExpremiere}>
                    <img src='../img/mainevents/expremiere.jpg' />
                    <div className="eventcard-desc" style={{ display: isFlexExpremiere ? "flex" : "none", cursor: "pointer" }}>
                        <h5>Expremiere</h5>
                        <p>Feb 29</p>
                        <p>Paper Presentation on a given topic.</p>
                        <p>Jensy Babu (AP, CSE) - 7025363200 <br />Uthara Sunil Kumar (CSE) - 9074221233</p>
                    </div>
                </div>

                <div id='eventcard' className="eventcard" onClick={handleClickIdeathon}>
                    <img src='../img/mainevents/ideathon.png' />
                    <div className="eventcard-desc" style={{ display: isFlexIdeathon ? "flex" : "none", cursor: "pointer" }}>
                        <h5>Ideathon</h5>
                        <p>Feb 29</p>
                        <p>Ideathon is a brainstoriming event where participants from diverse backgrounds and interests to come up with innovative ideas to solve a complex specific real world problem.</p>
                        <p>Salkala K S (AP, MCA) - 9747552526<br />Ajay James (MCA) - 9207772379</p>
                    </div>
                </div>

                <div id='eventcard' className="eventcard" onClick={handleClickNavayuva}>
                    <img src='../img/mainevents/navayuva.png' />
                    <div className="eventcard-desc" style={{ display: isFlexNavayuva ? "flex" : "none", cursor: "pointer" }}>
                        <h5>Navayuva</h5>
                        <p>Feb 29</p>
                        <p>Project Expo</p>
                        <p>Technical feast for School students and also to show their talents at their early stages of studies!!! It is an opportunity for kids to find out their path in engineering field by knowing their own taste and to develop a basement of knowledge.</p>
                        <p>Rachana Sajeev (AP, AS) - 9895202403<br />Adwaidh Sanil (AIML) - 9544515805</p>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default MainEvents;