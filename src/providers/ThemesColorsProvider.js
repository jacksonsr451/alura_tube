import { createContext, useState, useEffect } from "react"
import dark from "../ui/theme/dark"
import light from "../ui/theme/light"

export const ThemesColorsContext = createContext({
    mode: light,
    toggleTheme: () => {}
}) 


const ThemesColorsProvider = (props) => {
    const [theme, setTheme] = useState(props.initialTheme)


    const toggleTheme = () => {
        if(theme.title === "dark") setTheme(light)
        if(theme.title === "light") setTheme(dark)
    }

    useEffect(() => {
        localStorage.setItem("theme", JSON.stringify(theme))
    }, [theme.title])

    return (
        <ThemesColorsContext.Provider value={{mode: theme, toggleTheme: toggleTheme}}>
            {props.children}
        </ThemesColorsContext.Provider>
    )
}

export default ThemesColorsProvider