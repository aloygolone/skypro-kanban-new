import { styled } from "styled-components";
import { themeStyles } from "../../lib/ThemeColor";

export const ThemeText = styled.p`
  font-size: 10px;
  font-weight: 600;
  line-height: 10px;
`;

export const CardTheme = styled.div`
  width: auto;
  height: 20px;
  padding: 5px 14px;
  border-radius: 18px;
  
  background-color: ${({ $themeColor }) =>
    themeStyles[$themeColor]?.backgroundColor || "#94a6be"};

  ${ThemeText} {
    color: ${({ $themeColor }) => themeStyles[$themeColor]?.color || "#ffffff"};
  }
`;