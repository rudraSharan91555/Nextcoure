import React, { CSSProperties } from 'react'
import localFont from 'next/font/local'
import { Html,Body,Container,Text,Link,Preview } from '@react-email/components'

const WelcomeTemplate = ({name}:{name:string}) => {
  return (
    <Html>
        <Preview> Welcome abroad!</Preview>
        <Body style={body}>
            <Container>
                <Text style={heading}>Hello {name}</Text>
                <Link href='https://codewithmosh.com'>www.codewithmosh.com</Link>
            </Container>
        </Body>
    </Html>
  )
}

const body:CSSProperties ={
    background:'white',
}

const heading :CSSProperties={
    fontSize:"32px"
}

export default WelcomeTemplate