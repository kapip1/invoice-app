import styled, { css } from 'styled-components';

export const InvoiceInputContainer = styled.div`
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    height: 720px;
    padding: 0rem 5rem;
    @media (max-width: 576px) {
        height: 600px;
    }
`;
export const InvoiceFormTitle = styled.h2`
    color: var(--color-primary);
    font-size: 2.4rem;
    font-weight: 700;
    padding: 2.5rem 5rem 0 5rem;
`;
export const InvoiceFormCategory = styled.span`
    font-size: 1.2rem;
    margin: 30px 0 10px 0;
    font-weight: 700;
    color: #7c5dfa;
`;

export const InvoiceFormInputContainer = styled.div`
    display: flex;
    margin-top: 15px;
    justify-content: space-between;
    ${({ select }) => select && `margin-top: 45px`}
`;

export const InvoiceFormLabel = styled.label`
    display: flex;
    color: var(--color-secondary);
    flex-direction: column;
    width: ${({ size }) => size};
`;

export const InvoiceFormInput = styled.input`
    display: flex;
    border-radius: 8px;
    font-size: 1.2rem;
    font-weight: 700;
    margin-top: 6px;
    background-color: var(--color-inputBackground);
    color: var(--color-primary);
    border: 1px solid var(--color-border-input);
    padding: 1.8rem 2.5rem;
    ${({ size }) =>
        size
            ? css`
                  width: ${size};
                  padding: 0;
                  height: 48px;
                  padding: 0 0.8rem;
              `
            : null};
    &:focus {
        outline: none;
    }
`;

export const ItemListTitle = styled.span`
    font-size: 1.8rem;
    color: #777f98;
    font-weight: 700;
    margin-top: 30px;
`;

export const ItemList = styled.ul`
    margin-top: 30px;
    list-style: none;
`;

export const ItemListItemHeader = styled.li`
    display: flex;
    justify-content: space-between;
    color: var(--color-secondary);
    font-size: 1.2rem;
    @media (max-width: 576px) {
        display: none;
    }
`;

export const ItemListHeaderName = styled.span`
    width: 214px;
    width: ${({ size }) => size};
`;

export const ItemListItem = styled.li`
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    align-items: center;
`;

export const ItemListNameTotal = styled(InvoiceFormInput)`
    color: var(--color-totalPrice);
    background-color: transparent;
    border: none;
`;

export const ItemListButton = styled.button`
    display: flex;
    margin-top: 25px;
    cursor: pointer;
    margin-bottom: 30px;
    font-weight: 700;
    width: 100%;
    border-radius: 24px;
    font-size: 1.2rem;
    background-color: var(--color-buttonForm);
    height: 48px;
    align-items: center;
    justify-content: center;
    color: #7e88c3;
`;

export const DeleteBasket = styled.button`
    cursor: pointer;
    width: 13px;
    height: 16px;
    & svg {
        & path {
            transition: 0.2s;
            &:hover {
                fill: #ec5757;
            }
        }
    }
`;

export const InvoiceFormWrapper = styled.div`
    display: flex;
    height: 100vh;
    flex-direction: column;
    justify-content: space-around;
`;

export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1rem 5rem;
`;

export const ButtonsSave = styled.div`
    display: flex;
    justify-content: space-between;
    width: 285px;
`;

export const InvoiceButton = styled.button`
    border-radius: 24px;
    padding: 2rem;
    cursor: pointer;
    transition: 0.2s;
    font-weight: 700;
    ${({ colorBg, colorFont }) => css`
        background-color: ${colorBg};
        color: ${colorFont};
    `};
    &:hover {
        opacity: 0.7;
    }
`;
