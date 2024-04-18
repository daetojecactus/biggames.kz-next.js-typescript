import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';

// Определяем тип контекста для авторизации
interface AuthContextProps {
  isAuthenticated: boolean;
  authenticate: () => void;
  logout: () => void;
}

//контекст с указанием типа
const AuthContext = createContext<AuthContextProps | undefined>(undefined);

// Определяем тип для провайдера контекста
interface AuthProviderProps {
  children: ReactNode;
}

//провайдер контекста для авторизации
export default function AuthProvider({ children }: AuthProviderProps) {
  // Состояние для хранения статуса авторизации
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    //проверяем
    if (typeof window !== 'undefined') {
      return localStorage.getItem('isAuthenticated') === 'true' || false;
    } else {
      return false;
    }
  });

  // Функция для установки статуса авторизации
  const authenticate = () => {
    setIsAuthenticated(true);
    // Сохранение статуса в sessionStorage
    sessionStorage.setItem('isAuthenticated', 'true');
  };

  // Функция для выхода из авторизации
  const logout = () => {
    setIsAuthenticated(false);
    // Сохранение статуса в sessionStorage
    sessionStorage.setItem('isAuthenticated', 'false');
  };

  // Проверка времени сессии при загрузке
  useEffect(() => {
    const sessionTimeout = localStorage.getItem('sessionTimeout');
    if (sessionTimeout) {
      const currentTime = new Date().getTime();
      if (currentTime > parseInt(sessionTimeout)) {
        // Время сессии истекло, выход пользователя
        logout();
      }
    }
  }, []);

  // Значение контекста, предоставляемого провайдером
  const authContextValue: AuthContextProps = {
    isAuthenticated,
    authenticate,
    logout,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
}

// Хук для доступа к контексту авторизации
export function useAuth(): AuthContextProps {
  const context = useContext(AuthContext);

  // Проверка наличия контекста, чтобы избежать ошибок во время выполнения
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}
