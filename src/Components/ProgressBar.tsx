import React, { useEffect, useContext, useState } from "react";
import { useQuestionIndex } from "../hooks/QuestionIndexContext";
import { TotalCostContext } from "../hooks/TotalCostContext";
import questions from "../Data/NewQuestions";
// import { useLocation } from "react-router-dom";
import { MyRoutes } from "../utils/consts";
import { useRouter } from "next/router";

//Интерфейс для прогресбара
interface ProgressBarProps {
  totalCost: number;
}

export default function ProgressBar({
  totalCost: propsTotalCost,
}: ProgressBarProps) {
  const questionIndexContext = useQuestionIndex();
  const totalCostContext = useContext(TotalCostContext);

  const currentQuestionId = questionIndexContext?.currentQuestionId || 0;
  const totalCost = propsTotalCost || totalCostContext?.totalCost || 0;

  const [percentage, setPercentage] = useState<number>(0);
  // const location = useLocation();
  const router = useRouter(); // Получаем объект router из next/router

  useEffect(() => {
    // Устанавливаем процент в 0, если на странице "question/1"
    if (router.pathname === `${MyRoutes.QUESTION}/1`) {
      setPercentage(0);
    } else {
      //считаем
      const newPercentage = Math.round(
        (currentQuestionId / questions.length) * 100
      );
      setPercentage(newPercentage);

      // Сохраняем сумму и процент заполнения в localStorage
      localStorage.setItem("progressPercentage", newPercentage.toString());
    }
  }, [currentQuestionId, router.pathname]);

  useEffect(() => {
    if (router.pathname !== `${MyRoutes.QUESTION}/1`) {
      // проверяем еще раз и устанавливаем процент в 0, если на странице "question/1", так как игра начинается и всегда равно 0
      // Восстанавливаем процент заполнения из localStorage при загрузке
      const storedPercentage = localStorage.getItem("progressPercentage");
      if (storedPercentage !== null) {
        setPercentage(parseInt(storedPercentage));
      }
    }
  }, [currentQuestionId, router.pathname]);

  const formattedTotalCost = totalCost.toLocaleString("ru-RU"); //переводим в читаемый формат

  // Устанавливаем стиль для текста в зависимости от значения percentage
  const progressCoastStyle: React.CSSProperties = {
    color: percentage === 100 ? "white" : "black",
  };

  return (
    <div className="game__progress">
      <div className="game__progress-line" style={{ width: `${percentage}%` }}>
        <span className="game__progress-coast" style={progressCoastStyle}>
          {formattedTotalCost} тг
        </span>
      </div>
    </div>
  );
}
