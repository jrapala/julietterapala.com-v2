import React, { FC } from 'react';
import styled from 'styled-components';

const H2 = styled.h2`
  margin: 2rem 0 1rem 0;
`;

const SectionTitle: FC = ({ children }) => <H2>{children}</H2>;

export default SectionTitle;
