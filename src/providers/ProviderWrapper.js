import light from "../ui/theme/light";
import ThemesColorsProvider from "./ThemesColorsProvider";

export default function ProviderWrapper(props) {
    return (
        <ThemesColorsProvider initialTheme={light}>
            {props.children}
        </ThemesColorsProvider>
    )
}