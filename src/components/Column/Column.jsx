import Card from "../Card/Card";

export default function Column({ title, cardList }) {
  return (
    <div className="main__column column">
      <div className="column__title">
        <p>{title}</p>
      </div>
      <div className="cards">
        {cardList.map((card) => (
          <Card
            theme={card.theme}
            title={card.title}
            date={card.date}
            key={card.id}
            status={card.status}
          />
        ))}
      </div>
    </div>
  );
}