import style from './spacelistitem.module.css'


function SpaceListItem({img , name}) {
    return <div className={style.itemcontainer}>
        <img src={img} alt={name} className={style.img} />
        <p className={style.title}>{name}</p>
    </div>;
}

export default SpaceListItem;