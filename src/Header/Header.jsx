import './Header.css';
import React from 'react';
import { Navigation } from '../Navigation/Navigation';
import { LogoComponent } from '../Logo/Logo';

export function HeaderComponent(){
return (
<>
<header>
<LogoComponent/>
<Navigation/>
</header>
</>
)

}