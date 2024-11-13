import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import auth from './store/auth/actions';

const App = () => {
  const dispatch = useDispatch();
  // const user = useSelector((state) => state.auth.userData);
  const doctor = window.localStorage.getItem("userId");
  const [userData, setUserData] = useState(doctor);
  useEffect(() => {
    if (doctor) {
      setUserData(doctor);
    }
  }, [doctor]);

  const handleSignup = (data) => {
    dispatch(auth.signupRequest(data));
  };

  const handleLogout = () => {
    setUserData(null);
    window.localStorage.removeItem("userName");
    window.localStorage.removeItem("userId");
    window.localStorage.removeItem("isDoc");
  };

  return (
    <Router>
      <div className="font-sans">
        <Routes>
          <Route
            path="/"
            element={userData ? <Navigate to="/home" /> : <Navigate to="/login" />}
          />

          <Route
            path="/login"
            element={userData ? <Navigate to="/home" /> : <Login />}
          />

          <Route
            path="/signup"
            element={<Signup onSignup={handleSignup} />}
          />

          <Route
            path="/home"
            element={userData ? <Home onLogout={handleLogout} /> : <Navigate to="/login" />}
          />

          <Route
            path="*"
            element={<Navigate to="/" />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
