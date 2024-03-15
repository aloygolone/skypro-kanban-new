import { Link, useParams } from "react-router-dom";
import { appRoutes } from "../../../lib/appRoutes";
import Calendar from "../../Calendar/Calendar";
import * as S from "./PopBrowse.styled";
import { useTasks } from "../../../hooks/useTasks";
import { themeNameColor } from "../../../lib/ThemeColor";
import { GlobalStyle } from "../../../styled/global/Global.styled";
import { useState } from "react";
import { CalendarStyled, TitleDate } from "../../Calendar/Calendar.styled";
import { statusList } from "../../../lib/statusList";
import { FormNewInputArea } from "../PopNewCard/PopNewCard.styled";

export default function PopBrowse() {
  const { id } = useParams();
  const { cards } = useTasks();
  const [isEditMode, setIsEditMode] = useState(false);
  const [isSelectedStatus, setIsSelectedStatus] = useState();
  const openedCard = cards.filter((card) => card._id === id);
  const selectedCardData = {
    title: openedCard[0].title,
    description: openedCard[0].description,
    topic: openedCard[0].topic,
    status: openedCard[0].status,
  };
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

    setEditTask({
      ...editTask,
      [name]: value,
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
                    statusList.map((el) => (
                      <S.PopBrowseStatusTheme key={el}>
                        {el}
                      </S.PopBrowseStatusTheme>
                    ))
                  ) : (
                    <S.SelectedStatus>
                      <p>{openedCard[0].status}</p>
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
                        name="text"
                        id="textArea01"
                        readOnly
                        placeholder={openedCard[0].description}
                      ></S.FormBrowseArea>
                    )}
                  </S.FormBrowseBlock>
                </S.PopBrowseForm>
                <CalendarStyled>
                  <TitleDate htmlFor="formTitle">Даты</TitleDate>
                  <Calendar selectedDate={openedCard[0].date} />
                </CalendarStyled>
              </S.PopBrowseWrap>
              <S.ThemeDownCategories></S.ThemeDownCategories>
              <S.PopBrowseButtonBrowse>
                <S.ButtonGroup>
                  {isEditMode ? (
                    <>
                      <S.ButtonCloseSave>Сохранить</S.ButtonCloseSave>
                      <S.ButtonChangeDelete onClick={handleDiscard}>
                        Отменить
                      </S.ButtonChangeDelete>
                    </>
                  ) : (
                    <S.ButtonChangeDelete>
                      <a onClick={handleEditMode}>Редактировать задачу</a>
                    </S.ButtonChangeDelete>
                  )}
                  <S.ButtonChangeDelete>
                    <a href="#">Удалить задачу</a>
                  </S.ButtonChangeDelete>
                </S.ButtonGroup>
                <Link to={appRoutes.HOME}>
                  <S.ButtonCloseSave>Закрыть</S.ButtonCloseSave>
                </Link>
              </S.PopBrowseButtonBrowse>
            </S.PopBrowseContent>
          </S.PopBrowseBlock>
        </S.PopBrowseContainer>
      </S.PopBrowseStyled>
    </>
  );
}
