import React from 'react'
import InternshipCard from './InternshipCard.jsx'
import { useContext } from "react";
import  { UserDataContext } from "../../Context/UserData";
export default function InternshipBoard() {
  const data = useContext(UserDataContext);
// let articles = [
//     {
//         title: "Software Engineer Intern",
//         duration: "Summer 2024",
//         source: "Google Inc.",
//         place: "Bengaluru, BLR",
//         stipend: "$2000/month"
//       },
//       {
//         title: "Data Analyst Intern",
//         duration: "Fall 2024",
//         source: "JP Morgan Chase & Co.",
//         place: "Mumbai, MUM",
//         stipend: "$1800/month"
//       },
//       {
//         title: "Marketing Intern",
//         duration: "Spring 2024",
//         source: "Morgan Stanley",
//         place: "Hyderabad, HYD",
//         stipend: "$1500/month"
//       }
// ]
let articles = data.opportunities;

  return (
    <div className='flex flex-row mt-[100px]'>
       {articles.map((element, ind) => {

return <div key={ind} className=" px-10 border rounded mx-3 my-3">
    <InternshipCard
    jobTitle={element.title}
     duration={element.duration}
    source={element.source}
    place = {element.place}
    stipend = {element.stipend} />
</div>
})}
    </div>
  )
}
