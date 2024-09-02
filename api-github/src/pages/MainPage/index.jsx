import React from "react";
import {MdSearch} from 'react-icons/md'

import { Container, Logo, Title, Form, Input, Button } from "./styles";


import githubLogo from '../../assets/imagens/github-logo.svg'

export default function MainPage() {
  return (
    <Container>
      <Logo src={githubLogo} alt="API Github" />
      <Title>API Github</Title>
      <Form>
        <Input placeholder="Usuário"/>
        <Button>
            <MdSearch size = {42}/>
        </Button>

      </Form>
    </Container>
  );
}
