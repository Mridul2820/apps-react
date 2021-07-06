import React from 'react'
import styled from 'styled-components';
import { BsBoxArrowUpRight } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'

const ProjectsCard = ({ project, setSelectedModal }) => {
    return (
        <StyledArticle>
            <StyledImg>
                <img 
                    src={project.projectImage.asset.url} 
                    alt={project.title} 

                    onClick={() => {
                        setSelectedModal(project.projectImage.asset.url)
                    }}
                />
            </StyledImg>
            <StyledBody>
                <div className="tags">
                {project.tags && 
                    project.tags.map((tag, index) => (
                        <span className="tag" key={index} >{tag}</span>
                    ))
                }
                </div>

                <h1 className="title" >
                    {project.title}
                </h1>

                <StyledLink>
                    {project.varcel && 
                        <a target='_blank' rel="noreferrer" href={project.varcel} className="varcel" >
                            <BsBoxArrowUpRight />
                            <span>Demo</span>
                        </a>
                    }
                    <a target='_blank' rel="noreferrer" href={project.githubRepo} className="repo">
                        <FaGithub size="20px" />
                        <p>Github</p>
                    </a>
                </StyledLink>
            </StyledBody>
        </StyledArticle>
    )
}

const StyledArticle = styled.article`
    background-color: #eee;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 20px rgba(0, 0, 0, .2);
    transition: 0.25s ease;

    &:hover {
        box-shadow: 0 2px 20px rgba(0, 0, 0, .6);
    }
`

const StyledImg = styled.div`
    width: 100%;
    overflow: hidden;

    img {
        width: 100%;
        object-fit: cover;
        vertical-align: bottom;
    }
`

const StyledBody = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 20px;

    .tag {
        background: #777;
        border-radius: 50px;
        font-size: 12px;
        color: #fff;
        margin-right: 8px;
        padding: 2px 10px;
        text-transform: uppercase;
        background-color: #43a047;
    }

    .title {
        margin: 10px 0;
        font-size: 20px;

        @media only screen and (max-width: 1200px){
            font-size: 18px;
        }

        @media only screen and (max-width: 944px){
            font-size: 16px;
        }
    }
`

const StyledLink = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    font-family:'Lato';

    .varcel {
        padding: 5px 12px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.1rem;
        border: 2px solid #023047;
        background-color: #023047;
        box-shadow: 3px 6px 20px rgba(64, 149, 198, 0.336);
        border-radius: 50px;
        color:#ffffff;
        font-family: 'Noto Sans JP', sans-serif;
    
        &:hover{
            background-color: transparent;
            transition: all ease 0.5s;
            color: #3d2514;
        }

        span {
            margin-left: 5px;
        }
    }

    .repo {
        color: #212121;
        padding: 5px 12px;
        border: 2px solid #212121;
        font-size: 1.1rem;
        border-radius: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: 'Noto Sans JP', sans-serif;

        &:hover{
            background-color: #000;
            transition: all ease 0.5s;
            color: #fff;
            box-shadow: 3px 6px 20px rgba(0, 0, 0, 0.336);
        }

        p {
            margin-left: 5px;
        }
    }
`

export default ProjectsCard
