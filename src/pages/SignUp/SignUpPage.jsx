import { useNavigate } from "react-router-dom";
import { signUp } from "../../api/api";
import * as S from "../../styled/common/SignPages.styled";
import { appRoutes } from "../../lib/appRoutes";
import { useState } from "react";
import { useUser } from "../../hooks/useUser";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import { GlobalStyleSignPage } from "../../styled/global/SignPagesGlobal.styled";

export default function SignUpPage() {
  const { login } = useUser();
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    login: "",
    name: "",
    password: "",
  });
  const [isNotFilled, setIsNotFilled] = useState(false);
  const [isNotCorrect, setIsNotCorrect] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setIsNotCorrect(false);
    setIsNotFilled(false);

    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (loginData.login === "" || loginData.name === "" || loginData.password === "") {
      setIsNotFilled(true)
      return;
    }

    await signUp(loginData)
      .then((data) => {
        login(data.user);
        navigate(appRoutes.HOME);
      })
      .catch(() => {
        setIsNotCorrect(true);
      });
  };

  return (
    <>
      <GlobalStyleSignPage />
      <S.WrapperSignPage>
        <S.ContainerSignPage>
          <S.ModalSignPage>
            <S.ModalBlockSignPage>
              <S.ModalTitleSignPage>
                <h2>Регистрация</h2>
              </S.ModalTitleSignPage>
              <SignUpForm
                isNotFilled={isNotFilled}
                isNotCorrect={isNotCorrect}
                handleInputChange={handleInputChange}
                handleSignUp={handleSignUp}
              />
            </S.ModalBlockSignPage>
          </S.ModalSignPage>
        </S.ContainerSignPage>
      </S.WrapperSignPage>
    </>
  );
}
