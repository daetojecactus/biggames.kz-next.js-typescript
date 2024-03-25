//Информация о форме отправки
import { TranslationKeys } from "./DataInterfaces";

// интерфейс FormData
export interface FormData {
  topDescr: TranslationKeys;
  topBack: TranslationKeys;
  title: TranslationKeys;
  namePlaceholder: TranslationKeys;
  phonePlaceholder: TranslationKeys;
  cityPlaceholder: TranslationKeys;
  button: TranslationKeys;
  confirm: TranslationKeys;
  formSuccessTitle: TranslationKeys;
  formSuccessBtnReturn: TranslationKeys;
  formSuccessBtnInfo: TranslationKeys;
  formValidationNameRequire: TranslationKeys;
  formValidationPhoneRequire: TranslationKeys;
  formValidationCityRequire: TranslationKeys;
  formValidationNamePattern: TranslationKeys;
  formValidationNameMinLength: TranslationKeys;
  formValidationPhoneMinLength: TranslationKeys;
}

//массив с объектами, которые соответсвуют интерфейсу FormData
const formData: FormData[] = [
  {
    topDescr: {
      ru: "Верхний текст на русском языке",
      kz: "Қазақ тіліндегі жоғарғы мәтін",
    },
    topBack: {
      ru: "Назад",
      kz: "Артқа",
    },
    title: {
      ru: "Получить консультацию.",
      kz: "Консультация алу үшін.",
    },
    namePlaceholder: {
      ru: "Имя",
      kz: "Аты",
    },
    phonePlaceholder: {
      ru: "Номер телефона",
      kz: "Телефон нөмірі",
    },
    cityPlaceholder: {
      ru: "Выберите город",
      kz: "Қаланы таңдаңыз",
    },
    button: {
      ru: "Отправить",
      kz: "Жіберу",
    },
    confirm: {
      ru: "Нажимая кнопку принять, вы соглашаетесь на обработку ваших данных.",
      kz: "Қабылдау түймесін басу арқылы сіз деректеріңізді өңдеуге келісесіз.",
    },
    formSuccessTitle: {
      ru: "Ваша форма успешно отправлена!",
      kz: "Пішініңіз сәтті жіберілді!",
    },
    formSuccessBtnReturn: {
      ru: "Сыграть еще раз",
      kz: "Қайта ойнау",
    },
    formSuccessBtnInfo: {
      ru: "ЖК для вас",
      kz: "Сізге арналған СКД",
    },
    formValidationNameRequire: {
      ru: "Пожалуйста, введите имя",
      kz: "Атын енгізіңіз",
    },
    formValidationPhoneRequire: {
      ru: "Пожалуйста, введите номер телефона",
      kz: "Телефон нөміріңізді енгізіңіз",
    },
    formValidationCityRequire: {
      ru: "Пожалуйста, выберите город",
      kz: "Қаланы таңдаңыз",
    },
    formValidationNamePattern: {
      ru: "Пожалуйста, введите только буквы",
      kz: "Тек әріптерді енгізіңіз",
    },
    formValidationNameMinLength: {
      ru: "Минимум 2 символа",
      kz: "Кемінде 2 таңба",
    },
    formValidationPhoneMinLength: {
      ru: "Пожалуйста, введите корректный номер телефона",
      kz: "Жарамды телефон нөмірін енгізіңіз",
    },
  },
];

export default formData;
