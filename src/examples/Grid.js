import React, { Fragment } from 'react';
import {
    Column,
    Panel,
    Row,
    Text,
    Title,
} from '@orderandchaos/react-components';

const Grid = () =>
    <Fragment>
        <Title tag='h2' className='border--bottom'>Grid</Title>
        <Row>
            <Column>
                <Panel>
                    <Text className='text--minus-one margin-bottom--none'>Col 12</Text>
                </Panel>
            </Column>
        </Row>
        <Row>
            <Column span={['11', 'xsml-12', 'sml-8', 'med-9', 'lrg-10']}>
                <Panel>
                    <Text className='text--minus-one margin-bottom--none'>Col 11</Text>
                </Panel>
            </Column>
            <Column span={['1', 'xsml-12', 'sml-4', 'med-3', 'lrg-12']}>
                <Panel>
                    <Text className='text--minus-one margin-bottom--none'>Col 1</Text>
                </Panel>
            </Column>
        </Row>
        <Row>
            <Column span={['10', 'xsml-12', 'sml-7', 'med-8', 'lrg-9']}>
                <Panel>
                    <Text className='text--minus-one margin-bottom--none'>Col 10</Text>
                </Panel>
            </Column>
            <Column span={['2', 'xsml-12', 'sml-5', 'med-4', 'lrg-3']}>
                <Panel>
                    <Text className='text--minus-one margin-bottom--none'>Col 2</Text>
                </Panel>
            </Column>
        </Row>
        <Row>
            <Column span={['9', 'xsml-12', 'sml-6', 'med-7', 'lrg-8']}>
                <Panel>
                    <Text className='text--minus-one margin-bottom--none'>Col 9</Text>
                </Panel>
            </Column>
            <Column span={['3', 'xsml-12', 'sml-6', 'med-5', 'lrg-4']}>
                <Panel>
                    <Text className='text--minus-one margin-bottom--none'>Col 3</Text>
                </Panel>
            </Column>
        </Row>
        <Row>
            <Column span={['8', 'xsml-12', 'sml-6', 'lrg-7']}>
                <Panel>
                    <Text className='text--minus-one margin-bottom--none'>Col 8</Text>
                </Panel>
            </Column>
            <Column span={['4', 'xsml-12', 'sml-6', 'lrg-5']}>
                <Panel>
                    <Text className='text--minus-one margin-bottom--none'>Col 4</Text>
                </Panel>
            </Column>
        </Row>
        <Row>
            <Column span={['7', 'xsml-12', 'sml-6']}>
                <Panel>
                    <Text className='text--minus-one margin-bottom--none'>Col 7</Text>
                </Panel>
            </Column>
            <Column span={['5', 'xsml-12', 'sml-6']}>
                <Panel>
                    <Text className='text--minus-one margin-bottom--none'>Col 5</Text>
                </Panel>
            </Column>
        </Row>
        <Row>
            <Column span={['6', 'xsml-12', 'sml-12']}>
                <Panel>
                    <Text className='text--minus-one margin-bottom--none'>Col 6</Text>
                </Panel>
            </Column>
            <Column span={['6', 'xsml-12', 'sml-12']}>
                <Panel>
                    <Text className='text--minus-one margin-bottom--none'>Col 6</Text>
                </Panel>
            </Column>
        </Row>
        <Title tag='h3'>Push</Title>
        <Row>
            <Column span={['1']} push={['1']}>
                <Panel>
                    <Text className='text--minus-one margin-bottom--none'>Push 1</Text>
                </Panel>
            </Column>
        </Row>
        <Row>
            <Column span={['1']} push={['2']}>
                <Panel>
                    <Text className='text--minus-one margin-bottom--none'>Push 2</Text>
                </Panel>
            </Column>
        </Row>
        <Row>
            <Column span={['1']} push={['3']}>
                <Panel>
                    <Text className='text--minus-one margin-bottom--none'>Push 3</Text>
                </Panel>
            </Column>
        </Row>
        <Row>
            <Column span={['1']} push={['4']}>
                <Panel>
                    <Text className='text--minus-one margin-bottom--none'>Push 4</Text>
                </Panel>
            </Column>
        </Row>
        <Row>
            <Column span={['1']} push={['5']}>
                <Panel>
                    <Text className='text--minus-one margin-bottom--none'>Push 5</Text>
                </Panel>
            </Column>
        </Row>
        <Row>
            <Column span={['1']} push={['6']}>
                <Panel>
                    <Text className='text--minus-one margin-bottom--none'>Push 6</Text>
                </Panel>
            </Column>
        </Row>
        <Row>
            <Column span={['1']} push={['7']}>
                <Panel>
                    <Text className='text--minus-one margin-bottom--none'>Push 7</Text>
                </Panel>
            </Column>
        </Row>
        <Row>
            <Column span={['1']} push={['8']}>
                <Panel>
                    <Text className='text--minus-one margin-bottom--none'>Push 8</Text>
                </Panel>
            </Column>
        </Row>
        <Row>
            <Column span={['1']} push={['9']}>
                <Panel>
                    <Text className='text--minus-one margin-bottom--none'>Push 9</Text>
                </Panel>
            </Column>
        </Row>
        <Row>
            <Column span={['1']} push={['10']}>
                <Panel>
                    <Text className='text--minus-one margin-bottom--none'>Push 10</Text>
                </Panel>
            </Column>
        </Row>
        <Row>
            <Column span={['1']} push={['11']}>
                <Panel>
                    <Text className='text--minus-one margin-bottom--none'>Push 11</Text>
                </Panel>
            </Column>
        </Row>
    </Fragment>
;

export default Grid;
