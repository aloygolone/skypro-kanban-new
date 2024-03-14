import { Link } from "react-router-dom";
import * as S from "../../../styled/common/SignPages.styled";
import { appRoutes } from "../../../lib/appRoutes";

export default function SignInForm({
  loginData,
  isNotCorrect,
  handleInputChange,
  handleLogin,
}) {
  return (
    <S.ModalFormLoginSignPage>
      <S.ModalInputSignPage
        value={loginData.login}
        onChange={handleInputChange}
        type="text"
        name="login"
        placeholder="Эл. почта"
      />
      <S.ModalInputSignPage
        value={loginData.password}
        onChange={handleInputChange}
        type="password"
        name="password"
        placeholder="Пароль"
      />
      <S.ModalButtonEnterSignPage onClick={handleLogin}>
        Войти
      </S.ModalButtonEnterSignPage>
      {isNotCorrect
        ? "Введенные вами данные не распознаны. Проверьте свой логин и пароль и повторите попытку входа."
        : ""}
      <S.ModalFormGroupSignPage>
        <p>Нужно зарегистрироваться?</p>
        <Link to={appRoutes.SIGNUP}>
          <span>Регистрируйтесь здесь</span>
        </Link>
      </S.ModalFormGroupSignPage>
    </S.ModalFormLoginSignPage>
  );
}
