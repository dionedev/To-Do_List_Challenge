import styled from "styled-components"

interface ContainerProps {
  checked: boolean
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  height: 7.2rem;
  padding: 1.6rem;
  display: flex;
  justify-content: space-between;
  align-items: start;
  gap: 1.2rem;
  margin-bottom: 1.2rem;

  border: 1px solid ${({ theme }) => theme.gray_400};
  border-radius: 8px;

  > div {
    width: 63rem;

    p {
      text-decoration: ${({ checked }) => checked ? 'line-through' : 'initial'};
      color: ${({ checked, theme }) => checked ? theme.gray_300 : theme.gray_100};
    }
  }

  button {
    background: transparent;
    border: none;

    svg {
      color: ${({ theme }) => theme.gray_300};
    }
  }
`

export const ContainerCheckbox = styled.div`
  
`