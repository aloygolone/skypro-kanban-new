import { useEffect, useState } from "react";
import { GlobalStyle } from "../../styled/global/Global.styled";
import { WrapperStyled } from "../../styled/common/Common.styled";
import Header from "../../components/Header/Header";
import MainContent from "../../components/MainContent/MainContent";
import Column from "../../components/Column/Column";
import { Outlet } from "react-router-dom";
import { getTodos } from "../../api/api";

const statusList = [
  "Без статуса",
  "Нужно сделать",
  "В работе",
  "Тестирование",
  "Готово",
];

export default function HomePage({ user }) {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getTodos({ token: user.token }).then((todos) => {
      setCards(todos.tasks);
      setIsLoading(false);
    }).catch((error) => {
      alert (error);
    })
  }, [user]);

  const addCard = () => {
    const newCard = {
      id: cards.length + 1,
      theme: "Web Design",
      title: "Название задачи",
      date: "30.10.23",
      status: "Без статуса",
    };
    setCards([...cards, newCard]);
  };

  return (
    <>
      <GlobalStyle />
      <WrapperStyled>
        <Outlet />

        <Header addCard={addCard} />
        {isLoading ? (
          "Данные загружаются..."
        ) : (
          <MainContent>
            {statusList.map((status) => (
              <Column
                title={status}
                key={status}
                cardList={cards.filter((card) => card.status === status)}
              />
            ))}
          </MainContent>
        )}
      </WrapperStyled>
    </>
  );
}
