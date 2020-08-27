import React from 'react';

import { Container, ContentWrapper } from './styles';

interface IContentHeader {
  title: string;
  lineColor: string;
}

const ContentHeader: React.FC<IContentHeader> = ({
  children,
  lineColor,
  title,
}) => {
  return (
    <Container lineColor={lineColor}>
      <h1>{title}</h1>
      <ContentWrapper>{children}</ContentWrapper>
    </Container>
  );
};

export default ContentHeader;
