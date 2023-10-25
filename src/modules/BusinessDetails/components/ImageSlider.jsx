import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Pagination } from "swiper/modules";

function ImageSlider({ photos }) {
  return (
    <div className="relative w-[700px] h-[400px] rounded-xl">
      <Swiper
        modules={[EffectFade, Pagination, Navigation]}
        effect="fade"
        loop
        pagination={{
          clickable: true,
        }}
        navigation={true}
      >
        {photos.map((photo) => {
          return (
            <SwiperSlide key={photo}>
              <img
                src={photo}
                className="w-[700px] h-[400px] object-cover rounded-xl"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default ImageSlider;
