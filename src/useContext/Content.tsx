import { useContext } from "react";
import { ThemeContext } from "./themeContext";

const Content = () => {
    const { isDark } = useContext(ThemeContext)!;
    return (
        <div
            className="content"
            style={{
                backgroundColor: isDark ? 'black' : 'white',
                color: isDark ? 'white' : 'dark',
            }}
        >
            <p>content...</p>
        </div>
    );
}

export default Content;