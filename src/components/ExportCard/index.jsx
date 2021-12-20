import React from "react";
import logo from "../../assets/branding/isologo-w.svg";
import test from "../../assets/images/test.jpg";
import { Avatar, Box, Center, HStack, Icon, Image, Stack, Text, VStack } from "@chakra-ui/react";
import { nanoid } from "nanoid";
import { BiMap } from "react-icons/bi";

const Export = ({ res, houseSpecs }) => {
  const { name, title, locality, surname } = res.data().inputs;

  return (
    <>
      <Box w="100%" h="100%">
        <Center display="block" bg="brand.export" mt={3} borderRadius="md" p={3}>
          <Text as="h2" fontWeight={700} p={3} textAlign="center" fontSize={{ base: "1rem", md: "2rem" }}>
            {title}
          </Text>
          <HStack justifyContent="center">
            <Box as="span" marginTop="1rem" role="img">
              <BiMap />
            </Box>
            <Text as="p" textAlign="center" fontSize={{ base: ".8rem", md: "1rem" }}>
              {locality}
            </Text>
          </HStack>
          <VStack direction="row">
            <Box alignItems="center" w="100%" overflow="hidden" direction="row" borderRadius="md">
              <HStack spacing={2} m={3} w="100%" textAlign="left">
                <Box w="3rem" paddingTop="15px">
                  <Avatar bg="brand.btn" w="100%" h="100%" />
                </Box>
                <Text as="p" w="100%" fontSize={{ base: ".8rem", md: "1rem" }}>
                  {name} {surname}
                </Text>
              </HStack>
            </Box>
            <Box overflow="hidden" w="100%" maxH="30rem">
              <Image src={test} objectFit="cover" borderRadius="md" margin="0 auto" h="100%" />
            </Box>
          </VStack>
          <Stack direction="row" flexWrap="wrap" p={3} justifyContent="center">
            {houseSpecs.map((data) => (
              <HStack key={nanoid()} p="1rem 0" textAlign="center" justifyContent="center">
                <Box
                  color={data.name === "no" ? "red.400" : ""}
                  bg={data.name === "no" ? "red.100" : "green.100"}
                  paddingTop="5px"
                  paddingLeft="5px"
                  paddingRight="5px"
                  borderRadius="md"
                  margin="0 .5rem"
                >
                  <Icon
                    objectFit="cover"
                    w="100%"
                    h="100%"
                    as={data.icon}
                    color={data.name === "no" ? "red.400" : ""}
                    fontSize="2rem"
                    bg={data.name === "no" ? "red.100" : "green.100"}
                  />
                </Box>
              </HStack>
            ))}
          </Stack>
          <HStack justifyContent="center">
            <Text as="p" textAlign="center" p={4}>
              Más información en{" "}
              <Box as="span" fontWeight={700}>
                alojamendo.vercel.app
              </Box>
            </Text>
          </HStack>
        </Center>
        <Center bg="brand.btntwo" p={4} borderBottomRadius="md">
          <Image src={logo} w="10rem" color="white" />
        </Center>
      </Box>
    </>
  );
};

export default Export;
