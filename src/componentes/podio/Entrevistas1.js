import React from 'react'
import '../estilos/Entrevista.css'

function Entrevistas1() {
  return (
    <div>
        <div className='contenedor1-entrevista'>
         <img
            className='imagen1-entrevista'
            src={require('../img/ruta2.jpg')}
            alt='PODIO PARIS ROUBAIX'>
        </img>
        <div className='contenedor1-texto-entrevista'>
            <h1 className='nombre1-entrevista'>Wout van Aert: “Como una pesadilla”</h1>
            <p className='fecha1-entrevista'>9 abril 2023 - 17:42</p>
            <p className='texto1-entrevista'>Es una pena que haya tenido tan mala suerte. Me sentí tan bien que pude atacar en el Carrefour de l'Arbre… y luego pinché. Apesta porque nosotros [Mathieu Van der Poel y yo] teníamos la posibilidad de llegar juntos al Vélodrome, y yo habría tenido la oportunidad de ganar en un sprint de dos. Pero eso es vida. Cuando pinché, se sintió como una pesadilla. No podía creer que fuera cierto, pero mi llanta estaba completamente pinchada. Traté de mantener la cabeza fría, restablecer mi mente al modo de carrera y tratar de recuperar el volante de Mathieu, pero es imposible cerrar una brecha de 20 segundos con un tipo como él al frente. Sin embargo, no tenía sentido rendirse. Nunca se sabe cómo podría haber resultado una carrera si las cosas hubieran sucedido de manera diferente. No me gusta especular sobre quién fue el más fuerte hoy. Mathieu [Van der Poel] me puso al límite con sus ataques, pero esta vez no me sorprendió porque estaba realmente concentrado en seguir su rueda. Cuando tuve el pinchazo, me estaba atacando a mí mismo y me sentía muy fuerte. Incluso con una rueda pinchada salí del Carrefour de l'Arbre sobre su rueda, así que podría haber hecho algo en la final, eso seguro.</p>
        </div>
    </div>
    </div>
  )
}

export default Entrevistas1
