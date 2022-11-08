import config from "../../config.json"
import { StyledBanner } from "../ui/styledBanner"
import { StyledHeader } from "../ui/styledHeader"

const Header = () => {
    return (
        <StyledHeader>
            <StyledBanner bg={config.background_image} />
            <section className="user-info">
                <img src={`https://github.com/${config.github}.png`} />
                <div>
                    <h2>{config.name}</h2>
                    <p>{config.job}</p>
                </div>
            </section>
        </StyledHeader>
    )
}

export default Header