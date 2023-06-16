import RoomListItem from "../Components/RoomListItem/RoomListItem";
import style from "../styles/screens/dashboard.module.css"

function Dashboard() {
    return (
      <main className={style.main}>
        <nav className={style.mobile_nav}>
          <p className={style.title}>Mr.Assist</p>
          <img
            width="50"
            height="50"
            src="https://img.icons8.com/nolan/64/user-default.png"
            alt="user-default"
          />
        </nav>

        <div className={style.gridcontainer}>
          <div className={style.grid}>
            <RoomListItem title={"one"}></RoomListItem>
            <RoomListItem title={"one"}></RoomListItem>
            <RoomListItem title={"one"}></RoomListItem>
            <RoomListItem title={"one"}></RoomListItem>
          </div>
        </div>

        <div className={style.btn_container}>
          <button className={`${style.btn} ${style.join}`}>Join Room</button>
          <button className={`${style.btn} ${style.create}`}>
            Create Room
          </button>
        </div>
      </main>
    );
}

export default Dashboard;