import React from "react";
import { Link } from "react-router-dom";
import { Box, Divider, HStack, Text, Icon, Image, Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { BiBed, BiBath, BiCar, BiMap } from "react-icons/bi";
import { Avatar } from "@chakra-ui/avatar";
// import test from "../../assets/images/test.jpg";

const MotionBox = motion(Box);

const Cards = ({ post }) => {
  const { name, title, locality, surname, restrooms, rooms, garaje, urlLink } = post.data().inputs;
  // Contenido demo, rellenar con objetos de firebase
  return (
    <MotionBox initial={{ opacity: 0 }} animate={{ opacity: 1, y: -20 }}>
      <Box maxW="sm" borderRadius="xl" p={4} bg="brand.bg" overflow="hidden" minH="25rem" boxShadow="xl">
        <HStack alignItems="center" mb={4}>
          <Avatar size="sm" name={name} />
          <Text as="h5">
            {name} {surname}
          </Text>
        </HStack>
        <Box overflow="hidden" rounded="20px">
          <Image
            src={urlLink.length === 0 ? null : urlLink[0].urlLink}
            alt={urlLink.length === 0 ? null : urlLink[0].imageData}
            borderRadius="sm"
            w="100%"
            h="30vh"
            objectFit="cover"
            _hover={{ transition: "0.5s all", transform: "scale(1.1)" }}
            rounded="20px"
          />
        </Box>
        <Text m=".5rem 0" as="h4" fontSize="xl" fontWeight="600" w="20rem">
          {title}
        </Text>
        <HStack color="gray" fontSize="sm">
          <span role="img">
            <BiMap />
          </span>
          <Text as="span">{locality}</Text>
        </HStack>
        <Divider mt={2} borderColor="gray" m=".5rem 0" />
        <HStack as="span" fontSize="sm">
          {rooms === "" ? null : (
            <HStack>
              <Icon as={BiBed} color="gray" fontSize="1.2rem" /> <Text>{rooms} habitacion(es) </Text>
            </HStack>
          )}
          {restrooms === "" ? null : (
            <HStack>
              <Icon as={BiBath} color="gray" fontSize="1.2rem" /> <Text>{restrooms} baño(s)</Text>
            </HStack>
          )}
          {garaje === "si" ? (
            <HStack>
              <Icon as={BiCar} color="gray" fontSize="1.2rem" /> <Text>Cochera</Text>
            </HStack>
          ) : null}
        </HStack>
        <Link to={`/posts/${post.id}`}>
          <Button
            role="button"
            w="100%"
            mt={4}
            bg="brand.btn"
            onClick={() => window.scrollTo({ top: 0 })}
            color="brand.bg"
            _hover={{ bg: "#789b8b" }}
          >
            Ver más
          </Button>
        </Link>
      </Box>
    </MotionBox>
  );
};

export default Cards;
