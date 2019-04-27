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
import FormExample from './FormExamples';

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
                        <TextExample/>
                    </Column>
                </Row>
                <Row>
                    <Column className='border--bottom'>
                        <FormExample/>
                    </Column>
                </Row>
            </Container>
        </div>
    );
}

export default App;
