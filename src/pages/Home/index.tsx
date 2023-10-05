import { useEffect, useState } from 'react'
import { formatDistanceToNow } from 'date-fns'
import removeMarkdown from 'remove-markdown'
import { Profile } from './components/Profile'
import { SearchForm } from './components/SearchForm'
import {
  HomeContainer,
  PublicationContainer,
  PublicationCard,
  CardTitle,
  CardText,
} from './styles'
import { api } from '../../lib/axios'
import { ptBR } from 'date-fns/locale'

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

  async function loadIssues() {
    try {
      const response = await api.get(
        'search/issues?q=%20repo:mauregina/ignite-github-blog',
      )

      if (response.status === 200) {
        setIssues(response.data.items)
      }
    } catch (error) {
      console.error('Error ', error)
    }
  }

  useEffect(() => {
    loadIssues()
  }, [])

  function updatedDateRelativeToNow(updatedDateStr: string) {
    const updatedDate = new Date(updatedDateStr)
    return formatDistanceToNow(updatedDate, { locale: ptBR, addSuffix: true })
  }

  return (
    <HomeContainer>
      <Profile />
      <SearchForm />
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
