import React from 'react'
import { Container, Sidebar, Main } from './styles'
import Profile from './Profile'
import Repositories from './Repositories'

import Filter from './Filter'


const RepositoriesPage = () => (
 <Container>
      <Sidebar>
        <Profile/>
        <Filter/>
      </Sidebar>
      <Main>
        <Repositories/>
      </Main>
    </Container>
)

export default RepositoriesPage
