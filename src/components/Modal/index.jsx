import React from "react";
import { BiDownload } from "react-icons/bi";
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button, useDisclosure, Icon, Box } from "@chakra-ui/react";
import Export from "../ExportCard";
import html2canvas from "html2canvas";

export const ModalComp = ({ houseSpecs, res }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  //   Export card
  const handleExport = () => {
    html2canvas(document.querySelector(".exportPost")).then((canvas) => {
      let img = canvas.toDataURL("image/png");
      let link = document.createElement("a");
      link.download = `alojamendo-card`;
      link.href = img;
      link.click();
    });
  };

  return (
    <>
      <Button onClick={onOpen} role="button" mt={4} bg="brand.btntwo" color="brand.bg" w="100%" _hover={{ bg: "#783202" }}>
        Exportar Publicación <Icon as={BiDownload} ml="5px" />
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Compartí de manera más simplifcada</ModalHeader>
          <ModalCloseButton />
          <Box className="exportPost" w="100%" borderRadius="md" m="0 auto">
            <ModalBody overflow="hidden">
              <Export res={res} houseSpecs={houseSpecs} />
            </ModalBody>
          </Box>
          <ModalFooter>
            <Button bg="brand.btn" color="brand.bg" w="100%" onClick={handleExport}>
              Descargar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalComp;
