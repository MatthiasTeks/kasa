import { FC } from 'react';
import { Link } from 'react-router-dom';
import './ErrorPage.scss'

export const ErrorPage: FC = () => {
    return (
        <div id='error-page'>
            <div>
                <span>404</span>
                <p>Oups! La page que vous demandez n'existe pas.</p>
                <Link to="/">
                    <p>Retourner sur la page d'accueil</p>
                </Link>
            </div>
        </div>
    )
}