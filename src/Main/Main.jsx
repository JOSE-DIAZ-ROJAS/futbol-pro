import './Main.css';
import React from 'react';

export function MainComponent(){
return (
<>
<main className='cont'>
<img  className="imgmain" src="../../public/tiro.jpg" alt="imgmain" />

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
    <tr>

<td>Sport matozoides</td>
<td>juan diaz</td>
<td>--</td>

    </tr>
    <tr>

<td> moshoqueque FC</td>
<td>Elvis Lucero</td>
<td>Inscrito</td>

    </tr>
    <tr>

<td>Fam. Rojas</td>
<td>Kike Becerra</td>
<td>--</td>

    </tr>
    <tr>

<td>Balon de oro FC</td>
<td>jose diaz rojas</td>
<td>Inscrito</td>

    </tr>
</tbody>


</table>
 </main> 
</>
)

}