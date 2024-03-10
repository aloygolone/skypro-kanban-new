import { Container } from "../../styled/common/Common.styled";
import { MainBlock, MainStyled } from "./MainContent.styled";

export default function MainContent({ children }) {
  return (
    <MainStyled>
      <Container>
        <MainBlock>
          <div className="main__content">{children}</div>
        </MainBlock>
      </Container>
    </MainStyled>
  );
}
