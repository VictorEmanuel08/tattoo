import React, { useRef, useState } from "react";
import "../styles/style.scss";
import Logo from "../assets/Tattoo CollectioN-1.png";
import logoPng from "../assets/Tattoo Collection.png";

import {
  AiOutlineInstagram,
  AiFillPlusCircle,
  AiOutlineClose,
} from "react-icons/ai";
import { Link } from "react-router-dom";

export function Home() {
  const divsRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  const scrollToDiv = (index) => {
    divsRefs[index].current.scrollIntoView({ behavior: "smooth" });
  };

  const [imageNamesTatto, setImageNamesTatto] = useState([]);
  const [imagesUserTatto, setImagesUserTatto] = useState([]);

  const handleFileChange = (event) => {
    const files = event.target.files;

    // Limitando a 3 imagens no máximo
    const selectedFiles = Array.from(files).slice(0, 2);

    if (selectedFiles.length + imageNamesTatto.length > 3) {
      event.target.value = "";
      alert("Você só pode selecionar no máximo 3 arquivos.");
      return;
    }

    // Salvando o nome das imagens para printar depois
    const newNames = selectedFiles.map((file) => file.name);
    setImageNamesTatto((prevNames) => [...prevNames, ...newNames]);

    // Salvando as imagens no vetor para enviar
    const readerArray = [];

    for (let i = 0; i < selectedFiles.length; i++) {
      const reader = new FileReader();

      reader.onload = () => {
        readerArray[i] = reader.result;
        if (readerArray.length === selectedFiles.length) {
          setImagesUserTatto((prevImages) => [...prevImages, ...readerArray]);
        }
      };

      reader.readAsDataURL(selectedFiles[i]);
    }
  };
  const handleDeleteImage = (index) => {
    const updatedImageNames = [...imageNamesTatto];
    const updatedImages = [...imagesUserTatto];

    updatedImageNames.splice(index, 1);
    updatedImages.splice(index, 1);

    setImageNamesTatto(updatedImageNames);
    setImagesUserTatto(updatedImages);
  };

  return (
    <div className="page">
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
                to="https://instagram.com"
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
        PORTIFOLIO
      </section>
      <section className="section2" ref={divsRefs[2]}>
        <div className="image-logo">
          <img className="logo-sections" src={logoPng} alt="Logo" />
        </div>
        <form className="form-container">
          <div className="form-items">
            <label htmlFor="nome">Nome Completo</label>
            <input className="form-input" type="text" placeholder="Nome" />
          </div>
          <div className="form-group">
            <div className="form-items" style={{ marginRight: "0.5rem" }}>
              <label htmlFor="email">E-mail</label>
              <input className="form-input" type="email" placeholder="E-mail" />
            </div>
            <div className="form-items" style={{ marginLeft: "0.5rem" }}>
              <label htmlFor="whatsApp">WhatsApp</label>
              <input
                className="form-input"
                type="text"
                placeholder="WhatsApp"
              />
            </div>
          </div>
          <span className="form.text">
            Abaixo você deixara a inspiração de sua tatuagem e posição do corpo
            no qual será feito.
          </span>
          <div className="form-group">
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
                  onChange={handleFileChange}
                />
              </label>
              {/* VERIFICAR MULTIPLE
              VERIRICAR O MARGIN DOS NAMES */}
              <div className="file-names">
                {imageNamesTatto.map((file, index) => {
                  return (
                    <div key={index} className="files-images">
                      <span className="file-name">{file}</span>
                      <AiOutlineClose
                        className="delete-icon"
                        onClick={() => handleDeleteImage(index)}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="form-items" style={{ marginLeft: "0.5rem" }}>
              <label htmlFor="corpo" className="file-label">
                Parte do corpo
                <AiFillPlusCircle className="file-icon" />
              </label>
              <input
                id="corpo"
                type="file"
                className="form-input"
                accept="image/*"
              />
            </div>
          </div>
          <input type="date" placeholder="Data" />
          <button type="submit" className="submit-button">
            Enviar
          </button>
        </form>
      </section>
      <section className="section3" ref={divsRefs[3]}>
        LOCALIZAÇÃO
      </section>
      <section className="section4" ref={divsRefs[4]}>
        SOBRE NÓS
      </section>
    </div>
  );
}
