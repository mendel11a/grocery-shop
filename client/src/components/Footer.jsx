import React from "react";
import styled from "styled-components";

const Copyright = "© 2023 Grocery Shop. All rights reserved.";

const Container = styled.footer`
    height: 100%;
    padding: 20px;
    text-align: center;
`;
const Text = styled.p`
    font-size: 14px;
    color: #888;
`;
const Footer = () => {
    return (
        <Container>
            <Text>{Copyright}</Text>
        </Container>
    );
};

export default Footer;
