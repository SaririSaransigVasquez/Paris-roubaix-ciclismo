import React from 'react'
import Podio from '../carousel/Podio'
import Entrevistas from '../podio/Entrevistas'
import Entrevistas1 from '../podio/Entrevistas1'
import Entrevista3 from '../podio/Entrevista3'
import Footer from '../footer/Footer'

function Ruta() {
  return (
    <div>
        <Podio/>
        <Entrevistas/>
        <Entrevistas1/>
        <Entrevista3/>
        <h2 className='bg-dark text-white mb-8 text-center'>ULTIMOS KILOMETRO</h2>
        <iframe width="100%" height="600" src="https://www.youtube.com/embed/MB1Qs_4qayE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <h2 className='bg-dark text-white mb-8 text-center'>EMOCÓN GANADORA - #ParisRoubaix 2023</h2>
        <iframe width="100%" height="600" src="https://www.youtube.com/embed/HF0ptW34Qvo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <p></p>
        <p></p>
        <p></p>
        <div className='container mb-0'>
          <h1 className='text-white p-2 bg-dark text-center'>MAPA</h1>
          <figure>
              <blockquote className='blockquote'>
                <p className='text-center mt-5'>
                 <img
                   className='mapa-entrevista'
                   src={require('../img/carrera.jpeg')}
                    alt='PODIO PARIS ROUBAIX'>
                </img>
                   </p>
              </blockquote>
          </figure>
        </div>

        <div className='container mb-1'>
          <h1 className='text-white p-2 bg-dark text-center'>ADOQUINES</h1>
          <figure>
              <blockquote className='blockquote'>
                <p className='text-center mt-1'>
                 <img
                   className='mapa-entrevista'
                   src={require('../img/adoquines.jpeg')}
                    alt='PODIO PARIS ROUBAIX'>
                </img>
                   </p>
              </blockquote>
          </figure>
        </div>

        <div className='container mb-1'>
          <h1 className='text-white p-2 bg-dark text-center'>ÚLTIMO KILÓMETRO</h1>
          <figure>
              <blockquote className='blockquote'>
                <p className='text-center mt-1'>
                 <img
                   className='mapa-entrevista'
                   src={require('../img/ultimo.png')}
                    alt='PODIO PARIS ROUBAIX'>
                </img>
                   </p>
              </blockquote>
          </figure>
        </div>

        <Footer/>
    </div>
  )
}

export default Ruta
