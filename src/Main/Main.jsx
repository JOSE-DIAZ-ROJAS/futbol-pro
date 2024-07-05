import './Main.css';
import React from 'react';
import fondo from '../assets/tiro.jpg'; 

export function MainComponent(){
return (
<>
<main className='cont'>
<img  className="imgmain" src={fondo} alt="imgmain" />

<p className='text'>Juega, Vive y Anota!</p>
<table className='tposiciones'>
<caption>Participantes inscritos</caption>
<thead>
    <tr>
      <th>Club</th>
      <th>Representante</th>
      <th>Estado</th>
    </tr>
</thead>
<tbody>
  {[
    { club: "Sport matozoides", representante: "juan diaz", estado: "--" },
    { club: "moshoqueque FC", representante: "Elvis Lucero", estado: "Inscrito" },
    { club: "Fam. Rojas", representante: "Kike Becerra", estado: "--" },
    { club: "Balon de oro FC", representante: "jose diaz rojas", estado: "Inscrito" }
  ].map((participante, i) => (
    <tr key={i}>
      <td>{participante.club}</td>
      <td>{participante.representante}</td>
      <td>{participante.estado}</td>
    </tr>
  ))}
</tbody>
</table>
 </main> 
</>
)

}