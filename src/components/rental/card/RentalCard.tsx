import { FC } from 'react';
import { RentalType } from '../../../interfaces/RentalInterface';
import './RentalCard.scss';

export const RentalCard: FC<{ data: RentalType }> = ({ data }) => {
  return (
    <div className='rental-card'>
      <div />
      <img src={data.cover} alt="" />
      <h3>{data.title}</h3>
    </div>
  );
};