import { Link } from "react-router-dom";
import style from "../styles/screens/login.module.css";
import bgimage from "../assets/img2.png";
import { useState } from "react";
import { auth_service } from "../services/AuthService";

function LoginScreen() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [errormessage, seterrormessage] = useState("");

  const handleLogin = async () => {
    try {
      console.log(email, password);
      const response = await auth_service.login(email, password);      
      seterrormessage("");
      console.log(response);
    } catch (error) {
      seterrormessage(error.toString());
    }
  };

  return (
    <>
      <div className={style.center}>
        <h1>Login</h1>
        <form>
          <div className={style.txt_field}>
            <label>Email</label>
            <br />
            <br />
            <input
              type="text"
              onChange={(e) => setemail(e.target.value)}
              required
            />
          </div>

          <div className={style.txt_field}>
            <label>Password</label>
            <br />
            <br />
            <input
              className={style.password}
              type="password"
              onChange={(e) => setpassword(e.target.value)}
              required
            />

            <br />
            <br />
          </div>
          <button
            onClick={handleLogin}
            type="button"
            className={style.submitbtn}
          >
            Submit
          </button>
          <br />
          <br />
          <div className={style.signup_link}>
            Don't have an account? <Link>SignUp</Link>
            <br />
            <br />
          </div>
          <div className={style.pass}>
            <Link>Forgot password?</Link>
          </div>
          <p>{errormessage}</p>
        </form>
      </div>
      <div className={style.img}>
        <img alt="" src={bgimage} width="240px" height="240px" />
      </div>
    </>
  );
}

export default LoginScreen;
