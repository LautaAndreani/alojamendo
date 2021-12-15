import React from "react";
import { Center, Stack, Text, Spinner, Image } from "@chakra-ui/react";
import ButtonSecondary from "../../../components/Button-secondary";
import Cards from "../../../components/Cards";
import { nanoid } from "nanoid";

const Alojadores = ({ data }) => {
  const dataFilter = data.slice(0, 3);
  return (
    <Stack p={10} m={5}>
      <Text as="h3" fontSize={{ base: "1.5rem", md: "2.5rem" }} textAlign={{ base: "center", md: "left" }} m="2rem 0" color="brand.text" fontWeight="700">
        Últimas publicaciones{" "}
        <span role="img" aria-labelledby="emoji-house">
          <Image src="https://res.cloudinary.com/dqp3lvyd0/image/upload/v1639581855/house_1f3e0_evqn4i.png" width="2.3rem" display="unset" />
        </span>
      </Text>
      <Stack direction={{ base: "column", xl: "row" }} alignItems="center" justifyContent="center" spacing={20}>
        {/* Mapear al obtener la data */}
        {data.length === 0 ? (
          <Spinner size="xl" color="brand.btn" />
        ) : (
          dataFilter.map((post) => {
            return <Cards key={nanoid()} post={post} />;
          })
        )}
      </Stack>
      <Center>
        <ButtonSecondary title="Ver más anuncios" route="/Explorar" />
      </Center>
    </Stack>
  );
};

export default Alojadores;
