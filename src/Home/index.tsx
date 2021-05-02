import React, {FunctionComponent, useRef, useEffect, useState} from 'react';
import deviceRatio from '../helpers/deviceRatio';
import {FullScreenGlobalStyle, HomeContainer, Canvas} from './styles';
import {getPageSize} from './functions';


interface AttributeSize {
    width: number;
    height: number;
}

const Home: FunctionComponent = () => {

    const [attributeSize, setAttributeSize] = useState<AttributeSize>();

    const container = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const size = getPageSize(container.current);
        const attributes = {
            width: size[0] * deviceRatio,
            height: size[1] * deviceRatio
        };
        setAttributeSize(attributes);
    }, []);

    return <HomeContainer ref={container}>
        <FullScreenGlobalStyle/>
        <Canvas {...attributeSize}/>
    </HomeContainer>;
};


export default Home;