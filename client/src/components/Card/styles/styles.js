import styled from "styled-components";


export const StyledDot = styled.span`
height: 12px;
width: 12px;
border-radius: 50%;
display: inline-block;
margin-top: 5px;
background-color: ${props => props.color ? props.color : 'silver'};

`;



