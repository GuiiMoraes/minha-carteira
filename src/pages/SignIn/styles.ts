import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  width: 300px;
  height: 100%;

  padding: 16px 22px;

  background-color: #313862;

  color: #fff;

  border-radius: 8px;

  > strong {
    width: 100%;

    font-size: 2rem;

    margin-bottom: 48px;

    position: relative;

    :after {
      content: '';

      position: absolute;
      bottom: 0;
      left: 0;

      width: 48px;
      height: 10px;

      border-radius: 2px;

      background-color: #e44c4e;

      transform: translateY(100%);
    }
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 16px;

  color: #fff;

  > img {
    width: 50px;
  }

  > h1 {
    font-size: 2rem;
    margin-left: 16px;
  }
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  height: 100%;

  > button {
    color: #fff;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  background-color: #fff;

  border-radius: 4px;

  width: 100%;

  padding: 0 8px;

  :not(:first-of-type) {
    margin-top: 12px;
  }

  svg {
    width: 22px;
    height: 22px;
    color: #222;
  }

  > button {
    background-color: inherit;

    border: none;
  }
`;
