import {
  Avatar,
  BuildingsIcon,
  Card,
  Description,
  Footer,
  FooterContent,
  GitHubIcon,
  LinkContent,
  ProfileContainer,
  TitleContent,
  UsersIcon,
} from './styles'
import Photo from '.././../../../assets/avatar.png'
import { ArrowSquareOut } from 'phosphor-react'

export function Profile() {
  return (
    <ProfileContainer>
      <Avatar src={Photo} alt="" />
      <Card>
        <TitleContent>
          <strong>Cameron Williamson</strong>
          <LinkContent to="https://github.com/Mauregina">
            <span>GITHUB</span>
            <ArrowSquareOut size={12} />
          </LinkContent>
        </TitleContent>
        <Description>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </Description>
        <Footer>
          <FooterContent>
            <GitHubIcon weight="fill" size={18} />
            <span>cameronwll</span>
          </FooterContent>
          <FooterContent>
            <BuildingsIcon weight="fill" size={18} />
            <span>Rocketseat</span>
          </FooterContent>
          <FooterContent>
            <UsersIcon weight="fill" size={18} />
            <span>32 seguidores</span>
          </FooterContent>
        </Footer>
      </Card>
    </ProfileContainer>
  )
}
