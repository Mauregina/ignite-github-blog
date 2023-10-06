import { useCallback, useContext, useEffect, useState } from 'react'
import { ArrowSquareOut } from 'phosphor-react'

import { api } from '../../../../lib/axios'

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
import { Loading } from '../../../../components/Loading'
import { UserContext } from '../../../../contexts/UserContext'

interface User {
  name: string
  bio: string
  html_url: string
  avatar_url: string
  company?: string
  followers: number
}

export function Profile() {
  const { userName } = useContext(UserContext)
  const [userInfo, setUserInfo] = useState<User | undefined>(undefined)
  const [loading, setLoading] = useState(false)

  const loadUserInfo = useCallback(async () => {
    try {
      setLoading(true)
      const response = await api.get('users/' + userName)

      if (response.status === 200) {
        setUserInfo(response.data)
      }
    } catch (error) {
      console.error('Error ', error)
    } finally {
      setLoading(false)
    }
  }, [userName])

  useEffect(() => {
    loadUserInfo()
  }, [loadUserInfo])

  return (
    <ProfileContainer>
      {loading ? (
        <Loading />
      ) : userInfo ? (
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
                <span>{userName}</span>
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
        <NoDataContainer>Não há dados a serem exibidos</NoDataContainer>
      )}
    </ProfileContainer>
  )
}
