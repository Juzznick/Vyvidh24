import React, { useState } from 'react';
import './Event.css';

function Event({data}) {
    const [visible, setVisible] = useState(true);
    console.log(data);
    const hide = (i) => {
        var element = document.getElementsByClassName("event-div")[i];
        var button = document.getElementsByClassName("event-btn")[i];
        if (element.style.display === "" || element.style.display === "block") {
            element.style.display = 'none';
            button.innerHTML = "<img src='public/img/arrowd.png' />";
        } else {
            element.style.display = "block";
            button.innerHTML = "<img src='public/img/arrowu.png' />";
        }
    };

    const hide_non = (i) => {
        var element = document.getElementsByClassName("non-event-div")[i];
        var button = document.getElementsByClassName("non-event-btn")[i];
        if (element.style.display === "" || element.style.display === "block") {
            element.style.display = 'none';
            button.innerHTML = "<img src='/img/arrowd.png' />";
        } else {
            element.style.display = "block";
            button.innerHTML = "<img src='/img/arrowu.png' />";
        }
    };

    return (
        <div>
            <div className='event-container'>
                <div className='hr-div'>
                    <h2 className='text-center'>Technical Events</h2>
                    <hr className='hr-line' />
                </div>

                {data.technical.map((event, i) => {
                    return (
                        <div className='event-wrapper' key={i}>
                            <div className='event-header'>
                                <h3>{event.title}</h3>
                                <button className='event-btn' onClick={() => hide(i)}>
                                <img src='public/img/arrowu.png' />
                                </button>
                            </div>
                            <div className='event-div'>
                                <p className='event-desc'>{event.desc}</p>
                                {event.day && <p>Day - {event.day}</p>}
                                {event.time && <p>Time - {event.time}</p>}
                                {event.fee && <p>Fee - {event.fee}</p>}
                                {event.venue && <p>Venue - {event.venue}</p>}
                                {event.prize && <p>Prize pool - {event.prize}</p>}
                                {event.faculty && <p>Faculty Coordinator - {event.faculty}</p>}
                                {event.student && <p>Student Coordinator - {event.student}</p>}
                                {event.sub &&
                                    <div>
                                        <h4 className='text-center'>Sub Events</h4>
                                        {event.sub.map((sub, j) => (
                                            <div className='sub-event' key={j}>
                                                <h4>{sub.title}</h4>
                                                <p>{sub.desc}</p>
                                                {sub.day && <p>Day - {sub.day}</p>}
                                                {sub.time && <p>Time - {sub.time}</p>}
                                                {sub.fee && <p>Fee - {sub.fee}</p>}
                                                {sub.venue && <p>Venue - {sub.venue}</p>}
                                                {sub.prize && <p>Prize pool - {sub.prize}</p>}
                                                {sub.faculty && <p>Faculty Coordinator - {sub.faculty}</p>}
                                                {sub.student && <p>Student Coordinator - {sub.student}</p>}
                                            </div>
                                        ))}
                                    </div>
                                }
                            </div>
                        </div>
                    );
                })}

                <div className='hr-div'>
                    <h2 className='text-center'>Non Technical Events</h2>
                    <hr className='hr-line' />
                </div>

                {data.non.map((event, i) => {
                    return (
                        <div className='event-wrapper' key={i}>
                            <div className='event-header'>
                                <h3>{event.title}</h3>
                                <button className='non-event-btn' onClick={() => hide_non(i)}>
                                    <img src='/img/arrowu.png' />
                                </button>
                            </div>
                            <div className='non-event-div'>
                                <p className='event-desc'>{event.desc}</p>
                                {event.day && <p>Day - {event.day}</p>}
                                {event.time && <p>Time - {event.time}</p>}
                                {event.fee && <p>Fee - {event.fee}</p>}
                                {event.venue && <p>Venue - {event.venue}</p>}
                                {event.prize && <p>Prize pool - {event.prize}</p>}
                                {event.faculty && <p>Faculty Coordinator - {event.faculty}</p>}
                                {event.student && <p>Student Coordinator - {event.student}</p>}
                                {event.sub &&
                                    <div>
                                        <h4 className='text-center'>Sub Events</h4>
                                        {event.sub.map((sub, j) => (
                                            <div className='sub-event' key={j}>
                                                <h4>{sub.title}</h4>
                                                <p>{sub.desc}</p>
                                                {sub.day && <p>Day - {sub.day}</p>}
                                                {sub.time && <p>Time - {sub.time}</p>}
                                                {sub.fee && <p>Fee - {sub.fee}</p>}
                                                {sub.venue && <p>Venue - {sub.venue}</p>}
                                                {sub.prize && <p>Prize pool - {sub.prize}</p>}
                                                {sub.faculty && <p>Faculty Coordinator - {sub.faculty}</p>}
                                                {sub.student && <p>Student Coordinator - {sub.student}</p>}
                                            </div>
                                        ))}
                                    </div>
                                }
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Event;
