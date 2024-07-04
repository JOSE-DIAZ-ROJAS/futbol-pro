import './Header.css';
import React from 'react';
import { InfoComponent } from '../Info/Info';
import { LogoComponent } from '../Logo/Logo';

export function HeaderComponent(){
return (
<>
<header>
<LogoComponent/>
<InfoComponent/>
</header>
</>
)

}