import React from 'react';
import './App.scss';
import {
    Column,
    Container,
    ContainerFullWidth,
    Row,
    Title,
} from '@orderandchaos/react-components';
import TextExample from './TextExamples';

function App() {
    return (
        <div>
            <ContainerFullWidth
                tag='header' className='bc--lighter-grey'
            >
                <Row>
                    <Column className='margin-bottom--none'>
                        <Title tag='h1' className='margin-bottom--none'>
                            React Component Test
                        </Title>
                    </Column>
                </Row>
            </ContainerFullWidth>
            <Container tag='article' className='border--bottom'>
                <Row>
                    <Column className='padding-bottom--none'>
                        <TextExample/>
                    </Column>
                </Row>
            </Container>
        </div>
    );
}

export default App;
