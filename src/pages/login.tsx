import React, {
  useState,
  useRef,
  ChangeEvent,
  FormEvent,
  useEffect,
} from 'react';
import InputMask from 'react-input-mask';
import { MyRoutes } from '../utils/consts';
import FormData from '../Data/FormData';
import { useLanguage } from '../hooks/LanguageContext';
import LanguageSwitcher from '../Components/LanguageSwitcher';
// import axios from 'axios';
import LogoTop from '../Components/LogoTop';
import Loader from '../Components/Loader';
import FormSuccessModal from '../Components/FormSuccessModal';
import CityData from '../Data/CityData';
import Select from 'react-select';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useAuth } from '../hooks/AuthContext';

// Интерфейсы для типизации состояния формы
interface FormDataState {
  clientName: string;
  clientPhoneNumber: string;
  regionId: string;
}

// Интерфейсы для типизации состояния ошибок
interface ErrorsState {
  clientName?: string;
  clientPhoneNumber?: string;
  regionId?: string;
}

export default function LoginPage() {
  const { selectedLanguage, changeLanguage } = useLanguage(); //Язык
  const [loading, setLoading] = useState<boolean>(false); //загрузка лоудера
  const formRef = useRef<HTMLFormElement>(null); //скрываем форму в момент отправки
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false); // состояние для модального окна
  const [isSelectActive, setIsSelectActive] = useState<boolean>(false); //используем для placeholder
  const [isSearchable, setIsSearchable] = useState<boolean>(false); // отмена поиска у select
  const [isNamePlaceholderVisible, setIsNamePlaceholderVisible] =
    useState<boolean>(false); //используем для placeholder
  const [isPhonePlaceholderVisible, setIsPhonePlaceholderVisible] =
    useState<boolean>(false); //используем для placeholder
  // const crmAPI: string = process.env.BI_CRM_API_URL || ''; //получаем наш ключ для CRM
  const router = useRouter();
  const { isAuthenticated } = useAuth();

  const [formData, setFormData] = useState<FormDataState>({
    clientName: '',
    clientPhoneNumber: '',
    regionId: '',
  });

  const [errors, setErrors] = useState<ErrorsState>({});
  console.log(setIsSearchable);

  // Обработчик изменения значений в полях формы
  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  //Валидация формы
  const validateForm = (): boolean => {
    const newErrors: ErrorsState = {};

    //Проверка имени
    if (!formData.clientName.trim()) {
      newErrors.clientName =
        FormData[0].formValidationNameRequire[selectedLanguage];
    } else if (formData.clientName.trim().length < 2) {
      newErrors.clientName =
        FormData[0].formValidationNameMinLength[selectedLanguage];
    } else if (!/^[a-zA-Zа-яА-Я\s\-]+$/.test(formData.clientName)) {
      newErrors.clientName =
        FormData[0].formValidationNamePattern[selectedLanguage];
    }

    //Проверка номера телефона
    if (!formData.clientPhoneNumber) {
      newErrors.clientPhoneNumber =
        FormData[0].formValidationPhoneRequire[selectedLanguage];
    } else if (formData.clientPhoneNumber.length < 12) {
      newErrors.clientPhoneNumber =
        FormData[0].formValidationPhoneMinLength[selectedLanguage];
    } else if (!/^[+\d]+$/.test(formData.clientPhoneNumber)) {
      newErrors.clientPhoneNumber =
        FormData[0].formValidationPhoneMinLength[selectedLanguage];
    }

    //Проверка города
    if (!formData.regionId.trim()) {
      newErrors.regionId =
        FormData[0].formValidationCityRequire[selectedLanguage];
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // Форма для теста на локальном компьютере
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validateForm()) {
      setLoading(true);

      setTimeout(() => {
        // Здесь можете выполнять отправку данных

        console.log('Имя:', formData.clientName);
        console.log('Номер телефона:', formData.clientPhoneNumber);

        const selectedCity = CityData.find(
          (option) => option.value === parseInt(formData.regionId),
        );
        if (selectedCity) {
          console.log('Выбранный город:', selectedCity.label);
        } else {
          console.log('Город не выбран.');
        }

        setLoading(false);
        setIsModalOpen(true);
      }, 200);
    }
  };

  //Основная отправка формы
  //Отправляем форму
  // const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();

  //   //Проверяем валидацию
  //   if (validateForm()) {
  //     setLoading(true);

  //     try {
  //       const selectedCity = CityData.find(
  //         (option) => option.value === parseInt(formData.regionId)
  //       );

  //       const city = selectedCity ? selectedCity.label : ""; //Город в буквенном значении для почты

  //       // Отправляем данные на сервер для отправки почтового сообщения
  //       const emailResponse = await axios.post(
  //         "send.php",
  //         {
  //           clientName: formData.clientName, //Имя
  //           clientPhoneNumber: formData.clientPhoneNumber, //Телефон
  //           regionId: city, //Город в буквенном значении
  //         },
  //         {
  //           headers: {
  //             "Content-Type": "application/x-www-form-urlencoded", //Заголовок
  //           },
  //         }
  //       );

  //       // Отправляем данные на сервер CRM
  //       const crmResponse = await axios.post(
  //         crmAPI,
  //         {
  //           advertisingCampaign: "1",
  //           attractionChannel: "123123",
  //           belongsToDepartment: "1",
  //           callDate: null,
  //           callDateFrom: null,
  //           callDateTo: null,
  //           callbackTypeId: 3,
  //           clientInterest: "1",
  //           clientName: formData.clientName, //Имя
  //           clientPhoneNumber: formData.clientPhoneNumber, //Телефон
  //           companyName: "1",
  //           costSmartRemont: "1",
  //           firstClickUrl: "1",
  //           googleClientId: "1",
  //           other: "1",
  //           packageSmartRemont: "1",
  //           propertyType: "1",
  //           realEstateId: null,
  //           regionId: parseInt(formData.regionId), // Используем числовое значение города
  //           siteApplicationType: "CALLBACK",
  //           url: "1",
  //         },
  //         {
  //           //Заголовки
  //           headers: {
  //             "Content-Type": "application/json",
  //             Authorization: "Basic c2l0ZTpASiNeeVFGcEQwaSp4OGJNbSU=",
  //           },
  //         }
  //       );
  //       //Если все ок, то получаем ответы в коносль и открываем модалку
  //       if (emailResponse.status === 200 && crmResponse.status === 200) {
  //         console.log("Ответ от сервера почты:", emailResponse.data);
  //         console.log("Ответ от сервера CRM:", crmResponse.data);

  //         setIsModalOpen(true);
  //       } else {
  //         console.error("Произошла ошибка при отправке данных.");
  //       }
  //     } catch (error) {
  //       console.error("Произошла ошибка при отправке данных:", error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   }
  // };

  //закрываем модальное окно
  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (!isAuthenticated) {
      router.push(MyRoutes.MAIN); // Перенаправляем на главную страницу, если пользователь не аутентифицирован
    }
  }, [isAuthenticated, router]);

  return (
    <section className="application" id="application">
      {!isAuthenticated ? (
        <Loader />
      ) : (
        <div className="container application__container">
          <LogoTop />
          <Link href={MyRoutes.INFO} className="application__return-link">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="41"
              height="8"
              viewBox="0 0 41 8"
              fill="none"
            >
              <path
                d="M0.646446 4.35355C0.451183 4.15829 0.451183 3.84171 0.646446 3.64645L3.82843 0.464466C4.02369 0.269204 4.34027 0.269204 4.53553 0.464466C4.7308 0.659728 4.7308 0.976311 4.53553 1.17157L1.70711 4L4.53553 6.82843C4.7308 7.02369 4.7308 7.34027 4.53553 7.53553C4.34027 7.7308 4.02369 7.7308 3.82843 7.53553L0.646446 4.35355ZM41 4.5H1V3.5H41V4.5Z"
                fill="#fff"
              />
            </svg>
            {FormData[0].topBack[selectedLanguage]}
          </Link>
          <LanguageSwitcher
            selectedLanguage={selectedLanguage}
            onChange={changeLanguage}
          />
          <h2 className="application__title">
            {FormData[0].title[selectedLanguage]}
          </h2>
          <div className="application__content">
            {loading ? (
              <Loader />
            ) : (
              <form
                ref={formRef}
                action="send.php"
                method="POST"
                className="form"
                onSubmit={onSubmit}
              >
                <label className="form__label">
                  <input
                    name="clientName"
                    type="text"
                    className={`form__input ${
                      errors.clientName ? 'error' : ''
                    }`}
                    value={formData.clientName}
                    onChange={handleInputChange}
                    onFocus={() => setIsNamePlaceholderVisible(true)}
                  />
                  <span
                    className={`form__placeholder ${
                      isNamePlaceholderVisible ? 'visible' : ''
                    }`}
                  >
                    {FormData[0].namePlaceholder[selectedLanguage]}
                    <span className="form__placeholder-mark">*</span>
                  </span>
                  <div className="form__error">
                    <p className="form__error-text">{errors.clientName}</p>
                  </div>
                </label>

                <label className="form__label">
                  <InputMask
                    mask="+77999999999"
                    type="tel"
                    name="clientPhoneNumber"
                    className={`form__input ${
                      errors.clientPhoneNumber ? 'error' : ''
                    }`}
                    value={formData.clientPhoneNumber}
                    onChange={handleInputChange}
                    onFocus={() => setIsPhonePlaceholderVisible(true)}
                  />
                  <span
                    className={`form__placeholder ${
                      isPhonePlaceholderVisible ? 'visible' : ''
                    }`}
                  >
                    {FormData[0].phonePlaceholder[selectedLanguage]}
                    <span className="form__placeholder-mark">*</span>
                  </span>
                  <div className="form__error">
                    <p className="form__error-text">
                      {errors.clientPhoneNumber}
                    </p>
                  </div>
                </label>

                <label className="form__label">
                  <Select
                    className={`form__select ${isSelectActive ? 'active' : ''}`}
                    name="regionId"
                    isSearchable={isSearchable} // отключаем поиск
                    options={CityData}
                    onFocus={() => setIsSelectActive(true)} //Фокус для placeholder
                    placeholder=""
                    value={CityData.find(
                      (option) => option.value === parseInt(formData.regionId),
                    )}
                    onChange={(selectedOption) => {
                      console.log('Selected Option:', selectedOption);
                      setFormData({
                        ...formData,
                        regionId: selectedOption
                          ? selectedOption.value.toString()
                          : '',
                      });
                    }}
                  />
                  <div className="form__error">
                    <p className="form__error-text">{errors.regionId}</p>
                  </div>

                  <span className="form__placeholder custom-placeholder">
                    {FormData[0].cityPlaceholder[selectedLanguage]}
                    <span className="form__placeholder-mark">*</span>
                  </span>
                </label>

                <div className="form__wrapper">
                  <button className="form__btn btn-reset" type="submit">
                    {FormData[0].button[selectedLanguage]}
                  </button>
                  <p className="form__confirm">
                    {FormData[0].confirm[selectedLanguage]}
                  </p>
                </div>
              </form>
            )}
          </div>
          {isModalOpen && <FormSuccessModal onClose={closeModal} />}
        </div>
      )}
    </section>
  );
}
