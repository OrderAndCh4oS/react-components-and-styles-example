import React, { Fragment } from 'react';
import { Button, Text, Title } from '@orderandchaos/react-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Buttons = () =>
    <Fragment>
        <Title tag='h2' className='border--bottom'>Buttons</Title>
        <Text>
            <Button>Button</Button>
            {' '}
            <Button disabled>Button</Button>
            {' '}
            <Button className='button--affirmative'>Button Affirmative</Button>
            {' '}
            <Button className='button--destructive'>Button Destructive</Button>
        </Text>
        <Title tag='h3'>Buttons with Icons</Title>
        <Text>
            <Button
                iconLeft={<FontAwesomeIcon
                    icon={[
                        'fab',
                        'github']}
                />}
            >GitHub</Button>
            {' '}
            <Button
                iconLeft={<FontAwesomeIcon
                    icon={[
                        'fas',
                        'unicorn']}
                />}
            >Unicorn</Button>
        </Text>
    </Fragment>
;

export default Buttons;
