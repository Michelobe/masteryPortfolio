import React from 'react';

import { Section, SectionText, SectionTitle, SectionSubText } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
      <LeftSection>
          <SectionTitle main center>
              Michael De La Riva
          </SectionTitle>
          <SectionText>
              Developer
          </SectionText>
          <SectionSubText>
              Hi, I'm Michael -- a front-end developer who enjoys taking a concept design and building it into a fully functional website.
          </SectionSubText>
          <Button onClick = {() => window.open('https://upbeat-galileo-9a1978.netlify.app', '_blank')}>Learn More</Button>
      </LeftSection>
  </Section>
);

export default Hero;