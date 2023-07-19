import "../styles/style.scss";
//BIBLIOTECAS
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper";

//ASSETS
import Logo from "../assets/Tattoo CollectioN-1.png";
import logoPng from "../assets/Tattoo Collection.png";

//ICONS
import {
  AiOutlineInstagram,
  AiFillPlusCircle,
  AiOutlineClose,
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
} from "react-icons/ai";
import { BsFillCalendarCheckFill } from "react-icons/bs";
import { ModalCalendar } from "../components/ModalCalendar/ModalCalendar";
import { Localização } from "../components/Localização/Localização";
import { SliderSobreNos } from "../components/SliderSobreNos/SliderSobreNos";

export function Home() {
  //porcentagem Scroll ao rolar
  const indicatorRef = useRef(null);

  useEffect(() => {
    const maxHeight = document.body.scrollHeight - window.innerHeight;

    const handleScroll = () => {
      const percentage = (window.scrollY / maxHeight) * 100;
      indicatorRef.current.style.width = `${percentage}%`;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const divsRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  //Revelar ao rolar
  const revealSection = (index) => {
    const sectionElement = divsRefs[index].current;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          sectionElement.classList.add("revealed");
        } else {
          sectionElement.classList.remove("revealed");
        }
      });
    });

    observer.observe(sectionElement);

    return () => {
      observer.unobserve(sectionElement);
    };
  };

  const scrollToDiv = (index) => {
    divsRefs[index].current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    divsRefs.forEach((ref, index) => {
      revealSection(index);
    });
  });

  const [imageNamesTattoo, setImageNamesTattoo] = useState([]);
  const [imagesUserTattoo, setImagesUserTattoo] = useState([]);
  const [imageNamesBody, setImageNamesBody] = useState([]);
  const [imagesUserBody, setImagesUserBody] = useState([]);

  const handleFileTatto = (event) => {
    const files = event.target.files;

    // Limitando a 3 imagens no máximo
    const selectedFiles = Array.from(files).slice(0, 2);

    if (selectedFiles.length + imageNamesTattoo.length > 3) {
      event.target.value = "";
      alert("Você só pode selecionar no máximo 3 arquivos.");
      return;
    }

    // Salvando o nome das imagens para printar depois
    const newNames = selectedFiles.map((file) => file.name);
    setImageNamesTattoo((prevNames) => [...prevNames, ...newNames]);

    // Salvando as imagens no vetor para enviar
    const readerArray = [];

    for (let i = 0; i < selectedFiles.length; i++) {
      const reader = new FileReader();

      reader.onload = () => {
        readerArray[i] = reader.result;
        if (readerArray.length === selectedFiles.length) {
          setImagesUserTattoo((prevImages) => [...prevImages, ...readerArray]);
        }
      };

      reader.readAsDataURL(selectedFiles[i]);
    }
  };

  const handleDeleteImageTattoo = (index) => {
    const updatedImageNames = [...imageNamesTattoo];
    const updatedImages = [...imagesUserTattoo];

    updatedImageNames.splice(index, 1);
    updatedImages.splice(index, 1);

    setImageNamesTattoo(updatedImageNames);
    setImagesUserTattoo(updatedImages);
  };

  const handleFileBody = (event) => {
    const files = event.target.files;

    // Limitando a 3 imagens no máximo
    const selectedFiles = Array.from(files).slice(0, 2);

    if (selectedFiles.length + imageNamesBody.length > 3) {
      event.target.value = "";
      alert("Você só pode selecionar no máximo 3 arquivos.");
      return;
    }

    // Salvando o nome das imagens para printar depois
    const newNames = selectedFiles.map((file) => file.name);
    setImageNamesBody((prevNames) => [...prevNames, ...newNames]);

    // Salvando as imagens no vetor para enviar
    const readerArray = [];

    for (let i = 0; i < selectedFiles.length; i++) {
      const reader = new FileReader();

      reader.onload = () => {
        readerArray[i] = reader.result;
        if (readerArray.length === selectedFiles.length) {
          setImagesUserBody((prevImages) => [...prevImages, ...readerArray]);
        }
      };

      reader.readAsDataURL(selectedFiles[i]);
    }
  };

  const handleDeleteImageBody = (index) => {
    const updatedImageNames = [...imageNamesBody];
    const updatedImages = [...imagesUserBody];

    updatedImageNames.splice(index, 1);
    updatedImages.splice(index, 1);

    setImageNamesBody(updatedImageNames);
    setImagesUserBody(updatedImages);
  };

  const [isOpenModalImage, setIsOpenModalImage] = useState(false);
  function openModalImage() {
    setIsOpenModalImage(true);
  }

  function closeModalImage() {
    setIsOpenModalImage(false);
  }

  const handleModalImageClick = (event) => {
    // Verifica se o clique foi feito no elemento de fundo (background) do modal
    if (event.target === event.currentTarget) {
      closeModalImage();
    }
  };

  const photos = [
    {
      index: 1,
      userImage:
        "https://kanto.legiaodosherois.com.br/w250-h250-gnw-cfill-q95-gcc/wp-content/uploads/2021/07/legiao_Ry1hNJoxOzpY.jpg.webp",
      imageArray: [
        "https://cptstatic.s3.amazonaws.com/imagens/enviadas/materias/materia6330/frangos-de-corte-recomendacoes-em-microelementos-e-vitaminas-cpt.jpg",
        "https://novonegocio.com.br/wp-content/uploads/2012/12/Como-Comecar-Uma-Criacao-de-Frangos-de-Granja-1-768x591.jpg",
        "https://www.eaware.com.br/wp-content/uploads/2016/08/0245ec0066351b7d953b9bc2124f3aef.jpg",
        "https://www.eaware.com.br/wp-content/uploads/2016/08/g_23092013102855.jpg",
      ],
    },
    {
      index: 2,
      userImage:
        "https://kanto.legiaodosherois.com.br/w250-h250-gnw-cfill-q95-gcc/wp-content/uploads/2021/07/legiao_Ry1hNJoxOzpY.jpg.webp",
      imageArray: [
        "https://via.placeholder.com/206",
        "https://via.placeholder.com/207",
        "https://via.placeholder.com/208",
        "https://via.placeholder.com/209",
        "https://via.placeholder.com/210",
        "https://via.placeholder.com/211",
      ],
    },
    {
      index: 3,
      userImage:
        "https://kanto.legiaodosherois.com.br/w250-h250-gnw-cfill-q95-gcc/wp-content/uploads/2021/07/legiao_Ry1hNJoxOzpY.jpg.webp",
      imageArray: [
        "https://via.placeholder.com/212",
        "https://via.placeholder.com/213",
        "https://via.placeholder.com/214",
        "https://via.placeholder.com/215",
        "https://via.placeholder.com/216",
        "https://via.placeholder.com/217",
      ],
    },
    {
      index: 4,
      userImage:
        "https://kanto.legiaodosherois.com.br/w250-h250-gnw-cfill-q95-gcc/wp-content/uploads/2021/07/legiao_Ry1hNJoxOzpY.jpg.webp",
      imageArray: [
        "https://via.placeholder.com/200",
        "https://via.placeholder.com/201",
        "https://via.placeholder.com/202",
        "https://via.placeholder.com/203",
        "https://via.placeholder.com/204",
        "https://via.placeholder.com/205",
      ],
    },
    {
      index: 5,
      userImage:
        "https://kanto.legiaodosherois.com.br/w250-h250-gnw-cfill-q95-gcc/wp-content/uploads/2021/07/legiao_Ry1hNJoxOzpY.jpg.webp",
      imageArray: [
        "https://via.placeholder.com/200",
        "https://via.placeholder.com/201",
        "https://via.placeholder.com/202",
        "https://via.placeholder.com/203",
        "https://via.placeholder.com/204",
        "https://via.placeholder.com/205",
      ],
    },
    {
      index: 6,
      userImage:
        "https://kanto.legiaodosherois.com.br/w250-h250-gnw-cfill-q95-gcc/wp-content/uploads/2021/07/legiao_Ry1hNJoxOzpY.jpg.webp",
      imageArray: [
        "https://via.placeholder.com/200",
        "https://via.placeholder.com/201",
        "https://via.placeholder.com/202",
        "https://via.placeholder.com/203",
        "https://via.placeholder.com/204",
        "https://via.placeholder.com/205",
      ],
    },
  ];

  const [arrayImages, setArrayImages] = useState([0]);
  const handleImageClick = (index) => {
    setArrayImages(photos[index].imageArray);
    openModalImage();
  };

  const [isOpenModalCalendar, setIsOpenModalCalendar] = useState(false);
  function openModalCalendar() {
    setIsOpenModalCalendar(true);
  }

  function closeModalCalendar() {
    setIsOpenModalCalendar(false);
  }

  function handleModalCalendarClick(event) {
    // Verifica se o clique foi feito no elemento de fundo (background) do modal
    if (event.target === event.currentTarget) {
      closeModalCalendar();
    }
  }

  function handleCalendarClick() {
    openModalCalendar();
  }

  const [nomeTatuador, setNomeTatuador] = useState("");
  const [imagemTatuador, setImagemTatuador] = useState("");
  const [dataTattoo, setDataTattoo] = useState("");

  const handleDadosModalCalendar = (
    nomeTatuador,
    imagemTatuador,
    dataTattoo
  ) => {
    setNomeTatuador(nomeTatuador);
    setImagemTatuador(imagemTatuador);
    setDataTattoo(dataTattoo);
  };

  return (
    <div className="page">
      <div ref={indicatorRef} id="indicator"></div>
      <section className="section0" ref={divsRefs[0]}>
        <div className="left">
          <div className="image-container">
            <img className="logo-section0" src={Logo} alt="Imagem" />
          </div>
        </div>
        <div className="right">
          <div className="links-container">
            <div onClick={() => scrollToDiv(1)} className="link">
              <div className="link-content">
                <span>Nosso portfolio</span>
              </div>
            </div>
            <div onClick={() => scrollToDiv(2)} className="link">
              <div className="link-content">
                <span>Agende sua tatto</span>
              </div>
            </div>
            <div onClick={() => scrollToDiv(3)} className="link">
              <div className="link-content">
                <span>Localização</span>
              </div>
            </div>
            <div className="link">
              <div className="link-content">
                <span>Sobre nós</span>
              </div>
            </div>
            <div className="link-with-icons">
              <Link
                to="https://www.instagram.com/_tattoocollection/"
                target="_blank"
                style={{ color: "inherit" }}
              >
                <AiOutlineInstagram className="icon" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="section1" ref={divsRefs[1]}>
        <div className="image-logo">
          <img className="logo-sections" src={logoPng} alt="Logo" />
        </div>
        <div className="portifolio-container-large">
          <div className="large-row1">
            {photos.slice(0, 3).map((imageUrl, index) => {
              return (
                <div key={index} className="portifolio-image-container">
                  <img
                    onClick={() => handleImageClick(index)}
                    src={imageUrl.userImage}
                    alt={`Imagem ${index + 1}`}
                    className="rounded-image"
                  />
                </div>
              );
            })}
          </div>
          <div className="large-row2">
            {photos.slice(3, 6).map((imageUrl, index) => (
              <div key={index} className="portifolio-image-container">
                <img
                  onClick={() => handleImageClick(index)}
                  src={imageUrl.userImage}
                  alt={`Imagem ${index + 1}`}
                  className="rounded-image"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="portifolio-container-medium">
          <div className="medium-row1">
            {photos.slice(0, 2).map((imageUrl, index) => (
              <div key={index} className="portifolio-image-container">
                <img
                  onClick={() => handleImageClick(index)}
                  src={imageUrl.userImage}
                  alt={`Imagem ${index + 1}`}
                  className="rounded-image"
                />
              </div>
            ))}
          </div>
          <div className="medium-row2">
            {photos.slice(2, 4).map((imageUrl, index) => (
              <div key={index} className="portifolio-image-container">
                <img
                  onClick={() => handleImageClick(index)}
                  src={imageUrl.userImage}
                  alt={`Imagem ${index + 1}`}
                  className="rounded-image"
                />
              </div>
            ))}
          </div>
          <div className="medium-row3">
            {photos.slice(4, 6).map((imageUrl, index) => (
              <div key={index} className="portifolio-image-container">
                <img
                  onClick={() => handleImageClick(index)}
                  src={imageUrl.userImage}
                  alt={`Imagem ${index + 1}`}
                  className="rounded-image"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="portifolio-container-minimum">
          <div className="minimum-row1">
            {photos.slice(0, 2).map((imageUrl, index) => (
              <div key={index} className="portifolio-image-container">
                <img
                  onClick={() => handleImageClick(index)}
                  src={imageUrl.userImage}
                  alt={`Imagem ${index + 1}`}
                  className="rounded-image"
                />
              </div>
            ))}
          </div>
          <div className="minimum-row2">
            {photos.slice(2, 4).map((imageUrl, index) => {
              return (
                <div key={index} className="portifolio-image-container">
                  <img
                    onClick={() => handleImageClick(index)}
                    src={imageUrl.userImage}
                    alt={`Imagem ${index + 1}`}
                    className="rounded-image"
                  />
                </div>
              );
            })}
          </div>
          <div className="minimum-row3">
            {photos.slice(4, 6).map((imageUrl, index) => (
              <div key={index} className="portifolio-image-container">
                <img
                  src={imageUrl.userImage}
                  alt={`Imagem ${index + 1}`}
                  className="rounded-image"
                />
              </div>
            ))}
          </div>
        </div>
        {isOpenModalImage && (
          <div className="modal" onClick={handleModalImageClick}>
            <div className="modal-content">
              <div className="close-modal" onClick={closeModalImage}>
                X
              </div>
              <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                  rotate: 0,
                  stretch: 0,
                  depth: 100,
                  modifier: 2.5,
                }}
                pagination={{ el: ".swiper-pagination", clickable: true }}
                navigation={{
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                  clickable: true,
                }}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className="swiper_container"
              >
                {arrayImages.map((imageUrl, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={imageUrl}
                      alt={`Imagem ${index}`}
                      className="modal-image"
                    />
                  </SwiperSlide>
                ))}
                <div className="slider-controler">
                  <div className="swiper-button-prev slider-arrow">
                    {/* <ion-icon name="arrow-back-outline"> */}
                    <AiOutlineArrowLeft className="arrow-back-outline" />
                    {/* </ion-icon> */}
                  </div>
                  <div className="swiper-button-next slider-arrow">
                    {/* <ion-icon name="arrow-forward-outline"> */}
                    <AiOutlineArrowRight className="arrow-forward-outline" />
                    {/* </ion-icon> */}
                  </div>
                  <div className="swiper-pagination"></div>
                </div>
              </Swiper>
            </div>
          </div>
        )}
      </section>

      <section className="section2" ref={divsRefs[2]}>
        <div className="image-logo">
          <img className="logo-sections" src={logoPng} alt="Logo" />
        </div>
        <form className="form-container">
          <div className="form-items">
            <label htmlFor="nome">Nome Completo</label>
            <input
              className="form-input"
              type="text"
              placeholder="Nome"
              required
            />
          </div>
          <div className="form-group">
            <div className="div1">
              <div className="form-items">
                <label htmlFor="email">E-mail</label>
                <input
                  className="form-input"
                  type="email"
                  placeholder="E-mail"
                  required
                />
              </div>
            </div>
            {/* <div className="div2"> */}
            <div className="form-items">
              <label htmlFor="whatsApp">WhatsApp</label>
              <input
                className="form-input"
                type="text"
                placeholder="WhatsApp"
                required
              />
            </div>
            {/* </div> */}
          </div>
          <span className="form-text">
            Abaixo você deixara a inspiração de sua tatuagem e posição do corpo
            no qual será feito.
          </span>
          <div className="form-group">
            <div className="div1">
              <div className="form-items" style={{ marginRight: "0.5rem" }}>
                <label htmlFor="tattoo" className="file-label">
                  Referencia da tatto
                  <AiFillPlusCircle className="file-icon" />
                  <input
                    id="tattoo"
                    type="file"
                    className="form-input"
                    accept="image/*"
                    multiple
                    onChange={handleFileTatto}
                    required
                  />
                </label>
                <div className="file-names">
                  {imageNamesTattoo.map((file, index) => {
                    return (
                      <div key={index} className="files-images">
                        <span className="file-name">{file}</span>
                        <AiOutlineClose
                          className="delete-icon"
                          onClick={() => handleDeleteImageTattoo(index)}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* PARTE DO CORPO*/}
            <div className="div2">
              <div className="form-items" style={{ marginRight: "0.5rem" }}>
                <label htmlFor="body" className="file-label">
                  Parte do corpo
                  <AiFillPlusCircle className="file-icon" />
                  <input
                    id="body"
                    type="file"
                    className="form-input"
                    accept="image/*"
                    multiple
                    onChange={handleFileBody}
                    required
                  />
                </label>
                <div className="file-names">
                  {imageNamesBody.map((file, index) => {
                    return (
                      <div key={index} className="files-images">
                        <span className="file-name">{file}</span>
                        <AiOutlineClose
                          className="delete-icon"
                          onClick={() => handleDeleteImageBody(index)}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="form-items">
            <div className="file-label">
              <span>Escolha seu tatuador e sua data: </span>
              <BsFillCalendarCheckFill
                className="file-icon"
                // onClick={openModalCalendar}
                onClick={handleCalendarClick}
              />
            </div>
            {nomeTatuador.length > 0 && dataTattoo.length > 0 ? (
              <div className="info-modal">
                <div className="info-tatuador-modal">
                  <span>Nome do tatuador: {nomeTatuador}</span>
                  <div className="info-image-modal">
                    <img
                      className="info-image"
                      src={imagemTatuador}
                      alt={nomeTatuador}
                    />
                  </div>
                </div>
                <div className="info-data-modal">
                  <span>Data da tatuagem: {dataTattoo}</span>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
          {isOpenModalCalendar && (
            <ModalCalendar
              onClose={closeModalCalendar}
              onClick={handleModalCalendarClick}
              onDadosModalCalendar={handleDadosModalCalendar}
            />
          )}
          <button type="button" className="submit-button">
            Enviar
          </button>
        </form>
      </section>
      <section className="section3" ref={divsRefs[3]}>
        <div className="image-logo">
          <img className="logo-sections" src={logoPng} alt="Logo" />
        </div>
        <div className="container-localizacao">
          <div className="map-localizacao">
            <Localização />
          </div>
          <div className="map-info">
            <p className="map-info-text">VENHA NOS VISITAR</p>
            <div className="foto-lugar">
              <img
                className="map-info-foto"
                src="https://as2.ftcdn.net/v2/jpg/03/22/22/63/1000_F_322226303_3F8ejwKw3RpqTrYdel59DoPKVFFPZ4eS.jpg"
                alt="local"
              />
            </div>
          </div>
        </div>
        <div className="text-localizacao">
          <p>Av. Daniel de La Touche, 987 - Cohama, São Luís - MA, 65074-115</p>
        </div>
      </section>
      <section className="section4" ref={divsRefs[4]}>
        <div className="image-logo">
          <img className="logo-sections" src={logoPng} alt="Logo" />
        </div>
        <div className="container-sobre-nos">
          <SliderSobreNos className="slider-sobre-nos" />
        </div>
      </section>
    </div>
  );
}
