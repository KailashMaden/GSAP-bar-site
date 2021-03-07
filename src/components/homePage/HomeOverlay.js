import React from 'react'
import styled from 'styled-components'

const HomeOverlay = () => {
  return (
    <Wrap>
      <div className="overlay">


      </div>
    </Wrap>
  )
}

const Wrap = styled.div`
width: 100vw;
height: 100vh;

.overlay {
  position: absolute;
  height: 100%;
  width: 100%;
  background: rgba(255, 255, 255, .99);
  z-index: 1;
  mix-blend-mode: difference;
}
`

export default HomeOverlay
