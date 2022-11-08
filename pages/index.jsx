import { useState } from "react";
import config from "../config.json"
import Header from "../src/components/header"
import Menu from "../src/components/menu"
import TimeLine from "../src/components/timeLine"
import { GlobalStyle } from "../src/ui/globalStyles"


const HomePage = () => {
    const [filterValues, setFilterValues] = useState("");

    return (
        <>
            <GlobalStyle />
            <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
            }}>
                <Menu filterValues={filterValues} setFilterValues={setFilterValues}/>
                <Header />
                <TimeLine filterValues={filterValues} playlists={config.playlists}/>
            </div>
        </>
    )
}

export default HomePage