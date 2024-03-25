import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

// Интерфейс для контекста QuestionIndexContext
interface QuestionIndexContextProps {
  currentQuestionId: number;
  selectedOptions: number[];
  updateCurrentQuestionId: (newQuestionId: number) => void;
  addSelectedOption: (optionId: number) => void;
  removeLastSelectedOption: () => void;
}

// Создаем контекст с явным указанием типа
export const QuestionIndexContext = createContext<
  QuestionIndexContextProps | undefined
>(undefined);

// Определяем тип для провайдера контекста
interface QuestionIndexProviderProps {
  children: ReactNode;
}

export default function QuestionIndexProvider({
  children,
}: QuestionIndexProviderProps) {
  // Используем useContext для проверки наличия контекста
  const context = useContext(QuestionIndexContext);

  // Проверка наличия контекста, чтобы избежать ошибок во время выполнения
  if (!context) {
    console.warn(
      "QuestionIndexProvider must be used within a QuestionIndexContext"
    );
  }

  const [currentQuestionId, setCurrentQuestionId] = useState(() => {
    if (typeof window !== "undefined") {
      const storedQuestionId = localStorage.getItem("currentQuestionId");
      return storedQuestionId ? parseInt(storedQuestionId) : 1;
    } else {
      // Обработка случая, когда localStorage недоступен
      return 1; // Возвращаем значение по умолчанию
    }
  });

  const [selectedOptions, setSelectedOptions] = useState<number[]>([]);

  // При загрузке приложения, попытаемся восстановить массив из localStorage
  useEffect(() => {
    const savedOptionsString = localStorage.getItem("selectedOptions");
    if (savedOptionsString !== null) {
      const savedOptions = JSON.parse(savedOptionsString);
      setSelectedOptions(savedOptions);
    }
  }, []);

  // При изменении массива, будем сохранять его в localStorage
  useEffect(() => {
    localStorage.setItem("selectedOptions", JSON.stringify(selectedOptions));
  }, [selectedOptions]);

  const updateCurrentQuestionId = (newQuestionId: number) => {
    setCurrentQuestionId(newQuestionId);
    localStorage.setItem("currentQuestionId", newQuestionId.toString());
  };

  const addSelectedOption = (optionId: number) => {
    setSelectedOptions([...selectedOptions, optionId]);
  };

  const removeLastSelectedOption = () => {
    const updatedOptions = [...selectedOptions];
    updatedOptions.pop();
    setSelectedOptions(updatedOptions);
  };

  const contextValue: QuestionIndexContextProps = {
    currentQuestionId,
    selectedOptions,
    updateCurrentQuestionId,
    addSelectedOption,
    removeLastSelectedOption,
  };

  return (
    <QuestionIndexContext.Provider value={contextValue}>
      {children}
    </QuestionIndexContext.Provider>
  );
}

// Создаем хук для доступа к состоянию вопросов и ответов
export function useQuestionIndex(): QuestionIndexContextProps {
  const context = useContext(QuestionIndexContext);

  // Проверка наличия контекста, чтобы избежать ошибок во время выполнения
  if (!context) {
    throw new Error(
      "useQuestionIndex must be used within a QuestionIndexProvider"
    );
  }

  return context;
}
