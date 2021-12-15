import React from "react";
import { Box, Stack, HStack, Badge, Text, Image, Icon } from "@chakra-ui/react";
import { BsShareFill } from "react-icons/bs";
import { motion } from "framer-motion";
import ButtonPrimary from "../../components/Button";
const MotionBox = motion(Box);

const Faq = () => {
  return (
    <MotionBox
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, y: -20 }}
      transition={{ delay: 0.5 }}
      mt={{ base: "8rem", md: "10rem" }}
      minH="100vh"
    >
      {/* step 1 */}
      <Stack>
        <Stack
          direction="row"
          flexWrap={{ base: "wrap", xl: "nowrap" }}
          justifyContent="space-evenly"
          alignItems="center"
        >
          <Stack paddingLeft={5} mb={5}>
            <HStack>
              <Badge
                p="5px 10px"
                borderRadius="md"
                color="brand.bg"
                bg="brand.btn"
                fontSize="1rem"
              >
                1
              </Badge>
              <Text
                as="h1"
                fontSize={{ base: "1.2rem", md: "2rem" }}
                color="brand.text"
                fontWeight={700}
              >
                Cargá los datos de tu propiedad.
              </Text>
            </HStack>
            <Text
              as="p"
              fontSize={{ base: "1rem", md: "1.2rem" }}
              fontWeight={500}
              color="brand.description"
            >
              En la sección
              <Box as="span" color="brand.btntwo">
                {" "}
                "Alojar"{" "}
              </Box>
              completá la información
              <Box as="span" display="block">
                desde tu pc o teléfono para que más personas puedan conocer tu
                espacio
              </Box>
            </Text>
          </Stack>
          <Box>
            <Image
              loading="lazy"
              src="https://res.cloudinary.com/dqp3lvyd0/image/upload/v1639487009/laptop-phone-min_tdtktl.png"
            />
          </Box>
        </Stack>
        {/* step 2 */}
        <Stack
          flexWrap={{ base: "wrap", xl: "nowrap" }}
          bg="brand.alojadoresbg"
          justifyContent={{ base: "center", xl: "space-evenly" }}
          alignItems="center"
          direction={{ base: "column-reverse", xl: "row" }}
        >
          <Box w={{ base: "100%", md: "60%" }}>
            <Image
              loading="lazy"
              w="100%"
              src="https://res.cloudinary.com/dqp3lvyd0/image/upload/v1639491750/laptop-link-min_1_ntzsf5.png"
            />
          </Box>
          <Stack p={30}>
            <HStack>
              <Badge
                p="5px 10px"
                borderRadius="md"
                color="brand.bg"
                bg="brand.btn"
                fontSize="1rem"
              >
                2
              </Badge>
              <Text
                as="h2"
                fontSize={{ base: "1.2rem", md: "2rem" }}
                fontWeight={700}
                color="brand.text"
              >
                Compartí tu enlace.{" "}
                <Icon as={BsShareFill} fontSize="1.2rem" color="brand.btn" />
              </Text>
            </HStack>
            <Text
              as="p"
              fontSize={{ base: "1rem", md: "1.2rem" }}
              fontWeight={500}
              color="brand.description"
            >
              Podes esperar que la gente te contacte,
              <Box as="span" display="block">
                o compartir el link de tu publicación para difundirlo.
              </Box>
            </Text>
          </Stack>
        </Stack>
        {/* Section 3 */}
        <Stack
          flexWrap="wrap"
          padding="5rem 0"
          justifyContent="Center"
          alignItems="center"
        >
          <Badge
            p="5px 10px"
            borderRadius="md"
            color="brand.bg"
            bg="brand.btn"
            fontSize="1rem"
          >
            3
          </Badge>
          <Text as="h4" color="brand.text" fontSize="32px" fontWeight={700}>
            ¡Listo!
          </Text>
          <Text as="p" textAlign="center">
            Cuando quieras podes empezar a utilizar{" "}
            <Box as="span" fontWeight={500}>
              alojamendo.
            </Box>
          </Text>
          <ButtonPrimary route="/publicar" title="Comenzar" />
        </Stack>
      </Stack>
    </MotionBox>
  );
};

export default Faq;
