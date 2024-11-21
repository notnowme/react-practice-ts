import { createContext } from 'react';

interface MyContextType {
    isDark: boolean;
    setIsDark: (value: boolean) => void;
}

export const ThemeContext = createContext<MyContextType | null>(null);