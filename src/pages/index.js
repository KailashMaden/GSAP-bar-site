import React, {useEffect} from "react"
import gsap from 'gsap'
import Layout from "../layout/layout"
import SEO from "../layout/seo"
import HomeHero from '../components/homePage/HomeHero'
import HomeOverlay from '../components/homePage/HomeOverlay'

const IndexPage = () => {
  useEffect(() => {
    const tl = gsap.timeline();
    tl.to('.overlay', 1.5,{
        height: 0,
        ease: 'expo.inOut',
        delay: 1.5
      })
    })

  return (
  <Layout>
    <SEO title="Home" />
    <HomeOverlay />
    <HomeHero />
  </Layout>
  ) 
  }

export default IndexPage
