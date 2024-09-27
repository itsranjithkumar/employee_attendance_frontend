import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import RegisterPage from './pages/register-page';
import { Toaster } from "@/components/ui/toaster"
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <Router>
      <RegisterPage />

      <LoginPage />

      <Toaster />
    </Router>
  );
}

export default App;
