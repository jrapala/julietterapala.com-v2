import React, { FC } from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import PageTitle from '../elements/PageTitle';

interface Frontmatter {
  title: string;
  description: string;
  date: string;
}

interface MarkdownRemark {
  excerpt: string;
  frontmatter: Frontmatter;
  html: string;
  id: string;
}

interface BlogPostTemplateProps {
  data: {
    markdownRemark: MarkdownRemark;
    next: null;
    previous: null;
  };
  location: string;
}

const Article = styled.article`
  > p {
    color: ${props => props.theme.colors.neutralMedium};
  }

  p.date {
    margin-top: 0;
  }

  section {
    margin-top: 2rem;

    h2 {
      margin-bottom: 1rem;
    }
  }
`;

const BlogPostTemplate: FC<BlogPostTemplateProps> = ({ data }) => {
  const post = data.markdownRemark;
  // const { previous, next } = data;

  return (
    <Layout>
      <Seo
        pageTitle={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <Article>
        <PageTitle>{post.frontmatter.title}</PageTitle>
        <p>Posted on: {post.frontmatter.date}</p>
        <p className="date">Written by Juliette Rapala</p>
        <section dangerouslySetInnerHTML={{ __html: post.html }} />
      </Article>
      {/* <nav className="blog-post-nav">
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav> */}
    </Layout>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($id: String!, $previousPostId: String, $nextPostId: String) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      frontmatter {
        title
        slug
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      frontmatter {
        title
        slug
      }
    }
  }
`;
