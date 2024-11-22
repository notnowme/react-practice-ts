import { ThemeContext } from '@/useContext/themeContext'
import Page from '@/useContext/Page'
import { useState } from 'react';
const Index = () => {
    const [isDark, setIsDark] = useState<boolean>(false);
    return (
        <>
            <ThemeContext.Provider value={{isDark, setIsDark}}>
            <Page />
            </ThemeContext.Provider>
        </>
    );
}

export default Index;