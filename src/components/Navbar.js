import React from 'react';

import logoFacebook from '../assets/facebook.png';
import avatar from '../assets/user.png';

function Navbar(){
    return (
        <nav class="main-nav">
            <div class="logo">
                <img src={logoFacebook} alt="logo"/>
            </div>
            <div class="perfil">
                <span>Meu perfil</span>
                <img src={avatar} alt="avatar"/>
            </div>
        </nav>
    );
};

export default Navbar;