import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { logout } from '../features/auth/authSlice';
import { Button } from "@/components/ui/button";

export default function HomePage() {
  const { user, isAuthenticated } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-3xl font-bold">Welcome to the Home Page</h1>
      {user && <p className="mt-4">Logged in as: {user.email}</p>}
      <Button onClick={handleLogout} className="mt-4">Logout</Button>
    </div>
  );
}