import { Box, Fade, Text } from "@chakra-ui/react";
import { useCardsFormat, useMoviesFormat } from "../../Hooks/useMoviesFormat";
import Link from "next/link";
import { FaStar } from "react-icons/fa";

//As propriedades definidas com "base" e "sm" são para estilização personalizada das versões para desktop e mobile, fiz uns ajustes para a versão mobile e acredito que o resultado tenha ficado bom!
//Tive dificuldades para ajustar a imagem na tela inteira, queria aproveitar a api e não baixei imagens com tamanhos específicos, as da API tem dimensões para se adaptar melhor para mobile e ficaram boas.
const MoviesBanner = (cards) => {
  //   console.log(cards);
  const { id, image, title, rating, year, crew } = useCardsFormat(cards);
  return (
    <Fade in>
      <Link href={`/movies/${id}`}>
        <Box
          backgroundImage={`url("${image}")`}
          minHeight={{ base: "69vh", sm: "88vh" }}
          backgroundPosition="center"
          backgroundSize={{ base: "contain", sm: "cover" }}
          backgroundRepeat="no-repeat"
          objectFit="cover"
          position="relative"
        >
          <Box
            position="absolute"
            width="100%"
            height="100%"
            opacity="0.70"
            backgroundColor="gray.700"
          />
          <Box
            textAlign="start"
            maxWidth="1280px"
            position="absolute"
            color="#FFFFFF"
            fontWeight="light"
            left={{ base: "2rem", sm: "8rem" }}
            right="0"
            bottom="0"
            top={{ base: "25rem", sm: "12rem" }}
            margin="0 auto"
          >
            <Text
              textAlign="justify"
              fontSize={{ base: "11px", sm: "16px" }}
              fontWeight="semibold"
              margin
            >
              Destaque do mês
            </Text>
            <Text
              maxWidth="725px"
              fontSize={{ base: "2xl", sm: "6xl" }}
              fontWeight="bold"
              marginTop="0.7rem"
            >
              {title}
            </Text>
            <Box display="flex" flexDirection="row">
              <Box
                backgroundColor={{ base: "rgb(245,197,24)", sm: "#726BEA" }}
                borderRadius="full"
                width={{ base: "62px", sm: "94px" }}
                height={{ base: "24px", sm: "37px" }}
                display="flex"
                alignItems="center"
                justifyContent="center"
                opacity="0.80"
                gap="2"
                fontSize={{ base: "9px", sm: "14px" }}
                marginTop="0.8rem"
              >
                <FaStar />
                {rating}/10
              </Box>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                marginLeft="1rem"
                fontSize={{ base: "11px", sm: "16px" }}
                fontWeight="medium"
                marginTop="0.8rem"
              >
                {crew}
              </Box>
            </Box>
          </Box>
        </Box>
      </Link>
    </Fade>
  );
};

export default MoviesBanner;
