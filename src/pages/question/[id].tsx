import React, { useState, useEffect } from "react";
import questions from "../../Data/NewQuestions";
import { QuestionItem, QuestionOption } from "../../Data/NewQuestions";
import { useQuestionIndex } from "../../hooks/QuestionIndexContext";
import { useLanguage } from "../../hooks/LanguageContext";
import LanguageSwitcher from "../../Components/LanguageSwitcher";
import ProgressBar from "../../Components/ProgressBar";
import { useTotalCost } from "../../hooks/TotalCostContext";
import buttonsAndQuestion from "../../Data/ButtonsAndQuestion";
import { MyRoutes } from "../../utils/consts";
import LogoTop from "../../Components/LogoTop";
import { useRouter } from "next/router";
import { useAuth } from "../../hooks/AuthContext";
import Loader from "../../Components/Loader";

export default function QuestionPage() {
  const router = useRouter();
  const { id } = router.query; // Получаем параметр id из URL
  const { isAuthenticated } = useAuth();
  const currentQuestion: QuestionItem | undefined = questions.find(
    (question) => question.id === Number(id)
  );
  const [selectedOptionId, setSelectedOptionId] = useState<number | null>(null); //Выбранный вариант
  const [isOtherOptionsDisabled, setIsOtherOptionsDisabled] =
    useState<boolean>(false); //Накладываем фильтр на не выбранные варианты
  const [isNextButtonDisabled, setIsNextButtonDisabled] =
    useState<boolean>(true); // Для блокировки кнопки "Далее"
  const { selectedLanguage, changeLanguage } = useLanguage(); //Язык
  const { totalCost, updateTotalCost } = useTotalCost(); //Итоговая стоимость
  const { updateCurrentQuestionId, removeLastSelectedOption, selectedOptions } =
    useQuestionIndex(); //контекст с переменными

  // Функция для получения ID предыдущего вопроса
  function getPrevQuestionId(currentQuestionId: number): number {
    const currentIndex = questions.findIndex(
      (question) => question.id === currentQuestionId
    );

    if (currentIndex <= 0) {
      // Если вопрос не найден или это первый вопрос, вернем текущий ID
      return currentQuestionId;
    }

    // Вернем ID предыдущего вопроса
    return questions[currentIndex - 1].id;
  }

  //кнопка далее
  const handleNextQuestion = () => {
    if (selectedOptionId !== null && currentQuestion) {
      const selectedOption = currentQuestion.options.find(
        (option) => option.id === selectedOptionId
      );

      const currentQuestionCost = selectedOption ? selectedOption.value : 0;
      updateCurrentQuestionId(currentQuestion.id);
      const newTotalCost = totalCost + currentQuestionCost;
      updateTotalCost(newTotalCost);

      router.push({
        pathname: `${MyRoutes.ANSWER}/${id}`,
        query: {
          selectedOptionId,
          cost: newTotalCost,
        },
      });
    }
  };

  //Кнопка назад
  const handleGoBack = () => {
    const prevQuestionId = getPrevQuestionId(Number(id));
    const prevQuestion = questions.find(
      (question) => question.id === Number(prevQuestionId)
    );

    if (prevQuestion) {
      const selectedOptionId = selectedOptions[selectedOptions.length - 1]; // Получаем последний выбранный вариант
      const selectedOption = prevQuestion.options.find(
        (option) => option.id === selectedOptionId
      );
      const prevQuestionCost = selectedOption ? selectedOption.value : 0;

      removeLastSelectedOption(); // Удаляем последний выбранный вариант из массива
      updateCurrentQuestionId(prevQuestion.id);

      const newTotalCost = totalCost - prevQuestionCost;
      updateTotalCost(newTotalCost);

      router.push({
        pathname: `${MyRoutes.QUESTION}/${prevQuestionId}`,
        query: {
          selectedOptionId: selectedOptionId,
        },
      });
    }
  };

  //Выбираем вариант ответа
  const handleCardClick = (optionId: number) => {
    setSelectedOptionId(optionId);
    setIsOtherOptionsDisabled(true); // Отключаем другие ответы при выборе
    setIsNextButtonDisabled(false); // Разблокируем кнопку "Далее" при выборе ответа
  };

  //Прячем кнопку назад если мы на странице 1
  const hideBackButton = id === "1";

  useEffect(() => {
    if (!isAuthenticated) {
      router.push(MyRoutes.MAIN); // Перенаправляем на главную страницу, если пользователь не аутентифицирован
    }
  }, [isAuthenticated, router]);

  return (
    <section className="questions" id="questions">
      {!isAuthenticated ? (
        <Loader />
      ) : (
        <div className="questions__container container">
          <div className="questions-top">
            <LogoTop />
            <div className="questions-top__bottom">
              <ProgressBar totalCost={totalCost} />
              <LanguageSwitcher
                selectedLanguage={selectedLanguage}
                onChange={changeLanguage}
              />
            </div>
          </div>
          <div className="questions__content">
            <h2 className="questions__number">
              {currentQuestion
                ? `${buttonsAndQuestion[0].question[selectedLanguage]} ${currentQuestion.id}`
                : null}
            </h2>
            <h3 className="questions__question">
              {currentQuestion
                ? currentQuestion.question[selectedLanguage]
                : ""}
            </h3>

            <ul className="questions__list list-reset">
              {currentQuestion?.options.map((option: QuestionOption) => (
                <li
                  key={option.id}
                  className={`questions__item ${
                    selectedOptionId === option.id ? "selected" : ""
                  } ${
                    isOtherOptionsDisabled && selectedOptionId !== option.id
                      ? "disabled"
                      : ""
                  }`}
                  onClick={() => handleCardClick(option.id)}
                >
                  <input
                    type="radio"
                    name="option"
                    className="questions__input"
                    checked={selectedOptionId === option.id}
                    onChange={() => setSelectedOptionId(option.id)}
                  />
                  <p className="questions__descr">
                    {option.text[selectedLanguage]}
                  </p>
                  <img
                    src={option.image[selectedLanguage]}
                    alt={option.text[selectedLanguage]}
                    className="questions__image"
                  />
                </li>
              ))}
            </ul>
          </div>
          <div className="questions__btns">
            {!hideBackButton && (
              <button
                onClick={handleGoBack}
                className="questions__btn-prev btn-reset"
              >
                {buttonsAndQuestion[0].buttonPrev[selectedLanguage]}
              </button>
            )}
            <button
              onClick={handleNextQuestion}
              className={`questions__btn-next btn-reset ${
                isNextButtonDisabled ? "disabled" : ""
              }`}
              disabled={isNextButtonDisabled}
            >
              {buttonsAndQuestion[0].buttonNext[selectedLanguage]}
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
