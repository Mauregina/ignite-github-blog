import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { ArrowSquareOut, CaretLeft } from 'phosphor-react'
import ReactMarkdown from 'react-markdown'

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
  PostContent,
  PostHeader,
  TitleContent,
} from './styles'
import { dateRelativeToNow } from '../../utils/calculateDateRelativeToNow'

interface Issue {
  title: string
  body: string
  html_url: string
  comments: number
  updated_at: string
}

export function Post() {
  const { id } = useParams()
  const [issueInfo, setIssueInfo] = useState<Issue | undefined>(undefined)

  useEffect(() => {
    async function fetchIssue() {
      const userName = 'mauregina'
      const repository = 'ignite-github-blog'
      try {
        const response = await api.get(
          `repos/${userName}/${repository}/issues/${id}`,
        )
        if (response.status === 200) {
          setIssueInfo(response.data)
        }
      } catch (error) {
        console.error('Error ', error)
      }
    }
    if (id !== undefined) {
      fetchIssue()
    }
  }, [id])

  return (
    <PostContainer>
      {issueInfo ? (
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
                <span>cameronwll</span>
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
          <PostContent>
            <ReactMarkdown>{issueInfo.body}</ReactMarkdown>
          </PostContent>
        </>
      ) : (
        <NoDataContainer>Não há dados a serem exibidos</NoDataContainer>
      )}
    </PostContainer>
  )
}
