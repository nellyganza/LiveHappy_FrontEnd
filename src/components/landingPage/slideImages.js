import React from 'react';
import { Slide } from 'react-slideshow-image'
import { faAngleDoubleLeft, faAngleDoubleRight, faCalendarAlt, faMapMarkerAlt, faMoneyCheckAlt, faStopwatch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { white } from 'tailwindcss/colors';
import moment from 'moment';
import { Link } from 'react-router-dom';

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  prevArrow: <div className="text-maincolor"><FontAwesomeIcon icon={faAngleDoubleLeft} className="text-4xl sm:text-6xl md:text-8xl" /></div>,
  nextArrow: <div className="text-maincolor"><FontAwesomeIcon icon={faAngleDoubleRight} className="text-4xl sm:text-6xl md:text-8xl" /></div>
};
const landInfo = <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:p-6 text-white text-center">
  <h1 className="md:P-30 text-base">INTERCORE GOURP LTD</h1><br></br>
  <p className="md:mt-10 text-xs">INTERCORE GROUP Let the experts help you and your business with everything from
    basic meetings to world class events with an experience</p>
</div>

export const Slideshow = (props) => {
  const date = props.isEvent ?moment(props.event.dateAndTimme).toDate():"";
  const cost = props.isEvent ? props.event.EventPayments[props.event.EventPayments.length-1].price+" Rwf   ~   "+props.event.EventPayments[0].price+" Rwf":"";
  const eventInfo = props.isEvent ? <div className="leading-loose" style={{
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "80%",
    height: "80%",
    textAlign: "left",
    color: "white",
    display: "flex",
    flexDirection:'row',
    justifyContent:'space-around'
  }}>
    <div className="slide-container-div" style={{alignSelf:"center", padding: "30px" }}>
      <h3 className="md:text-3xl text-sm" style={{ borderBottom: "2px solid white" }}>{props.event.title}</h3>
      <p className="p-3"><FontAwesomeIcon  icon={faMapMarkerAlt} /> <span className="p-3">{props.event.place}</span></p>
      <p className="p-3"><FontAwesomeIcon  icon={faCalendarAlt} /> <span className="p-3">{date.toLocaleString(undefined, {day:'numeric',month:'short',year:'numeric'})}</span></p>
      <p className="p-3"><FontAwesomeIcon  icon={faStopwatch}/><span className="p-3">{date.toLocaleTimeString(undefined, {hour: '2-digit',minute: '2-digit',second: '2-digit',})}</span></p>
      <p className="p-3"><FontAwesomeIcon  icon={faMoneyCheckAlt} /> <span className="p-3">{cost}</span></p>
    </div>
    <Link to={{pathname:"/payment",state:{event:props.event}}} style={{ alignSelf:"center",padding: "5px",width:"95px",textAlign:"center" ,float:'right',borderRadius:"5px"}} className="bg-buttonColor hover:bg-indigo-600">
      <button>Buy Ticket</button>
    </Link>
  </div> : "";
  return (
    <div className="slide-container  mainfont text-sm md:text-base">
      <Slide {...properties} className="bg-white">
        {
          props.image.map((each, index) =>
            <div key={index} className="mainimages relative h-full md:max-h-screen ">
              <img className="object-fill w-full h-full" src={each} />
              {props.isEvent ? eventInfo : landInfo}

            </div>)
        }
      </Slide>
    </div>
  )
}