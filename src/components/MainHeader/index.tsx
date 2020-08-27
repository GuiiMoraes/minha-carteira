import React, { useCallback } from 'react';

import { randomEmoji } from 'utils';

import Switcher from 'components/Switcher';
import { Container, SwitcherWrapper, Profile } from './styles';

const MainHeader: React.FC = () => {
  const emoji = randomEmoji();

  const handleToogleTheme = useCallback(() => {
    console.log('teste');
  }, []);

  return (
    <Container>
      <SwitcherWrapper>
        <span role="img" aria-label="moon emoji">
          🌙
        </span>
        <Switcher onChange={handleToogleTheme} />
        <span role="img" aria-label="sun emoji">
          🌞
        </span>
      </SwitcherWrapper>

      <Profile>
        <strong>Hello, {emoji}</strong>
        <p>Guilherme Moraes</p>
      </Profile>
    </Container>
  );
};

export default MainHeader;
