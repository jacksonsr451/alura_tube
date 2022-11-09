import React, { useContext, useState } from "react"
import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "../src/ui/globalStyles"
import Menu from "../src/components/menu"
import ProviderWrapper from "../src/providers/ProviderWrapper"
import { ThemesColorsContext } from "../src/providers/ThemesColorsProvider"

const MyApp = ({Component, ...AppProps}) => {
    const [filterValues, setFilterValues] = useState("")
    const theme = useContext(ThemesColorsContext)

    return (
        <ThemeProvider theme={theme.mode}>
            <GlobalStyle />
            <Menu filterValues={filterValues} setFilterValues={setFilterValues}/>
            <Component filterValues={filterValues} {...AppProps}/>
        </ThemeProvider>
    )
}

export default function App(props) {
    return (
        <ProviderWrapper>
            <MyApp {...props}/>
        </ProviderWrapper>
    )
}