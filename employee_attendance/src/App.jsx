import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import RegisterPage from './pages/register-page';
import { Toaster } from "@/components/ui/toaster"

function App() {
  return (
    <Router>
      <RegisterPage />
      <Toaster />
    </Router>
  );
}

export default App;
