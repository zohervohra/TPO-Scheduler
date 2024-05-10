
import React from 'react';

function InternshipCard(props) {
    return (
        <div className="max-w-md mx-auto bg-white rounded-lg  p-6">
            <div className="flex justify-between items-center mb-4">
                <div className="inline-flex items-center rounded-full whitespace-nowrap border px-2.5 py-0.5 w-fit text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">Actively hiring</div>
               
            </div>
            <h2 className="text-lg font-semibold mb-2">{props.jobTitle}</h2>
            <p className="text-sm text-gray-500 mb-4">{props.source}</p>
            <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                <div className='flex flex-row justify-center py-1 '>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500">
                        <line x1="2" x2="5" y1="12" y2="12" />
                        <line x1="19" x2="22" y1="12" y2="12" />
                        <line x1="12" x2="12" y1="2" y2="5" />
                        <line x1="12" x2="12" y1="19" y2="22" />
                        <circle cx="12" cy="12" r="7" />
                    </svg>
                    <span className="ml-1">{props.place}</span>
                </div>
                <div className='flex flex-row justify-center py-1'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500">
                        <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                        <line x1="16" x2="16" y1="2" y2="6" />
                        <line x1="8" x2="8" y1="2" y2="6" />
                        <line x1="3" x2="21" y1="10" y2="10" />
                    </svg>
                    <span className="ml-1">{props.startDate}</span>
                </div>
                <div className='flex flex-row justify-center py-1'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500">
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                    </svg>
                    <span className="ml-1">{props.duration}</span>
                </div>
                <div className=' flex flex-row justify-center py-1'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500">
                        <path d="M6 3h12" />
                        <path d="M6 8h12" />
                        <path d="m6 13 8.5 8" />
                        <path d="M6 13h3" />
                        <path d="M9 13c6.667 0 6.667-10 0-10" />
                    </svg>
                    <span className="ml-1">{props.stipend}</span>
                </div>
            </div>
            <div className="flex items-center justify-between mb-4">
                <div className="inline-flex items-center rounded-full whitespace-nowrap border px-2.5 py-0.5 w-fit text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80">Few hours ago</div>
                <span className="text-xs text-gray-500">Internship with job offer</span>
            </div>
            <div className="flex justify-around">
                <button className="inline-flex items-center justify-center rounded-md text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-5 py-2 ">View details</button>
                <button className="inline-flex items-center justify-center  rounded-md text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-5 py-2 ">Apply now</button>
            </div>
        </div>
    );
}

export default InternshipCard;
