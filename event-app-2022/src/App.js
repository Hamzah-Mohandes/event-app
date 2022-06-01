import "./App.css";
import LogIn from "./componets/LogIn";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div>
        <LogIn />
        <Routes>
          <Route> </Route>
        </Routes>
      </div>
    </Router>
  );
}
export default App;
