import React, { useState } from "react";
import axios from "axios";

function EventForm({ onSubmit, onClose }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [sdate, setSDate] = useState("");
  const [edate, setEDate] = useState("");

  const addEvent = async (title, description, startDate, endDate, token) => {
    try {
      const response = await axios.post(
        "https://vegahackathonbackend-9c856453c60a.herokuapp.com/api/events",
        {
          title: title,
          description: description,
          startDate: startDate,
          endDate: endDate,
          studentUserId: "1234",
        },
        {
          headers: {
            "X-auth-token": token,
          },
        }
      );
      return response.data;
    } catch (error) {
      if (error.response) {
        // Request was made and server responded with a status code
        console.error("Error response from server:", error.response.data);
        throw new Error(error.response.data);
      } else if (error.request) {
        // Request was made but no response received
        console.error("No response received:", error.request);
        throw new Error("No response received from server");
      } else {
        // Something else happened in making the request
        console.error("Error in making request:", error.message);
        throw new Error(error.message);
      }
    }
  };

  // Usage example
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("X-auth-token"); // Replace with your actual JWT token
      const event = await addEvent(title, description, sdate, edate, token);
      console.log("Event added successfully:", event);
      // Optionally, do something with the added event
    } catch (error) {
      console.error("Error adding event:", error.message);
      // Handle error appropriately, e.g., display error message to user
    }
  };

  return (
    <div className="w-[300px]">
      <h2 className="text-lg font-semibold mb-4">Create New Event</h2>
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
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            Description:
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            rows="3"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          ></textarea>
        </div>
        <div className="mb-4">
          <label
            htmlFor="date"
            className="block text-sm font-medium text-gray-700"
          >
            Date:
          </label>
          <input
            type="date"
            id="date"
            value={sdate}
            onChange={(e) => setSDate(e.target.value)}
            required
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="date"
            className="block text-sm font-medium text-gray-700"
          >
            Date:
          </label>
          <input
            type="date"
            id="date"
            value={edate}
            onChange={(e) => setEDate(e.target.value)}
            required
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          />
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-secondṭary  text-white font-bold py-2 px-4 rounded"
            onClick={(e) => {
              handleSubmit(e);
            }}
          >
            Create Event
          </button>
        </div>
      </form>
    </div>
  );
}

export default EventForm;
