import { useContext } from "react"
import { ThemesColorsContext } from "../../src/providers/ThemesColorsProvider"
import { StyledDarkModeSwitch } from "../ui/styledDarkModeSwitch"

const DarkModeSwitch = ({ onChanged }) => {    
    const theme = useContext(ThemesColorsContext)

    return (
        <StyledDarkModeSwitch>
            <input id="darkmode" type="checkbox" onChange={() => {
                theme.toggleTheme()
            }}/>
            <label
                htmlFor="darkmode"
                className="darkmode-switch"
            >
                <span>🌙</span>
                <span>☀️</span>
            </label>
        </StyledDarkModeSwitch>
    )
}

export default DarkModeSwitch