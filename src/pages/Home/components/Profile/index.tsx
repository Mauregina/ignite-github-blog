import { useEffect, useState } from 'react'
import { ArrowSquareOut } from 'phosphor-react'

import {
  Avatar,
  BuildingsIcon,
  Card,
  Description,
  Footer,
  FooterContent,
  GitHubIcon,
  LinkContent,
  NoDataContainer,
  ProfileContainer,
  TitleContent,
  UsersIcon,
} from './styles'
import { api } from '../../../../lib/axios'

interface User {
  name: string
  login: string
  bio: string
  html_url: string
  avatar_url: string
  company?: string
  followers: number
}

export function Profile() {
  const [userInfo, setUserInfo] = useState<User | undefined>(undefined)

  async function loadUserInfo() {
    const userName = 'mauregina'
    try {
      const response = await api.get('users/' + userName)

      if (response.status === 200) {
        setUserInfo(response.data)
      }
    } catch (error) {
      console.error('Error ', error)
    }
  }

  useEffect(() => {
    loadUserInfo()
  }, [])

  return (
    <ProfileContainer>
      {userInfo ? (
        <>
          <Avatar src={userInfo.avatar_url} alt="" />
          <Card>
            <TitleContent>
              <strong>{userInfo.name}</strong>
              <LinkContent to={userInfo.html_url}>
                <span>GITHUB</span>
                <ArrowSquareOut size={12} />
              </LinkContent>
            </TitleContent>
            <Description>{userInfo.bio}</Description>
            <Footer>
              <FooterContent>
                <GitHubIcon weight="fill" size={18} />
                <span>{userInfo.login}</span>
              </FooterContent>
              {userInfo.company && (
                <FooterContent>
                  <BuildingsIcon weight="fill" size={18} />
                  <span>{userInfo.company}</span>
                </FooterContent>
              )}
              <FooterContent>
                <UsersIcon weight="fill" size={18} />
                <span>{userInfo.followers} seguidores</span>
              </FooterContent>
            </Footer>
          </Card>
        </>
      ) : (
        <NoDataContainer>
          Não foi possível recuperar dados do profile
        </NoDataContainer>
      )}
    </ProfileContainer>
  )
}
