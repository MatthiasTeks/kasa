import { FC, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { RentalFactory } from '../../factories/RentalFactory';
import database from '../../database.json';
import './Rental.scss'

export const Rental: FC = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const dataRental = database.find(element => element.id === id)

    useEffect(() => {
        if(dataRental === undefined){
            navigate("/error");
            return;
        }
    }, [dataRental, navigate])

    if(dataRental === undefined) return undefined;

    return <RentalFactory rental={dataRental} type="list" />
}