import React from "react";
import styled from "styled-components";

const Button = styled.button`
    display: flex;
    align-items: center;
    padding: 0.3rem 0.7rem;
    background-color: transparent;
    border: 1px solid #3ea6ff;
    color: #3ea6ff;
    border-radius: 0.19rem;
    font-weight: 500;
    cursor: pointer;
    height: 1.5rem;
    width: 3.4rem;
`;

const FilterButton = ({ fetchTransactions }) => {
    return <Button onClick={fetchTransactions}>Filter</Button>;
};

export default FilterButton;
