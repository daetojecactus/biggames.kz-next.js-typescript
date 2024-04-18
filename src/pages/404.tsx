import React from 'react';
import { MyRoutes } from '../utils/consts';
import { useLanguage } from '../hooks/LanguageContext';
import NotFoundData from '../Data/NotFoundData';
import { useRouter } from 'next/router';

export default function NotFoundPage() {
  const { selectedLanguage } = useLanguage(); //Язык
  const router = useRouter();

  //Кнопка Перейти на главную
  const handleClick = () => {
    router.push(MyRoutes.MAIN);
  };

  return (
    <section className="not-found" id="not-found">
      <div className="container not-found__container">
        <h2 className="not-found__title">
          {NotFoundData[0].errorText[selectedLanguage]} 404
        </h2>
        <p className="not-found__descr">
          {NotFoundData[0].mainText[selectedLanguage]}
        </p>
        <button className="not-found__btn btn-reset" onClick={handleClick}>
          {NotFoundData[0].buttonText[selectedLanguage]}
        </button>
      </div>
    </section>
  );
}
