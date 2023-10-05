import { Profile } from './components/Profile'
import { SearchForm } from './components/SearchForm'
import {
  HomeContainer,
  PublicationContainer,
  PublicationCard,
  CardTitle,
  CardText,
} from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Profile />
      <SearchForm />
      <PublicationContainer>
        <PublicationCard to={'/post/1'}>
          <CardTitle>
            <strong>JavaScript data types and data structures</strong>
            <span>Há 1 dia</span>
          </CardTitle>
          <CardText>
            Programming languages all have built-in data structures, but these
            often differ from one language to another. This article attempts to
            list the built-in data structures available in JavaScript and what
            properties they have. These can be used to build other data
            structures. Wherever possible, comparisons with other languages are
            drawn. Dynamic typing JavaScript is a loosely typed and dynamic
            language. Variables in JavaScript are not directly associated with
            any particular value type
          </CardText>
        </PublicationCard>
      </PublicationContainer>
    </HomeContainer>
  )
}
