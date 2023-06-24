import React from 'react'

function Podio() {
  return (
    <div>
     <div id="carouselExampleDark" className="carousel carousel-dark slide">
     <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
     <div className="carousel-inner">
     <div className="carousel-item active" data-bs-interval="10000">
         <img src="./imagenes/podio1.jpg" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
      <h1>Compiègne / Roubaix</h1>
        <h5>04/09/2023 - 257 km - Montañoso</h5>
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src="./imagenes/podio2.jpg" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h1>Jasper Philipsen: “Podemos sentirnos orgullosos de esto”</h1>
      </div>
    </div>
    <div className="carousel-item">
      <img src="./imagenes/podio3.jpg" class="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h1>Wout van Aert: “Como una pesadilla”</h1>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div> 
    </div>
  )
}

export default Podio
