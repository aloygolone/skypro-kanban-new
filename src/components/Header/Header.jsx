import { useState } from "react";
import PopUser from "../popups/PopUser/PopUser";
import * as S from "./Header.styled";
import { Container } from "../../styled/common/Common.styled";
import PopNewCard from "../popups/PopNewCard/PopNewCard";

export default function Header() {
  const [isOpenUser, setIsOpenUser] = useState(false);
  const [isOpenNewCard, setIsOpenNewCard] = useState(false);
  const togglePopUser = () => setIsOpenUser((prevState) => !prevState);
  const togglePopNewCard = () => setIsOpenNewCard((prevState) => !prevState);

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
            <S.HeaderBtnMainNew onClick={togglePopNewCard}>
              Создать новую задачу
            </S.HeaderBtnMainNew>
            {isOpenNewCard && <PopNewCard />}
            <S.HeaderUser onClick={togglePopUser}>Ivan Ivanov</S.HeaderUser>
            {isOpenUser && <PopUser />}
          </S.HeaderNav>
        </S.HeaderBlock>
      </Container>
    </S.StyledHeader>
  );
}
