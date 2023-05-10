import { Box } from "@chakra-ui/react";
import MovieSlider from "./MovieSlider/MovieSlider";

const FeaturedMovies = ({ movies }) => {
  return (
    <Box position="relative" maxWidth="1580px" margin="0 auto" color="gray.600">
      <MovieSlider movies={movies} />
    </Box>
  );
};

export default FeaturedMovies;
