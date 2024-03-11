import * as S from "../../styled/common/SignPages.styled";
import { GlobalStyleSignPage } from "../../styled/global/SignPagesGlobal.styled";

export default function SignIn({login}) {
  return (
    <>
      <GlobalStyleSignPage />
      <S.WrapperSignPage>
        <S.ContainerSignPage>
          <S.ModalSignPage>
            <S.ModalBlockSignPage>
              <S.ModalTitleSignPage>
                <h2>Вход</h2>
              </S.ModalTitleSignPage>
              <S.ModalFormLoginSignPage>
                <S.ModalInputSignPage type="text" placeholder="Эл. почта" />
                <S.ModalInputSignPage type="password" placeholder="Пароль" />
                <S.ModalButtonEnterSignPage onClick={login}>
                  Войти
                </S.ModalButtonEnterSignPage>
                <S.ModalFormGroupSignPage>
                  <p>Нужно зарегистрироваться?</p>
                  <a href="signup.html">Регистрируйтесь здесь</a>
                </S.ModalFormGroupSignPage>
              </S.ModalFormLoginSignPage>
            </S.ModalBlockSignPage>
          </S.ModalSignPage>
        </S.ContainerSignPage>
      </S.WrapperSignPage>
    </>
  );
}
