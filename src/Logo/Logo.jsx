import './Logo.css';
import React from 'react';
import logo from '../assets/logo.png'; 

export function LogoComponent(){
return (
<>
<div className='logo'> 
<img  className="img-balon" src={logo} alt="balon" />
<div className='p-logo'><div className='f'>F</div>utbol<span>Pro</span> </div>
</div>
</>
)

}