import * as S from "./PopExit.styled";

export default function PopExit() {
  return (
    <S.PopExit>
      <S.PopExitContainer>
        <S.PopExitBlock>
          <S.PopExitTitle>
            <h2>Выйти из аккаунта?</h2>
          </S.PopExitTitle>
          <form className="pop-exit__form" id="formExit" action="#">
            <S.PopExitFormGroup>
              <S.PopExitYes>
                <a href="modal/signin.html">Да, выйти</a>{" "}
              </S.PopExitYes>
              <S.PopExitNo>
                <a href="main.html">Нет, остаться</a>{" "}
              </S.PopExitNo>
            </S.PopExitFormGroup>
          </form>
        </S.PopExitBlock>
      </S.PopExitContainer>
    </S.PopExit>
  );
}
