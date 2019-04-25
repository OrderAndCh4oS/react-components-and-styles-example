import React from 'react';
import './App.scss';
import {
    Column,
    Container, Row,
} from '@orderandchaos/react-components/components/structure';
import { Title } from '@orderandchaos/react-components/components/typography';

function App() {
    return (
        <div className="page-wrapper">
            <Container tag='header'>
                <Row>
                    <Column>
                        <Title tag='h1'>React Component Test</Title>
                    </Column>
                </Row>
            </Container>
        </div>
    );
}

export default App;
