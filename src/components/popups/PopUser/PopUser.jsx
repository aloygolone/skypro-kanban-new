import * as S from "./PopUser.styled";

export default function PopUser() {
  return (
    <S.HeaderPopUserSet>
      <S.PopUserSetName>Ivan Ivanov</S.PopUserSetName>
      <S.PopUserSetMail>ivan.ivanov@gmail.com</S.PopUserSetMail>
      <S.PopUserSetTheme>
        <p>Темная тема</p>
        <input type="checkbox" className="checkbox" name="checkbox" />
      </S.PopUserSetTheme>
      <S.PopUserButton>
        <a href="#popExit">Выйти</a>
      </S.PopUserButton>
    </S.HeaderPopUserSet>
  );
}
