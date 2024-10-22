import React from 'react'
import { Container, Sidebar, Main } from './styles'
import Profile from './Profile'
import Repositories from './Repositories'

import Filter from './Filter'


const RepositoriesPage = () =>{
  const user ={
    login: 'julya-matias',
    avatar_url: 'https://avatars.githubusercontent.com/u/66370170?v=4',
    name: 'Julya Matias de Alcantara ',
    company: 'Uerj',
    blog: null ,
    location: 'Nova Friburgo',
    followers: 13,
    following: 9,
  }

return(
 <Container>
      <Sidebar>
        <Profile user={user}/>
        <Filter/>
      </Sidebar>
      <Main>
        <Repositories/>
      </Main>
    </Container>
)
}
export default RepositoriesPage
