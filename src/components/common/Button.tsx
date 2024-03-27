import { ButtonHTMLAttributes, PropsWithChildren } from "react";
import styled from "styled-components";
import { THEME } from "../../styles/theme";

const Button = ({
  onClick,
  color = "INACTIVE-BUTTON",
  textColor = "FONT-COLOR-A",
  children,
  ...props
}: PropsWithChildren<{
  onClick: () => void;
  color: keyof typeof THEME.COLORS;
  textColor?: keyof typeof THEME.COLORS;
  props?: ButtonHTMLAttributes<Element>;
}>) => {
  return (
    <ButtonContainer
      textColor={textColor}
      color={color}
      onClick={onClick}
      {...props}
    >
      {children}
    </ButtonContainer>
  );
};

export default Button;

const ButtonContainer = styled.button<{
  color: keyof typeof THEME.COLORS;
  textColor: keyof typeof THEME.COLORS;
}>`
  width: 265px;
  height: 52px;
  padding: 13px 0;
  gap: 8px;
  border-radius: 30px;
  border: none;
  opacity: 0px;
  color: ${({ theme, textColor }) => theme.COLORS[textColor] || textColor};
  background-color: ${({ theme, color }) => theme.COLORS[color] || color};
  font-size: 20px;
`;