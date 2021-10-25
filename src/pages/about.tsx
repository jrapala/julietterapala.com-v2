import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import AboutAside from '../components/AboutAside';
import PageTitle from '../elements/PageTitle';
import SectionTitle from '../elements/SectionTitle';

const AboutWrapper = styled.div`
  min-height: 300px;
  display: block;

  section {
    padding-right: 1rem;
  }

  @media screen and (min-width: 650px) {
    display: grid;
    grid-template-columns: 65% 35%;
  }
`;

const Bio = () => (
  <>
    <SectionTitle>
      Hi, I’m Juliette{' '}
      <span role="img" aria-label="Hand waving">
        👋
      </span>
    </SectionTitle>
    <p>
      I am a software engineer and accessibility advocate who builds applications for both web and
      mobile. I believe that the web should work for everyone, regardless of their abilities or
      circumstances.
    </p>
    <p>
      I spend a lot of time educating myself and others on how to make websites and applications
      accessible. I write about accessibility, design systems, CSS, React, SwiftUI, and React Native
      in my blog. <Link to="/blog">You can read my posts here.</Link>
    </p>
    <p>I have a bachelor&apos;s degree in Sociology from Northwestern University.</p>
  </>
);

const Work = () => (
  <>
    <SectionTitle>What I Do For Work:</SectionTitle>
    <p>
      I currently work for{' '}
      <a href="http://www.fender.com" target="_blank" rel="noopener noreferrer">
        Fender
      </a>{' '}
      as a Software Engineer. At Fender, I help develop Fender Play, a guitar-learning platform, as
      well as a Design System used by all of Fender&apos;s web products. I am also a member of
      Fender&apos;s accessibility team.
    </p>
    <p>
      In the past I have worked for{' '}
      <a href="https://ascendum.com/" target="_blank" rel="noopener noreferrer">
        Ascendum Solutions
      </a>{' '}
      as a Mobile Developer for digital products in the healthcare industry. I have also worked for{' '}
      <a href="http://www.eventric.com" target="_blank" rel="noopener noreferrer">
        Eventric
      </a>{' '}
      as a Desktop and Mobile Developer for their live event and tour management software solutions.
    </p>
    <p>
      Before entering tech, I worked in the concert industry in ticketing, talent buying, and
      production roles. I&apos;ve been on a number of tours and still work the occasional show from
      time to time.
    </p>
  </>
);

const Fun = () => (
  <>
    <SectionTitle>What I Do For Fun:</SectionTitle>
    <p>
      When I&apos;m not at my computer, I enjoy fitness (weightlifting, cycling, and hiking), going
      to concerts, baking desserts, and watching movies. I&apos;m a big bookworm and enjoy both
      reading and writing fiction.
    </p>
  </>
);

const About = () => (
  <Layout>
    <Seo
      title="Juliette Rapala | About"
      description="I am a software engineer and accessibility advocate who builds applications for both web and mobile. I believe that the web should work for everyone, regardless of their abilities or circumstances."
    />
    <AboutWrapper>
      <section>
        <PageTitle>About</PageTitle>
        <Bio />
        <Work />
        <Fun />
      </section>
      <AboutAside />
    </AboutWrapper>
  </Layout>
);

export default About;
