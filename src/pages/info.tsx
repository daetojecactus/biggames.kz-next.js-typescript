import React, { useEffect } from 'react';
import ProgressBar from '../Components/ProgressBar';
import { useTotalCost } from '../hooks/TotalCostContext';
import { useLanguage } from '../hooks/LanguageContext';
import LanguageSwitcher from '../Components/LanguageSwitcher';
import finalCards from '../Data/InfoAndCards';
import { MyRoutes } from '../utils/consts';
import LogoTop from '../Components/LogoTop';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useAuth } from '../hooks/AuthContext';
import Loader from '../Components/Loader';

export default function InfoPage() {
  const { totalCost } = useTotalCost(); //Итоговая стоимость
  const { selectedLanguage, changeLanguage } = useLanguage(); //Язык
  const router = useRouter();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push(MyRoutes.MAIN); // Перенаправляем на главную страницу, если пользователь не аутентифицирован
    }
  }, [isAuthenticated, router]);

  return (
    <section className="info">
      {!isAuthenticated ? (
        <Loader />
      ) : (
        <div className="container info__container">
          <div className="info-top">
            <LogoTop />
            <Link href={MyRoutes.INSTAGRAM} className="info-top__link">
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
              {finalCards[0].topDescr[selectedLanguage]}
            </Link>
            <div className="info-top__bottom">
              <ProgressBar totalCost={totalCost} />
              <LanguageSwitcher
                selectedLanguage={selectedLanguage}
                onChange={changeLanguage}
              />
            </div>
          </div>
          <h2 className="info__title">
            {finalCards[0].title[selectedLanguage]}
          </h2>

          <p className="info__descr">
            {totalCost <= 2500000 && (
              <>{finalCards[0].subTitleBad[selectedLanguage]}</>
            )}
            {totalCost > 2500000 && totalCost <= 3500000 && (
              <>{finalCards[0].subTitleMiddle[selectedLanguage]}</>
            )}
            {totalCost > 3500000 && totalCost <= 5000000 && (
              <>{finalCards[0].subTitleTop[selectedLanguage]}</>
            )}
          </p>

          <div className="info__content">
            <ul className="info__list list-reset">
              {finalCards[0].cards.map((card) => (
                <li key={card.id} className="info__item">
                  <a
                    href={card.link}
                    className="info__link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="property">
                      <p className="property__city">
                        {finalCards[0].city[selectedLanguage]}:{' '}
                        {card.cardCity[selectedLanguage]}
                      </p>
                      <div className="property__intro">
                        <img
                          src={card.cardImage}
                          alt="#"
                          className="property__image"
                        />
                        <p className="property__about">
                          {card.cardAbout[selectedLanguage]}
                        </p>
                      </div>
                      <div className="property__actions">
                        <div className="property__mortgage">
                          {card.cardMortgage[selectedLanguage]}
                        </div>
                        <div className="property__promotion">
                          {card.cardAction[selectedLanguage]}
                        </div>
                      </div>
                      <div className="property__content">
                        <h3 className="property__caption">
                          {card.cardTitle[selectedLanguage]}
                        </h3>
                        <p className="property__price">
                          {finalCards[0].firstMoney[selectedLanguage]}
                          <b style={{ fontStyle: 'normal' }}>
                            {card.cardPrice.toLocaleString('ru-RU')} тг
                          </b>
                        </p>
                        <p className="property__info">
                          {card.cardBottomDescr[selectedLanguage]}
                        </p>
                      </div>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="info__down">
            <a
              href="https://bi.group/"
              className="info__btn-bi"
              target="_blank"
              rel="noreferrer"
            >
              {finalCards[0].buttonBi[selectedLanguage]}
            </a>
            <Link href={MyRoutes.LOGIN} className="info__btn-instagram">
              {finalCards[0].buttonInst[selectedLanguage]}
            </Link>
          </div>
        </div>
      )}
    </section>
  );
}
