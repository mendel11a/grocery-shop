import React from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 0.6rem;
`;

const Input = styled.input`
    border: 1px solid #373737;
    border-radius: 0.19rem;
    padding: 0.2em;
    background-color: transparent;
    text-align: center; 
`;

const DateInput = ({ text, type, value, setData }) => {
    return (
        <Container>
            {text}:
            <Input
                type={type}
                value={value}
                onChange={(e) => setData(e.target.value)}
            />
        </Container>
    );
};

export default DateInput;
