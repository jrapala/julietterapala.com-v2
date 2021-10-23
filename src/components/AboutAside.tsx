import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import SectionTitle from '../elements/Title';

const StyledAside = styled.aside`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  h2 {
    padding-top: 1rem;
  }

  @media screen and (min-width: 650px) {
    margin-top: 2rem;
    padding: 0 2rem;
  }
`;

const AboutAside = () => {
  const data = useStaticQuery(graphql`
    query AboutQuery {
      image: file(relativePath: { eq: "profile-image.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 200, placeholder: BLURRED)
        }
      }
      site {
        siteMetadata {
          social {
            twitter
            github
            linkedin
          }
        }
      }
    }
  `);

  const image = getImage(data.image);
  const { twitter, github, linkedin } = data.site.siteMetadata.social;

  return (
    <StyledAside>
      {image && (
        <GatsbyImage image={image} alt="Headshot of Juliette Rapala" style={styles.imageWrapper} />
      )}
      <SectionTitle>How to Reach Me:</SectionTitle>
      <ul>
        <li>
          <a href={twitter} target="_blank" rel="noreferrer">
            Twitter
          </a>
        </li>
        <li>
          <a href={github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </li>
        <li>
          <a href={linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </li>
        <li>
          <a href="mailto:hello@julietterapala.com">Email</a>
        </li>
      </ul>
    </StyledAside>
  );
};

const styles = {
  image: {
    height: '100%',
    width: 'auto',
  },
  imageWrapper: {
    borderRadius: '50%',
    height: '200px',
    overflow: 'hidden',
    width: '200px',
    display: 'flex',
    margin: '0 auto',
  },
};

export default AboutAside;
