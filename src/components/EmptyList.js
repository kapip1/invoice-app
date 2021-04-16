import React, { useContext } from 'react';

import styled from 'styled-components';

import { AppContext } from '../AppContext';

import ilustration from '../assets/illustration-empty.svg';

const EmptyListWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 30px;
    & img {
        width: 240px;
        height: 200px;
    }
`;
const EmptyListTitle = styled.span`
    font-size: 2rem;
    margin-top: 20px;
    font-weight: 700;
    color: var(--color-primary);
`;
const EmptyListText = styled.p`
    margin-top: 15px;
    font-size: 1.2rem;
    text-align: center;
    width: 80%;
    max-width: 240px;
    color: var(--color-secondary);
    & span {
        font-weight: 700;
        cursor: pointer;
    }
`;

function EmptyList() {
    const { handleIsSliderOpen } = useContext(AppContext);

    return (
        <EmptyListWrapper>
            <img src={ilustration} alt='' />
            <EmptyListTitle>There is nothing here</EmptyListTitle>
            <EmptyListText>
                Create an invoice by clicking the{' '}
                <span onClick={() => handleIsSliderOpen('openAdd')}>
                    New Invoice
                </span>{' '}
                button and get started
            </EmptyListText>
        </EmptyListWrapper>
    );
}

export default EmptyList;
