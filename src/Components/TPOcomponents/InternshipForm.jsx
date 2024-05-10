import React, { useState } from "react";
import axios from "axios";

function InternshipForm({ onSubmit, onClose, closeModal }) {
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");
  const [source, setSource] = useState("");
  const [stipend, setStipend] = useState(0);
  const [duration, setDuration] = useState("");
  const [applyBy, setApplyBy] = useState("");
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Making Axios POST request to the API
      const response = await axios.post("https://vegahackathonbackend-9c856453c60a.herokuapp.com/api/opportunity", {
        jobTitle: title,
        company: company,
        place: location,
        source: source,
        stipend: stipend,
        duration: duration,
        applyBy: applyBy,
      },
      {
        headers: {
          "X-auth-token": localStorage.getItem("X-auth-token"),
        },
      });
      
      // Handle success
      console.log("Opportunity created:", response.data);
      
      // Reset form fields
      setTitle("");
      setCompany("");
      setLocation("");
      setSource("");
      setStipend("");
      
      // Close modal or perform other actions as needed
      closeModal();
    } catch (error) {
      // Handle error
      console.error("Error creating opportunity:", error);
      // You might want to display an error message to the user
    }
  };

  return (
    <div className="w-[300px]">
      <h2 className="text-lg font-semibold mb-4">
        Create New Internship Opportunity
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700"
          >
            Title:
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          />
        </div>
        
        <div className="mb-4">
          <label
            htmlFor="company"
            className="block text-sm font-medium text-gray-700"
          >
            Company:
          </label>
          <input
            type="text"
            id="company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            required
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="location"
            className="block text-sm font-medium text-gray-700"
          >
            Location:
          </label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="source"
            className="block text-sm font-medium text-gray-700"
          >
            Source:
          </label>
          <input
            type="text"
            id="source"
            value={source}
            onChange={(e) => setSource(e.target.value)}
            required
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="stipend"
            className="block text-sm font-medium text-gray-700"
          >
            Stipend:
          </label>
          <input
            type="number"
            id="stipend"
            value={stipend}
            onChange={(e) => setStipend(e.target.value)}
            required
            rows="3"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          ></input>
        </div>
        <div className="mb-4">
          <label
            htmlFor="duration"
            className="block text-sm font-medium text-gray-700"
          >
            Duration:
          </label>
          <select
            id="duration"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          >
            <option value="">Select Duration</option>
            <option value="1 month">1 month</option>
            <option value="3 months">3 months</option>
            <option value="6 months">6 months</option>
          </select>
        </div>
        <div className="mb-4">
          <label
            htmlFor="applyBy"
            className="block text-sm font-medium text-gray-700"
          >
            Apply By:
          </label>
          <input
            type="date"
            id="applyBy"
            value={applyBy}
            onChange={(e) => setApplyBy(e.target.value)}
            required
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          />
        </div>
        
        <div className="flex justify-between">
          <button
            className="bg-secondary text-white font-bold py-2 px-4 rounded"
            onClick={closeModal}
          >
            Close
          </button>
          <button
            type="submit"
            className="bg-secondary text-white font-bold py-2 px-4 rounded"
          >
            Create Internship
          </button>
        </div>
      </form>
    </div>
  );
}

export default InternshipForm;
