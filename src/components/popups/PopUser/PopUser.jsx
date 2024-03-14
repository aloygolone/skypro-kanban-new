import { Link } from "react-router-dom";
import * as S from "./PopUser.styled";
import { appRoutes } from "../../../lib/appRoutes";
import { useUser } from "../../../hooks/useUser";

export default function PopUser() {
  const { user } = useUser();
  return (
    <S.HeaderPopUserSet>
      <S.PopUserSetName>{user.name}</S.PopUserSetName>
      <S.PopUserSetMail>{user.login}</S.PopUserSetMail>
      <S.PopUserSetTheme>
        <p>Темная тема</p>
        <input type="checkbox" className="checkbox" name="checkbox" />
      </S.PopUserSetTheme>
      <Link to={appRoutes.EXIT}>
        <S.PopUserButton>Выйти</S.PopUserButton>
      </Link>
    </S.HeaderPopUserSet>
  );
}
