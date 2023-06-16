import style from "../styles/screens/signup.module.css";
import bgimage from "../assets/img2.png";
import { auth_service } from "../services/AuthService";
import { useState } from "react";
import { validateSignupInput } from "../utils/AuthUtils";

function SignUpScreen() {
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [errormessage, seterrormessage] = useState("");

  const handleSignup = async () => {
    try {
      const response = await auth_service.signup(
        username,
        email,
        password,
        confirmPassword
      );
      console.log(response);
      seterrormessage("");
    } catch (error) {
      seterrormessage(error.toString());
    }
  };
  return (
    <>
      <div className={style.center}>
        <h1>Sign Up</h1>
        <br />
        <div>
          <div className={style.txt_field}>
            <label>Username</label>
            <br />
            <br />
            <input
              onChange={(e) => setusername(e.target.value)}
              type="text"
              required
            />
            <br />
            <br />
          </div>
          <div className={style.txt_field}>
            <label>Email</label>
            <br />
            <br />
            <input
              onChange={(e) => setemail(e.target.value)}
              type="email"
              required
            />
            <br />
            <br />
          </div>
          <div className={style.txt_field}>
            <label>Password</label>
            <br />
            <br />
            <input
              onChange={(e) => setpassword(e.target.value)}
              type="password"
              required
            />

            <br />
            <br />
            <br />
          </div>
          <div className={style.txt_field}>
            <label>Confirm Password</label>
            <br />
            <br />
            <input
              onChange={(e) => setconfirmPassword(e.target.value)}
              type="password"
              required
            />

            <br />
            <br />
            <br />
          </div>
          <button
            onClick={handleSignup}
            type="button"
            className={style.submitbtn}
          >
            Submit
          </button>
          <div className={style.login_link}>
            Already have an account? <a href="MRAmob2.html">Login</a>
          </div>
          <p>{errormessage}</p>
        </div>
      </div>
      <div className={style.img}>
        <img alt="" src={bgimage} width="240px" height="240px" />
      </div>
    </>
  );
}

export default SignUpScreen;
