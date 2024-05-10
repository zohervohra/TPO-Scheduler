import React from 'react'
import Announcements from './Announcements'
import { useContext } from "react";
import { UserDataContext } from "../../Context/UserData";

export default function AnnouncementPage() {
    const data = useContext(UserDataContext);
    // console.log(data);
    const articles = data.announcements;


    // let articles = [
    //     {
    //         title: "The Importance of Exercise",
    //         description: "This article discusses the benefits of regular exercise for physical and mental health.",
    //         publishedAt: "2023-05-12"
    //     },
    //     {
    //         title: "10 Tips for Productivity",
    //         description: "Discover practical strategies to boost your productivity and accomplish more in less time.",
    //         publishedAt: "2023-07-28"
    //     },
    //     {
    //         title: "Exploring Meditation Techniques",
    //         description: "Learn about different meditation techniques and their potential benefits for stress reduction and relaxation.",
    //         publishedAt: "2023-09-15"
    //     },
    //     {
    //         title: "The Rise of Artificial Intelligence",
    //         description: "Explore the advancements in artificial intelligence technology and its implications for society.",
    //         publishedAt: "2023-11-02"
    //     },
    //     {
    //         title: "Healthy Eating Habits",
    //         description: "Discover the fundamentals of a balanced diet and how to incorporate healthy eating habits into your lifestyle.",
    //         publishedAt: "2024-01-18"
    //     }
    // ];

    return (

        <div style={{height : "600px" , overflow : 'scroll'}} className='no-scrollbar'>
            <h1 className='text-3xl font-bold tracking-tighter text-center mb-10 mt-7'>
                Announcements
            </h1>


            {articles.map((element, ind) => {



                return <div key={ind} className="col px-10 border rounded mx-3 my-3">
                    <Announcements
                        title={element.title}
                        description={element.description}
                        date={element.publishedAt} />
                </div>


            })}
        </div>
    )
}
