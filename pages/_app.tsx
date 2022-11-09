import React, { useContext, useState } from "react"
import type { AppProps } from 'next/app'
import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "../src/ui/globalStyles"
import Menu from "../src/components/menu"
import ProviderWrapper from "../src/providers/ProviderWrapper"
import { ThemesColorsContext } from "../src/providers/ThemesColorsProvider"

type ThemeInterface = {
    mode: {
        title: string;
        colors: {
            primary: string;
            secundary: string;
            border: string;
            background: string;
            text: string;
        }
    }
}

const MyApp: React.FC<AppProps> = ({Component, ...AppProps}) => {
    const [filterValues, setFilterValues] = useState<string>("")
    const theme: ThemeInterface = useContext(ThemesColorsContext)

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