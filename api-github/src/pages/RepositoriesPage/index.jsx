import React from 'react'
import { Container, Sidebar, Main } from './styles'

import Profile from './Profile'
import Repositories from './Repositories'

import Filter from './Filter'
// import { Description } from './Repositories/Repository/styles'


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

  const repositories = [
    {
      name: 'Repo 1',
      description: 'Descrição',
      html_url: 'wwww.',
      languague: 'Java'
    },
    {
      name: 'Repo 2',
      description: 'Descrição',
      html_url: 'wwww.',
      languague: 'JavaScript'
    },
    {
      name: 'Repo 3',
      description: 'Descrição',
      html_url: 'wwww.',
      languague: 'Ruby'
    },
    {
      name: 'Repo 4',
      description: 'Descrição',
      html_url: 'wwww.',
      languague: 'React'
    },
    {
      name: 'Repo 5',
      description: 'Descrição',
      html_url: 'wwww.',
      languague: 'PHP'
    },  {
      name: 'Repo 6',
      description: 'Descrição',
      html_url: 'wwww.',
      languague: 'C++'
    },
  ]

  const languages = [
    {name: 'JavaScript', count: 5, color: '#f1c40f'},
    {name: 'Shell', count: 2, color: '#95a5a6'},
    {name: 'PHP', count: 1, color: '#3498db'},
    {name: 'Ruby', count: 1, color: '#ad0606'},


  ]
return(
 <Container>
      <Sidebar>
        <Profile user={user}/>
        <Filter languages={languages} />
      </Sidebar>
      <Main>
        <Repositories/>
      </Main>
    </Container>
)
}
export default RepositoriesPage
