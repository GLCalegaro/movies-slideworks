import {
  useCardsFormat,
  useMoviesFormat,
} from "@/features/common/Hooks/useMoviesFormat";
import MovieCard from "@/features/common/modules/MovieCard/MovieCard";
import MoviePagination from "@/features/common/modules/MovieCard/MoviePagination";
import { Box, SimpleGrid } from "@chakra-ui/react";

//Também tive dificuldade com esse componente por conta das props, acabei me perdendo, mas voltei e refiz cada um dos componentes e as props funcionaram no final.
const MovieSection = ({ cards }) => {
  console.log(cards);
  return (
    <Box backgroundColor="#F5F5F5" padding="1.2rem">
      <Box maxWidth="1280px" margin="0 auto">
        <SimpleGrid
          columns={{ base: "1", sm: "4" }}
          gap={{ base: "0", sm: "1rem" }}
        >
          {cards.map((card) => (
            <MovieCard key={card.image} {...card} />
          ))}
          <MoviePagination resPerpage={cards?.resPerpage} productsCount={12}/>
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default MovieSection;
