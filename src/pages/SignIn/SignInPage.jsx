import { useNavigate } from "react-router-dom";
import { appRoutes } from "../../lib/appRoutes";
import * as S from "../../styled/common/SignPages.styled";
import { GlobalStyleSignPage } from "../../styled/global/SignPagesGlobal.styled";
import { useState } from "react";
import { signIn } from "../../api/api";
import { useUser } from "../../hooks/useUser";
import SignInForm from "../../components/SignIn/SignInForm/SignInForm";

export default function SignInPage() {
  const { login } = useUser();
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({ login: "", password: "" });
  const [isNotCorrect, setIsNotCorrect] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    await signIn(loginData)
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
                <h2>Вход</h2>
              </S.ModalTitleSignPage>
              <SignInForm
                loginData={loginData}
                isNotCorrect={isNotCorrect}
                handleInputChange={handleInputChange}
                handleLogin={handleLogin}
              />
            </S.ModalBlockSignPage>
          </S.ModalSignPage>
        </S.ContainerSignPage>
      </S.WrapperSignPage>
    </>
  );
}
