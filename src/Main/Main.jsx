import './Main.css';
import React from 'react';
import fondo from '../assets/tiro.jpg'; 
import {Participantes } from '../Participantes/Participantes';

export function MainComponent(){
return (
<>
<main className='cont'>
<img  className="imgmain" src={fondo} alt="imgmain" />
<p className='text1'>Eventos Deportivos</p>
<p className='text'>Juega, Vive y Anota!</p>
<Participantes/>
 </main> 
</>
)

}