/* eslint-disable react/no-children-prop */
import { useParams } from 'react-router-dom'
import { useCallback, useContext, useEffect, useState } from 'react'
import { ArrowSquareOut, CaretLeft } from 'phosphor-react'

import { api } from '../../lib/axios'
import {
  CalendarBlankIcon,
  ChatCircleIcon,
  Footer,
  FooterContent,
  GitHubIcon,
  LinkContent,
  NoDataContainer,
  PostContainer,
  PostHeader,
  TitleContent,
} from './styles'
import { dateRelativeToNow } from '../../utils/calculateDateRelativeToNow'
import { Loading } from '../../components/Loading'
import { UserContext } from '../../contexts/UserContext'
import { PostContent } from './PostContent'

interface Issue {
  title: string
  body: string
  html_url: string
  comments: number
  updated_at: string
}

export function Post() {
  const { id } = useParams()
  const { userName, repository } = useContext(UserContext)
  const [issueInfo, setIssueInfo] = useState<Issue | undefined>(undefined)
  const [loading, setLoading] = useState(false)

  const fetchIssue = useCallback(async () => {
    try {
      setLoading(true)
      const response = await api.get(
        `repos/${userName}/${repository}/issues/${id}`,
      )
      if (response.status === 200) {
        setIssueInfo(response.data)
      }
    } catch (error) {
      console.error('Error ', error)
    } finally {
      setLoading(false)
    }
  }, [id, repository, userName])

  useEffect(() => {
    if (id !== undefined) {
      fetchIssue()
    }
  }, [fetchIssue, id])

  return (
    <PostContainer>
      {loading ? (
        <Loading />
      ) : issueInfo ? (
        <>
          <PostHeader>
            <TitleContent>
              <LinkContent to="/">
                <CaretLeft size={12} />
                <span>VOLTAR</span>
              </LinkContent>
              <LinkContent to={issueInfo.html_url}>
                <span>VER NO GITHUB</span>
                <ArrowSquareOut size={12} />
              </LinkContent>
            </TitleContent>
            <strong>{issueInfo.title}</strong>
            <Footer>
              <FooterContent>
                <GitHubIcon weight="fill" size={18} />
                <span>{userName}</span>
              </FooterContent>
              <FooterContent>
                <CalendarBlankIcon weight="fill" size={18} />
                <span>{dateRelativeToNow(issueInfo.updated_at)}</span>
              </FooterContent>
              <FooterContent>
                <ChatCircleIcon weight="fill" size={18} />
                <span>{issueInfo.comments} comentários</span>
              </FooterContent>
            </Footer>
          </PostHeader>
          <PostContent children={issueInfo.body} />
        </>
      ) : (
        <NoDataContainer>Não há dados a serem exibidos</NoDataContainer>
      )}
    </PostContainer>
  )
}
