import React, { ChangeEvent, Dispatch, SetStateAction, SyntheticEvent, useState } from "react"
import StyledRegisterVideo from "../ui/styledRegisterVideo"


interface FormTypes {
    title: string; 
    url: string; 
}


const RegisterVideo: React.FC = () => {
    const [formVisible, setFormVisible] = useState<boolean>(false)

    const [formVideo, setFormVideo] = useState<FormTypes>({
        title: "", url: ""
    })

    const handleCloseForm = (): void => {
        setFormVisible(!formVisible)
    }

    const handleCleanForm = (): void => {
        setFormVideo({
            title: "", url: ""
        })
    }

    const handleOnSubmit = (event: SyntheticEvent<EventTarget>): void => {
        event.preventDefault();

        handleCleanForm()
        handleCloseForm()
    }

    const handleOnChangeForm = (event: ChangeEvent<HTMLInputElement>): void => {
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