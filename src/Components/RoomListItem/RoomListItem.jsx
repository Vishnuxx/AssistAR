import style from "./roomlistitem.module.css";

function RoomListItem({ thumbnail, title, description }) {
  return (
    <div className={style.container}>
      <img src={thumbnail} loading="lazy" alt="" className={style.thumbnail} />
      <div className={style.titlecontainer}>
        <h5 className={style.title}>{title}</h5>
        {/* <p className={style.description}>{description}</p> */}
        <button className={style.joinbtn}>
          Join
        </button>
      </div>
    </div>
  );
}

export default RoomListItem;
