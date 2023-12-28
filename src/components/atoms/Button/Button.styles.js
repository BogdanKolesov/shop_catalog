import styled from 'styled-components';

export const StyledButton = styled.button`
background-color: transparent;
border: 1.5px solid gray;
font-size: 16px;
padding: 3px;
padding-left: 10px;
padding-right: 10px;
transition: cubic-bezier(0.075, 0.82, 0.165, 1);
    &:hover{
        font-size: 20px;
    }
`