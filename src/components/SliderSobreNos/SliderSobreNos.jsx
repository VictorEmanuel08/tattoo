import "./style.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

export function SliderSobreNos() {
  const tatuadores = [
    {
      index: 0,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      nome: "Tatuador 1",
      userImage:
        "https://kanto.legiaodosherois.com.br/w250-h250-gnw-cfill-q95-gcc/wp-content/uploads/2021/07/legiao_Ry1hNJoxOzpY.jpg.webp",
    },
    {
      index: 1,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      nome: "Tatuador 2",
      userImage:
        "https://kanto.legiaodosherois.com.br/w250-h250-gnw-cfill-q95-gcc/wp-content/uploads/2021/07/legiao_Ry1hNJoxOzpY.jpg.webp",
    },
    {
      index: 2,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      nome: "Tatuador 3",
      userImage:
        "https://kanto.legiaodosherois.com.br/w250-h250-gnw-cfill-q95-gcc/wp-content/uploads/2021/07/legiao_Ry1hNJoxOzpY.jpg.webp",
    },
    {
      index: 3,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      nome: "Tatuador 4",
      userImage:
        "https://kanto.legiaodosherois.com.br/w250-h250-gnw-cfill-q95-gcc/wp-content/uploads/2021/07/legiao_Ry1hNJoxOzpY.jpg.webp",
    },
    {
      index: 4,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      nome: "Tatuador 5",
      userImage:
        "https://kanto.legiaodosherois.com.br/w250-h250-gnw-cfill-q95-gcc/wp-content/uploads/2021/07/legiao_Ry1hNJoxOzpY.jpg.webp",
    },
    {
      index: 5,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      nome: "Tatuador 6",
      userImage:
        "https://kanto.legiaodosherois.com.br/w250-h250-gnw-cfill-q95-gcc/wp-content/uploads/2021/07/legiao_Ry1hNJoxOzpY.jpg.webp",
    },
  ];
  return (
    <div className="slide-container">
      <Swiper
        effect="flip"
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        {tatuadores.map((tatuador, index) => {
          if (index === tatuadores.length - 1) {
            return null; //ignorar o ultimo item do vetor tatuadores
          }
          return (
            <SwiperSlide key={tatuador.index}>
              <div className="slide-item">
                <div className="slide-info">
                  <img src={tatuador.userImage} alt={tatuador.nome} />
                  <p>{tatuador.nome}</p>
                </div>
                <div className="slide-description">
                  <p>{tatuador.description}</p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
}
