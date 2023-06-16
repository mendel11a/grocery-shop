import React from "react";
import styled from "styled-components";


const Message = styled.h2`
  font-size: 20px;
  font-weight: 300;
  color: red;
  text-align:center;
`;

const Error = ({errorMessage}) =>{
    return (
        <Message> **{errorMessage}</Message>
    )
}

export default Error;