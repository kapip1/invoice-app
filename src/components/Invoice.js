import React, { useContext } from 'react';

import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { AppContext } from '../AppContext';

const InvoiceWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: black;
`;

function Invoice({ match }) {
    const { data } = useContext(AppContext);

    const currentInvoice = data.filter(
        (invoice) => invoice.id === match.params.id
    );

    return (
        <>
            {currentInvoice.map((invoice) => (
                <InvoiceWrapper key={invoice.id}>
                    <Link to='/'>back</Link>
                    <button>edit</button>
                    <h2>#{invoice.id}</h2>
                    <h1>{invoice.name}</h1>
                    <h3>${invoice.price}</h3>
                    <ul>
                        {invoice.list.map((item) => (
                            <li key={item.id}>
                                {item.name} <br /> ${item.price}
                            </li>
                        ))}
                    </ul>
                </InvoiceWrapper>
            ))}
        </>
    );
}

export default Invoice;
