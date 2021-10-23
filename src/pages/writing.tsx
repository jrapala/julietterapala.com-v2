import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import PageTitle from '../elements/PageTitle';
import articles from '../utils/articles';

const Container = styled.section`
  display: flex;
  flex-direction: column;
`;

const NotFoundPage = () => {
  return (
    <Layout>
      <Seo title="Writing" />
      <PageTitle>Writing</PageTitle>
      <Container>
        <p>Here is a list of some of my blog posts:</p>
        <ul>
          {articles.map(article => (
            <li key={article.link}>
              <a href={article.link} target="_blank" rel="noopener noreferrer">
                {article.title}
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </Layout>
  );
};

export default NotFoundPage;
