import styled from 'styled-components';

export const StyledContainer = styled.div`
    display: flex;
    flex-direction: ${props => props.dir ? props.dir : 'row'};
    align-items: ${props => props.align ? props.align : 'center'};
    justify-content: ${props => props.jc ? props.jc : 'space-between'};
    width: ${props => props.width ? props.width : '100%'};
`