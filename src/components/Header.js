import React, { useContext, useRef, useEffect, useState } from 'react';

import styled, { css } from 'styled-components';

import { AppContext } from '../AppContext';

import iconArrow from '../assets/icon-arrow-down.svg';
import iconAdd from '../assets/icon-add.svg';
import iconCheck from '../assets/icon-check.svg';

const HeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--color-primary);
    font-size: 1.2rem;
`;

const HeaderTitle = styled.h1`
    font-size: 3.2rem;
    @media (max-width: 576px) {
        font-size: 2rem;
    }
`;

const HeaderCount = styled.span`
    color: var(--color-secondary);
`;

const HeaderContentWrapper = styled.div``;

const HeaderSettingsWrapper = styled.div`
    display: flex;
    align-items: center;
`;

const HeaderFilter = styled.button`
    display: flex;
    align-items: center;
    cursor: pointer;
    background-color: transparent;
    border: none;
    font-weight: 700;
    color: inherit;
    & span {
        margin-left: 3px;
        @media (max-width: 576px) {
            display: none;
            margin-left: none;
        }
    }
    & img {
        transition: 0.2s;
        transform: rotate(
            ${({ isFilterOpen }) => (isFilterOpen ? '-180deg' : '0')}
        );
        margin-left: 5px;
    }
`;

const HeaderButton = styled.button`
    display: flex;
    align-items: center;
    padding: 5px;
    border-radius: 100px;
    cursor: pointer;
    color: #fff;
    font-weight: 700;
    width: 150px;
    margin-left: 60px;
    background-color: hsl(252, 94%, 67%);
    & img {
        margin-right: 10px;
    }
    & span {
        margin-left: 3px;
    }
    @media (max-width: 576px) {
        width: fit-content;
        margin-left: 30px;
        padding-right: 15px;
        & span {
            display: none;
        }
    }
`;

const HeaderList = styled.div`
    display: flex;
    opacity: 0;
    visibility: hidden;
    transition: 0.25s;
    ${({ isFilterOpen }) =>
        isFilterOpen
            ? css`
                  opacity: 1;
                  visibility: visible;
              `
            : 'none'};
    flex-direction: column;
    justify-content: space-around;
    position: absolute;
    padding: 1.5rem 2rem;
    list-style: none;
    margin-top: 45px;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 370%;
    width: 192px;
    height: 125px;
    background-color: var(--color-background-primary);
    border-radius: 8px;
    box-shadow: ${({ isDarkMode }) =>
        isDarkMode ? null : '0px 10px 20px rgba(72, 84, 159, 0.25)'};
`;

const HeaderItem = styled.label`
    display: flex;
    cursor: pointer;
    &:hover {
        & input::after {
            border: 1px solid #7c5dfa;
        }
    }
    & input {
        cursor: pointer;
    }
`;

const HeaderFilterWrapper = styled.div`
    position: relative;
`;

const FilterTitle = styled.span`
    margin-left: 15px;
`;

const FilterCheckBox = styled.input`
    position: relative;
    &::after {
        content: '';
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 16px;
        height: 16px;
        background-color: var(--color-backhround-checkBox);
        border-radius: 3px;
    }
    ${({ checked }) =>
        checked &&
        css`
            &::before {
                content: '';
                position: absolute;
                z-index: 2;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
                width: 16px;
                height: 16px;
                border-radius: 3px;
                background: url(${iconCheck}) no-repeat center #7c5dfa;
            }
        `}
`;

const defFilters = [
    {
        id: 'paid',
        name: 'Paid',
        active: false,
    },
    {
        id: 'pending',
        name: 'Pending',
        active: false,
    },
    {
        id: 'draft',
        name: 'Draft',
        active: false,
    },
];

function Header() {
    const {
        isDarkMode,
        isFilterOpen,
        handleFilterOpen,
        handleIsSliderOpen,
        data,
        getFilterType,
        filterType,
    } = useContext(AppContext);

    const dropdown = useRef();

    const handleDropDownClose = (e) => {
        if (dropdown.current && !dropdown.current.contains(e.target)) {
            handleFilterOpen('close');
        }
    };

    const [filters, setFilters] = useState(defFilters);

    const handleCheckBoxClick = (e) => {
        const filtersCopy = [...filters];
        const id = e.target.id;
        const currentFilter = filtersCopy.filter((item) => item.id === id);
        for (let i = 0; i < filtersCopy.length; i++) {
            filtersCopy[i].id !== currentFilter[0].id
                ? (filtersCopy[i].active = false)
                : (filtersCopy[i].active = !filtersCopy[i].active);
        }
        setFilters(filtersCopy);
        getFilterType(filters);
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleDropDownClose);
        return () =>
            document.removeEventListener('mousedown', handleDropDownClose);
    });

    const listLength = () => {
        const lengthData = data.filter((item) => item.status === filterType);

        const resultLength =
            filterType === 'total' ? data.length : lengthData.length;

        return resultLength;
    };

    return (
        <HeaderWrapper>
            <HeaderContentWrapper>
                <HeaderTitle>Invoices</HeaderTitle>
                <HeaderCount>
                    There are {listLength()} {filterType} invoices
                </HeaderCount>
            </HeaderContentWrapper>
            <HeaderSettingsWrapper>
                <HeaderFilterWrapper ref={dropdown}>
                    <HeaderFilter
                        onClick={() => handleFilterOpen('toggle')}
                        isFilterOpen={isFilterOpen}
                    >
                        Filter <span>by status</span>
                        <img src={iconArrow} alt='arrow icon' />
                    </HeaderFilter>
                    <HeaderList
                        isDarkMode={isDarkMode}
                        isFilterOpen={isFilterOpen}
                    >
                        {filters.map((filter) => (
                            <HeaderItem key={filter.id}>
                                <FilterCheckBox
                                    type='checkbox'
                                    checked={filter.active}
                                    id={filter.id}
                                    onChange={handleCheckBoxClick}
                                />
                                <FilterTitle>{filter.name}</FilterTitle>
                            </HeaderItem>
                        ))}
                    </HeaderList>
                </HeaderFilterWrapper>
                <HeaderButton onClick={() => handleIsSliderOpen('openAdd')}>
                    <img src={iconAdd} alt='add icon' /> New{' '}
                    <span> Invoice</span>
                </HeaderButton>
            </HeaderSettingsWrapper>
        </HeaderWrapper>
    );
}

export default Header;
