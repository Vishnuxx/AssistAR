import {
  Stack,
  Button,
  Modal,
  ModalContent,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";




export function SharingLink({ props }) {
//   const sharingLinkSnap = useSnapshot(joiningLinkState);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [text, setText] = useState("copy");

  const copyToClipboard = () => {
    // navigator.clipboard.writeText(sharingLinkSnap.value);
    setText("copied");
    // onClose()
  };

  const open = () => {
    onOpen();
  };

  return (
    <>
      <Button onClick={open} bg={"transparent"} p={2} borderRadius={100}>
        <img
          width="34"
          height="34"
          src="https://img.icons8.com/nolan/64/1A6DFF/C822FF/link.png"
          alt="link"
        />
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent color={"white"} bg={"rgba(100,100,100,0.5)"}>
          <Stack
            gap={"15px"}
            direction={"horizontal"}
            h={"100px"}
            justifyContent="center"
            alignItems={"center"}
            p={"3"}
          >
            <Text
              w={"100%"}
              bg={"rgba(100,100,100,0.5)"}
              h={"30px"}
              borderRadius={"5px"}
              color="white"
              overflow={"scroll"}
              noOfLines={1}
            >
              {/* {sharingLinkSnap.value} */}
            </Text>
            <Button
              size={"sm"}
              colorScheme="none"
              mr={3}
              onClick={copyToClipboard}
            >
              {text}
            </Button>
          </Stack>
        </ModalContent>
      </Modal>
    </>
  );
}
