import React, { useState } from "react";
import MyCalendar from "../Components/MyCalender/MyCalendar";
import { IoIosArrowForward } from "react-icons/io";
import AnnouncementPage from "../Components/Announcements/AnnouncementPage";
// import './landingcss.css'

export default function LandingPage() {
  
  const [isVis, setIsVis] = useState(true);

  

  const toggleVisibility = () => {
    setIsVis(!isVis);
  };

  return (
    <div className="flex flex-row pt-[70px]">
      <div id="ann" className="component" style={{ width: isVis ? "60vw" : "0" }}>
        <AnnouncementPage />
      </div>
      <div className="flex items-center ">
      <IoIosArrowForward onClick={toggleVisibility}  className={isVis?"hidden":"cursor-pointer"} size={50}   />
      <div id="cal" className="component" onClick={()=>{isVis&&toggleVisibility()}} style={{ width: isVis ? "40vw" : "95vw" }}>
        <MyCalendar isVis={isVis}/>
      </div>
      
      </div>
    </div>
  );
}
