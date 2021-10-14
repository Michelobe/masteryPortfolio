import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillFacebook, AiFillCopyrightCircle } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
    return (
        <FooterWrapper>
            <LinkList />
            <SocialIconsContainer>
                <CompanyContainer>
                    <Slogan>Innovating one project at a time</Slogan>
                </CompanyContainer>
                <SocialContainer>
                    <SocialIcons href="https://github.com/michelobe" target="_blank">
                        <AiFillGithub size="3rem" />
                    </SocialIcons>
                    <SocialIcons href="https://www.linkedin.com/in/michael-de-la-riva-380698140/" target="_blank">
                        <AiFillLinkedin size="3rem" />
                    </SocialIcons>
                    <SocialIcons href="https://www.instagram.com/michelobe/" target="_blank">
                        <AiFillInstagram size="3rem" />
                    </SocialIcons>
                    <SocialIcons href="https://www.facebook.com/people/Michael-De-La-Riva/100010391440834" target="_blank">
                        <AiFillFacebook size="3rem" />
                    </SocialIcons>
                </SocialContainer>
            </SocialIconsContainer>
                <br />
                <LinkTitle>
                    <AiFillCopyrightCircle />michaeldelariva - design by javascriptMastery
                </LinkTitle>
        </FooterWrapper>
    );
};

export default Footer;
