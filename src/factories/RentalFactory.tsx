import { FC } from 'react';
import { RentalCard } from "../components/rental/card/RentalCard";
import { RentalDetail } from '../components/rental/detail/RentalDetail';
import { RentalType } from '../interfaces/RentalInterface';

export const RentalFactory: FC<{rental: RentalType, type: string}> = ({rental, type}) => {
  switch(type){
    case 'card':
      return <RentalCard data={rental} />;
    case 'list': 
      return <RentalDetail data={rental} />;
  }
}