import { CalendarBlank, ChatCircle, GithubLogo } from 'phosphor-react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const PostContainer = styled.div`
  width: 100%;
  max-width: 862px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 0 1rem 1rem;
`

export const NoDataContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const PostHeader = styled.div`
  width: 100%;
  border-radius: 10px;
  padding: 2rem 2.5rem;
  margin-top: -6rem;
  min-width: 41rem;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  background-color: ${(props) => props.theme['base-profile']};

  strong {
    font-size: 1.5rem;
    color: ${(props) => props.theme['base-title']};
  }
`

export const TitleContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  padding: 0.5rem 0;
`

export const LinkContent = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  color: ${(props) => props.theme['brand-blue']};
  font-size: 0.75rem;
  font-weight: 700;

  text-decoration: none;
  border-bottom: 1px solid transparent;
  transition: 0.5s;

  &:hover {
    border-bottom: 1px solid;
  }
`

export const Footer = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 1.5rem;
`

export const FooterContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  span {
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const GitHubIcon = styled(GithubLogo)`
  color: ${(props) => props.theme['base-label']};
`

export const CalendarBlankIcon = styled(CalendarBlank)`
  color: ${(props) => props.theme['base-label']};
`

export const ChatCircleIcon = styled(ChatCircle)`
  color: ${(props) => props.theme['base-label']};
`

export const PostContent = styled.div`
  padding: 2.5rem 2rem;
`
