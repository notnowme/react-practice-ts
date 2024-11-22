import { useContext } from "react";
import { ThemeContext } from "./themeContext";

const Content = () => {
    const { isDark } = useContext(ThemeContext)!;
    return (
        <div
            className="content"
            style={{
                backgroundColor: isDark ? 'black' : 'white',
                color: isDark ? 'white' : 'black',
            }}
        >
            <p>content...</p>
        </div>
    );
}

export default Content;