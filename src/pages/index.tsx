import React from 'react';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import Hero from '../components/Hero';

// This ensures that the icon CSS is loaded immediately before attempting to render icons
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
// Prevent fontawesome from dynamically adding its css since we did it manually above
config.autoAddCss = false;

const App = () => (
  <Layout>
    <Seo
      keywords={[
        `juliette rapala`,
        `javascript`,
        `developer`,
        `react`,
        `react native`,
        `accessibility`,
        `engineer`,
        `software engineer`,
      ]}
    />
    <Hero />
  </Layout>
);

export default App;
