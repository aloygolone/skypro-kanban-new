import { Link, useNavigate, useParams } from "react-router-dom";
import { appRoutes } from "../../../lib/appRoutes";
import Calendar from "../../Calendar/Calendar";
import * as S from "./PopBrowse.styled";
import { useTasks } from "../../../hooks/useTasks";
import { themeNameColor } from "../../../lib/ThemeColor";
import { GlobalStyle } from "../../../styled/global/Global.styled";
import { useState } from "react";
import { CalendarStyled, TitleDate } from "../../Calendar/Calendar.styled";
import { statusList } from "../../../lib/statusList";
import { FormNewInputArea, ThemeInputs } from "../PopNewCard/PopNewCard.styled";
import { useUser } from "../../../hooks/useUser";
import { deleteTodo, putTodo } from "../../../api/api";
import { NotCorrectText } from "../../../styled/common/SignPages.styled";

export default function PopBrowse() {
  const { user } = useUser();
  const { id } = useParams();
  const { cards, setCards } = useTasks();
  const [isEditMode, setIsEditMode] = useState(false);
  const navigate = useNavigate();

  const openedCard = cards.filter((card) => card._id === id);
  const selectedCardData = {
    title: openedCard[0].title,
    description: openedCard[0].description,
    topic: openedCard[0].topic,
    status: openedCard[0].status,
    date: openedCard[0].date,
  };
  const [selectedDate, setSelectedDate] = useState(selectedCardData.date);
  const [editTask, setEditTask] = useState(selectedCardData);

  const handleEditMode = () => {
    setIsEditMode(true);
  };

  const handleDiscard = () => {
    setIsEditMode(false);
    setEditTask(selectedCardData);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setIsNotCorrect(false);

    setEditTask({
      ...editTask,
      [name]: value,
    });
  };

  const [isNotCorrect, setIsNotCorrect] = useState(false);

  const handleFormSave = async (e) => {
    e.preventDefault();
    if (editTask.description === "") {
      setIsNotCorrect(true);
      return;
    }
    const taskData = {
      ...editTask,
      date: selectedDate,
      token: user.token,
      id: id,
    };
    await putTodo(taskData).then((data) => {
      setCards(data.tasks);
      navigate(appRoutes.HOME);
    });
  };

  const handleFormDelete = async (e) => {
    e.preventDefault();
    const taskData = {
      ...editTask,
      token: user.token,
      id: id,
    };
    await deleteTodo(taskData).then((data) => {
      setCards(data.tasks);
      navigate(appRoutes.HOME);
    });
  };

  return (
    <>
      <GlobalStyle />
      <S.PopBrowseStyled>
        <S.PopBrowseContainer>
          <S.PopBrowseBlock>
            <S.PopBrowseContent>
              <S.PopBrowseTopBlock>
                <S.PopBrowseTitle>{openedCard[0].title}</S.PopBrowseTitle>
                <S.OpenedCardTheme
                  $themeColor={themeNameColor[openedCard[0].topic]}
                >
                  {openedCard[0].topic}
                </S.OpenedCardTheme>
              </S.PopBrowseTopBlock>
              <S.PopBrowseStatus>
                <S.PopBrowseStatusTitle>Статус</S.PopBrowseStatusTitle>

                <S.PopBrowseStatusThemes>
                  {isEditMode ? (
                    statusList.map((el, index) => (
                      <>
                        <ThemeInputs
                          type="radio"
                          id={`radio${index}`}
                          name="status"
                          value={el}
                          onChange={handleInputChange}
                        />
                        <S.NewSelectedStatus
                          $isChecked={editTask.status === el}
                          htmlFor={`radio${index}`}
                        >
                          {el}
                        </S.NewSelectedStatus>
                      </>
                    ))
                  ) : (
                    <S.SelectedStatus>
                      {selectedCardData.status}
                    </S.SelectedStatus>
                  )}
                </S.PopBrowseStatusThemes>
              </S.PopBrowseStatus>
              <S.PopBrowseWrap>
                <S.PopBrowseForm>
                  <S.FormBrowseBlock>
                    <S.FormBrowseTitle htmlFor="textArea01">
                      Описание задачи
                    </S.FormBrowseTitle>
                    {isEditMode ? (
                      <FormNewInputArea
                        type="textarea"
                        name="description"
                        value={editTask.description}
                        onChange={handleInputChange}
                      ></FormNewInputArea>
                    ) : (
                      <S.FormBrowseArea
                        typeof="textarea"
                        name="text"
                        id="textArea01"
                        readOnly
                        value={openedCard[0].description}
                      ></S.FormBrowseArea>
                    )}
                  </S.FormBrowseBlock>
                </S.PopBrowseForm>
                <CalendarStyled>
                  <TitleDate htmlFor="formTitle">Даты</TitleDate>
                  {isEditMode ? (
                    <Calendar
                      selectedDate={selectedDate}
                      setSelectedDate={setSelectedDate}
                    />
                  ) : (
                    <Calendar selectedDate={openedCard[0].date} />
                  )}
                </CalendarStyled>
              </S.PopBrowseWrap>
              <S.ThemeDownCategories></S.ThemeDownCategories>
              <S.PopBrowseButtonBrowse>
                <S.ButtonGroup>
                  {isEditMode ? (
                    <>
                      <S.ButtonCloseSave onClick={handleFormSave}>
                        Сохранить
                      </S.ButtonCloseSave>
                      <S.ButtonChangeDelete onClick={handleDiscard}>
                        Отменить
                      </S.ButtonChangeDelete>
                    </>
                  ) : (
                    <S.ButtonChangeDelete>
                      <a onClick={handleEditMode}>Редактировать задачу</a>
                    </S.ButtonChangeDelete>
                  )}
                  <S.ButtonChangeDelete onClick={handleFormDelete}>
                    Удалить задачу
                  </S.ButtonChangeDelete>
                </S.ButtonGroup>
                <Link to={appRoutes.HOME}>
                  <S.ButtonCloseSave>Закрыть</S.ButtonCloseSave>
                </Link>
                {isNotCorrect && (
                  <NotCorrectText>
                    Нельзя оставлять описание пустым. Внесите данные
                  </NotCorrectText>
                )}
              </S.PopBrowseButtonBrowse>
            </S.PopBrowseContent>
          </S.PopBrowseBlock>
        </S.PopBrowseContainer>
      </S.PopBrowseStyled>
    </>
  );
}
