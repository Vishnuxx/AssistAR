import style from "../styles/screens/signup.module.css";
import bgimage from "../assets/img2.png";

function SignUpScreen() {
  return (
    <>
      <div className={style.center}>
        <h1>Sign Up</h1>
        <br />
        <form method="post">
          <div className={style.txt_field}>
            <label>Username</label>
            <br />
            <br />
            <input type="text" required />
            <br />
            <br />
          </div>
          <div className={style.txt_field}>
            <label>Email</label>
            <br />
            <br />
            <input type="email" required />
            <br />
            <br />
          </div>
          <div className={style.txt_field}>
            <label>Password</label>
            <br />
            <br />
            <input type="password" required />

            <br />
            <br />
            <br />
          </div>
          <input type="submit" value="SignUp" />
          <div className={style.login_link}>
            Already have an account? <a href="MRAmob2.html">Login</a>
          </div>
        </form>
      </div>
      <div className={style.img}>
        <img alt="" src={bgimage} width="240px" height="240px" />
      </div>
    </>
  );
}

export default SignUpScreen;
