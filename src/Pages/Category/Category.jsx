import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css"; // Ensure to import the necessary CSS for Swiper
import "swiper/css/free-mode";
import { FreeMode, Pagination } from "swiper/modules";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

const Category = () => {
  // Array of image URLs for slides (4 images)
  const images = [
    "https://i.ibb.co/NszC4pk/hero.png", // Slide 1
    "https://i.ibb.co/NszC4pk/hero.png", // Slide 2
    "https://i.ibb.co/NszC4pk/hero.png", // Slide 3
    
  ];

  return (
    <>
      <SectionTitle subHeading={"Choose From Menu "}/>
      <Swiper
        slidesPerView={4} // Change to 4 slides per view
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img 
              className="w-full h-auto rounded-lg" 
              src={image} 
              alt={`Slide ${index + 1}`} 
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Category;
