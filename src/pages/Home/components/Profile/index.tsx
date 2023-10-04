import { Avatar, Card, ProfileContainer, TitleContent } from './styles'
import Photo from '.././../../../assets/avatar.png'

export function Profile() {
  return (
    <ProfileContainer>
      <Avatar src={Photo} alt="" />
      <Card>
        <TitleContent>
          <strong>Cameron Williamson</strong>
          <div>LINK</div>
        </TitleContent>
        <div>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </div>
        <div>Footer</div>
      </Card>
    </ProfileContainer>
  )
}
