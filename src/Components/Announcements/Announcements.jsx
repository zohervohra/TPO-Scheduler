import React from 'react'

export default function Announcements(props) {
 
  return (
    <div>
        <div className="grid gap-4 md:gap-6">
            <div className="space-y-1">
              <h2 className="text-2xl font-bold tracking-tighter pt-3">
                {props.title}
              </h2>
              <p className="text-gray-500 dark:text-gray-400 "> {props.date}</p>
              <p className='pb-4'>
                {props.description}
              </p>
            </div>
        </div>
    </div>
  )
}
