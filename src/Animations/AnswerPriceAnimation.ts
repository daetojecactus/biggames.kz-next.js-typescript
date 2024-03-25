//Анимация появления цены
import { Variants } from "framer-motion";

//интерфейс для AnswerPriceAnimation
interface AnswerPriceAnimation extends Variants {
  hidden: {
    scale: number;
    opacity: number;
  };
  visible: {
    scale: number;
    opacity: number;
    transition: { duration: number };
  };
}

//данные для анимации
const answerPriceAnimation: AnswerPriceAnimation = {
  hidden: {
    scale: 0.1,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.7 },
  },
};

export default answerPriceAnimation;
