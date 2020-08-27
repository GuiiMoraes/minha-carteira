import React from 'react';

import { randomEmoji } from 'utils';

import { Container, Profile } from './styles';

const MainHeader: React.FC = () => {
  const emoji = randomEmoji();

  return (
    <Container>
      <h1>MainHeader</h1>

      <Profile>
        <strong>Olá, {emoji}</strong>
        <p>Guilherme Moraes</p>
      </Profile>
    </Container>
  );
};

export default MainHeader;
