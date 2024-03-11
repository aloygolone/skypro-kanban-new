import { Link } from "react-router-dom";
import * as S from "./PopUser.styled";
import { appRoutes } from "../../../lib/appRoutes";

export default function PopUser() {
  return (
    <S.HeaderPopUserSet>
      <S.PopUserSetName>Ivan Ivanov</S.PopUserSetName>
      <S.PopUserSetMail>ivan.ivanov@gmail.com</S.PopUserSetMail>
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
