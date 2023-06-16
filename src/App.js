import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/App.css";
import { APP_ROUTES } from "./constants/Routes";
import LoginScreen from "./Screens/LoginScreen";
import SignUpScreen from "./Screens/SignUpScreen";
import ForgotPasswordScreen from "./Screens/ForgotPasswordScreen";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginScreen />}></Route>
          <Route path={APP_ROUTES.login} element={<LoginScreen />}></Route>
          <Route path={APP_ROUTES.signup} element={<SignUpScreen />}></Route>
          <Route
            path={APP_ROUTES.forgot}
            element={<ForgotPasswordScreen />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
