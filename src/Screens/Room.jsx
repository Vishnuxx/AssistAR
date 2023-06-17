import {
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
} from "@chakra-ui/popover";
import style from "../styles/screens/room.module.css";
import { Button } from "@chakra-ui/button";
import { SharingLink } from "../Components/RoomComponents/SharingLinkButton";
import {
  InstantTracker,
  Loader,
  ZapparCamera,
  ZapparCanvas,
} from "@zappar/zappar-react-three-fiber";
import { Suspense, useState } from "react";
import { Stack } from "@chakra-ui/react";
import ARCanvas from "../Components/RoomComponents/ARCanvas";

function Room() {
  const [placementMode, setplacementMode] = useState(false);
  return (
    <main className={style.main}>
      <Stack position={"absolute"} h="100%" w="100%">
        <ARCanvas></ARCanvas>
      </Stack>

      <SharingLink></SharingLink>
      <button
        className={style.placementbtn}
        onClick={(e) => setplacementMode(!placementMode)}
      >
        {placementMode ? "Recalibrate" : "Calibrate"}
      </button>
    </main>
  );
}

export default Room;
