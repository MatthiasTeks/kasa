import { FC } from 'react';
import { Link } from 'react-router-dom'
import { RentalFactory } from '../../factories/RentalFactory';
import { RentalType } from '../../interfaces/RentalInterface';
import { Banner } from '../../components/banner/Banner';
import database from '../../database.json';
import image from '../../assets/home-banner.png';
import './HomePage.scss'

export const HomePage: FC = () => {
    const rentalCards = database.map((data: RentalType) => {
        return (
            <Link to={`rental/${data.id}`} key={data.id}>
                <RentalFactory rental={data} type="card" />
            </Link>
        );
    });

    return (
        <div>
            <Banner image={image} title="Chez vous, partout et ailleurs"/>
            <div id="rental-cards-list">
                {rentalCards}
            </div>
        </div>
    )
}