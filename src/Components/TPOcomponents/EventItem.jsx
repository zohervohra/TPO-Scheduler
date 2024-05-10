import React from 'react'

export default function EventItem(props) {
  return (
 

<tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-semibold">{props.ind}</td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-semibold">{props.title}</td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 hidden md:table-cell">{props.description}</td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">{props.startDate}-{props.endDate}</td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-right w-[100px]">
                    <div>
                     
                      <div className="w-48 flex justify-end">
                        <div>
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 mr-2">
                            <path d="M4 13.5V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-5.5"></path>
                            <polyline points="14 2 14 8 20 8"></polyline>
                            <path d="M10.42 12.61a2.1 2.1 0 1 1 2.97 2.97L7.95 21 4 22l.99-3.95 5.43-5.44Z"></path>
                          </svg>
                         
                        </div>
                        <div>
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 mr-2">
                            <path d="M3 6h18"></path>
                            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                          </svg>
                     
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
 
  )
}
