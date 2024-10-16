import React, { useState, useContext, useEffect } from 'react';
import { Background, Container } from './styles';
import { AuthContext } from '../../Contexts/auth'

import Navbar from '../../Layout/Navbar';
import Section from './Components/Section';

export default function Home() {

  const { keys } = useContext(AuthContext)

  return (
    <Background>
      <Container
        behavior={Platform.OS == "ios" ? 'padding' : ''}
        enabled
      >
        <Navbar title="Home" />
        {keys && keys.length > 0 && ( 
          
          keys.map(key => {
            
            return <Section key={key} course={key} />

          })

        )}
      </Container>
    </Background>
  );
}