import styled from 'styled-components'

export const SearchFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.75rem;
`

export const SearchTotal = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  strong {
    font-size: 1.125rem;
    color: ${(props) => props.theme['base-subtitle']};
  }

  span {
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-span']};
  }
`

export const InputSearch = styled.input`
  padding: 0.75rem 1rem;
  border-radius: 6px;
  border: 1px solid ${(props) => props.theme['base-border']};
  background: ${(props) => props.theme['base-input']};
  color: ${(props) => props.theme['base-text']};

  &::placeholder {
    color: ${(props) => props.theme['base-label']};
  }
`
