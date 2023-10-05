import { useEffect, useState } from 'react'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import removeMarkdown from 'remove-markdown'

import { api } from '../../lib/axios'
import { Profile } from './components/Profile'
import { SearchForm } from './components/SearchForm'
import {
  HomeContainer,
  PublicationContainer,
  PublicationCard,
  CardTitle,
  CardText,
  Summary,
} from './styles'

interface Issue {
  id: number
  number: number
  title: string
  body: string
  updated_at: string
}

export function Home() {
  const [issues, setIssues] = useState<Issue[]>([])
  const totalIssues = issues.length

  async function fetchIssues(query?: string) {
    const userName = 'mauregina'
    const repository = 'ignite-github-blog'

    try {
      const response = await api.get('search/issues', {
        params: {
          q: `${query || ''} repo:${userName}/${repository}`,
        },
      })

      if (response.status === 200) {
        setIssues(response.data.items)
      }
    } catch (error) {
      console.error('Error ', error)
    }
  }

  useEffect(() => {
    fetchIssues()
  }, [])

  function updatedDateRelativeToNow(updatedDateStr: string) {
    const updatedDate = new Date(updatedDateStr)
    return formatDistanceToNow(updatedDate, { locale: ptBR, addSuffix: true })
  }

  return (
    <HomeContainer>
      <Profile />
      <Summary>
        <strong>Publicações</strong>
        <span>{totalIssues} publicações</span>
      </Summary>
      <SearchForm onFetchIssues={fetchIssues} />
      {totalIssues > 0 && (
        <PublicationContainer>
          {issues.map((issue) => (
            <PublicationCard key={issue.id} to={`post/${issue.number}`}>
              <CardTitle>
                <strong>{issue.title}</strong>
                <span>{updatedDateRelativeToNow(issue.updated_at)}</span>
              </CardTitle>
              <CardText>{removeMarkdown(issue.body)}</CardText>
            </PublicationCard>
          ))}
        </PublicationContainer>
      )}
    </HomeContainer>
  )
}
