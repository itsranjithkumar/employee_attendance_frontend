import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export default function HomePage() {
  const { user, isAuthenticated } = useSelector((state) => state.auth);

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-3xl font-bold">Welcome to the Home Page</h1>
      {user && <p className="mt-4">Logged in as: {user.email}</p>}
    </div>
  );
}