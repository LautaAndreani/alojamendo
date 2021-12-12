import React from "react";
import { Box, Stack, Text } from "@chakra-ui/layout";
import { motion } from "framer-motion";
import Form from "../Submit/Form";

const MotionBox = motion(Box);

const Submit = () => {
  return (
    <MotionBox initial={{ opacity: 0 }} animate={{ opacity: 1, y: -20 }}>
      <Stack textAlign="center" p={8} mt="4rem">
        <Text as="h1" fontSize="48px" fontWeight="700" m="1rem 0" lineHeight="1.2">
          Gracias por elegirnos
          <span role="img" aria-labelledby="emoji-hearth">
            💕
          </span>
        </Text>
        <Text as="span">Podes completar el siguiente formulario para que podamos publicar tu espacio.</Text>
      </Stack>
      <Stack direction="row" mt={6} justifyContent="center">
        <Box w="80%" borderRadius="md">
          <Form />
        </Box>
      </Stack>
    </MotionBox>
  );
};

export default Submit;
