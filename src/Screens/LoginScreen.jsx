import { Link } from "react-router-dom";
import style from "../styles/screens/login.module.css"
import bgimage from "../assets/img2.png"

function LoginScreen() {
  return (
    <>
      <div className={style.center}>
        <h1>Login</h1>
        <form method={style.post}>
          <div className={style.txt_field}>
            <label>Username/Email</label>
            <br />
            <br />
            <input type="text" required />
          </div>

          <div className={style.txt_field}>
            <label>Password</label>
            <br />
            <br />
            <input type={style.password} required />

            <br />
            <br />
          </div>
          <input type="submit" value="Login" />
          <br />
          <br />
          <div className={style.signup_link}>
            Don't have an account? <Link>SignUp</Link>
            <br />
            <br />
          </div>
          <div className={style.pass}>
            <Link >Forgot password?</Link>
          </div>
        </form>
      </div>
      <div className={style.img}>
       <img alt="" src={bgimage} width="240px" height="240px" /> 
    </div>
    </>
  );
}

export default LoginScreen;
