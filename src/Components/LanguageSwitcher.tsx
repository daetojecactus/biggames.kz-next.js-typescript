import React from "react";

//Интерфейс для кнопки смены языка
interface LanguageSwitcherProps {
  selectedLanguage: string;
  onChange: (language: string) => void;
}

export default function LanguageSwitcher({
  selectedLanguage,
  onChange,
}: LanguageSwitcherProps) {
  // Функция для переключения языка
  const toggleLanguage = () => {
    onChange(selectedLanguage === "kz" ? "ru" : "kz");
  };

  return (
    <div className="language-switcher">
      <button
        className="language-switcher__btn btn-reset"
        onClick={toggleLanguage}
      >
        {selectedLanguage === "kz" ? "KZ" : "RU"}
      </button>
    </div>
  );
}
