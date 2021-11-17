import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Landing from "./pages/Landing";
import Login from "./pages/RegisterPages/Login";
import Signup from "./pages/RegisterPages/Signup";
import PillarSelection from "./pages/Pillars";
import MindProgress from "./pages/DashboardPages/Mind/MindProgress";
import MindCommunity from "./pages/DashboardPages/Mind/MindCommunity";
import MindResources from "./pages/DashboardPages/Mind/MindResources";
import MindSupport from "./pages/DashboardPages/Mind/MindSupport";
import MindDashboard from "./pages/DashboardPages/Mind/MindDashboard";
import FitnessDashboard from "./pages/DashboardPages/Fitness/FitnessDashboard";
import FitnessProgress from "./pages/DashboardPages/Fitness/FitnessProgress";
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      < Routes >
        <Route
          exact
          path="/"
          element={<Landing />}
        />
        <Route 
          exact
          path="/about"
          element={<About />}
        />
        <Route
          exact
          path="/signup"
          element={<Signup />}
        />
        <Route
          exact
          path="/login"
          element={<Login />}
        />
        <Route 
          exact
          path="/selectpillar" 
          element={<PillarSelection />} />
        <Route
          exact
          path="/dashboard/mind"
          element={<MindDashboard />}
        />
        <Route
          exact
          path="/dashboard/mind/progress"
          element={<MindProgress />}
        />
        <Route
          exact
          path="/dashboard/mind/community"
          element={<MindCommunity />}
        />
        <Route
          exact
          path="/dashboard/mind/resources"
          element={<MindResources />}
        />
        <Route
          exact
          path="/dashboard/mind/support"
          element={<MindSupport />}
        />
        <Route
          exact
          path="/dashboard/fitness"
          element={<FitnessDashboard />}
        />
        <Route
          exact
          path="/dashboard/fitness/progress"
          element={<FitnessProgress />}
        />
        <Route
          exact
          path="/dashboard"
          element={<Dashboard />}
        />
        <Route
          path="/*"
          element={<NotFound />}
        />

      </Routes >
    </Router>
  );
}

export default App;
