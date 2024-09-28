import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './app/store';
import RegisterPage from './pages/register-page';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import { Toaster } from "@/components/ui/toaster";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="*" element={<LoginPage />} />
        </Routes>
        <Toaster />
      </Router>
    </Provider>
  );
}

export default App;