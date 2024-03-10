import { Link } from "react-router-dom";
import * as S from "./PopExit.styled";
import { appRoutes } from "../../../lib/appRoutes";

export default function PopExit({ logout }) {
  return (
    <S.PopExit>
      <S.PopExitContainer>
        <S.PopExitBlock>
          <S.PopExitTitle>
            <h2>Выйти из аккаунта?</h2>
          </S.PopExitTitle>
          <form className="pop-exit__form" id="formExit" action="#">
            <S.PopExitFormGroup>
              <Link to={appRoutes.SIGNIN}>
                <S.PopExitYes onClick={logout}>Да, выйти </S.PopExitYes>
              </Link>
              <Link to={appRoutes.HOME}>
                <S.PopExitNo>Нет, остаться </S.PopExitNo>
              </Link>
            </S.PopExitFormGroup>
          </form>
        </S.PopExitBlock>
      </S.PopExitContainer>
    </S.PopExit>
  );
}
