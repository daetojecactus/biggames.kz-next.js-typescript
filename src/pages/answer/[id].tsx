import React, { useEffect } from "react";
import ProgressBar from "../../Components/ProgressBar";
import questions from "../../Data/NewQuestions";
import { QuestionItem, QuestionOption } from "../../Data/NewQuestions";
import { useTotalCost } from "../../hooks/TotalCostContext";
import { useQuestionIndex } from "../../hooks/QuestionIndexContext";
import { useLanguage } from "../../hooks/LanguageContext";
import LanguageSwitcher from "../../Components/LanguageSwitcher";
import buttonsAndQuestion from "../../Data/ButtonsAndQuestion";
import { motion } from "framer-motion";
import AnswerPriceAnimation from "../../Animations/AnswerPriceAnimation";
import AnswerImageAnimation from "../../Animations/AnswerImageAnimation";
import { MyRoutes } from "../../utils/consts";
import LogoTop from "../../Components/LogoTop";
import { useRouter } from "next/router";
import { useAuth } from "../../hooks/AuthContext";
import Loader from "../../Components/Loader";

export default function AnswerPage() {
  const router = useRouter(); // Получаем объект router
  const { isAuthenticated } = useAuth();
  const { id, selectedOptionId: selectedOptionIdString } = router.query;
  const selectedOptionId =
    typeof selectedOptionIdString === "string"
      ? parseInt(selectedOptionIdString)
      : undefined;

  const currentQuestion: QuestionItem | undefined = questions.find(
    (question) => question.id === Number(id)
  );
  const { selectedLanguage, changeLanguage } = useLanguage(); //Язык
  const { totalCost, updateTotalCost } = useTotalCost(); //Итоговая сумма
  const { updateCurrentQuestionId, addSelectedOption } = useQuestionIndex();
  const totalQuestions: number = questions.length; //Длина вопросов
  const isLastQuestion: boolean = Number(id) === totalQuestions;

  // кнопка Завершить
  const handleFinish = () => {
    // Перенаправляем пользователя на страницу /info и передаем туда итоговую сумму
    router.push({
      pathname: MyRoutes.INSTAGRAM,
      query: { totalCost },
    });
  };

  // Функция для получения ID следующего вопроса
  function getNextQuestionId(currentQuestionId: number): number {
    const currentIndex = questions.findIndex(
      (question) => question.id === currentQuestionId
    );

    if (currentIndex === -1 || currentIndex === questions.length - 1) {
      // Если вопрос не найден или это последний вопрос, вернем текущий ID
      return currentQuestionId;
    }

    // Вернем ID следующего вопроса
    return questions[currentIndex + 1].id;
  }

  //кнопка назад
  const handleGoBack = () => {
    const questionId = Number(id);
    const currentQuestion = questions.find(
      (question) => question.id === questionId
    );
    if (currentQuestion) {
      const selectedOption = currentQuestion.options.find(
        (option) => option.id === selectedOptionId
      );
      const prevQuestionCost = selectedOption ? selectedOption.value : 0;
      updateCurrentQuestionId(currentQuestion.id);
      const newTotalCost = totalCost - prevQuestionCost;
      updateTotalCost(newTotalCost);

      router.push({
        pathname: `${MyRoutes.QUESTION}/${id}`,
        query: {
          selectedOptionId,
          cost: newTotalCost,
        },
      });
    }
  };

  //кнопка Далее
  const handleNextQuestion = () => {
    const nextQuestionId = getNextQuestionId(Number(id));
    if (nextQuestionId && selectedOptionId !== undefined) {
      addSelectedOption(selectedOptionId);

      router.push({
        pathname: `${MyRoutes.QUESTION}/${nextQuestionId}`,
        query: {
          cost: totalCost,
          selectedOptionId: selectedOptionId,
        },
      });
    }
  };

  //выбранный вариант ответа
  const selectedOption: QuestionOption | undefined =
    currentQuestion?.options.find((option) => option.id === selectedOptionId);

  useEffect(() => {
    if (!isAuthenticated) {
      router.push(MyRoutes.MAIN); // Перенаправляем на главную страницу, если пользователь не аутентифицирован
    }
  }, [isAuthenticated, router]);

  return (
    <section className="answer" id="answer">
      {!isAuthenticated ? (
        <Loader />
      ) : (
        <div className="container answer__container">
          <div className="answer-top">
            <LogoTop />
            <div className="answer-top__bottom">
              <ProgressBar totalCost={totalCost} />
              <LanguageSwitcher
                selectedLanguage={selectedLanguage}
                onChange={changeLanguage}
              />
            </div>
          </div>
          {selectedOption && (
            <>
              <h2 className="answer__title">
                {selectedOption.messageTitle[selectedLanguage]}
              </h2>
              <p className="answer__subtitle">
                {selectedOption.messageDescr[selectedLanguage]}
              </p>
              <div className="answer__picture">
                <motion.img
                  src={selectedOption.image[selectedLanguage]}
                  alt=""
                  className="answer__image"
                  initial="hidden"
                  whileInView="visible"
                  variants={AnswerImageAnimation}
                />
              </div>
              <motion.p
                className="answer__price"
                initial="hidden"
                whileInView="visible"
                variants={AnswerPriceAnimation}
              >
                + {selectedOption.value.toLocaleString("ru-RU")} тг
              </motion.p>
            </>
          )}

          <div className="answer__btns">
            <button
              onClick={handleGoBack}
              className="answer__btn-prev btn-reset"
            >
              {buttonsAndQuestion[0].buttonPrev[selectedLanguage]}
            </button>
            {isLastQuestion ? (
              <button
                onClick={handleFinish}
                className="answer__btn-next btn-reset"
              >
                {buttonsAndQuestion[0].buttonComplete[selectedLanguage]}
              </button>
            ) : (
              <button
                onClick={handleNextQuestion}
                className="answer__btn-next btn-reset"
              >
                {buttonsAndQuestion[0].buttonNext[selectedLanguage]}
              </button>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
