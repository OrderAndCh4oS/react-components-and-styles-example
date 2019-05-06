import React, { Fragment } from 'react';
import { Caption, Picture, Title } from '@orderandchaos/react-components';

const makeSource = (srcSet, media) => ({srcSet: srcSet.join(', '), media});

const responsiveImage = {
    src: 'https://placehold.it/1920x1080',
    alt: 'Example picture element',
    sources: [
        makeSource([
                'https://placehold.it/375x1080 1x',
                'https://placehold.it/750x2160 2x',
            ],
            '(max-width: 420px)',
        ),
        makeSource([
                'https://placehold.it/420x1080 1x',
                'https://placehold.it/840x2160 2x',
            ],
            '(max-width: 420px)',
        ),
        makeSource([
                'https://placehold.it/768x1080 1x',
                'https://placehold.it/1536x2160 2x',
            ],
            '(max-width: 768px)',
        ),
        makeSource([
                'https://placehold.it/1024x1080 1x',
                'https://placehold.it/2048x2160 2x',
            ],
            '(max-width: 1024px)',
        ),
        makeSource([
                'https://placehold.it/1240x1080 1x',
                'https://placehold.it/2480x2160 2x',
            ],
            '(max-width: 1240px)',
        ),
        makeSource([
                'https://placehold.it/1600x1080 1x',
                'https://placehold.it/3200x2160 2x',
            ],
            '(max-width: 1600px)',
        ),
        makeSource([
                'https://placehold.it/1920x1080 1x',
                'https://placehold.it/3840x2160 2x',
            ],
            '(max-width: 1920px)',
        ),
    ],
};

const Image = () =>
    <Fragment>
        <Title tag='h2' className='border--bottom'>Picture Element</Title>
        <Picture {...responsiveImage}/>
        <Caption>Caption Text</Caption>
    </Fragment>
;

export default Image;
