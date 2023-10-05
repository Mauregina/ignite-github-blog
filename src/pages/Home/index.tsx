import { useEffect, useState } from 'react'
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
import { dateRelativeToNow } from '../../utils/calculateDateRelativeToNow'

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
          sort: 'updated',
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
                <span>{dateRelativeToNow(issue.updated_at)}</span>
              </CardTitle>
              <CardText>{removeMarkdown(issue.body)}</CardText>
            </PublicationCard>
          ))}
        </PublicationContainer>
      )}
    </HomeContainer>
  )
}
