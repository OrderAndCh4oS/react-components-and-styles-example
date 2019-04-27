import React from 'react';
import './App.scss';
import {
    BlockQuote,
    Citation,
    Column,
    Container,
    ContainerFullWidth,
    IntroText,
    Pretitle,
    Row,
    Text,
    Title,
} from '@orderandchaos/react-components';

function App() {
    return (
        <div>
            <ContainerFullWidth
                tag='header' className='bc--lighter-grey'
            >
                <Row>
                    <Column className='margin-bottom--none'>
                        <Title tag='h1' className='margin-bottom--none'>React
                                                                        Component
                                                                        Test</Title>
                    </Column>
                </Row>
            </ContainerFullWidth>
            <Container tag='article' className='border--bottom'>
                <Row>
                    <Column className='padding-bottom--none'>
                        <Pretitle>Pretitle</Pretitle>
                        <Title tag='h2'>Title</Title>
                        <IntroText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Nam vestibulum tortor in ante pulvinar
                            aliquam. Fusce et nisi
                            rutrum, pulvinar orci rutrum, semper nisi. Sed a
                            tortor condimentum, vulputate ipsum et, hendrerit
                            felis.
                        </IntroText>
                        <Text>
                            Quisque pulvinar leo quis imperdiet ornare.
                            Ut ut faucibus nibh, sollicitudin semper odio. Duis
                            ligula nibh, interdum a lacus a, posuere venenatis
                            est. Proin rhoncus maximus quam sed laoreet. Nullam
                            a vulputate sapien. Mauris et rhoncus mauris, at
                            suscipit risus. Morbi sapien lacus, aliquam at nunc
                            non, ultricies congue dolor. Morbi purus ipsum,
                            sollicitudin ac lacinia in, luctus in ex. Curabitur
                            in convallis magna, ut lacinia enim.
                        </Text>
                        <BlockQuote>
                            <Text>
                                Vel agam prima probatus ea. Eos ut aeterno
                                sententiae, nec eu enim quodsi dissentiunt, has
                                eius facilis denique cu. Tation tantas ut qui,
                                an vis aeque abhorreant. Cu iuvaret recusabo
                                qui. Eum ex quot theophrastus, fugit verear eos
                                et.
                            </Text>
                            <Citation>
                                <cite>Title of Work</cite> by Author Name
                            </Citation>
                        </BlockQuote>
                        <Text className='margin-bottom--none'>
                            Maecenas in tincidunt dui, aliquet gravida augue.
                            Aenean sit amet tempor nunc. Nulla volutpat est leo,
                            egestas dictum odio molestie ac. Integer laoreet
                            maximus lectus, nec semper tellus ullamcorper nec.
                            Ut imperdiet eget dui imperdiet suscipit. Proin
                            hendrerit placerat aliquet. Proin gravida lectus nec
                            efficitur sagittis. In ac ipsum sit amet ante
                            elementum interdum id at eros. Suspendisse vel
                            lacinia ipsum, a condimentum nisi. Nullam tempor
                            volutpat tincidunt. Donec laoreet diam in magna
                            rutrum, sit amet imperdiet ligula congue.
                        </Text>
                    </Column>
                </Row>
            </Container>
        </div>
    );
}

export default App;
