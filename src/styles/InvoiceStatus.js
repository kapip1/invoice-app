import styled from 'styled-components';

const PaidWrapper = styled.span`
    display: flex;
    position: relative;
    background-color: rgba(51, 214, 159, 0.16);
    justify-content: center;
    border-radius: 8px;
    align-items: center;
    height: 40px;
    width: 104px;
    & span {
        position: absolute;
        transform: translate(-50%, -50%);
        top: 50%;
        color: rgb(51, 214, 159);
        font-weight: 700;
        left: 60%;
    }
    &::after {
        content: '';
        position: absolute;
        background-color: rgb(51, 214, 159);
        transform: translate(-50%, -50%);
        top: 50%;
        border-radius: 50%;
        left: 35%;
        width: 8px;
        height: 8px;
    }
`;

const PendingWrapper = styled(PaidWrapper)`
    background-color: rgba(255, 143, 0, 0.16);
    & span {
        color: rgba(255, 143, 0);
    }
    &::after {
        background-color: rgba(255, 143, 0);
        left: 25%;
    }
`;

const DraftWrapper = styled(PaidWrapper)`
    background-color: rgba(223, 227, 250, 0.06);
    & span {
        color: rgba(223, 227, 250);
    }
    &::after {
        background-color: rgba(223, 227, 250);
    }
`;

export const Paid = () => (
    <PaidWrapper>
        <span>Paid</span>
    </PaidWrapper>
);
export const Pending = () => (
    <PendingWrapper>
        <span>Pending</span>
    </PendingWrapper>
);
export const Draft = () => (
    <DraftWrapper>
        <span>Draft</span>
    </DraftWrapper>
);
