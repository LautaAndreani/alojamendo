import React from "react";
import { Stack, Box, Text, StackDivider } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <Stack flexWrap="wrap" p="2.5rem" mt="1rem" direction="row" as="footer" alignItems="center" justifyContent="space-between" bg="brand.footerbg">
        <Box>
          <Text as="h3" color="brand.btn" fontWeight="500">
            Todos los derechos reservados. © {new Date().getFullYear()} mendostay.
          </Text>
        </Box>
        <StackDivider p={4} />
        <Stack direction="row" spacing={10} color="brand.btn">
          <Link to="/">Inicio</Link>
          <Link to="/explorar">Explorar</Link>
          <Link to="/como-funciona">¿Cómo funciona?</Link>
        </Stack>
      </Stack>
      <Text textAlign="center" fontSize=".9rem" p={3} bg="brand.footerbg" color="brand.bg">
        Hecho por{" "}
        <Box as="a" fontWeight={500} _hover={{ borderBottom: "1px solid", borderColor: "brand.btn" }} href="https://www.linkedin.com/in/lautaroandreani/" target="_blank" rel="noreferrer noopener">
          Lautaro
        </Box>
      </Text>
    </>
  );
};

export default Footer;
