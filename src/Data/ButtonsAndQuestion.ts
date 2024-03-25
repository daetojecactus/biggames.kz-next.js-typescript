//Информация о кнопках
import { TranslationKeys } from "./DataInterfaces";

// интерфейс ButtonsAndQuestion
interface ButtonsAndQuestion {
  buttonPrev: TranslationKeys;
  buttonNext: TranslationKeys;
  buttonComplete: TranslationKeys;
  question: TranslationKeys;
}

//массив с объектами, которые соответсвуют интерфейсу ButtonsAndQuestion
const buttonsAndQuestion: ButtonsAndQuestion[] = [
  {
    buttonPrev: {
      ru: "Назад",
      kz: "Артқа",
    },
    buttonNext: {
      ru: "Далее",
      kz: "Әрі қарай",
    },
    buttonComplete: {
      ru: "Завершить",
      kz: "Аяқтау",
    },
    question: {
      ru: "Вопрос",
      kz: "Сұрақ",
    },
  },
];

export default buttonsAndQuestion;
