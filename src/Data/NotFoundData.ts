// Информация на стринце 404
import { TranslationKeys } from "./DataInterfaces";

// интерфейс NotFoundData
interface NotFoundData {
  errorText: TranslationKeys;
  mainText: TranslationKeys;
  buttonText: TranslationKeys;
}

//массив с объектами, которые соответсвуют интерфейсу NotFoundData
const notFoundData: NotFoundData[] = [
  {
    errorText: {
      ru: "Ошибка",
      kz: "Қате",
    },
    mainText: {
      ru: "Кажется что-то пошло не так! Страница, которую Вы запрашиваете, не существует. Возможно она устарела, была удалена, или введен не верный адрес в адресной строке.",
      kz: "Бірдеңе дұрыс болмады! Сіз сұраған бет жоқ. Ол ескірген, жойылған немесе мекенжай жолағына қате мекенжай енгізілген болуы мүмкін.",
    },
    buttonText: {
      ru: "Перейти на главную",
      kz: "Негізгі бетке өтіңіз",
    },
  },
];

export default notFoundData;
