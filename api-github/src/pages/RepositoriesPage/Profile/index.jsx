import React from 'react'

import { Container, Header, Avatar, Login, Name } from './styles'


const Profile = () =>(

  <Container>
    <Header>
      <Avatar src = "https://avatars.githubusercontent.com/u/66370170?v=4"/>
      <Login>devsamurai</Login>
      <Name>Dev Samurai</Name>
    </Header>
  </Container>
)


export default Profile
