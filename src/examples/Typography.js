import React, { Fragment } from 'react';
import {
    BlockQuote,
    Citation,
    IntroText,
    Pretitle,
    Text,
    Title,
} from '@orderandchaos/react-components';

const Typography = () =>
    <Fragment>
        <h2 className='border--bottom'>Typography</h2>
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
            <Text>
                Tation tantas ut qui, an vis aeque abhorreant.
                Vel agam prima probatus ea. Eos ut aeterno
                sententiae, nec eu enim quodsi dissentiunt, has
                eius facilis denique cu. Cu iuvaret recusabo
                qui. Eum ex quot theophrastus, fugit verear eos et.
            </Text>
            <Citation>
                <cite>Title of Work</cite> by Author Name
            </Citation>
        </BlockQuote>
        <Text>
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
    </Fragment>;

export default Typography;
