import React from "react";
import { Stack, Box, Text, UnorderedList, ListItem } from "@chakra-ui/layout";
import ButtonPrimary from "../../../components/Button";

const About = () => {
  return (
    <Stack direction="row" justifyContent="space-evenly" flexWrap="wrap" padding={10}>
      <Box width={{ base: "300px", md: "450px" }} transform="scaleX(-1)">
        <lottie-player
          src="https://assets6.lottiefiles.com/packages/lf20_fvwas0si.json"
          background="transparent"
          speed="1"
          style={{ width: "100%" }}
          loop
          autoplay
        ></lottie-player>
      </Box>
      <Box>
        <Text as="h3" fontSize="3rem" color="brand.text" m="2rem 0" lineHeight="1.2" fontWeight="700">
          Por qué elegir
          <Box as="span" display="block">
            alojamendo.
          </Box>
        </Text>
        <UnorderedList spacing="2rem" color="brand.text" fontWeight="500" fontSize="1.2rem">
          <ListItem>Publicá o encontrá un espacio de una forma fácil y directa</ListItem>
          <ListItem>No cobramos ningún tipo de comisión</ListItem>
          <ListItem>
            La ilustración es bonita{" "}
            <span role="img" aria-label="backhand index pointing right" className="react-emojis" style={{ lineHeight: 1 }}>
              👉
            </span>
            <span role="img" aria-label="backhand index pointing left" className="react-emojis" style={{ lineHeight: 1 }}>
              👈
            </span>
          </ListItem>
        </UnorderedList>
        <Box mt={4}>
          <ButtonPrimary title="Publicar" route="/publicar" />
        </Box>
      </Box>
    </Stack>
  );
};

export default About;
