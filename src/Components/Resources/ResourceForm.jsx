import React, { useState } from 'react';

function ResourceForm({ onSubmit, onClose }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call the onSubmit function passed from the parent component
    onSubmit({ title, description, date, time });
    // Reset form fields after submission
    setTitle('');
    setDescription('');
    setDate('');
    setTime('');
    // Call the onClose function passed from the parent component to close the modal
    onClose();
  };

  return (
    <div className='w-[300px]'>
      <h2 className="text-lg font-semibold mb-4">Create New Resource</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title:</label>
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
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            rows="3"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          ></textarea>
        </div>
        <div className="flex justify-end">
          <button type="submit" className="bg-secondary  text-white font-bold py-2 px-4 rounded">Deploy Resource</button>
        </div>
      </form>
    </div>
  );
}

export default ResourceForm;