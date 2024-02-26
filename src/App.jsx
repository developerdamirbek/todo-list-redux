import React from 'react';
import { Form } from './components/form';
import { Card } from './components/card';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  return (
    <>
    <ToastContainer/>
      <div className='container'>
        <h1 className='text-center py-10 text-[32px] font-semibold'>Todo List</h1>
        <Form />
        <Card />
      </div>
    </>
  );
};

export default App;
