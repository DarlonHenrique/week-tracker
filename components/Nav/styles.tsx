import styled from 'styled-components'

export const NavContainer = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ul {
    list-style: none;
    width: 100%;
    height: 100%;

    li {
      background-color: var(--blue-light);
      color: #fff;
      border-radius: 0.25rem;
      padding: 1rem;
      margin: 1.91rem 0.5rem;
      text-align: center;
      font-size: 1rem;
      font-weight: bold;
      cursor: pointer;
      transition: all 0.2s ease-in-out;

      &:hover {
        filter: brightness(0.9);
      }
    }
  }
`
