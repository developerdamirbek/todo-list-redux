import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editItem, deleteItem } from '../../redux/reducer/todo';
import { toast } from 'react-toastify';

export const Card = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.todo.tasks);
  const [editId, setEditId] = React.useState(null);
  const [editText, setEditText] = React.useState('');

  const handleDelete = (taskId) => {
    dispatch(deleteItem(taskId));
    toast.info("Item was deleted!")

  };

  const handleEdit = (taskId, text) => {
    setEditId(taskId);
    setEditText(text);

  };

  const handleSaveEdit = (taskId) => {
    dispatch(editItem({ id: taskId, updatedTask: { id: taskId, text: editText } }));
    setEditId(null);
    toast.success("Item was edited!")

  };

  const handleCancelEdit = () => {
    setEditId(null);

  };

  return (
    <ul className=" flex flex-col gap-3  w-[600px] " >
      {tasks.map((task) => (
        <li key={task.id} className="rounded-md p-4 bg-gray-100 shadow-md">
          {editId === task.id ? (
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                className="border border-gray-300 px-3 py-1 rounded-md focus:outline-none focus:border-blue-500"
              />
              <div className='flex items-center gap-4'>
                <button
                  onClick={() => handleSaveEdit(task.id)}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-1 px-3 rounded-md focus:outline-none"
                >
                  Save
                </button>
                <button
                  onClick={handleCancelEdit}
                  className="text-gray-600 hover:text-red-600 font-semibold focus:outline-none"
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-between">
              <span>{task.text}</span>
              <div className="space-x-2">
                <button
                  onClick={() => handleDelete(task.id)}
                  className="text-red-600 hover:text-red-800 font-semibold focus:outline-none"
                >
                  Delete
                </button>
                <button
                  onClick={() => handleEdit(task.id, task.text)}
                  className="text-blue-600 hover:text-blue-800 font-semibold focus:outline-none"
                >
                  Edit
                </button>
              </div>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
};
