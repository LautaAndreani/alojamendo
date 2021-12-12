import React from "react";
import { Stack, HStack, Text, Box, Avatar, Image, Icon, Link, Button } from "@chakra-ui/react";
import { BiBed, BiCar, BiMap, BiBone } from "react-icons/bi";
import { FaToiletPaper } from "react-icons/fa";
import { SiWhatsapp } from "react-icons/si";
import { nanoid } from "nanoid";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const MoreDetails = ({ res }) => {
  const { name, title, locality, urlLink, surname, restrooms, rooms, pets, garaje, phone, address, others, description } = res.data().inputs;
  const urlLinkThumb = urlLink.slice(1, 3);
  const houseSpecs = [
    { title: "habitación(es)", name: rooms, icon: BiBed },
    { title: "baño(s)", name: restrooms, icon: FaToiletPaper },
    { title: "garaje", name: garaje, icon: BiCar },
    { title: "mascotas", name: pets, icon: BiBone },
  ];
  return (
    <MotionBox initial={{ opacity: 0 }} animate={{ opacity: 1, y: -20 }}>
      <Stack justifyContent={"center"} p={10}>
        <Box w="90%" m="0 auto">
          <Stack>
            <HStack>
              <Avatar name={name} mr={3} />
              <Text display="flex" alignItems="center">
                {name} {surname}
              </Text>
            </HStack>
            <Text as="h1" fontSize="48px" fontWeight="700" pt={3} lineHeight="1.2" textAlign="left">
              {title}
            </Text>
            <Text as="p" mt={3} color="brand.description">
              <Icon as={BiMap} /> {locality}
            </Text>
            <Stack direction="row" w="100%" h="80vh" overflow="hidden" alignItems="center">
              <Box w="80%" h="100vh" borderRadius="xl" overflow="hidden">
                <Image
                  src={urlLink[0].urlLink}
                  alt={urlLink[0].imageData}
                  objectFit="cover"
                  w="100%"
                  h="100%"
                  _hover={{ transition: "0.5s transform", transform: "scale(1.1)" }}
                />
              </Box>
              <Stack display="flex" spacing={2}>
                {urlLinkThumb.map((thumbnails) => (
                  <Box key={nanoid()} overflow="hidden" minH="50vh" borderRadius="md">
                    <Image
                      src={thumbnails.urlLink}
                      alt={thumbnails.imageData}
                      w="100%"
                      h="100%"
                      objectFit="cover"
                      _hover={{ transition: "0.5s transform", transform: "scale(1.1)" }}
                      borderRadius="md"
                    />
                  </Box>
                ))}
              </Stack>
            </Stack>
          </Stack>
          <Stack direction="row" pt={4}>
            <Box minHeight="30vh" w="60%">
              <Text as="h1" fontSize="32px" fontWeight="700" lineHeight="1.2" textAlign="left">
                Para tener en cuenta
              </Text>
              <Text as="p" mt={3} color="brand.description">
                {description}
              </Text>
              <Stack direction="row" spacing={3} flexWrap="wrap">
                <Link
                  href={`https://api.whatsapp.com/send?phone=${phone}&text=Hola%20${name}%20te%20contacto%20porque%20vi%20tu%20publicación%20en%20mendostay%20quería%20más%20info`}
                  _hover=""
                  isExternal
                >
                  <Button role="button" mt={4} bg="brand.btn" color="brand.bg" w="100%" _hover={{ bg: "#789b8b" }}>
                    Contactar al dueño <Icon as={SiWhatsapp} ml={2} />
                  </Button>
                </Link>
                <Link href={`https://www.google.com/maps/search/${address}/`} _hover="" isExternal>
                  <Button role="button" mt={4} bg="brand.maps" color="brand.bg" w="100%" _hover={{ bg: "#1560c4" }}>
                    Ver en Google Maps <Icon as={BiMap} ml={2} />
                  </Button>
                </Link>
              </Stack>
            </Box>
            <Box w="40%">
              <Text as="h2" fontSize="32px" fontWeight="700" lineHeight="1.2" textAlign="left">
                Comodidades que ofrece
              </Text>
              <HStack p={3}>
                {houseSpecs.map((data) => (
                  <HStack key={nanoid()} p="1rem 0">
                    <Icon
                      as={data.icon}
                      color={data.name === "no" ? "red.400" : ""}
                      fontSize="2rem"
                      p="5px"
                      bg={data.name === "no" ? "red.100" : "green.100"}
                      borderRadius="md"
                      ml={2}
                    />
                    <Text as="h4" fontWeight="600" color={data.name === "no" ? "red.400" : "green.400"} fontSize="1rem">
                      {data.title} : {data.name}
                    </Text>
                  </HStack>
                ))}
              </HStack>
              <Stack>
                <Text as="h2" fontSize="32px" fontWeight="700" lineHeight="1.2" textAlign="left">
                  Otros
                </Text>
                <Text as="p" mt={3} color="brand.description">
                  {others}
                </Text>
              </Stack>
            </Box>
          </Stack>
        </Box>
      </Stack>
    </MotionBox>
  );
};

export default MoreDetails;
