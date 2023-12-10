import { StyledButton } from "./styled"

const Button = ({ color, onClick, label, className = "mt-4" }) => {
  return (
    <StyledButton
      block
      className={className}
      color={color}
      onClick={onClick}
    >
      {label}
    </StyledButton>
  )
};

export default Button;