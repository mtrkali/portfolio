import { useContext } from "react"
import { useTheme } from "../context/ThemeContext"
import { Moon, Sun } from "lucide-react"

const ThemeButton = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <button 
        onClick={toggleTheme}
        className="rounded-full p-2 border dark:border-gray-700 transition">
            {
                theme === "light" ? (
                    <Moon size={20} />
                ):(
                    <Sun size={20}/>
                )
            }
        </button>
    )
}
export default ThemeButton;