import React from 'react'
import '../estilos/Entrevista.css'

function entrevistas() {
  return (
    <div className='contenedor-entrevista'>
        <img
            className='imagen-entrevista'
            src={require('../img/ruta1.jpg')}
            alt='PODIO PARIS ROUBAIX'>
        </img>
        <div className='contenedor-texto-entrevista'>
            <h1 className='nombre-entrevista'>Jasper Philipsen: “Podemos sentirnos orgullosos de esto”</h1>
            <p className='fecha-entrevista'>9 abril 2023 - 18:28</p>
            <p className='texto-entrevista'>Estaba claro que Wout [van Aert] y Mathieu [Van der Poel] eran los más fuertes hoy. Tenían las mejores piernas en las partes cruciales de la carrera y me era imposible seguirlos. Pero también tenía buenas piernas. Ser 2º mientras Mathieu ganaba era un sueño hecho realidad. Por supuesto, me gustaría volver y ganar, pero por hoy voy a disfrutar el día. Van der Poel es humano y un ciclista súper fuerte. Junto con Van Aert y [Tadej] Pogacar, son los mejores ciclistas del mundo. Siempre que van, sabes que tienen algo extra y que seguirlos es casi imposible. Nosotros [Alpecin-Deceuninck y yo] elegimos mis días de carrera para mantenerme fresco para Roubaix, por eso no participé en Flandes ni en el E3. También hicimos una muy buena preparación juntos. Es por eso que las cosas salieron como queremos hoy. Tuvimos algo de suerte: pudimos habernos estrellado, como Degenkolb, o pinchado, como Van Aert. ¿Somos el mejor equipo de la temporada de Clásicos? Pues podemos sentirnos orgullosos de haber ganado dos Monuments esta temporada, con un 1-2 en Roubaix.</p>
        </div>
    </div>
  )
}

export default entrevistas
