import { useContext } from "react";
import { ThemeContext } from "./themeContext";

const Footer = () => {
    const { isDark, setIsDark } = useContext(ThemeContext)!;
    const handleToggle = () => {
        setIsDark(!isDark);
    }
    return (
        <footer
            className="footer"
            style={{
                backgroundColor: isDark ? 'black' : 'white'
            }}
        >
            <button className="button" onClick={handleToggle}>
                {isDark ? 'white' : 'Dark'} mode
            </button>
        </footer>
    );
};

export default Footer;