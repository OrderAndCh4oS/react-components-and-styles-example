import React from 'react';
import './App.scss';
import {
    Column,
    Container,
    ContainerFullWidth,
    Row,
    Title,
} from '@orderandchaos/react-components';
import Typography from './examples/Typography';
import Forms from './examples/Forms';
import Grid from './examples/Grid';
import Buttons from './examples/Buttons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/pro-solid-svg-icons';

library.add(fab, fas);

function App() {
    return (
        <div>
            <ContainerFullWidth
                tag='header' className='bc--lighter-grey'
            >
                <Row>
                    <Column className='hello margin-bottom--none'>
                        <Title tag='h1' className='margin-bottom--none'>
                            React Component Test
                        </Title>
                    </Column>
                </Row>
            </ContainerFullWidth>
            <Container tag='article'>
                <Row>
                    <Column className='border--bottom'>
                        <Typography/>
                    </Column>
                </Row>
                <Row>
                    <Column className='border--bottom'>
                        <Forms/>
                    </Column>
                </Row>
                <Row>
                    <Column className='border--bottom'>
                        <Buttons/>
                    </Column>
                </Row>
                <Row>
                    <Column className='border--bottom'>
                        <Grid/>
                    </Column>
                </Row>
            </Container>
        </div>
    );
}

export default App;
