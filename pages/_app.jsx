import React, { useState } from "react"
import { ThemeProvider } from "styled-components"
import light from "../src/ui/theme/light"
import dark from "../src/ui/theme/dark"
import { GlobalStyle } from "../src/ui/globalStyles"
import usePersistedState from "../src/utils/usePersistedState"
import Menu from "../src/components/menu"

const App = ({Component, ...AppProps}) => {
    const [filterValues, setFilterValues] = useState("");

    const [theme, setTheme] = usePersistedState('theme', light)

    const toggleTheme = () => {
        setTheme(theme.title === 'light' ? dark : light)
    }

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Menu toggleTheme={toggleTheme} filterValues={filterValues} setFilterValues={setFilterValues}/>
            <Component filterValues={filterValues} {...AppProps}/>
        </ThemeProvider>
    )
}

export default App