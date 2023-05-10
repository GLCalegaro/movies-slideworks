export const useMoviesFormat = (movies) => {
  const id = movies.id;
  const image = movies.image_url;
  const title = movies.title;
  const rating = movies.rating;
  const crew = movies.crew;
  const year = movies.year;
  return {
    image,
    title,
    rating,
    crew,
    year
  };
};

export const useCardsFormat = (cards) => {
  const id = cards?.id;
  const image = cards.image_url;
  const title = cards.title;
  const rating = cards.rating;
  const crew = cards.crew;
  const year = cards.year;
  return {
    image,
    title,
    rating,
    crew,
    year
  };
};