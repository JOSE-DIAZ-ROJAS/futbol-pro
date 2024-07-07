import React from "react";
import "./Informacion.css";
import { Separa } from "../Separa/Separa";
import { Cronograma } from "../Cronograma/Cronograma";
export function Informacion(){

    return (
   <>
   <div className="informacion">
   
<table className='equipos'>
<caption></caption>
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
    { club: "Balon de oro FC", representante: "jose diaz rojas", estado: "Inscrito" },
   
  ].map((participante, i) => (
    <tr key={i}  >
      
      <td>{participante.club}</td>
      <td>{participante.representante}</td>
      <td>{participante.estado}</td>
    </tr>
    
  ))}
</tbody>
</table>
<Cronograma/>

<div className="btn"> 
<Separa
reserva = 'Reservar una cancha'
inscribe = 'Inscribir mi equipo'
url= 'https://wa.link/2rhbic'
/>
 </div> 

</div>
</> 
)
}
