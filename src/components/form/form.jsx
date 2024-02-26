import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { add } from '../../redux/reducer/todo';
import { toast } from 'react-toastify';

export const Form = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    dispatch(add({ id: Date.now(), text: inputValue }));
    setInputValue('');
    toast.success("Item added successfully!")
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-100 p-4 rounded-lg w-[600px] mb-14 gap-6 flex items-center justify-between shadow-md">
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Add a new item"
        className=" py-2 px-4 flex-grow rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-500"
      />
      <button type="submit" className="mt-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline">
        Add
      </button>
    </form>
  );
};
