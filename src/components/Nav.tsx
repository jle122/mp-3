import {Link} from "react-router";
import {styled} from "styled-components";

const StyledNav = styled.nav`
    width: 30%;
    @media screen and (max-width:1000px) {
        width: 100%;
    }
`
const StyledList = styled.ul`
    background-color: rgb(255,194,14);
    width: 100%;
    height: 100%;
    padding-left:0;
    list-style: none;
    text-align:left; 

    @media screen and (max-width:1000px) {
        background-color: rgb(255,194,14);
        width: 100%;
        text-align: center;
    }
`
const StyledLi = styled.li`
    display: block;
    border: 3px solid rgb(0,34,68);
    padding: 5px;
    font-size: calc(4px + 1vw);
    height: 16.667%;
    
    @media screen and (max-width:1000px) {
        display: inline;
        border: none;
        width: 70%;
    }
`

export default function Nav() {
    return (
        <StyledNav>
            <StyledList>
                <StyledLi><Link to={`/`}><u>Home</u></Link></StyledLi>
                <StyledLi><Link to={`/certifications.html`}><u>Certifications/Achievements</u></Link></StyledLi>
                <StyledLi><Link to={`/education.html`}><u>Education</u></Link></StyledLi>
                <StyledLi><Link to={`/experience.html`}><u>Experience</u></Link></StyledLi>
                <StyledLi><Link to={`/projects.html`}><u>Projects</u></Link></StyledLi>
                <StyledLi><Link to={`/skills.html`}><u>Skills</u></Link></StyledLi>
            </StyledList>
        </StyledNav>
    )
}