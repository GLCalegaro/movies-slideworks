import FeaturedMovies from "@/features/Home/FeaturedMovies/FeaturedMovies";
import MovieSection from "@/features/Home/MovieSection/MovieSection";
import Footer from "@/features/common/modules/Footer/Footer";
import MoviePagination from "@/features/common/modules/MovieCard/MoviePagination";
import Navigation from "@/features/common/modules/Navigation/Navigation";

export default function Home({ movies, cards }) {
  //Aqui o componente MovieSection está comentado pois estava sendo utilizado apenas para chamar o MovieCard e ver se as props iriam funcionar corretamente de acordo com a Api posteriormente, pois a consulta nestes componentes foram feitas pelo arquivo "movies.jason" na pasta "data" então foi substituida pelo MoviePagination que é onde a consulta é feita diretamente pela API e também implementada a paginação.
  // console.log(movies);
  return (
    <>
      <Navigation />
      <FeaturedMovies movies={movies} />
      {/* <MovieSection cards={cards}/> */}
      <MoviePagination />
      <Footer />
    </>
  );
}

//Sempre que for acessar dados como objetos/ fazer desestruturação, no caso, {data} e não data.
//Criei 2 props para receber somente 3 filmes em destaque, e o restante receber tudo nos cards, por isso "movies" e "cards"
export async function getStaticProps() {
  const { data } = require("@/features/data/movies");
  return {
    props: { movies: data.slice(0, 3), cards: data },
  };
}
