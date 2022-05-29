import styled from 'styled-components'

export const ActiveTrackersContainer = styled.nav`
  background-color: var(--blue);
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 593px;

  h2 {
    margin-top: 15px;
    font-size: 1.5rem;
  }

  table,
  th,
  td {
    border: 1px solid #fff;
  }

  table {
    margin-top: 2rem;
    width: 90%;
    border-collapse: collapse;
    border-spacing: 0;
    text-align: right;

    th {
      padding: 0.5rem;
      text-align: center;
    }

    td {
      padding: 0.5rem;
    }
  }
`
