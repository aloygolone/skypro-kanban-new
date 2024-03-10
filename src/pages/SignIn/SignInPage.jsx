import * as S from "./SignInPage.styled";

export default function SignIn() {
  return (
    <>
      <S.GlobalStyleSignIn />
      <S.WrapperSignIn>
        <S.ContainerSignIn>
          <S.ModalSignIn>
            <S.ModalBlockSignIn>
              <S.ModalTitleSignIn>
                <h2>Вход</h2>
              </S.ModalTitleSignIn>
              <S.ModalFormLogin>
                <S.ModalInput type="text" placeholder="Эл. почта" />
                <S.ModalInput type="password" placeholder="Пароль" />
                <S.ModalButtonEnter>
                  <a href="../main.html">Войти</a>
                </S.ModalButtonEnter>
                <S.ModalFormGroup>
                  <p>Нужно зарегистрироваться?</p>
                  <a href="signup.html">Регистрируйтесь здесь</a>
                </S.ModalFormGroup>
              </S.ModalFormLogin>
            </S.ModalBlockSignIn>
          </S.ModalSignIn>
        </S.ContainerSignIn>
      </S.WrapperSignIn>
    </>
  );
}
