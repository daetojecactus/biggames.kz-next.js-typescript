//Анимация для появления картинок
import { Variants } from "framer-motion";

//Интерфейс для AnswerImageAnimation
interface AnswerImageAnimation extends Variants {
  hidden: {
    scale: number;
    opacity: number;
    x: number;
    y: number;
  };
  visible: {
    scale: number;
    opacity: number;
    x: number;
    y: number;
    transition: { duration: number };
  };
}

//данные для анимации
const answerImageAnimation: AnswerImageAnimation = {
  hidden: {
    scale: 0.3,
    opacity: 0,
    x: 100,
    y: 100,
  },
  visible: {
    scale: 1,
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default answerImageAnimation;
