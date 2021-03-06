import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillFacebook } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
      <Div1>
          <Link href="/">
              <a style={{display:"flex", alignItems: "center", color: "white", marginBottom: "20px"}}>
                  <DiCssdeck size="3rem" /> <Span>Michael De La Riva</Span>
              </a>
          </Link>
      </Div1>
      <Div2>
          <li>
              <Link href="#projects">
                  <NavLink>Projects</NavLink>
              </Link>
          </li>
          <li>
              <Link href="#tech">
                  <NavLink>Technologies</NavLink>
              </Link>
          </li>
          <li>
              <Link href="#about">
                  <NavLink>About</NavLink>
              </Link>
          </li>
      </Div2>
      <Div3>
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
      </Div3>
  </Container>
);

export default Header;
