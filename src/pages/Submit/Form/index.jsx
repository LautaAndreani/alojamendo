import React, { useState } from "react";
import { Stack, Box, InputGroup, InputLeftAddon, Input, FormControl, FormLabel, Textarea, Text, Icon, Button, Image, HStack } from "@chakra-ui/react";
import { VStack, Spinner } from "@chakra-ui/react";
import { MdCloudUpload } from "react-icons/md";
import InputComp from "../../../components/Input";
import SelectComp from "../../../components/Select";
import { HandleClick } from "./Form.logical";
import { nanoid } from "nanoid";
import Confetti from "../../../components/Confetti";
import { Navigate } from "react-router-dom";

const Form = () => {
  const [uploadStatus, setUploadStatus] = useState(false);
  const { handleSubmit, handleChange, onFileChange, urlLink, toSubmit, redirect } = HandleClick();
  //Read inputs of fyle
  const handleChanges = (e) => {
    if (e.target.files.length === 0) {
      return null;
    }
    onFileChange(e);
    setUploadStatus(true);
    setTimeout(() => {
      setUploadStatus(false);
    }, 4000);
  };

  return (
    <Stack as="form" w="100%" p={{ md: "6", base: "0" }} spacing={6} onSubmit={handleSubmit}>
      <Stack direction={{ base: "column", md: "row" }}>
        <InputComp nameprop="name" label="Nombre" type="text" place="Juan" value={handleChange} />
        <InputComp nameprop="surname" label="Apellido" type="text" place="Perez" value={handleChange} />
      </Stack>
      <Box>
        <FormControl isRequired>
          <FormLabel>Número de WhatsApp para que puedan contactarte (10 caracteres)</FormLabel>
          <InputGroup>
            <InputLeftAddon children="+54 9 " bg="green.400" color="brand.bg" />
            <Input type="number" name="phone" bg="#E5E5E5" placeholder="2615190823" onChange={handleChange} />
          </InputGroup>
        </FormControl>
      </Box>
      <InputComp nameprop="title" label="Título de la publicación" type="text" place="Departamento zona céntrica" value={handleChange} />
      <InputComp nameprop="locality" label="¿Dónde queda tu espacio? (Localidad)" type="text" place="Uspallata, Mendoza" value={handleChange} />
      <InputComp nameprop="address" label="Ahora sí... dirección de tu espacio" type="text" place="calle falsa 123" value={handleChange} />
      {/* Características */}
      <Stack direction={{ base: "column", md: "row" }}>
        <SelectComp title="Habitación(es)" options={[1, 2, 3, 4, 5]} handleChange={handleChange} name="rooms" />
        <SelectComp title="Baño(s)" options={[1, 2, 3, 4]} name="restrooms" handleChange={handleChange} />
        <SelectComp title="Cochera" options={["no", "si"]} name="garaje" handleChange={handleChange} />
        <SelectComp title="Admiten mascotas" options={["no", "si"]} name="pets" handleChange={handleChange} />
        <FormControl nameprop="otros">
          <FormLabel>Otros</FormLabel>
          <Input type="text" name="others" placeholder="Wifi, televisión" bg="#E5E5E5" onChange={handleChange} />
        </FormControl>
      </Stack>
      <Box>
        <Text fontWeight="500">Para que tu publicación destaque ¡puedes subir fotos! </Text>
        <FormLabel textAlign="center" borderWidth=".1rem" borderColor="brand.btn" borderRadius="md" borderStyle="dashed" p={5} cursor="pointer">
          <Icon as={MdCloudUpload} fontSize="5rem" textAlign="center" cursor="pointer" transition=".3s" _hover={{ color: "brand.btn" }} />
          <Input
            type="file"
            disabled={uploadStatus ? true : null}
            nameprop="file"
            accept="image/png, image/jpeg"
            border="none"
            display="none"
            name="pictures"
            onChange={handleChanges}
          />
          <Text>Seleccionar un archivo (jpeg, jpg, png)</Text>
        </FormLabel>
        <Box>
          <HStack justifyContent="center">
            {uploadStatus ? (
              <Spinner />
            ) : (
              urlLink.map((data) => (
                <VStack p={3} key={nanoid()}>
                  <Text>{data.imageData}</Text>
                  <Box w="70px" h="80px" overflow="hidden">
                    <Image loading="lazy" src={data.urlLink} borderRadius="md" objectFit="cover" w="100%" />
                  </Box>
                </VStack>
              ))
            )}
          </HStack>
          <Text textAlign="center" as="p" fontSize=".9rem" color="brand.description">
            Acá verás tus imágenes {urlLink.length} / 3
          </Text>
        </Box>
        <FormLabel>
          <Text fontWeight="500" mb={2}>
            Si quieres, puedes agregar una descripción
          </Text>
          <Textarea name="description" placeholder="Empieza a tipear desde aquí" bg="#E5E5E5" resize="none" onChange={handleChange} />
        </FormLabel>
      </Box>
      {toSubmit ? <Confetti /> : null}
      <Button role="button" disabled={uploadStatus && true} type="submit" mt={4} p={2} w="100%" bg="brand.btn" color="brand.bg" _hover={{ bg: "#789b8b" }}>
        {toSubmit ? (
          <>
            <HStack alignItems={"center"}>
              <Text as="p" fontSize={{ base: ".9rem", md: "1rem" }}>
                Gracias por elegirnos
                <span role="img" aria-labelledby="emoji-hearth">
                  🤗
                </span>{" "}
                Redirigiendo...
              </Text>
              <Spinner />
            </HStack>
          </>
        ) : (
          "Todo listo ¡Publicar!"
        )}
      </Button>
      {redirect && (
        <Box>
          <Navigate to="/explorar" />
        </Box>
      )}
    </Stack>
  );
};

export default Form;
