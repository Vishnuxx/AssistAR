import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/App.css";
import { APP_ROUTES } from "./constants/Routes";
import LoginScreen from "./Screens/LoginScreen";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/"></Route>
          <Route path={APP_ROUTES.login} element={<LoginScreen/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
