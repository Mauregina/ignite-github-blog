import styled from 'styled-components'

export const HomeContainer = styled.main`
  width: 100%;
  max-width: 862px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 0 1rem 1rem;
`

export const PublicationContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 2rem;
  column-gap: 2rem;

  margin-top: 2rem;
`

export const PublicationCard = styled.div`
  border-radius: 10px;
  background: ${(props) => props.theme['base-post']};
  padding: 2rem;

  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  min-width: 25rem;
`

export const CardTitle = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;

  strong {
    flex-grow: 1;
    font-size: 1.25rem;
    color: ${(props) => props.theme['base-title']};
  }

  span {
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-span']};
    white-space: nowrap;
    padding-top: 0.3125rem;
  }
`

export const CardText = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.6;
  max-height: 6.4em;
`
