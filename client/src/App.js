import { BrowserRouter as Router } from "react-router-dom";
import IndexPages from "./routes/Indexpages.js";
import './App.css' ; 

function App() {
  return (
    <Router>
      <IndexPages />
    </Router>
  );
}

export default App;
