import './Main.css';
import React from 'react';
import fondo from '../assets/tiro.jpg'; 
import {Informacion} from '../Informacion/Informacion.jsx';

export function MainComponent(){
return (
<>
<main className='cont'>
{/* <img  className="imgmain" src={fondo} alt="imgmain" /> */}
<div className='sec1'>
<p className='text1'>Eventos Deportivos</p>
<p className='text'>Juega, Vive y Anota!</p>
</div>
<Informacion/>
 </main> 
</>
)

}