import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
      <LeftSection>
          <SectionTitle main center>
              Michael De La Riva
          </SectionTitle>
          <SectionText>
              Web Developer
          </SectionText>
          <Button onClick = {() => window.open('https://upbeat-galileo-9a1978.netlify.app', '_blank')}>Learn More</Button>
      </LeftSection>
  </Section>
);

export default Hero;