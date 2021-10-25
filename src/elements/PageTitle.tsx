import React, { FC } from 'react';
import styled from 'styled-components';

const H1 = styled.h1`
  color: ${({ theme: { colors } }) => colors.neutralMedium};
`;

const PageTitle: FC = ({ children }) => <H1>{children}</H1>;

export default PageTitle;
