import { FC } from 'react';

const parseRating = (rating: number) => {
  if (typeof rating !== 'number' || isNaN(rating)) {
    return 0;
  }
  
  return Math.max(0, Math.min(5, rating));
};

export const RatingStars: FC<{rating: string}> = ({rating}) => {
  const stars: JSX.Element[] = [];
  const maxRating = 5;
  const rentalRating = parseRating(parseInt(rating))
  const unfilledStars = maxRating - rentalRating;

  for (let i = 0; i < rentalRating; i++) {
    stars.push(
      <svg key={`filled_${i}`} xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 32 32" fill="none">
        <path d="M30.502 11.201l-8.61-1.249-3.85-7.789a1 1 0 00-1.802 0l-3.85 7.79-8.61 1.248a1 1 0 00-.55 1.706l6.236 6.079-1.473 8.608a1 1 0 001.452 1.055L16 26.333l7.69 4.034a1 1 0 001.452-1.055l-1.473-8.608 6.236-6.08a1 1 0 00-.55-1.705z" fill="#FF6060" />
      </svg>
    );
  }
  
  for (let j = 0; j < unfilledStars; j++) {
    stars.push(
      <svg key={`unfilled_${j}`} xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 32 32" fill="none">
        <path d="M30.502 11.201l-8.61-1.249-3.85-7.789a1 1 0 00-1.802 0l-3.85 7.79-8.61 1.248a1 1 0 00-.55 1.706l6.236 6.079-1.473 8.608a1 1 0 001.452 1.055L16 26.333l7.69 4.034a1 1 0 001.452-1.055l-1.473-8.608 6.236-6.08a1 1 0 00-.55-1.705z" fill="#E3E3E3" />
      </svg>
    );
  }

  return stars.map(stars => stars);
}