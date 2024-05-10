import React, { useState } from 'react';
import InternshipForm from './InternshipForm.jsx';

function InternshipTPO() {
  const [showModal, setShowModal] = useState(false);

  // Function to handle opening the modal
  const openModal = () => {
    setShowModal(true);
  };

  // Function to handle closing the modal
  const closeModal = () => {
    setShowModal(false);
  };

  // Function to handle internship submission
  const handleCreateInternship = (internshipData) => {
    // Handle internship creation logic here, e.g., saving to a database
    console.log('New internship data:', internshipData);
    // Close the modal after internship creation
    closeModal();
  };

  return (
    <div>
      <div className="px-4 md:px-6 py-6 space-y-6 pt-[100px]">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Job Opportunities</h1>
          <button
            className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-3"
            onClick={openModal} // Open modal when button is clicked
          >
            Add New Internship Opportunity
          </button>
          <p className="text-gray-500 dark:text-gray-400">Here are the current job openings.</p>
        </div>
        <div className="space-y-4">
          {/* Job opportunities content */}
          {/* This will be moved inside the modal */}
            
          
        </div>
      </div>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          {/* Modal */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            {/* Include the InternshipForm component inside the modal */}
            <InternshipForm onSubmit={handleCreateInternship} onClose={closeModal} closeModal={closeModal}/>
          </div>
        </div>
      )}
    </div>
  );
}

export default InternshipTPO;
