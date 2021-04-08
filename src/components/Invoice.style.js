import styled, { css } from 'styled-components';

export const InvoiceWrapper = styled.div`
    position: absolute;
    transform: translateX(-50%);
    width: 90%;
    max-width: 730px;
    min-height: 631px;
    top: 10%;
    left: 50%;
    display: flex;
    flex-direction: column;
    @media (max-width: 576px) {
        top: 15%;
    }
`;
//header
export const InvoiceHeader = styled.header`
    display: flex;
    flex-direction: column;
`;

export const GoBackHeader = styled.div`
    display: flex;
    & a {
        text-decoration: none;
        display: flex;
        & img {
            width: 7px;
            height: 10px;
            margin-right: 10px;
        }
    }
`;

export const TextPrimary = styled.p`
    font-size: 1.2rem;
    color: var(--color-primary);
`;

export const TextSecondary = styled.p`
    font-size: 1.2rem;
    margin: 2.5px 0;
    color: var(--color-secondary);
`;

export const HeaderPanel = styled.div`
    display: flex;
    box-shadow: 0px 10px 10px -10px rgba(72, 84, 159, 0.100397);
    justify-content: space-between;
    margin-top: 30px;
    background-color: var(--color-background-invoice-link);
    border-radius: 8px;
    padding: 1.5rem 2.5rem;
`;
export const PanelStatus = styled.div`
    display: flex;
    align-items: center;
    & p {
        margin-right: 20px;
    }
    @media (max-width: 576px) {
        width: 100%;
        justify-content: space-between;
    }
`;
export const PanelButtons = styled.div`
    display: flex;
    @media (max-width: 576px) {
        position: absolute;
        display: flex;
        justify-content: center;
        top: 105%;
        padding: 1.3rem;
        width: 100vw;
        overflow: hidden;
        left: -5vw;
        background-color: var(--color-background-invoice-link);
    }
`;

export const InvoiceButton = styled.button`
    display: flex;
    cursor: pointer;
    border-radius: 24px;
    align-items: center;
    color: #fff;
    margin-left: 15px;
    padding: 1.5rem 2rem;
    background-color: ${({ color }) => color};
    ${({ edit }) =>
        edit &&
        css`
            background-color: ${({ isDarkMode }) =>
                isDarkMode ? '#252945' : '#F9FAFE'};
            color: ${({ isDarkMode }) => (isDarkMode ? '#DFE3FA' : '#7E88C3')};
        `}
    font-weight: 700;
    &:hover {
        opacity: 0.8;
    }
`;

export const InvoiceMain = styled.main`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    box-shadow: 0px 10px 10px -10px rgba(72, 84, 159, 0.100397);
    background-color: var(--color-background-invoice-link);
    padding: 4rem 6rem;
    border-radius: 8px;
    min-height: 500px;
    @media (max-width: 576px) {
        padding: 2rem;
    }
`;

export const BillHeader = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 35px;
    @media (max-width: 576px) {
        flex-direction: column;
        height: 140px;
    }
`;

export const BillWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;
export const BillItem = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 100px;
`;
export const InvoiceNumber = styled.span`
    color: var(--color-primary);
    margin-bottom: 5px;
    font-weight: 700;
    font-size: 1.6rem;
    & span {
        color: #888eb0;
    }
`;

export const BillMain = styled.div`
    display: flex;
    justify-content: space-between;
    @media (max-width: 576px) {
        flex-wrap: wrap;
    }
`;
export const TextPrimaryLarge = styled.p`
    color: var(--color-primary);
    font-size: 1.6rem;
    font-weight: 700;
    margin-top: 10px;
    height: 60px;
`;
export const ListAmountDue = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 0 0 8px 8px;
    padding: 3rem 3rem;
    color: #fff;

    background-color: ${({ isDarkMode }) =>
        isDarkMode ? '#0C0E16' : '#373B53'};
    & span {
        font-size: 2.4rem;
        font-weight: 700;
    }
    & p {
        font-size: 1.2rem;
    }
`;

export const DetailsWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ListItems = styled.div`
    display: flex;
    background-color: ${({ isDarkMode }) =>
        isDarkMode ? '#252945' : '#F9FAFE'};
    margin-top: 15px;
    flex-direction: column;
    border-radius: 8px 8px 0 0;
    min-height: 200px;
    padding: 2rem 3rem;
`;

export const ItemTextSecondary = styled.p`
    color: var(--color-secondary);
    font-weight: 700;
    font-size: 1.2rem;
    & span.qty {
        display: none;
        margin-left: 5px;
        @media (max-width: 576px) {
            display: inline-block;
        }
    }
`;
//----
export const ItemTextPrimary = styled.p`
    color: var(--color-primary);
    font-size: 1.2rem;
    font-weight: 700;
`;

export const ItemWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
`;
export const ItemDetails = styled.div`
    display: flex;
    justify-content: space-between;
    width: 85%;
    @media (max-width: 576px) {
        flex-direction: column;
    }
`;
export const ItemDetailsAmount = styled.div`
    display: flex;
    justify-content: space-between;
    width: 40%;
    min-width: 100px;
    & p.qty {
        width: 25px;
        text-align: center;
    }
    @media (max-width: 576px) {
        margin-top: 20px;
    }
`;
export const ItemDetailsTotal = styled.div`
    display: flex;
    color: var(--color-primary);
    width: 33%;
    justify-content: flex-end;
    margin-right: 15px;
    font-weight: 700;
    font-size: 1.2rem;
    align-items: center;
`;
export const HeaderItem = styled(ItemWrapper)`
    margin-bottom: 20px;
    @media (max-width: 576px) {
        display: none;
    }
`;
export const HeaderItemText = styled.div`
    color: var(--color-secondary);
    font-size: 1.1rem;
    font-weight: 300;
`;
export const HeaderItemTotal = styled(ItemDetailsTotal)`
    font-weight: 300;
    font-size: 1.1rem;
    color: var(--color-secondary);
`;
