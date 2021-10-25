import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import PageTitle from '../elements/PageTitle';
import externalPosts from '../utils/externalPosts';

const Container = styled.section`
  display: flex;
  flex-direction: column;
`;

const Writing = () => {
  return (
    <Layout>
      <Seo title="Juliette Rapala | Blog" />
      <PageTitle>Blog</PageTitle>
      <Container>
        <p>Here is a list of some of my blog posts:</p>
        <ul>
          {externalPosts.map(post => (
            <li key={post.link}>
              <a href={post.link} target="_blank" rel="noopener noreferrer">
                {post.title}
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </Layout>
  );
};

export default Writing;
