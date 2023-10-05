import { Buildings, GithubLogo, Users } from 'phosphor-react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const ProfileContainer = styled.section`
  width: 100%;
  border-radius: 10px;
  padding: 2rem 2.5rem;
  margin-top: -6rem;
  margin-bottom: 4.5rem;
  min-width: 41rem;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 2rem;

  background-color: ${(props) => props.theme['base-profile']};
`

export const NoDataContainer = styled.div`
  flex: 1;
  height: 9.25rem;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const Avatar = styled.img`
  width: 9.25rem;
  height: 9.25rem;
  border-radius: 8px;
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

  strong {
    font-size: 1.5rem;
    color: ${(props) => props.theme['base-title']};
  }
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

export const Description = styled.div`
  flex-grow: 1;
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

export const BuildingsIcon = styled(Buildings)`
  color: ${(props) => props.theme['base-label']};
`

export const UsersIcon = styled(Users)`
  color: ${(props) => props.theme['base-label']};
`
