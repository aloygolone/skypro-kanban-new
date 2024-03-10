import { useState } from "react";
import PopUser from "../popups/PopUser/PopUser";
import * as S from "./Header.styled";
import { Container } from "../../styled/common/Common.styled";

export default function Header({ addCard }) {
  const [isOpen, setIsOpen] = useState(false);
  const togglePopUser = () => setIsOpen((prevState) => !prevState);

  return (
    <S.StyledHeader>
      <Container>
        <S.HeaderBlock>
          <S.HeaderLogo>
            {/* className="header__logo _light" */}
            <a href="" target="_self">
              <img src="images/logo.png" alt="logo" />
            </a>
          </S.HeaderLogo>
          <S.HeaderLogo>
            {/* div className="header__logo _dark" */}
            <a href="" target="_self">
              <img src="images/logo_dark.png" alt="logo" />
            </a>
          </S.HeaderLogo>
          <S.HeaderNav>
            <S.HeaderBtnMainNew onClick={addCard}>
              Создать новую задачу
            </S.HeaderBtnMainNew>
            <S.HeaderUser onClick={togglePopUser}>Ivan Ivanov</S.HeaderUser>
            {isOpen && <PopUser />}
          </S.HeaderNav>
        </S.HeaderBlock>
      </Container>
    </S.StyledHeader>
  );
}
