import React from 'react';
import { DiHtml5, DiReact, DiZend, DiCss3, DiGit, DiTrello, DiUbuntu, DiSass } from 'react-icons/di';
import { AiOutlineSlack, AiFillCode } from 'react-icons/ai';
import { CgNpm } from 'react-icons/cg';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
    <Section id="tech">
        <SectionDivider />
        <br />
        <br />
        <br />
        <SectionTitle>Technologies</SectionTitle>
        <SectionText>
            I've worked with a range of technologies and tools to build and deploy, effective, responsive websites using the latest designs..  
        </SectionText>
        <List>
            <ListItem>
                <div className='listIconCont'>
                    <DiHtml5 size="3rem" />
                    <DiReact size="3rem" />
                    <DiCss3 size="3rem" />
                    <DiSass size="3rem" />
                </div>
                <ListContainer>
                    <ListTitle>Front-End</ListTitle>
                    <ListParagraph>
                        HTML5 <br/>
                        React.js <br/>
                        CSS3 <br/>
                        SASS <br/>
                    </ListParagraph>
                </ListContainer>
            </ListItem>
            <ListItem>
                <div className='listIconCont'>
                    <AiFillCode size="3rem" />
                    <DiUbuntu size="3rem" />
                    <DiGit size="3rem" />
                    <CgNpm size="3rem" />
                </div>
                <ListContainer>
                    <ListTitle>Dev-Tools</ListTitle>
                    <ListParagraph>
                        VSCode <br />
                        UBUNTU Terminal <br />
                        .git <br />
                        npm <br />
                    </ListParagraph>
                </ListContainer>
            </ListItem>
            <ListItem>
                <div className='listIconCont'>
                    <AiOutlineSlack size="3rem" />
                    <DiTrello size="3rem" />
                </div>
                <ListContainer>
                    <ListTitle>Team Work</ListTitle>
                    <ListParagraph>
                        Slack (communication) <br />
                        Trello (tasks) <br />
                    </ListParagraph>
                </ListContainer>
            </ListItem>
        </List>
    </Section>
);

export default Technologies;
