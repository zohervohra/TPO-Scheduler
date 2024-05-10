import React, { useState } from 'react';
import Resource from './Resource';
import ResourceForm from './ResourceForm'; // Import the EventForm component

export default function Resources() {
  const [showModal, setShowModal] = useState(false);

  // Function to handle opening the modal
  const openModal = () => {
    setShowModal(true);
  };

  // Function to handle closing the modal
  const closeModal = () => {
    setShowModal(false);
  };

  // Function to handle event submission
  const handleCreateEvent = (eventData) => {
    // Handle event creation logic here, e.g., saving to a database
    console.log('New event data:', eventData);
    // Close the modal after event creation
    closeModal();
  };

  return (
    <div className="flex flex-col gap-4 p-4 ">
      <div className="flex items-center gap-4 mt-[100px]">
        <h1 className="text-2xl font-semibold">Resources</h1>
        <button
          className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-3"
          onClick={openModal}>
          Create new resource
        </button>
      </div>
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
        <div className="p-0">
          <div className="relative w-full overflow-auto">
            <table className="w-full caption-bottom text-sm">
              <thead className="[&amp;_tr]:border-b">
                <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                  {/* <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 w-[100px]">ID</th> */}
                  <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">Title</th>
                  <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 hidden md:table-cell">Description</th>
                  <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">Date</th>
                  <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">Time</th>
                  <th className="h-12 px-4 align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 w-[100px] text-right">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="[&amp;_tr:last-child]:border-0">
                <Resource />
                <Resource />
                <Resource />
                {/* Add other rows similarly */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          {/* Modal */}
          <div className="bg-white p-4 rounded-lg shadow-md">
          <div className='flex justify-end'>
            <button className="top-2 right-0" onClick={closeModal}>
              X
            </button>
            </div>
            <ResourceForm onSubmit={handleCreateEvent} onClose={closeModal} />
          </div>
        </div>
      )}
    </div>
  );
}
