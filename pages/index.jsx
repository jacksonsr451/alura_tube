import config from "../config.json"
import Header from "../src/components/header"
import TimeLine from "../src/components/timeLine"


const HomePage = ({ filterValues }) => {
    return (
        <>
            <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
            }}>
                <Header />
                <TimeLine filterValues={filterValues} playlists={config.playlists}/>
            </div>
        </>
    )
}

export default HomePage