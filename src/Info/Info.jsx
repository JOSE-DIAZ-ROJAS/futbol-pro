import './Info.css';
import React from 'react';

export function InfoComponent(){
return (
<>
<ul className='info'>
<li className='info__item'>
    <h1>Fecha</h1>
    <p>16/06/24</p>
</li>
<li className='info__item'>
    <h1>Hora</h1>
    <p>5:25pm</p>
</li>
<li className='info__item'>
    <h1>Lugar</h1>
    <p>Balón  de oro</p>
</li>
<li className='info__item'>
    <h1>Inscripcion</h1>
    <p>S/.72</p>
</li>
</ul>
</>
)

}