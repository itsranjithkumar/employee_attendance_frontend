import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegisterPage from './pages/register-page';
import LoginPage from './pages/LoginPage';
import { Toaster } from "@/components/ui/toaster";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<LoginPage />} />
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;
