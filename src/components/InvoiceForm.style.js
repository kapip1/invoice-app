import styled, { css } from 'styled-components';

export const InvoiceInputContainer = styled.div`
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    height: 75vh;
    padding: 0 5rem;
    @media (max-width: 576px) {
        padding: 0 2.5rem;
        height: 68.5vh;
    }
`;
export const InvoiceFormTitle = styled.h2`
    color: var(--color-primary);
    font-size: 2.4rem;
    font-weight: 700;
    padding: 2.5rem 5rem 0 5rem;
    & span {
        color: #888eb0;
    }
    @media (max-width: 576px) {
        padding: 2.5rem 2.5rem 1rem 2.5rem;
    }
`;
export const InvoiceFormCategory = styled.span`
    font-size: 1.2rem;
    margin: 20px 0 10px 0;
    font-weight: 700;
    color: #7c5dfa;
`;

export const InvoiceFormInputContainer = styled.div`
    display: flex;
    margin-top: 15px;
    flex-wrap: wrap;
    justify-content: space-between;
    ${({ select }) =>
        select &&
        css`
            margin-top: 45px;
        `}
    @media (max-width: 576px) {
    }
`;

export const InvoiceFormLabel = styled.label`
    display: flex;
    color: var(--color-secondary);
    flex-direction: column;

    margin: 5px 5px;
    width: ${({ size }) => size + '%'};
    ${({ error }) =>
        error &&
        css`
            & input {
                border: 1px solid #ec5757;
            }
        `};

    @media (max-width: 576px) {
        flex-grow: 1;
        width: ${({ size }) => size * 1.3 + '%'};
    }
`;

export const InvoiceFormInput = styled.input`
    border-radius: 8px;
    font-size: 1.2rem;
    margin-top: 9px;
    font-weight: 700;
    transition: 0.2s;
    background-color: var(--color-inputBackground);
    color: var(--color-primary);
    border: 1px solid var(--color-border-input);
    min-height: 48px;
    padding: 1.5rem 2rem;
    ${({ qty }) =>
        qty &&
        css`
            padding: 1.5rem 1rem;
        `};
    &:focus {
        outline: none;
        border: 1px solid #9277ff;
    }
`;

export const InvoiceFormSelect = styled.select`
    margin-top: 9px;
    cursor: pointer;
    font-weight: 700;
    color: var(--color-primary);
    height: 48px;
    padding: 1rem;
    border-radius: 8px;
    border: 1px solid var(--color-border-input);
    background-color: var(--color-inputBackground);
    &:focus {
        outline: none;
    }
`;
export const InvoiceFormSelectOption = styled.option``;

export const DeleteButtonContainer = styled.div`
    display: flex;
    height: 60px;
    align-items: center;
`;

export const InvoiceListLabel = styled.label`
    margin-top: 6px;
    width: ${({ size }) => size + 'px'};
    flex-grow: 1;
    margin: 3px 5px 0 5px;
    & input {
        width: 100%;
    }
    @media (max-width: 576px) {
        width: ${({ size }) => (size > 200 ? size * 1.5 + 'px' : size + 'px')};
    }
`;
export const InvoiceListLabelName = styled.span`
    display: none;
    color: var(--color-secondary);
    font-size: 1.2rem;
    margin-top: 5px;
    @media (max-width: 576px) {
        display: inline-block;
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
    margin-bottom: 30px;
    align-items: center;
    @media (max-width: 576px) {
        flex-wrap: wrap;
    }
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
    background-color: transparent;
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

export const InvoiceFormWrapper = styled.form`
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-around;
`;

export const ButtonsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 1rem;
    padding: 2.5rem 5rem 0 5rem;
    ${({ edit }) =>
        edit &&
        css`
            justify-content: flex-end;
            & div {
                width: 150px;
                justify-content: flex-end;
            }
        `}
    @media (max-width: 576px) {
        padding: 0.5rem;
    }
`;

export const ButtonsSave = styled.div`
    display: flex;
    justify-content: space-between;
    width: 245px;
`;

export const InvoiceButton = styled.button`
    border-radius: 24px;
    padding: 2rem;
    font-size: 1.1rem;
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

export const ErrorMassage = styled.div`
    display: flex;
    color: #ec5757; ;
`;
