import './Logo.css';
import React from 'react';
import logo from '../assets/logo.png'; 

export function LogoComponent(){
return (
<>
<div className='logo'> 
<img  className="img-balon" src={logo} alt="balon" />
<p className='p-logo'><div className='f'>F</div>utbol<span>Pro</span> </p>
</div>
</>
)

}