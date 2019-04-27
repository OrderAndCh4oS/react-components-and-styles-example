import React, { Fragment } from 'react';
import { Title, Button } from '@orderandchaos/react-components';

const Buttons = () =>
    <Fragment>
        <Title tag='h2' className='border--bottom'>Buttons</Title>
        <Button>Button</Button>
        {' '}
        <Button disabled>Button</Button>
        {' '}
        <Button className='button--affirmative'>Button Affirmative</Button>
        {' '}
        <Button className='button--destructive'>Button Destructive</Button>
    </Fragment>
;

export default Buttons;
