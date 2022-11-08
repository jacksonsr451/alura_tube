import config from "../config.json"
import Header from "../src/components/header"
import Menu from "../src/components/menu"
import TimeLine from "../src/components/timeLine"
import { GlobalStyle } from "../src/ui/globalStyles"


const HomePage = () => {
    return (
        <>
            <GlobalStyle />
            <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
            }}>
                <Menu />
                <Header />
                <TimeLine playlists={config.playlists}/>
            </div>
        </>
    )
}

export default HomePage