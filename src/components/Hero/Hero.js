import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
      <LeftSection>
          <SectionTitle main center>
              Welcome to <br />
              My Personal Portfolio
          </SectionTitle>
          <SectionText>
              The purpose of coding is to help established developers take their apps to the next level.
          </SectionText>
          <Button target="_blank" onClick = {() => window.open('https://upbeat-galileo-9a1978.netlify.app', '_blank')}>Learn More</Button>
      </LeftSection>
  </Section>
);

export default Hero;