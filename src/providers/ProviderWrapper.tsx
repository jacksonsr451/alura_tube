import type { AppProps } from "next/app";
import React from "react";
import light from "../ui/theme/light";
import ThemesColorsProvider from "./ThemesColorsProvider";

interface Props {
    children: JSX.Element
}

const ProviderWrapper: React.FC<Props> = (props) => {
    return (
        <ThemesColorsProvider initialTheme={light}>
            {props.children}
        </ThemesColorsProvider>
    )
}

export default ProviderWrapper