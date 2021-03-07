import React from 'react'
import styled from 'styled-components'
import Title from '../../utils/Title'
import {graphql, useStaticQuery} from 'gatsby'
import StyledHero from '../../utils/StyledHero'

const getImages = graphql`
query{
    BackgroundImage:file(relativePath:{eq:"calenderHero.jpg"}){
        childImageSharp{
            fluid(quality:100 maxWidth:4160){
                ...GatsbyImageSharpFluid_withWebp
            }
        }
    }   
}
`

const EventsPage = () => {
  const data = useStaticQuery(getImages)
  return (
    <StyledHero className="styledHero" fluid={data.BackgroundImage.childImageSharp.fluid} alt="DESCRIPTION" home="home">
      <Wrap>
        <Title title="Events" subtitle="- Top DJ and beatbox -" />
      </Wrap>
    </StyledHero>
  )
}

const Wrap = styled.div`
width: 100vw;
height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

export default EventsPage
