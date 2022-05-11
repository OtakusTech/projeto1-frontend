import { Button } from 'reactstrap';
import styled from 'styled-components';

export const StyledButton = styled(Button)`
  background-color: ${props => props.color};
  color: white;
`;