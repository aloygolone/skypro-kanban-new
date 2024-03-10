import Card from "../Card/Card";

export default function Column({ title }) {
  return (
    <div className="main__column column">
      <div className="column__title">
        <p>{title}</p>
      </div>
      <div className="cards">
        <Card theme={"Web design"} title={"Новая задача"} date={"30.10.23"} />
        <Card theme={"Web design"} title={"Новая задача"} date={"30.10.23"} />
        <Card theme={"Web design"} title={"Новая задача"} date={"30.10.23"} />
        <Card theme={"Web design"} title={"Новая задача"} date={"30.10.23"} />
        <Card theme={"Web design"} title={"Новая задача"} date={"30.10.23"} />
      </div>
    </div>
  );
}
