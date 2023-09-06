import styled from "styled-components"

export const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
`

export const Main = styled.main`
  width: 100%;
  max-width: 73.5rem;
  height: 100vh;
  padding: 0 2rem;
  margin: 0 auto;
`

export const TaskSection = styled.section`
  margin-top: 6.4rem;

  .task-counter {
    display: flex;
    justify-content: space-between;
    margin-bottom: 2.4rem;
  }

  .task-counter-created {
    strong {
      color: ${({ theme }) => theme.blue};

      span {
        background-color: aqua;
        color: red;
      }
    }
  }

  .task-counter-completed {
    strong {
      color: ${({ theme }) => theme.purple};

      span {
        background-color: gray;
        color: green;
      }
    }
  }
`

export const TaskInput = styled.div`
  display: flex;
  gap: 8px;
  margin-top: -2.7rem;

  > input {
    width: 63.8rem;
    height: 5.4rem;
    padding-left: 1.6rem;
    border-radius: 8px;
    border: none;
    border: 1px solid ${({ theme }) => theme.gray_700};
    background-color: ${({ theme }) => theme.gray_500};
    color: ${({ theme }) => theme.gray_300};
  }

  > button {
    display: flex;
    width: 9rem;
    height: 5.2rem;
    align-items: center;
    justify-content: center;
    gap: 8px;
    border-radius: 8px;
    border: none;
    background-color: ${({ theme }) => theme.blue_dark};
    color: ${({ theme }) => theme.gray_100};
    font-weight: 700;
    padding: 0 5px;
  }
`