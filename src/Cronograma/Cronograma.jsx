import React from "react";
import './Cronograma.css';

export function Cronograma(){
return(
<>
<table className="cronograma">
<caption></caption>
<thead>
<tr>
  <th>Fecha</th>
  <th>Hora</th>
  <th>Lugar</th>
  <th>Valor</th>
  <th>Premio</th>
</tr>
</thead>
<tbody>
<tr>
  <td>14-12-24</td>
  <td>16:00</td>
  <td>Balon de oro</td>
  <td>S/.72</td>
  <td>Juego de camisas</td>
</tr>

</tbody>

</table>
</>

);
};