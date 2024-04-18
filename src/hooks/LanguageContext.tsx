import React, { createContext, useContext, useState, ReactNode } from 'react';

// Определяем тип контекста
interface LanguageContextProps {
  selectedLanguage: string;
  changeLanguage: (language: string) => void;
}

// Создаем контекст с явным указанием типа
export const LanguageContext = createContext<LanguageContextProps | undefined>(
  undefined,
);

// Определяем тип для провайдера контекста
interface LanguageProviderProps {
  children: ReactNode;
}

// Создаем провайдер контекста
export default function LanguageProvider({ children }: LanguageProviderProps) {
  // Состояние для хранения выбранного языка, по умолчанию казахский
  const [selectedLanguage, setSelectedLanguage] = useState('kz');

  // Функция для изменения выбранного языка
  const changeLanguage = (language: string) => {
    setSelectedLanguage(language);
  };

  // Значение контекста, предоставляемого провайдером
  const languageContextValue: LanguageContextProps = {
    selectedLanguage,
    changeLanguage,
  };

  // Возвращаем провайдер контекста
  return (
    <LanguageContext.Provider value={languageContextValue}>
      {children}
    </LanguageContext.Provider>
  );
}

// Создаем хук для доступа к выбранному языку и функции смены языка
export function useLanguage(): LanguageContextProps {
  const context = useContext(LanguageContext);

  // Проверка наличия контекста, чтобы избежать ошибок во время выполнения
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }

  return context;
}
