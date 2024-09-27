import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import RegisterPage from './pages/register-page';

function App() {
  return (
    <Router>
      <RegisterPage />
    </Router>
  );
}

export default App;
