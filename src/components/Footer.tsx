import {styled} from "styled-components";
import {Link} from "react-router";

const StyledFooter = styled.footer`
    background-color: rgb(0,34,68);
`

export default function Footer() {
    return (
        <StyledFooter>
            <p>All Rights Reserved by James Le <Link to="">Credits</Link> &#169;</p>
        </StyledFooter>
    )
}