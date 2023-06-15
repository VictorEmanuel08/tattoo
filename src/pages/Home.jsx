import React, { useRef } from "react";
import "../styles/style.scss";
import Logo from "../assets/Tattoo CollectioN-1.png";

import { AiFillFacebook, AiOutlineInstagram } from "react-icons/ai";
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
  return (
    <div
      className="page"
      // className="w-full bg-black flex flex-col"
    >
      <section className="section1" ref={divsRefs[0]}>
        <div class="left">
          <div class="image-container">
            <img src={Logo} alt="Imagem" />
          </div>
        </div>
        <div class="right">
          <div class="links-container">
            <div onClick={() => scrollToDiv(1)} class="link">
              <div class="link-content">Agende sua tatto</div>
            </div>
            <div onClick={() => scrollToDiv(2)} class="link">
              <div class="link-content">Localização</div>
            </div>
            <div class="link">
              <div class="link-content">Nosso portfolio</div>
            </div>
            <div class="link">
              <div class="link-content">Sobre nós</div>
            </div>
            <div class="link link-with-icons">
              <AiFillFacebook class="icon" size="2rem" />
              <AiOutlineInstagram class="icon" size="2rem" />
            </div>
          </div>
        </div>
      </section>
      <section className="section2" ref={divsRefs[1]}></section>
      <section className="section3" ref={divsRefs[2]}></section>
      <section className="section4" ref={divsRefs[3]}></section>
    </div>
  );
}
