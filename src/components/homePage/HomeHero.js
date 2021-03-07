import React from 'react'
import styled from 'styled-components'
import {graphql, useStaticQuery} from 'gatsby'
import StyledHero from '../../utils/StyledHero'

const getImages = graphql`
query{
    BackgroundImage:file(relativePath:{eq:"homeHero.jpg"}){
        childImageSharp{
            fluid(quality:100 maxWidth:4160){
                ...GatsbyImageSharpFluid_withWebp
            }
        }
    }   
}
`

const HomeHero = () => {
  const data = useStaticQuery(getImages)
  return (
    <StyledHero className="styledHero" fluid={data.BackgroundImage.childImageSharp.fluid} alt="DESCRIPTION" home="home">
      <Wrap>
        <div className="title">
          <h1>Bar<span>N</span>one</h1>
          <h2>- Trisara -</h2>
        </div>
      </Wrap>
    </StyledHero>
  )
}

const Wrap = styled.div`
margin-top: -100vh;
width: 100vw;
height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

.title {
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
}

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

span {
  color: white;
  mix-blend-mode: difference;
  font-size: 18vw;
}
`

export default HomeHero
