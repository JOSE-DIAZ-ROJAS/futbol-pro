import React from "react";
import "./Participantes.css";
import whatsapp from '../assets/whatsapp.png';
export function Participantes(){

    return (
   <>
   <div className="participantes">
    <p></p>
<table className='tposiciones'>
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
    { club: "Balon de oro F", representante: "jose dia rojas", estado: "Inscrito" }
  ].map((participante, i) => (
    <tr key={i}>
      <td>{participante.club}</td>
      <td>{participante.representante}</td>
      <td>{participante.estado}</td>
    </tr>
  ))}
</tbody>
</table>
<a target="blank" href="https://wa.link/fkpcyj"><img className="whatsapp" src={whatsapp} alt="ws" /></a>

</div>
</> 
)
}