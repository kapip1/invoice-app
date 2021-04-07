import React from 'react';

import styled from 'styled-components';

const Error404Wrapper = styled.div`
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

function Error404() {
    return (
        <Error404Wrapper>
            <h1>404 error</h1>
        </Error404Wrapper>
    );
}

export default Error404;
