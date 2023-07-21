import { FC } from 'react';
import LogoWhite from '../../assets/logo-white.png';
import './Layout.scss';

export const Footer: FC = () => {
    return (
        <footer>
            <div>
                <img src={LogoWhite} alt="logo from Kasa company white" />
                <p>© 2020 Kasa. All rights reserved</p>
            </div>
        </footer>
    )
}