import styled from "styled-components"

export const StyledHeader = styled.div`
    background-color: ${(props) => props.theme.colors.primary};

    .banner {
        display: inline-block;
        width: 100vw;
        height: 200px;
        margin-top: 50px;

        background-image: url('../images/background-image.jpg');
    }

    .user-info {
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 32px;
        gap: 16px;

        margin-top: 12px;

        img {
            width: 80px;
            height: 80px;
            border-radius: 50%;
        }
    }
`