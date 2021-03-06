import styled from 'styled-components'

export const HeaderContainer = styled.header`
  margin: 0 auto;
  padding: 20px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  button {
    font-size: 1rem;
    color: #fff;
    background-color: var(--blue-light);
    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;

    transition: filter 0.2s;
    &:hover {
      filter: brightness(0.9);
    }
  }
`
