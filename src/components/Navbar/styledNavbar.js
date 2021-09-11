import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 0;

  @media screen and (max-width: 568px) {
    justify-content: space-between;
    padding: 0 1rem;
  }

  @media screen and (max-width: 280px) {
    padding: 0.5rem;
  }
`;

export const Logo = styled.h1`
  font-size: clamp(1.5rem, 3vw, 3rem);
  cursor: pointer;
  text-transform: uppercase;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  @media screen and (max-width: 280px) {
    flex-direction: column;
  }
`;

export const Button = styled.button`
  color: ${({ theme }) => theme.colors.firstColor};
  font-size: clamp(1rem, 1.5vw, 1.5rem);
  background: transparent;
  padding: 0.5rem 1rem;
  border: 2px solid ${({ theme }) => theme.colors.firstColor};
  border-radius: 1rem;
  cursor: pointer;
  transition: all 0.5s ease-in-out;

  :hover {
    background-color: ${({ theme }) => theme.colors.firstColor};
    color: #fff;
  }
`;