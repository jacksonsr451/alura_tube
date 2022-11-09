import styled from "styled-components"

interface Props {
    background: string
}

export const StyledBanner = styled.div<Props>`
    background-color: blue;
    background-image: url(${({ background }) => background});
    height: 230px;
`