import "./App.css";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Easy from "./Easy/easy";
import Medium from "./Medium/medium";
import Movies from "./Medium/movie";
import Hard from "./Hard/hard";
import List from "./Hard/list";
import Header from "./Components/header";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="easy" element={<Easy />} />
          <Route path="medium" element={<Medium />} />
          <Route path="/movie/:id" element={<Movies />} />
          <Route path="/hard" element={<Hard />} />
          <Route path="/task/:id" element={<List />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
