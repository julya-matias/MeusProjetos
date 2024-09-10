import React from 'react'

import {MdGroup, MdLocationCity, MdWork, MdLink} from 'react-icons/md'
import { Container, Header, Avatar, Login, Name, Inner, Data } from './styles'


const Profile = () =>(

  <Container>
    <Header>
      <Avatar src = "https://avatars.githubusercontent.com/u/66370170?v=4"/>
      <Login>julya-matias</Login>
      <Name>Julya Matias</Name>
    </Header>
    <Inner>
      <Data>
        <MdGroup size={20}/>
        30&nbsp;<i>seguidores</i>&nbsp;&middot;&nbsp;10&nbsp;<i>seguindo</i>
      </Data>
      <Data>
        <MdWork size={20}/> UERJ
      </Data>
      <Data>
        <MdLocationCity size={20}/>Nova Friburgo
      </Data>
      <Data>
      <MdLink size={20}/>
        <a href='https://github.com/julya-matias'>Meu GitHub</a>
        </Data>
    </Inner>
  </Container>
)


export default Profile
