import { Link } from "react-router-dom";
import * as S from "../../styled/common/SignPages.styled";
import { appRoutes } from "../../lib/appRoutes";

export default function SignUpForm({ handleInputChange, handleSignUp, isNotFilled, isNotCorrect }) {
  return (
    <S.ModalFormLoginSignPage>
      <S.ModalInputSignPage
        onChange={handleInputChange}
        type="text"
        name="name"
        id="first-name"
        placeholder="Имя"
        $isNotFilled={isNotFilled}
      />
      <S.ModalInputSignPage
        onChange={handleInputChange}
        type="email"
        name="login"
        id="loginReg"
        placeholder="Эл. почта"
        required
        $isNotFilled={isNotFilled}
      />
      <S.ModalInputSignPage
        onChange={handleInputChange}
        type="password"
        name="password"
        id="passwordFirst"
        placeholder="Пароль"
        $isNotFilled={isNotFilled}
      />
      {isNotFilled ? (
      <S.NotCorrectText>
        Введенные вами данные не корректны. Чтобы завершить регистрацию,
        заполните все поля в форме.
      </S.NotCorrectText>) : ("")}
      {isNotCorrect ? (<S.NotCorrectText>
        Введенные вами данные не корректны. Чтобы завершить регистрацию, введите
        данные корректно и повторите попытку.
      </S.NotCorrectText>) : ("")}
      <S.ModalButtonEnterSignPage onClick={handleSignUp}>
        Зарегистрироваться
      </S.ModalButtonEnterSignPage>
      <S.ModalFormGroupSignPage>
        <p>
          Уже есть аккаунт? <Link to={appRoutes.SIGNIN}>Войдите здесь</Link>
        </p>
      </S.ModalFormGroupSignPage>
    </S.ModalFormLoginSignPage>
  );
}
