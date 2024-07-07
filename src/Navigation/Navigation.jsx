import './Navigation.css';
import React from 'react';

export function Navigation(){
return (
<>
<ol className='nav'>
<li className='nav__item'>
   <a className='nav__link nav__link-active' href="#" target="_blank" rel="noopener noreferrer">Inicio</a>
</li>
<li className='nav__item'>
<a className='nav__link' href="#" target="_blank" rel="noopener noreferrer">Nosotros</a>
</li>
<li className='nav__item'>
<a className='nav__link' href="#" target="_blank" rel="noopener noreferrer">Servicios</a>
</li>
<li className='nav__item'>
<a className='nav__link ' href="#" target="_blank" rel="noopener noreferrer">Eventos</a>
</li>
</ol>
</>
)

}