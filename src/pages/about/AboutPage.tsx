import { FC } from 'react';
import { Banner } from '../../components/banner/Banner';
import { Collapse } from '../../components/collapse/Collapse';
import image from '../../assets/about-banner.png';
import './AboutPage.scss';

export const AboutPage: FC = () => {
    const about = [
        {
            title: 'Description',
            text: 'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.'
        }, 
        {
            title: 'Respect',
            text: 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'
        },
        {
            title: 'Service',
            text: 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'
        },
        {
            title: 'Sécurité',
            text: 'La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à lhôte quau locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.'
        }
    ]
    return (
        <div className="about-page">
            <Banner image={image} title="Chez vous, partout et ailleurs"/>
            <div>
                {about.map((item, index) => {
                    return (
                        <Collapse 
                            key={`${item.title}_${index}`} 
                            title={item.title} 
                            data={[item.text]}
                        />
                    )
                })}
            </div>
        </div>
    )
}