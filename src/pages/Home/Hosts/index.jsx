import React from "react";
import { Center, HStack, Stack, Text, Spinner } from "@chakra-ui/react";
import ButtonSecondary from "../../../components/Button-secondary";
import Cards from "../../../components/Cards";
import { nanoid } from "nanoid";

const Alojadores = ({ data }) => {
  const dataFilter = data.slice(0, 3);
  return (
    <Stack p={10} m={5}>
      <Text as="h3" fontSize="2.5rem" m="2rem 0" color="brand.text" fontWeight="700">
        Alojadores nuevos
        <span role="img" aria-labelledby="emoji-house">
          🏡
        </span>
      </Text>
      <HStack alignItems="center" justifyContent="center" spacing={20}>
        {/* Mapear al obtener la data */}
        {data.length === 0 ? (
          <Spinner size="xl" color="brand.btn" />
        ) : (
          dataFilter.map((post) => {
            return <Cards key={nanoid()} post={post} />;
          })
        )}
      </HStack>
      <Center>
        <ButtonSecondary title="Ver más anuncios" route="/Explorar" />
      </Center>
    </Stack>
  );
};

export default Alojadores;
