import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/logo_mobile.png';

export const Navbar: FC = () => {
    return (
        <nav>
            <div id='holder-logo'>
                <img src={Logo} alt='logo from Casa company'/>
            </div>
            <ul>
                <li><NavLink to='/'>Accueil</NavLink></li>
                <li><NavLink to='/about'>A propos</NavLink></li>
            </ul>
        </nav>
    )
}