import React, { useState } from "react"
import StyledRegisterVideo from "../ui/styledRegisterVideo"

const RegisterVideo = () => {
    const [formVisible, setFormVisible] = useState(false)

    const [formVideo, setFormVideo] = useState({
        title: "", url: ""
    })

    const handleCloseForm = () => {
        setFormVisible(!formVisible)
    }

    const handleCleanForm = () => {
        setFormVideo({
            title: "", url: ""
        })
    }

    const handleOnSubmit = (event) => {
        event.preventDefault();

        handleCleanForm()
        handleCloseForm()
    }

    const handleOnChangeForm = (event) => {
        setFormVideo({
            ...formVideo,
            [event.target.name]: event.target.value
        })
    }

    return (
        <StyledRegisterVideo>
            <button type="button" className="add-video" onClick={handleCloseForm}>
                +
            </button>
            {
                formVisible ? (
                    <form onSubmit={handleOnSubmit}>
                        <div>
                            <button className="close-modal" onClick={handleCloseForm}>X</button>
                            <input 
                                placeholder="Titulo do video" 
                                name="title" 
                                value={formVideo.title}
                                onChange={handleOnChangeForm} 
                                type="text" />
                            <input 
                                placeholder="URL do video" 
                                name="url" 
                                value={formVideo.url}
                                onChange={handleOnChangeForm} 
                                type="text" />
                            <button type="submit">Cadastrar</button>
                        </div>
                    </form>
                ): false
            }
        </StyledRegisterVideo>
    )
}

export default RegisterVideo
