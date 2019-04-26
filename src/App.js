import React from 'react';
import './App.scss';
import {
    Column,
    ContainerFullWidth,
    Row,
    Title,
} from '@orderandchaos/react-components';

function App() {
    return (
        <div>
            <ContainerFullWidth
                tag='header'
                className="bc--lighter-grey padding-top--gutter"
            >
                <Row>
                    <Column>
                        <Title tag='h1'>React Component Test</Title>
                    </Column>
                </Row>
            </ContainerFullWidth>
            <ContainerFullWidth tag='article' className='padding-top--gutter'>
                <Row>
                    <Column>
                        <Title tag='h2'>Grid</Title>
                    </Column>
                </Row>
            </ContainerFullWidth>
        </div>
    );
}

export default App;
