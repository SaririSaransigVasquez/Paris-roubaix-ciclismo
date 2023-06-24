import React from "react"
import {Link} from 'react-router-dom'

const Footer =( )=>{
    return(
        <div>
            <footer className='text-white py-4 bg-dark'>
                <div className='container'>
                    <nav className='row'>
                        <Link to='/' className='col-12 col-md-3 d-flex aling-items-center justyfy-content-center'>
                            <img src='./paris.png' className="mx-8" height='200'/>
                        </Link>
                        <u1 className='col-1 col-md-12 list-unstyled'>
                            <li className='font-weight-bold mb-2 text-center '>PARÍS ROUBAIX</li>
                            <li className='font-weight-bold mb-2 text-center'>Más allá del deporte, Paris-Roubaix se compromete a apoyar la movilidad sostenible. El ciclismo es la forma más respetuosa con el medio ambiente de moverse y está perfectamente en consonancia con la política del Tour de Francia: Cabalgar hacia el futuro</li> 
                        </u1>

                        <u1 className='col-1 col-md-3 list-unstyled'> 
                        <li className="font-weight-bold mb-2">SIGUENOS</li>
                            <li className="d-flex justify-content-between">
                            <i class="bi bi-facebook"/>
                            <i class="bi bi-bicycle"/>
                            <i class="bi bi-instagram"/>
                            <i class="bi bi-twitter"/>
                            </li>
                        </u1>
                    </nav>
                </div>
            </footer>
        </div>
    )
}

export default Footer
