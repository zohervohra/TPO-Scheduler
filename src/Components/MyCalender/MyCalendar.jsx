import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { useContext } from "react";
import  { UserDataContext } from "../../Context/UserData";

const localizer = momentLocalizer(moment);
const MyCalendar = ({isVis}) => {
  const data = useContext(UserDataContext);
  const events = data.events;
  const myEventsList =[];
  events.map((event) => {
    myEventsList.push({
      title: event.title,
      start: new Date(event.startDate),
      end: new Date(event.endDate),
    });
  });
  return (
  <div style={{  height: isVis ? "60vh" : "78vh", width: isVis ? "40vw" : "100vw" }} className='transition-height transition-width duration-500 ease-in-out overflow-hidden float-left cursor-pointer'>
    <Calendar
      localizer={localizer}
      events={myEventsList}
      startAccessor="start"
      endAccessor="end"
      style={{ margin: '50px' }}
    />
  </div>
)};

export default MyCalendar;
