import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/"></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
