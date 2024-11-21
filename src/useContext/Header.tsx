import { useContext } from "react";
import { ThemeContext } from "./themeContext";

const Header = () => {
    const { isDark } = useContext(ThemeContext)!;
    
    return (
        <header
            className="header"
            style={{
                backgroundColor: isDark ? 'black' : 'white',
                color: isDark ? 'white' : 'black'
            }}
        >
            <h1>HEADER</h1>
        </header>
    );
};

export default Header;