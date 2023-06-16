import style from "../styles/screens/joinscreen.module.css";

function JoinRoomScreen() {
  return (
    <main className={style.main}>
      <nav className={style.mobile_nav}>
        <p className={style.title}>Mr.Assist</p>
      </nav>
      <div className={style.container}>
        <p className={style.label}>Create Room</p>
        <input className={style.input} type="text" placeholder="Join Id" />
        <button className={style.joinbtn}>Join</button>
      </div>
    </main>
  );
}

export default JoinRoomScreen;
