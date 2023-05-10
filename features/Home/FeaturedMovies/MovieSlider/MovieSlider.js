import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import MoviesBanner from "@/features/common/modules/MoviesBanner/MoviesBanner";

const MovieSlider = ({ movies }) => {
  return (
    <Swiper
      style={{
        "--swiper-navigation-color": "#FFFFFF",
        "--swiper-pagination-color": "#FFFFFF",
      }}
      spaceBetween={10}
      centeredSlides={true}
      autoplay={{
        delay: 2300,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      {movies.map((movie) => (
        <SwiperSlide key={movie.title}>
          <MoviesBanner {...movie} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MovieSlider;
