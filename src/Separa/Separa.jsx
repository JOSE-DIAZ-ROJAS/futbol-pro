import React from "react";
import './Separa.css';

export function Separa({reserva,inscribe, url}){
return(
<>
<a className="separar" target="blank" href="#">{reserva}</a>
<a className="separar" target="blank" href={url}>{inscribe}</a>
</>

);
};