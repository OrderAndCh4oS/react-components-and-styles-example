import React, { Fragment } from 'react';
import {
    Title,
    Input,
    Select,
    TextArea,
    Switch,
    Slider
} from '@orderandchaos/react-components';

const Forms = () =>
    <Fragment>
        <Title tag='h2' className='border--bottom'>Forms</Title>
        <Input
            type='text' name='text' label='Text Field' placeholder='Enter text'
        />
        <Input
            type='email'
            name='email'
            label='Email Field'
            placeholder='Enter email'
        />
        <Input type='url' name='url' label='URL Field' placeholder='Enter url'/>
        <Input
            type='tel'
            name={'telephone'}
            label='Telephone Field'
            placeholder='Enter telephone'
        />
        <Input
            type='password'
            name='password'
            label='Password Field'
            placeholder='Enter password'
        />
        <Input
            type='number'
            name='number'
            label='Number Field'
            placeholder='Enter number'
        />
        <Input
            type='search'
            name='search'
            label='Search Field'
            placeholder='Enter search'
        />
        <Input
            type='date' name='date' label='Date Field' placeholder='Enter date'
        />
        <Input
            type='color'
            name='colour'
            label='Colour Field'
            placeholder='Enter color'
        />
        <Select
            label='Select Field' name='select' options={[
            {
                name: 'Option one',
                value: 1,
            },
            {
                name: 'Option two',
                value: 2,
            },
            {
                name: 'Option three',
                value: 3,
            },
        ]}
        />
        <TextArea name='text-area' label='Text Area'/>
        <Switch
            name='switch'
            label='Switch'
            error={false}
            onBlur={() => console.log('Toggled')}
            onChange={() => console.log('Toggled')}
        />
        <Slider
            name='slider'
            label='Slider'
            value={50}
            error={false}
            onBlur={() => console.log('Toggled')}
            onChange={() => console.log('Toggled')}
        />
    </Fragment>;

export default Forms;
