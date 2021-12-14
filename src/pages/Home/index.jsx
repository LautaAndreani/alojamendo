import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { Box, Stack, Text, Button, Image, ButtonGroup } from "@chakra-ui/react";
import { motion } from "framer-motion";
import collage from "../../assets/images/collage.png";
import ButtonPrimary from "../../components/Button";
//Another sections
import Alojadores from "./Hosts";
import About from "./AboutUs";
//Firebase
import { GetData } from "../../helpers/helpers";
const MotionBox = motion(Box);

const Home = () => {
  const { getDataFirebase, data } = GetData();
  //Get data from Host.logical
  useEffect(() => {
    getDataFirebase();
    window.scrollTo({ top: 0 });
    //eslint-disable-next-line
  }, []);
  return (
    <>
      <MotionBox as="main" initial={{ opacity: 0 }} animate={{ opacity: 1, y: -20 }} transition={{ delay: 0.5 }} mt="5rem">
        <Stack direction="row" alignItems="center" flexWrap="wrap" justifyContent="space-evenly">
          <Box p={5}>
            <Text as="h1" color="brand.text" fontSize={{ base: "2rem", md: "2.5rem" }} fontWeight="700" m="1.5rem 0" lineHeight="1.2" textAlign="left">
              Encontrá o publicá alojamiento en
              <Box as="span" display="block">
                Mendoza de una forma fácil.
                <span role="img" aria-labelledby="emoji-house">
                  🏡
                </span>
              </Box>
            </Text>
            <Text fontSize="1.1rem" fontWeight="500" as="p">
              Publicá tu espacio gratis y sin comisiones de
              <Box as="span" display="block">
                por medio
              </Box>
            </Text>
            <ButtonGroup>
              <ButtonPrimary route="/explorar" title="Estoy buscando" />
              <Link to="/publicar">
                <Button role="button" mt={4} bg="rgba(158, 194, 177, 0.31)" color="#66AD8C" _hover="">
                  Quiero alojar
                </Button>
              </Link>
            </ButtonGroup>
          </Box>
          {/* Images */}
          <Box>
            <Image src={collage} p={3} loading="lazy" mt={6} />
          </Box>
        </Stack>
      </MotionBox>
      {/* Another sections */}
      <Box as="section" bg="brand.alojadoresbg">
        <Alojadores data={data} />
      </Box>
      <Box as="section">
        <About />
      </Box>
    </>
  );
};

export default Home;
