import React from 'react';
import { DiHtml5, DiReact, DiZend, DiCss3, DiGit, DiTrello, DiUbuntu, DiSass } from 'react-icons/di';
import { AiOutlineSlack, AiFillCode } from 'react-icons/ai';
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
            I've worked with a range of technologies from around the world.  From back-end to design.
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
                        Experience with <br />
                        React.js
                    </ListParagraph>
                </ListContainer>
            </ListItem>
            <ListItem>
                <div className='listIconCont'>
                    <AiFillCode size="3rem" />
                    <DiUbuntu size="3rem" />
                    <DiGit size="3rem" />
                </div>
                <ListContainer>
                    <ListTitle>Dev-Tools</ListTitle>
                    <ListParagraph>
                        Experience with <br />
                        Node and Databases
                    </ListParagraph>
                </ListContainer>
            </ListItem>
            <ListItem>
                <div className='listIconCont'>
                    <DiTrello size="3rem" />
                    <AiOutlineSlack size="3rem" />
                </div>
                <ListContainer>
                    <ListTitle>Team Work</ListTitle>
                    <ListParagraph>
                        Experience with <br />
                        Figma
                    </ListParagraph>
                </ListContainer>
            </ListItem>
        </List>
    </Section>
);

export default Technologies;
