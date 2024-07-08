import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TaskList from './components/TaskList';
import TaskDetails from './components/TaskDetails';

function App() {

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' Component={TaskList} />
          <Route path='/task/:id' Component={TaskDetails} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;