

import SpaceListItem from "../Components/SpaceListItem/SpaceListItem";
import style from "../styles/screens/createroom.module.css";

function CreateRoomScreen() {
  return (
    <main className={style.main}>
      <nav className={style.mobile_nav}>
        <p className={style.title}>Mr.Assist</p>
        <button className={style.joinbtn}>Create</button>
      </nav>
      <div className={style.container}>
        <p className={style.label}>Create Room</p>
        <input className={style.input} type="text" placeholder="Room Name" />
        <p>Choose Space</p>
      </div>
      <div className={style.listcontainer}>
        <div className={style.list}>
          <SpaceListItem name={"room 1"}></SpaceListItem>
          <SpaceListItem name={"room 1"}></SpaceListItem>
          <SpaceListItem name={"room 1"}></SpaceListItem>
          <SpaceListItem name={"room 1"}></SpaceListItem>
          <SpaceListItem name={"room 1"}></SpaceListItem>
          <SpaceListItem name={"room 1"}></SpaceListItem>
          <SpaceListItem name={"room 1"}></SpaceListItem>
          <SpaceListItem name={"room 1"}></SpaceListItem>
        </div>
      </div>
    </main>
  );
}

export default CreateRoomScreen;
