import './App.css';
import Header from './components/Header.js';
import React from "react";
import InputField from './components/InputField.js';
import Button from "./components/Button";
import Task from "./components/Task.js"
function App() {
  return (
    <div className="App">
     <Header />
     <InputField />
     <Button />
     <Task />
    </div>
  );
}

export default App;
