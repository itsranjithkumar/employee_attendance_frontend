import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EmployeeList from './components/EmployeeList';
import EmployeeDetail from './components/EmployeeDetail';
import CreateEmployee from './components/CreateEmployee';
import Dashboard from './dashboard';
import NetflixClone from './netflix';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<EmployeeList />} />
                <Route path="/employees/:id" element={<EmployeeDetail />} />
                <Route path="/create-employee" element={<CreateEmployee />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/netflix" element={<NetflixClone />} />
            </Routes>
        </Router>
    );
}

export default App;
