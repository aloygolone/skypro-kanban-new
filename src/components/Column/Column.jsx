import Card from "../Card/Card";
import { Cards, ColumnTitle, MainColumn } from "./Column.styled";

export default function Column({ title, cardList }) {
  return (
    <MainColumn>
      <ColumnTitle>
        <p>{title}</p>
      </ColumnTitle>
      <Cards>
        {cardList.map((card) => (
          <Card
            theme={card.theme}
            title={card.title}
            date={card.date}
            key={card.id}
            status={card.status}
            id={card.id}
          />
        ))}
      </Cards>
    </MainColumn>
  );
}
