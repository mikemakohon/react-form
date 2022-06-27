import "./App.css";
import Form from "./components/Form";
import FinalForm from "./components/FinalForm/FinalForm";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/form">Form</Link>
          </li>
          <li>
            <Link to="/final-form">Final-Form</Link>
          </li>
        </ul>
        <Routes>
          <Route exact path="/form" element={<Form />} />
          <Route exact path="/final-form" element={<FinalForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
