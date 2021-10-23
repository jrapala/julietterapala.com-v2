import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import IconLink from '../elements/IconLink';

const SocialIcons = () => {
  const data = useStaticQuery(graphql`
    query SocialIcons {
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
  const { twitter, github, linkedin } = data.site.siteMetadata.social;
  return (
    <div>
      <IconLink icon={faTwitter} url={twitter} description="Juliette's Twitter" />
      <IconLink icon={faGithub} url={github} description="Juliette's GitHub" />
      <IconLink icon={faLinkedin} url={linkedin} description="Juliette's LinkedIn" />
    </div>
  );
};
export default SocialIcons;
