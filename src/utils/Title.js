import React from 'react'
import styled from 'styled-components'

const Title = ({title, subtitle}) => {
  return (
    <Wrap>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
    </Wrap>
  )
}

const Wrap = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

h1{
  color: white;
  mix-blend-mode: difference;
  font-size: 13vw;
}

h2{
  color: white;
  mix-blend-mode: difference;
  font-size: 5vw;
}
`

export default Title
