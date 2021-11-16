import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Landing from "./pages/Landing";
import Login from "./pages/RegisterPages/Login";
import Signup from "./pages/RegisterPages/Signup";
import MindProgress from './pages/DashboardPages/Mind/MindProgress';
import MindCommunity from "./pages/DashboardPages/Mind/MindCommunity";
import MindResources from "./pages/DashboardPages/Mind/MindResources";
import MindSupport from "./pages/DashboardPages/Mind/MindSupport";

function App() {
  return (
    <Router>
      < Routes >
        <Route 
          path="/about"
          element={<About />}
        />
        <Route
          path="/signup"
          element={<Signup />}
        />
        <Route
          path="/login"
          element={<Login />}
        />
        <Route
          path="/dashboard/progress"
          element={<MindProgress />}
        />
        <Route
          path="/dashboard/community"
          element={<MindCommunity />}
        />
        <Route
          path="/dashboard/resources"
          element={<MindResources />}
        />
        <Route
          path="/dashboard/support"
          element={<MindSupport />}
        />
        <Route
          path="/dashboard"
          element={<Dashboard />}
        />
        <Route
          path="/"
          element={<Landing />}
        />

      </Routes >
    </Router>
  );
}

export default App;
