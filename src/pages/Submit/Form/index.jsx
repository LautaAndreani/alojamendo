import React from "react";
import { Stack, Box, InputGroup, InputLeftAddon, Input, FormControl, FormLabel, Textarea, Text, Icon, Button, Image, HStack } from "@chakra-ui/react";
import { VStack } from "@chakra-ui/react";
import { MdCloudUpload } from "react-icons/md";
import InputComp from "../../../components/Input";
import SelectComp from "../../../components/Select";
import { HandleClick } from "./Form.logical";
import { nanoid } from "nanoid";

const Form = () => {
  const { handleSubmit, handleChange, onFileChange, urlLink } = HandleClick();
  const handleChanges = (e) => {
    onFileChange(e);
  };
  return (
    <Stack as="form" w="100%" p={6} spacing={6} onSubmit={handleSubmit}>
      <Stack direction="row">
        <InputComp nameprop="name" label="Nombre" type="text" place="Juan" value={handleChange} />
        <InputComp nameprop="surname" label="Apellido" type="text" place="Perez" value={handleChange} />
      </Stack>
      <Box>
        <FormControl isRequired>
          <FormLabel>Número de WhatsApp para que puedan contactarte</FormLabel>
          <InputGroup>
            <InputLeftAddon children="+54 9 " bg="green.400" color="brand.bg" />
            <Input type="number" name="phone" bg="#E5E5E5" placeholder="2615111111" onChange={handleChange} />
          </InputGroup>
        </FormControl>
      </Box>
      <InputComp nameprop="title" label="Título de la publicación" type="text" place="Departamento zona céntrica" value={handleChange} />
      <InputComp nameprop="locality" label="¿Dónde queda tu espacio? (Localidad)" type="text" place="Uspallata, Mendoza" value={handleChange} />
      <InputComp nameprop="address" label="Ahora sí... dirección de tu espacio" type="text" place="calle falsa 123" value={handleChange} />
      {/* Características */}
      <Stack direction="row">
        <SelectComp title="Habitación(es)" options={[1, 2, 3, 4, 5]} handleChange={handleChange} name="rooms" />
        <SelectComp title="Baño(s)" options={[1, 2, 3, 4]} name="restrooms" handleChange={handleChange} />
        <SelectComp title="Cochera" options={["no", "si"]} name="garaje" handleChange={handleChange} />
        <SelectComp title="Mascotas" options={["no", "si"]} name="pets" handleChange={handleChange} />
        <FormControl nameprop="otros">
          <FormLabel>Otros</FormLabel>
          <Input type="text" name="others" placeholder="Wifi, televisión" bg="#E5E5E5" onChange={handleChange} />
        </FormControl>
      </Stack>
      <Box>
        <Text fontWeight="500">Para que tu publicación destaque ¡puedes subir fotos! </Text>
        <FormLabel textAlign="center" borderWidth=".1rem" borderColor="brand.btn" borderRadius="md" borderStyle="dashed" p={5}>
          <Icon as={MdCloudUpload} fontSize="5rem" textAlign="center" cursor="pointer" transition=".3s" _hover={{ color: "brand.btn" }} />
          <Input type="file" nameprop="file" accept="image/png, image/jpeg" border="none" display="none" name="pictures" onChange={handleChanges} />
          <Text>Seleccionar un archivo</Text>
        </FormLabel>
        <Box>
          <HStack>
            {urlLink.length === 0 ? (
              <Text textAlign="center" as="p" fontSize=".9rem" color="brand.description">
                Aquí verás tus archivos
              </Text>
            ) : (
              urlLink.map((data) => (
                <VStack p={3} key={nanoid()}>
                  <Text>{data.imageData}</Text>
                  <Box w="80px" h="50px" overflow="hidden">
                    <Image src={data.urlLink} borderRadius="md" objectFit="cover" />
                  </Box>
                </VStack>
              ))
            )}
          </HStack>
        </Box>
        <FormLabel>
          <Text fontWeight="500" mb={2}>
            Si quieres, puedes agregar una descripción
          </Text>
          <Textarea name="description" placeholder="Empieza a tipear desde aquí" bg="#E5E5E5" resize="none" onChange={handleChange} />
        </FormLabel>
      </Box>
      {/* Photos */}
      {/* <Text fontWeight="500">Para que tu publicación destaque ¡puedes subir fotos! </Text>
      <FormLabel textAlign="center" borderWidth=".1rem" borderColor="brand.btn" borderRadius="md" borderStyle="dashed" p={5}>
        <Icon as={MdCloudUpload} fontSize="5rem" textAlign="center" cursor="pointer" transition=".3s" _hover={{ color: "brand.btn" }} />
        <Input type="file" nameprop="file" accept="image/png, image/jpeg" border="none" display="none" name="pictures" onChange={handleChanges} />
        <Text>Seleccionar un archivo</Text>
      </FormLabel> */}
      <Button role="button" type="submit" mt={4} p={2} w="100%" bg="brand.btn" color="brand.bg" _hover={{ bg: "#789b8b" }}>
        Todo listo ¡Publicar!
      </Button>
    </Stack>
  );
};

export default Form;
