import React from "react"
import { StyledTimeline } from "../ui/styledTimeLine"

interface Props {
    filterValues: string,
    playlists: []
}

const TimeLine: React.FC<Props> = ({ filterValues, ...props }) => {
    const playlistNames = Object.keys(props.playlists)

    return (
        <StyledTimeline>
            {
                playlistNames.map(
                    (playlistName) => {
                        const videos = props.playlists[playlistName]

                        return (
                            <section key={playlistName}>
                                <h2>{playlistName}</h2>
                                <div>
                                    {
                                        videos.filter((video) => {
                                            return video.title.toLowerCase().includes(filterValues.toLowerCase())
                                        }).map(
                                            (video) => {
                                                return (
                                                    <a key={video.url} href={video.url}>
                                                        <img src={video.thumb} />
                                                        <span>
                                                            {video.title}
                                                        </span>
                                                    </a>
                                                )
                                            }
                                        )
                                    }
                                </div>
                            </section>
                        )
                    }
                )
            }
        </StyledTimeline>
    )
}

export default TimeLine