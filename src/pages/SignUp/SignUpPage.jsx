import * as S from "../../styled/common/SignPages.styled";

export default function SignUp() {
  return (
    <S.WrapperSignPage>
      <S.ContainerSignPage>
        <S.ModalSignPage>
          <S.ModalBlockSignPage>
            <S.ModalTitleSignPage>
              <h2>Регистрация</h2>
            </S.ModalTitleSignPage>
            <S.ModalFormLoginSignPage>
              <S.ModalInputSignPage
                type="text"
                name="first-name"
                id="first-name"
                placeholder="Имя"
              />
              <S.ModalInputSignPage
                type="text"
                name="login"
                id="loginReg"
                placeholder="Эл. почта"
              />
              <S.ModalInputSignPage
                type="password"
                name="password"
                id="passwordFirst"
                placeholder="Пароль"
              />
              <S.ModalButtonEnterSignPage>
                <a href="../main.html">Зарегистрироваться</a>{" "}
              </S.ModalButtonEnterSignPage>
              <S.ModalFormGroupSignPage>
                <p>
                  Уже есть аккаунт? <a href="signin.html">Войдите здесь</a>
                </p>
              </S.ModalFormGroupSignPage>
            </S.ModalFormLoginSignPage>
          </S.ModalBlockSignPage>
        </S.ModalSignPage>
      </S.ContainerSignPage>
    </S.WrapperSignPage>
  );
}
