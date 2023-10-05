import { ArrowSquareOut, CaretLeft } from 'phosphor-react'
import {
  CalendarBlankIcon,
  ChatCircleIcon,
  Footer,
  FooterContent,
  GitHubIcon,
  LinkContent,
  PostContainer,
  PostContent,
  PostHeader,
  TitleContent,
} from './styles'
import { useParams } from 'react-router-dom'

export function Post() {
  const { id } = useParams()
  console.log(id)

  return (
    <PostContainer>
      <PostHeader>
        <TitleContent>
          <LinkContent to="/">
            <CaretLeft size={12} />
            <span>VOLTAR</span>
          </LinkContent>
          <LinkContent to="https://github.com/Mauregina">
            <span>VER NO GITHUB</span>
            <ArrowSquareOut size={12} />
          </LinkContent>
        </TitleContent>
        <strong>JavaScript data types and data structures</strong>
        <Footer>
          <FooterContent>
            <GitHubIcon weight="fill" size={18} />
            <span>cameronwll</span>
          </FooterContent>
          <FooterContent>
            <CalendarBlankIcon weight="fill" size={18} />
            <span>Rocketseat</span>
          </FooterContent>
          <FooterContent>
            <ChatCircleIcon weight="fill" size={18} />
            <span>32 seguidores</span>
          </FooterContent>
        </Footer>
      </PostHeader>
      <PostContent>Texto</PostContent>
    </PostContainer>
  )
}
