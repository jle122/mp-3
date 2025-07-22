import Header from "./Header.tsx";
import Nav from "./Nav.tsx";
import Footer from "./Footer.tsx";
import {Routes, Route} from "react-router";
import styled from "styled-components";
import Home from "./mains/Home.tsx";
import Certifications from "./mains/Certifications.tsx";
import Education from "./mains/Education.tsx";
import Experience from "./mains/Experience.tsx";
import Skills from "./mains/Skills.tsx";
import Project from "./mains/Project.tsx";

const Wrapper = styled.div`
    background-color:rgb(0,128,198);
    color:rgb(255,194,14);
    margin: 0 auto;
    font-family:Verdana, Geneva, Tahoma, sans-serif;
    padding-bottom: 0px;
    margin-left: 10%;
    margin-right: 10%;
`

const StyledMain = styled.main`
    width: 70%;
    border: 2px solid rgb(0,34,68);
    min-height:100vh; 
    padding-right: 100px;
    padding-left: 50px;
    padding-bottom: 4px;
    box-sizing: border-box;
    background-color: rgb(0,34,68);

    @media screen and (max-width: 1000px) {
        width: 100%;
        text-align: center;
        padding-left:0;
        padding-right:0;
        padding-bottom: 1px;
    }
`

const Container = styled.div`
    display: flex;
    flex-direction: row;
    margin: 0 auto;
    @media screen and (max-width: 1000px) {
        flex-direction: column;
        max-width: 100vw;
        text-align: center;
        padding-left:0;
        padding-right:0;
    }
`

export default function Root(){
    return(
        <Wrapper>
            <Header/>
            <Container>
                <Nav/>
                <StyledMain>
                    <Routes>
                        <Route path={`/`} element={<Home/>}/>
                        <Route path={`/certifications.html`} element={<Certifications/>}/>
                        <Route path={`/education.html`} element={<Education/>}/>
                        <Route path={`/experience.html`} element={<Experience/>}/>
                        <Route path={`/projects.html`} element={<Project/>}/>
                        <Route path={`/skills.html`} element={<Skills/>}/>
                    </Routes>
                </StyledMain>
            </Container>
            <Footer/>
        </Wrapper>
    )
}