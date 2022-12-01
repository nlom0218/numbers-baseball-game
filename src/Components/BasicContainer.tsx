import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
`;

const Layout = styled.div`
  margin: 0 auto;
  padding: 1.25rem;
  padding: 1.25em;
  width: 96vw;
  height: 92vh;
  background-color: rgba(230, 230, 230, 0.6);
  border-radius: 1rem;
  border-radius: 1em;
`;

interface IProps {
  children: React.ReactNode;
}

const BasicContainer = ({ children }: IProps) => {
  return (
    <Container>
      <Layout>{children}</Layout>
    </Container>
  );
};

export default BasicContainer;
