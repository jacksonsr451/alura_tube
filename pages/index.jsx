import config from "../config.json"
import Header from "../src/components/header"
import TimeLine from "../src/components/timeLine"
import RegisterVideo from "../src/components/RegisterVideo"

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
                <RegisterVideo />
            </div>
        </>
    )
}

export default HomePage