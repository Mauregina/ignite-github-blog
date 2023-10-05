import { useEffect, useState } from 'react'

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

interface Issue {
  id: number
  number: number
  title: string
}

export function Home() {
  const [issues, setIssues] = useState<Issue[]>([])
  const totalIssues = issues.length

  async function loadIssues() {
    try {
      const response = await api.get(
        'search/issues?q=na%20repo:mauregina/ignite-github-blog',
      )

      if (response.status === 200) {
        console.log(response.data)
        setIssues(response.data.items)
      }
    } catch (error) {
      console.error('Error ', error)
    }
  }

  useEffect(() => {
    loadIssues()
  }, [])

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
                <span>Há 1 dia</span>
              </CardTitle>
              <CardText>
                Programming languages all have built-in data structures, but
                these often differ from one language to another. This article
                attempts to list the built-in data structures available in
                JavaScript and what properties they have. These can be used to
                build other data structures. Wherever possible, comparisons with
                other languages are drawn. Dynamic typing JavaScript is a
                loosely typed and dynamic language. Variables in JavaScript are
                not directly associated with any particular value type
              </CardText>
            </PublicationCard>
          ))}
        </PublicationContainer>
      )}
    </HomeContainer>
  )
}
