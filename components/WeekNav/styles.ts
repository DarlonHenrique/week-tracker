import styled from 'styled-components'

export const WeekNavContainer = styled.ul`
  display: flex;
  background-color: var(--blue);
  padding: 10px;
  justify-content: center;
  list-style: none;
  max-height: 60px;

  li {
    background-color: #fff;
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    margin: 0 20px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    font: 500 1.2rem 'Poppins', sans-serif;

    &:hover {
      filter: brightness(90%);
    }
  }
`
