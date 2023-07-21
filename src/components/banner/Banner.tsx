import { FC } from 'react';
import './Banner.scss';

type Props = {
    image: string,
    title: string,
}

export const Banner: FC<Props> = ({image, title}) => {
    return (
        <div id='banner' style={{backgroundImage: `url(${image})`}}>
            <div />
            <h1>{title}</h1>
        </div>
    )
}