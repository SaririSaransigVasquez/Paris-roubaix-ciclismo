import React from 'react'
import Footer from '../footer/Footer'
function Items() {
  return (
    <div>
        <div className='container mb-1'>
          <h1 className='text-center mt-1'>LA HISTORIA DE LA PARÍS-ROUBAIX</h1>
          <figure>
              <blockquote className='blockquote'>
                <p className='text-center mt-1'>
                 <img
                   className='mapa-entrevista'
                   src={require('../img/historia.jpg')}
                    alt='PODIO PARIS ROUBAIX'>
                </img>
                   </p>
              </blockquote>
          </figure>
        </div>
        <p></p>
        <h1>Ganadores de carreras desde 2010</h1>

        <table className='table table-bordered '>
        <thead>
          <tr>
          <th className='text-center' scope="col">AÑO</th>
          <th  className='text-center' scope="col ">GANADOR</th>
          <th className='text-center' scope="col">KILÓMETROS</th>
          </tr>
        </thead>
        <tbody>
          <tr>
          <th className='text-center' scope="row">2022</th>
         <td className='text-center'>Dylan VAN BAARLE</td>
          <td className='text-center'>257,5</td>
         </tr>
         <tr>
         <th className='text-center' scope="row">2021</th>
          <td className='text-center'>sonny colbrelli</td>
         <td className='text-center'>257</td>
          </tr>
           <tr>
           <th className='text-center' scope="row">2020</th>
           <td className='text-center'>Cancelado</td>
           <td className='text-center'>X</td>
          </tr>
          <tr>
          <th className='text-center' scope="row">2019</th>
         <td className='text-center'>felipe gilbert</td>
          <td className='text-center'>257</td>
         </tr>
         <tr>
          <th className='text-center' scope="row">2018</th>
         <td className='text-center'>Pedro SAGAN</td>
          <td className='text-center'>257</td>
         </tr>
         <tr>
          <th className='text-center' scope="row">2017</th>
         <td className='text-center'>Greg Van Avermaet</td>
          <td className='text-center'>257</td>
         </tr>
         <tr>
          <th className='text-center' scope="row">2016</th>
         <td className='text-center'>Mateo HAYMAN</td>
          <td className='text-center'>257,5</td>
         </tr>
         <tr>
          <th className='text-center' scope="row">2015</th>
         <td className='text-center'>Juan DEGENKOLB</td>
          <td className='text-center'>253,5</td>
         </tr>
         <tr>
          <th className='text-center' scope="row">2014</th>
         <td className='text-center'>Niki TERPSTRA</td>
          <td className='text-center'>257</td>
         </tr>
          
         <tr>
          <th className='text-center' scope="row">2013</th>
         <td className='text-center'>Fabián CANCELAR</td>
          <td className='text-center'>254,5</td>
         </tr>

         <tr>
          <th className='text-center' scope="row">2012</th>
         <td className='text-center'>Tom BOONEN</td>
          <td className='text-center'>257,5</td>
         </tr>
         <tr>
          <th className='text-center' scope="row">2011</th>
         <td className='text-center'>Johan VAN SUMMEREN</td>
          <td className='text-center'>258</td>
         </tr>
         <tr>
          <th className='text-center' scope="row">2010</th>
         <td className='text-center'>Fabián CANCELAR</td>
          <td className='text-center'>259</td>
         </tr>
         </tbody>
      </table>

      <div className='container mb-1'>
          <h1 className='text-white p-2 bg-dark text-center'>Pastoreo de conservación con Les biquettes de l'espoir</h1>
          <figure>
              <blockquote className='blockquote'>
                <p className=' mt-1'>
                  <h5>El pastoreo de conservación fue el método elegido para desyerbar el Trouée d'Arenberg de cara a la edición de 2023. Unas 40 cabras y ovejas comían hierbajos en un tramo de adoquines de 2.300 metros. 'Las cabras de la esperanza' tiene dos propósitos:</h5>
                  <p>*Mantener seguros a los ciclistas cortando las malas hierbas entre los adoquines y evitando así la formación de áreas resbaladizas cuando se moja;</p>
                  <p>*Conservando el sector empedrado, que es un sitio catalogado.</p>
                  <h5>ESPOIR AVENIR, una organización benéfica local que emplea a personas necesitadas, fue reclutada para llevar a cabo esta operación respetuosa con el medio ambiente.</h5>
                  <div className='contenedor'>
                  <img
                   className='pasto-entrevista'
                   src={require('../img/pasto1.jpeg')} 
                    alt='PODIO PARIS ROUBAIX'>
                </img>
                <img
                  className='pasto1-entrevista'
                  src={require('../img/pasto2.jpeg')} >
                </img>
                  </div>
                   </p>
              </blockquote>
          </figure>
        </div>
        

        <div className='contenedor-entrevista'>
         <img
            className='imagen-entrevista'
            src={require('../img/movilidad.jpeg')}
            alt='PODIO PARIS ROUBAIX'>
        </img>
        <div className='contenedor-texto-entrevista'>
            <h1 className='nombre-entrevista'>Movilidad sostenible</h1>
            <p className='texto-entrevista'>La movilidad eléctrica es la opción obvia para la flota de vehículos de la organización. Los 50 vehículos que componen la flota son híbridos enchufables. Dos coches Škoda Enyaq IV totalmente eléctricos han estado presentes en la carrera desde 2022. </p>
        </div>
        </div>

        <div className='contenedor-entrevista'>
         <img
            className='imagen-entrevista'
            src={require('../img/eco.jpeg')}
            alt='PODIO PARIS ROUBAIX'>
        </img>
        <div className='contenedor-texto-entrevista'>
            <h1 className='nombre-entrevista'>Eco-responsabilidad</h1>
            <p className='texto-entrevista'>Zonas de recogida : los corredores dispondrán de zonas de recogida específicas para desechar sus residuos, que serán limpiadas por la organización. Este año, 9 zonas estarán disponibles para los ciclistas. </p>
            <p className='texto-entrevista'>Zonas Natura 2000 : El respeto por el medio ambiente y la preservación de la biodiversidad son prioridades en la organización de Paris-Roubaix. La empresa de investigación BIOTOPE ayuda a los organizadores desde 2011 en la realización de  estudios de impacto de Natura 2000  (red europea de espacios naturales protegidos notables). En 2023, la carrera pasará por  4 zonas sensibles . Se prestará especial atención a la protección del Trouée d'Arenberg, que es a la vez una zona Natura 2000 y un lugar catalogado.</p>
        </div>
        </div>

        <Footer/>
    </div>
  )
}

export default Items
