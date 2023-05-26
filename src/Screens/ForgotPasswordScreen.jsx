import style from "../styles/screens/forgotpass.module.css";
import bgImage from "../assets/img2.png";

function ForgotPasswordScreen() {
  return (
    <>
      <div className={style.center}>
        <h1>Forgot password?</h1>
        <form method={style.post}>
          <div className={style.txt_field}>
            <label>Enter your registered email</label>
            <br />
            <br />
            <input type="email" required />
          </div>
          <br />
          <br />

          <input type="submit" value="Submit" />
        </form>
      </div>
      <div className={style.img}>
        <img alt="" src={bgImage} width="240px" height="240px" />
      </div>
    </>
  );
}

export default ForgotPasswordScreen;
