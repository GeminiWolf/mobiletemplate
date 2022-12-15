import * as React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./containers/Login";
import WebPortal from "./containers/WebPortal";
import Dashboard from "./containers/Dashboard";
import { AuthProvider } from "./utils/providers";
import { AuthenticatedRoute } from "./components/navigation";
import Profile from "./containers/Profile";

const App = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<WebPortal />} />
        <Route path="/login" element={<LoginPage />} />
        {/* Example to restrict access to only users who are authenticated */}
        <Route
          path="/dashboard"
          element={
            <AuthenticatedRoute>
              <Dashboard />
            </AuthenticatedRoute>
          }
        />
        
        <Route
          path="/profile"
          element={
            <AuthenticatedRoute>
              <Profile />
            </AuthenticatedRoute>
          }
        />
      </Routes>
    </AuthProvider>
  );
};

export default App;
