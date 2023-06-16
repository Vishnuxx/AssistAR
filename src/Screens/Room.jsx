import { Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger } from "@chakra-ui/popover";
import style from "../styles/screens/room.module.css"
import { Button } from "@chakra-ui/button";
import { SharingLink } from "../Components/RoomComponents/SharingLinkButton";

function Room() {
    return (
      <main className={style.main}>
       
        <SharingLink></SharingLink>
        <button className={style.placementbtn} >Place</button>
      </main>
    );
}

export default Room;
