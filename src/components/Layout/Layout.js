import React from 'react';
import Hoc from '../../wrapper/hoc'
import Toolbar from '../../../src/components/Navigation/Toolbar/Toolbar'
import styled from 'styled-components'

const Layoutstyle=styled.div`margin-top : 72 px;`;

const layout=(props)=>(
    <Layoutstyle>
    <Hoc>
<Toolbar/>
    <main>
        {props.children}
    </main>
    </Hoc>
     </Layoutstyle>
);

export default layout;