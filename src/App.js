import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

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
