//Информация на основной странице
import { TranslationKeys } from "./DataInterfaces";

// интерфейс MainData
interface MainData {
  topDescr: TranslationKeys;
  title: TranslationKeys;
  subTitle: TranslationKeys;
  bottomDescr: TranslationKeys;
  button: TranslationKeys;
  offerDescr: TranslationKeys;
  offerLink: TranslationKeys;
  offerTargetLink: TranslationKeys;
  cards: MainCards[];
}

// интерфейс MainCards
interface MainCards {
  id: number;
  descr: TranslationKeys;
}

//массив с объектами, которые соответсвуют интерфейсу MainData
const mainData: MainData[] = [
  {
    topDescr: {
      ru: "Вы на новом этапе своей жизни и вот вот создадите семью. Но каждой семье нужно свое гнездышко.",
      kz: "Үйлену тойын одан кейін өзіңізге жаңа пәтер сатып алатындай етіп өткізіп көріңіз.",
    },
    title: {
      ru: "Серьезное решение",
      kz: "Маңызды шешім",
    },
    subTitle: {
      ru: "Попробуйте сыграть свадьбу так, чтобы после нее купить себе новую квартиру.",
      kz: "Үйлену тойын одан кейін өзіңізге жаңа пәтер сатып алатындай етіп өткізіп көріңіз.",
    },
    bottomDescr: {
      ru: "Мы верим, что у вас все получится!",
      kz: "Сіздің табысқа жететініңізге сенеміз!",
    },
    button: {
      ru: "Далее",
      kz: "Әрі қарай",
    },
    offerDescr: {
      ru: "Продолжая участвовать в веб-игре вы соглашаетесь с условиями",
      kz: "Веб-ойынға қатысуды жалғастыра отырып, сіз шарттармен келісесіз",
    },
    offerLink: {
      ru: "публичной оферты",
      kz: "қоғамдық ұсыныс",
    },
    offerTargetLink: {
      ru: "https://docs.google.com/document/d/1wSTgm__W6NoGCSBxc5H9rZmbWUNEx0cE/edit",
      kz: "https://docs.google.com/document/d/1GAsaRPorCIHrO5cnd2Oi0Ucijl6blBbD/edit?usp=sharing&ouid=106119728966408807605&rtpof=true&sd=true",
    },
    cards: [
      {
        id: 1,
        descr: {
          ru: "Подумайте, что бы вы хотели видеть на своей свадьбе",
          kz: "Үйлену тойыңызда нені көргіңіз келетінін ойланыңыз",
        },
      },
      {
        id: 2,
        descr: {
          ru: "Выберите подходящий вариант для вашего торжества",
          kz: "Тойыңызға қолайлы нұсқаны таңдаңыз",
        },
      },
      {
        id: 3,
        descr: {
          ru: "Накопите необходимую сумму для покупки новой квартиры",
          kz: "Жаңа пәтер сатып алуға қажетті соманы жинаңыз",
        },
      },
    ],
  },
];

export default mainData;
