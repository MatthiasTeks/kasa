import { FC, useState } from 'react';
import Arrow from '../../assets/ArrowBottom.png';
import './Collapse.scss';

export const Collapse: FC<{title: string, data: string[]}> = ({title, data}) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    return (
        <div className='collapse'>
            <div>
                <p>{title}</p>
                <img 
                    className={`arrow-collapse ${isOpen ? 'open' : ''}`} 
                    src={Arrow} 
                    alt="arrow collapse" 
                    onClick={() => setIsOpen(!isOpen)} 
                />
            </div>
            <div className={`collapse-opened ${isOpen ? 'open' : ''}`}>
                {data.map((item, index) => {return <p key={index}>{item}</p>})}
            </div>
        </div>
    )
}