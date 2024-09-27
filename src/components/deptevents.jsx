import './deptevents.css'
import { Link } from 'react-router-dom';
function DeptEvents(){
    return(
        <div className='dept-div' id="dept_events">
            <h1>Department Events</h1>
            <div className='dept-cards-div'>
                <div className='dept-card'>
                    <img src="img\deptevents\destroythedecibel.png" />
                    <h6>DESTROY THE DECIBEL</h6>
                    <p>COMPUTER SCIENCE ENGINEERING</p>
                    <Link to="/cse">
                        <button id='checkout'>Check Out</button>
                    </Link>
                </div>
                <div className='dept-card'>
                    <img src="img\deptevents\agnichakra.png" />
                    <h6>AGNICHAKRA</h6>
                    <p>MECHANICAL ENGINEERING</p>
                    <Link to="/mech">
                        <button id='checkout'>Check Out</button>
                    </Link>
                </div>
                <div className='dept-card'>
                    <img src="img\deptevents\emmerzo.png" />
                    <h6>EMMERZO</h6>
                    <p>ARTIFICIAL INTELLIGENCE AND MACHINE LEARNING</p>
                    <Link to="/aiml">
                        <button id='checkout'>Check Out</button>
                    </Link>
                </div>
                <div className='dept-card'>
                    <img src="img\deptevents\ligarobotrix.png" />
                    <h6>LIGAROBOTRIX</h6>
                    <p>ELECTRONICS AND COMMUNICATION ENGINEERING</p>
                    <Link to="/ece">
                        <button id='checkout'>Check Out</button>
                    </Link>
                </div>
                <div className='dept-card'>
                    <img src="img\deptevents\elecspire.png" />
                    <h6>ELECSPIRE</h6>
                    <p>ELECTRICAL AND ELECTRONICS ENGINEERING</p>
                    <Link to="/eee">
                        <button id='checkout'>Check Out</button>
                    </Link>
                </div>
                <div className='dept-card'>
                    <img src="img\deptevents\vastatva.jpg" />
                    <h6>VASTATVA</h6>
                    <p>CIVIL ENGINEERING</p>
                    <Link to="/civil">
                        <button id='checkout'>Check Out</button>
                    </Link>
                </div>
                <div className='dept-card'>
                    <img src="img\deptevents\adwaytha.png" />
                    <h6>ADWAYTHA</h6>
                    <p>MASTERS OF COMPUTER APPLICATION</p>
                    <Link to="/mca">
                        <button id='checkout'>Check Out</button>
                    </Link>
                </div>
            </div>
        </div>
    );


}
export default DeptEvents;