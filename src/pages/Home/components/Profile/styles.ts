import styled from 'styled-components'

export const ProfileContainer = styled.section`
  width: 100%;
  border-radius: 10px;
  padding: 2rem 2.5rem;
  margin-top: -6rem;

  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 2rem;

  background-color: ${(props) => props.theme['base-profile']};
`

export const Avatar = styled.img`
  width: 9.25rem;
  height: 9.25rem;
`

export const Card = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const TitleContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  padding: 0.5rem 0;
`
