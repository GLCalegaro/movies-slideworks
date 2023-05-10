import { Box, Image, Text } from "@chakra-ui/react";
import { useCardsFormat, useMoviesFormat } from "../../Hooks/useMoviesFormat";
import { FaStar } from "react-icons/fa";

//Este componente foi o mais divertido na minha opinião de replicar, mudei apenas algumas coisas na versão mobile também por conta do prazo de entrega, porém fiquei contente com o resultado final.
const MovieCard = (cards) => {
  // console.log(cards);
  const { image, title, rating, year, crew } = useCardsFormat(cards);
  return (
    <Box
      backgroundColor={{ base: "#1c222f", sm: "#FCFCFC" }}
      paddingY="1rem"
      display="flex"
      flexDirection="column"
      border={{ base: "1px solid #726BEA", sm: "1px solid #CCCCCC" }}
      borderRadius="1rem"
      alignItems="center"
      marginBottom={{ base: "1rem", sm: "0" }}
      textAlign="center"
      width={{base:"22rem", sm:"19rem"}}
    >
      <Image
        src={image}
        width={{base:"20rem", sm:"17rem"}}
        height={{base:"30rem", sm:"27rem"}}
        objectFit="cover"
        borderRadius="1rem"
        marginBottom="1rem"
        shadow="lg"
      />
      <Box textAlign="start" padding="1rem" fontFamily="Montserrat">
        <Text
          color={{ base: "#CCCCCC", sm: "#232323" }}
          fontSize="xl"
          fontWeight="bold"
        >
          {title}
        </Text>
        <Text
          fontSize="lg"
          color={{ base: "#CCCCCC", sm: "#232323" }}
          marginTop="0.5rem"
        >
          Ano de lançamento: {year}
        </Text>
        <Text
          marginTop="0.5rem"
          fontSize="lg"
          fontWeight="light"
          color={{ base: "#CCCCCC", sm: "#232323" }}
        >
          {crew}
        </Text>
        <Text
          fontSize="md"
          fontWeight="light"
          noOfLines="4"
          marginTop="1rem"
          color="#232323"
        ></Text>
          <Box
            display="flex"
            flexDirection="row"
            backgroundColor={{ base: "rgb(245,197,24)", sm: "#726BEA" }}
            borderRadius="full"
            width={{ base: "62px", sm: "94px" }}
            height={{ base: "24px", sm: "37px" }}
            alignItems="center"
            justifyContent="center"
            opacity="0.80"
            gap="2"
            fontSize={{ base: "9px", sm: "14px" }}
            color="#FCFCFC"
          >
            <FaStar />
            {rating}/10
          </Box>
        
      </Box>
    </Box>
  );
};

export default MovieCard;
