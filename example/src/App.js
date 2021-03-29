import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

import Beacon from 'react-status-beacon'

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  font-size: 16px;
  font-family: 'Lato', sans-serif;
  padding: 3em;
`

const ExampleWrapper = styled.section`
  padding: 15px;
  background: #eee;
  width: 300px;
  text-align: center;
  margin: 20px 0;
  border-radius: 20px;
`

const Title = styled.h1`
  font-size: 2em;
  margin-bottom: 15px;
`
const Subtitle = styled.h2`
  font-size: 1.2em;
  margin: 15px 0;
`

const Type = styled.p`
  font-size: 16px;
  font-weight: bold;
`

const GlobalStyles = createGlobalStyle`
  ${reset}
`

const App = () => (
  <>
    <GlobalStyles />
    <AppContainer>
      <Title>Beacon Status Indicators</Title>
      <Subtitle>Statuses</Subtitle>
      <ExampleWrapper>
        <Type>
          Positive <Beacon status='positive' />
        </Type>
      </ExampleWrapper>
      <ExampleWrapper>
        <Type>
          Neutral <Beacon status='neutral' />
        </Type>
      </ExampleWrapper>
      <ExampleWrapper>
        <Type>
          Negative <Beacon status='negative' />
        </Type>
      </ExampleWrapper>
      <ExampleWrapper>
        <Type>
          Dormant <Beacon status='Dormant' />
        </Type>
      </ExampleWrapper>

      <Subtitle>Speeds</Subtitle>
      <ExampleWrapper>
        <Type>
          Normal <Beacon status='positive' />
        </Type>
      </ExampleWrapper>
      <ExampleWrapper>
        <Type>
          Slow <Beacon status='positive' speed='slow' />
        </Type>
      </ExampleWrapper>
      <ExampleWrapper>
        <Type>
          Fast <Beacon status='positive' speed='fast' />
        </Type>
      </ExampleWrapper>
    </AppContainer>
  </>
)

export default App
