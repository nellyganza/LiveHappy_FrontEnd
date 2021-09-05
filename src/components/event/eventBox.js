import { faCalendar, faMapMarkerAlt,  } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import moment from 'moment';
import React from 'react';

function eventBox(props) {

    const event = props.event;
    console.log(event)
    return (
        <div className="relative text-left text-sm md:text-base mainfont  text-white transform h-64  hover:bg-blue-600 transition duration-500 hover:scale-90" >
            <img className="w-full h-full" src={event.image[0]}/>
            <div className="absolute" style={{bottom:"8px",left:"16px"}}>
                <h3 style={{borderBottom: "2px solid white"}}>{event.title}</h3>
                <p><FontAwesomeIcon icon={faMapMarkerAlt}/> {event.place}</p>
                <p><FontAwesomeIcon icon={faCalendar}/> <span>{moment(event.dateAndTimme).toDate().toLocaleString(undefined, {day:'numeric',month:'short',year:'numeric'})}</span></p>
            </div>
        </div>
    );
}

export default eventBox;