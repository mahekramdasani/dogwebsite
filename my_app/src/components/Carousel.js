import React from "react";
import '../App.css'
const Carousel = ({ act }) => {
  return (
    <>
      <div
        id="carouselExampleIndicators"
        class="carousel slide w-75 m-auto"
        data-bs-ride="true"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={act['imgs'][0]} class="d-block w-100" alt="..." width="200px" height="600px"/>
            <div class="carousel-caption d-none d-md-block">
        <h5>{act['name']}</h5>
      </div>
          </div>
          <div class="carousel-item">
            <img src={act['imgs'][1]} class="d-block w-100" alt="..." width="200px" height="600px"/>
            <div class="carousel-caption d-none d-md-block">
        <h5>{act['name']}</h5>
      </div>
          </div>
          <div class="carousel-item">
            <img src={act['imgs'][2]} class="d-block w-100" alt="..." width="200px" height="600px"/>
            <div class="carousel-caption d-none d-md-block">
        <h5>{act['name']}</h5>
      </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Carousel;
