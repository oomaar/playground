import styled from 'styled-components';

export const Container = styled.div``;

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  width: 50%;
  border: 2px solid ${({ theme }) => theme.colors.firstColor};
  border-radius: 1rem;
  background-color: rgba(227, 227, 272, 0.5);
  transition: all 0.5s ease;

  :hover {
    box-shadow: 0 4px 6px 4px rgba(0, 0, 0, 0.1), 0 2px 4px 2px rgba(0, 0, 0, 0.06);
  }

  :focus {
    box-shadow: 0 4px 6px 4px rgba(0, 0, 0, 0.1), 0 2px 4px 2px rgba(0, 0, 0, 0.06);
  }

  :focus-within {
    box-shadow: 0 4px 6px 4px rgba(0, 0, 0, 0.1), 0 2px 4px 2px rgba(0, 0, 0, 0.06);
  }

  @media screen and (max-width: 568px) {
    width: 90%;
  }

  @media screen and (max-width: 280px) {
    width: 100%;
  }
`;

export const Input = styled.input`
  padding: 1rem 1.5rem;
  width: 100%;
  outline: 0;
  border: 0;
  background: transparent;
  border-radius: 1rem;
  font-size: 1rem;
`;