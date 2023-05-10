import { Box, SimpleGrid } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FcPrevious, FcNext } from "react-icons/fc";
import ReactPaginate from "react-paginate";
import { FaStar } from "react-icons/fa";
import MovieCard from "./MovieCard";
import { motion } from "framer-motion";

//A paginação foi onde tive mais dor de cabeça para implementar, como estou usando next, e nunca fiz paginação antes, foi difícil conseguir pegar as instruções no site do next, react, e implementar no projeto para que funcionasse, no endereço da api estava usando _page=1&_limit=12, porém não estava dando certo, e por pura tentativa eu retirei os "_" da page&limit e funcionou pois estava retornando apenas 20 itens que estão na primeira página, acabei demorando quase 2 dias para implementar a paginação por conta disso.
//O css da paginação foi importado do CSS do bootstrap, tentei deixar o mais parecido possível e percebi que ele estar meio que "bagunçando - diminuindo os itens na tela" quando mudamos as paginas na versão mobile, pode ser por conta do uso do bootstrap ou por conta da propriedade "pageRangeDisplayed" do ReactPaginate na linha 68 mas não consegui identificar.
const MoviePagination = () => {
  const [items, setItems] = useState([]);

  const [pageCount, setPageCount] = useState(0);

  let limit = 12;

  useEffect(() => {
    const getMovies = async () => {
      const res = await fetch(
        `https://movies.slideworks.cc/movies?page=1&limit=${limit}`
      );
      const data = await res.json();
      setPageCount(Math.ceil(data.pagination.total / limit));
      setItems(data.data);
    };
    getMovies();
  }, []);

  const fetchMovies = async (currentPage) => {
    const res = await fetch(
      `https://movies.slideworks.cc/movies?page=${currentPage}&limit=${limit}`
    );
    const data = await res.json();
    return data;
  };

  const handlePageClick = async (data) => {
    let currentPage = data.selected + 1;

    const moviesFormServer = await fetchMovies(currentPage);

    setItems(moviesFormServer.data);
  };

  return (
    <Box>
      <SimpleGrid
        columns={{ base: "1", sm: "4" }}
        gap={{ base: "0", sm: "1rem" }}
        padding="1.2rem"
        marginLeft={{ base: "0", sm: "2.5rem" }}
      >
        {items.map((item) => {
          return <MovieCard key={item.title} {...item} />;
        })}
      </SimpleGrid>
      <Box padding="1.2rem">
        <ReactPaginate
          previousLabel={<FcPrevious />}
          nextLabel={<FcNext />}
          pageCount={pageCount}
          breakLabel="..."
          marginPagesDisplayed={1}
          pageRangeDisplayed={3}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          pageClassName={"page-item"}
          pageLinkClassName={"page-link"}
        />
      </Box>
    </Box>
  );
};

export default MoviePagination;
