import {styled} from "styled-components";

const StyledHeader = styled.header`
    background-color: rgb(0,34,68);
    
        @media screen and (max-width: 1000px) {
        text-align: center;
    }
`

export default function Header() {
    return (
        <StyledHeader>
            <h1>James Le</h1>
            <p>An online resume</p>
        </StyledHeader>
    )
}