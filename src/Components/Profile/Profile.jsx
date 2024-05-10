import React from 'react'

export default function Component() {
    return (
      <div className="w-full py-2 space-y-6 ">
        <div className="mx-auto max-w-5xl grid items-start gap-6 px-2 lg:grid-cols-2 lg:px-6 mt-[100px]">
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="space-y-1.5">
                <h1 className="text-4xl font-bold">Jasmine Davis</h1>
                <p className="text-gray-500 text-xl dark:text-gray-400">Computer Science Student</p>
              </div>
              <br/>
              <hr/>
              <div className="space-y-1.5">
                <div className="flex items-center space-x-2">
                  <BriefcaseIcon className="h-4 w-4" />
                  <h3 className="font-medium text-2xl my-2">Skills</h3>
                </div>
                <ul className="grid gap-2 md:grid-cols-2 text-base">
                  <li>Java</li>
                  <li>CSS</li>
                  <li>Python</li>
                  <li>HTML</li>
                  <li>C++</li>
                </ul>
              </div>
              <br/><hr/>
              <div className="space-y-1.5">
                <div className="flex items-center space-x-2">
                  <BookOpenIcon className="h-4 w-4" />
                  <h3 className="font-medium text-2xl my-2">Education</h3>
                </div>
                <ul className="grid gap-2 text-lg md:grid-cols-2">
                  <li>Computer Science, University of California</li>
                  <li>High School Diploma, San Francisco High School</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <img
              alt="Jasmine Davis"
              className="rounded-full border-4 border-white"
              height="200"
              src="/placeholder.svg"
              style={{
                aspectRatio: "200/200",
                objectFit: "cover",
              }}
              width="200"
            />
          </div>
        </div>
      </div>
    )
  }
  
  function BookOpenIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    )
  }
  
  
  function BriefcaseIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    )
  }
  