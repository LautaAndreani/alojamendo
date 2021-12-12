import React from "react";
import { Stack, Box, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Stack flexWrap="wrap" p="2.5rem" mt="1rem" direction="row" as="footer" alignItems="center" justifyContent="space-between" bg="brand.footerbg">
      <Box>
        <Text as="h3" color="brand.btn" fontWeight="500">
          Todos los derechos reservados. © {new Date().getFullYear()} mendostay.
        </Text>
      </Box>
      <Stack direction="row" spacing={10} color="brand.btn">
        <Link to="/">Inicio</Link>
        <Link to="/explorar">Explorar</Link>
        <Link to="/como-funciona">¿Cómo funciona?</Link>
      </Stack>
    </Stack>
  );
};

export default Footer;
