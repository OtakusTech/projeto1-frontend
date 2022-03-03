import { Button, Input } from 'reactstrap';
import styled from 'styled-components';

export const Image = styled.img`
    width: 100px;
    height: 100px;
`;

export const StyledInput = styled(Input)`
    position: absolute;
    z-index: 2;
    width: 130px;
    padding: 0;
    height: 30px;
    margin: 0;
    opacity: 0;
`;

export const StyledButton = styled(Button)`
    z-index: 1;
`;