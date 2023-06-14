import React from "react";
import styled from "styled-components";

const Shop = "Grocery Shop";

const Container = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Title = styled.h1`
    font-size: 2rem;
    font-weight: 500;
    margin-bottom: 20px;
    margin: 0.5rem;
`;

const Dates = styled.p`
    font-size: 1.2rem;
    font-weight: 500;
    color: #202020;
    margin-top: 0.5rem;
    margin-bottom: 3rem;
`;

const Header = ({ from, to }) => {
    return (
        <Container>
            <Title>{Shop}</Title>
            <Dates>
                Dates: {from} - {to}
            </Dates>
        </Container>
    );
};

export default Header;
