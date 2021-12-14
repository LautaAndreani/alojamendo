import React from "react";
import { Link } from "react-router-dom";
import { Box, Stack, Image, UnorderedList, ListItem, Button } from "@chakra-ui/react";
import { RiHomeHeartFill } from "react-icons/ri";

import logo from "../../assets/branding/isologo.svg";

const NavBar = () => {
  return (
    <Stack
      as="nav"
      position="fixed"
      top="0"
      zIndex={10}
      direction="row"
      p=" .5rem 2rem"
      justifyContent="space-between"
      borderBottom="1px"
      borderColor="#716D6D"
      alignItems="center"
      bg="#e2e2e2"
      w="100%"
    >
      <Link to="/">
        <Image width="130px" display={{ base: "none", md: "flex" }} src={logo} alt="mendostay-logo" />
      </Link>
      <Box>
        <UnorderedList display="flex" fontFamily="Inter" fontWeight="500" fontSize={{ base: ".8rem", md: "1rem" }}>
          <ListItem listStyleType="none" _hover={{ color: "brand.btn", transition: "0.2s" }} m={4}>
            <Link to="/">Inicio</Link>
          </ListItem>
          <ListItem listStyleType="none" m={4} _hover={{ color: "brand.btn", transition: "0.2s" }}>
            <Link to="/Explorar">Explorar</Link>
          </ListItem>
          <ListItem listStyleType="none" m={4} _hover={{ color: "brand.btn", transition: "0.2s" }}>
            <Link to="/como-funciona">¿Cómo funciona?</Link>
          </ListItem>
        </UnorderedList>
      </Box>
      <Link to="/publicar">
        <Button rightIcon={<RiHomeHeartFill />} bg="brand.btntwo" display={{ base: "none", md: "flex" }} color="brand.bg" _hover={{ bg: "#783202" }}>
          Alojar
        </Button>
      </Link>
    </Stack>
  );
};

export default NavBar;
