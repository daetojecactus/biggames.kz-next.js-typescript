/* eslint-disable */

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';
import { MyRoutes } from '../utils/consts';
import { useRouter } from 'next/router';

// Интерфейс для контекста TotalCostContext
interface TotalCostContextProps {
  totalCost: number;
  updateTotalCost: (newTotalCost: number) => void;
  resetTotalCost: () => void;
  prevCost: number;
  prevQuestionData: any;
}

// контекст с указанием типа
export const TotalCostContext = createContext<
  TotalCostContextProps | undefined
>(undefined);

// Интерфейс хука для использования в компонентах
export const useTotalCost = (): TotalCostContextProps => {
  const context = useContext(TotalCostContext);

  if (!context) {
    throw new Error('useTotalCost must be used within a TotalCostProvider');
  }

  return context;
};

// интерфейс провайдера контекста
interface TotalCostProviderProps {
  children: ReactNode;
}

export default function TotalCostProvider({
  children,
}: TotalCostProviderProps) {
  // Используем useContext для проверки наличия контекста
  const context = useContext(TotalCostContext);

  // Проверка наличия контекста, чтобы избежать ошибок во время выполнения
  if (!context) {
    console.warn('TotalCostProvider must be used within a TotalCostContext');
  }

  // const [totalCost, setTotalCost] = useState(() => {
  //   // Используем localStorage для получения суммы, если она там сохранена
  //   const storedTotalCost = localStorage.getItem("totalCost");
  //   return storedTotalCost ? parseInt(storedTotalCost) : 0;
  // });

  //Когда приложение рендерится на сервере (например, при использовании серверного рендеринга в Next.js), код выполняется на стороне сервера
  //где localStorage, не доступен.
  //Чтобы избежать этой ошибки, необходимо проверить, что код выполняется на клиентской стороне перед использованием localStorage
  // с помощью проверки typeof window !== 'undefined'
  const [totalCost, setTotalCost] = useState(() => {
    // Проверяем, доступен ли localStorage на клиентской стороне
    if (typeof window !== 'undefined') {
      // Используем localStorage для получения суммы, если она там сохранена
      // const storedTotalCost = localStorage.getItem("totalCost");
      const storedTotalCost = sessionStorage.getItem('totalCost');
      return storedTotalCost ? parseInt(storedTotalCost) : 0;
    } else {
      // Возвращаем значение по умолчанию, если localStorage недоступен
      return 0;
    }
  });

  // const location = useLocation();
  const router = useRouter();
  const [prevCost, setPrevCost] = useState(0); // Добавляем состояние для предыдущей суммы
  const [prevQuestionData, setPrevQuestionData] = useState<any>(null); // Добавляем состояние для предыдущего вопроса
  console.log('Type of prevQuestionData:', typeof prevQuestionData);

  useEffect(() => {
    // Сохраняем сумму в localStorage при каждом изменении
    // localStorage.setItem("totalCost", totalCost.toString());
    sessionStorage.setItem('totalCost', totalCost.toString());
  }, [totalCost]);

  const updateTotalCost = (newTotalCost: number) => {
    // Сохраняем предыдущую сумму и предыдущий вопрос
    setPrevCost(totalCost);
    setTotalCost(newTotalCost);
  };

  const resetTotalCost = () => {
    // Обнуляем предыдущую сумму и текущую сумму при сбросе
    setPrevCost(0);
    setTotalCost(0);
  };

  const updatePrevQuestionData = (data: any) => {
    // Обновляем данные о предыдущем вопросе
    setPrevQuestionData(data);
  };

  useEffect(() => {
    // Сбрасываем итоговую стоимость при переходе на первый вопрос
    if (router.pathname === `${MyRoutes.QUESTION}/1`) {
      resetTotalCost();
      // Сбрасываем данные о предыдущем вопросе
      updatePrevQuestionData(null);
    }
  }, [router.pathname]);

  const contextValue: TotalCostContextProps = {
    totalCost,
    updateTotalCost,
    resetTotalCost,
    prevCost, // Передаем предыдущую сумму
    prevQuestionData, // Передаем данные о предыдущем вопросе
  };

  return (
    <TotalCostContext.Provider value={contextValue}>
      {children}
    </TotalCostContext.Provider>
  );
}
