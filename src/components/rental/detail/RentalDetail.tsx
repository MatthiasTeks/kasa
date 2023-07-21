import { FC, useState } from 'react';
import { RentalType } from '../../../interfaces/RentalInterface';
import { RatingStars } from '../../../helpers/RatingStars';
import { Collapse } from '../../collapse/Collapse';
import ArrowLeft from '../../../assets/ArrowLeft.png';
import ArrowRight from '../../../assets/ArrowRight.png';
import './RentalDetail.scss';

export const RentalDetail: FC<{ data: RentalType }> = ({ data }) => {
    const [galleryCount, setGalleryCount] = useState<number>(0);

    const imageUrl = data.pictures?.[galleryCount] || data.cover || 'url_to_default_image';
    const picturesLength = data.pictures?.length;
    const showArrows = picturesLength && picturesLength > 1;

    const handlePrevious = () => {
        setGalleryCount(prevCount => {
            if (prevCount <= 0) {
                return (data.pictures?.length || 1) - 1;
            } else {
                return prevCount - 1;
            }
        });
    };
    
    const handleNext = () => {
        setGalleryCount(prevCount => {
            if (prevCount >= (data.pictures?.length || 1) - 1) {
                return 0;
            } else {
                return prevCount + 1;
            }
        });
    };

    return (
        <div className='rental-detail'>
            <div className='rental-gallery'>
                {showArrows ? <img className='arrow arrow-left' src={ArrowLeft} alt="Previous image" onClick={handlePrevious} /> : ""}
                <img className='rental-picture' src={imageUrl} alt="Rental image" />
                {showArrows ? <img className='arrow arrow-right' src={ArrowRight} alt="Next image" onClick={handleNext} /> : ""}
            </div>
            <div className='rental-primary-info'>
                <div className='primary-left'>
                    <h3>{data.title}</h3>
                    <p>{data.location}</p>
                </div>
                {data.host ?
                    <div className='primary-right'>
                        <p>{data.host.name}</p>
                        <div>
                            <img src={data.host.picture} alt="" />
                        </div>
                    </div> : ""
                }
            </div>
            <div className='rental-secondary-info'>
                <div className='info-tags'>
                    {data.tags?.map((item, index) => {
                        return (
                            <span key={`${item}_${index}`}>
                                {item}
                            </span>
                        )
                    })}
                </div>
                <div className='info-rating'>
                    <RatingStars rating={data.rating}/>
                </div>
            </div>
            <div className='rental-tertiary-info'>
                <Collapse title="Description" data={[data.description]}/>
                <Collapse title="Equipement" data={data.equipments}/>
            </div>
        </div>
    )
}