import React from "react";
import "./App.css";
import AddTask from "./components/AddTask";
import ViewTasks from "./components/ViewTasks";
import  { Toaster } from 'react-hot-toast';
function App() {
  return (
    <div className="app">
      <Toaster  toastOptions={{
    className: '',
    style: {
      border: '1px solid #713200',
      padding: '16px',
      color: '#713200',
    },
  }}/>
      <h1 className="heading">TODO-APP</h1>
      <AddTask />
      <ViewTasks />
    </div>
  );
}

export default App;
