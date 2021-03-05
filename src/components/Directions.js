import React from 'react'
import {useContext} from 'react'
import ActiveParkContext from "./ActiveParkContext";
import styled from 'styled-components'

function Directions() {
  const {activePark} = useContext(ActiveParkContext)
  const randomIndex = Math.floor(Math.random() * activePark?.images.length)


  if (activePark ) {
    return (
      <Container>
          <TextContainer>
              <h1>{activePark.fullName }</h1>
              <h2>Directions Information</h2>
              <DirectionsText>
                {activePark.directionsInfo}
              </DirectionsText>
              <DirectionsLink target="_blank" href={activePark.directionsUrl}>
                Further Directions & Alerts
              </DirectionsLink>
          </TextContainer>
        <ImageContainer>
          <img src={activePark.images[randomIndex].url} alt={activePark.images[randomIndex].altText}></img>
        </ImageContainer>
      </Container>
    )
    } else {
      return null
    }
}

export default Directions


const Container = styled.div`
  position: relative;
  width: 100%;
`

const ImageContainer = styled.div`
  width: auto;
  img{
    width: 100%;
  } 
`

const TextContainer = styled.main`
  position: absolute;
  top: 30px;
  z-index: 2;
  color: white;
  background: rgba(43, 43, 43, 60%);
  width: 100%;
  padding-bottom: 5px;
  padding-top: 5px;
  text-align: center;
 
  h1 {
    text-align: center;
    font-size: 3.5rem;
    margin-bottom: 0;
  }

  h2 {
    margin-top: 10px;
    font-size: 2.5rem;
    text-align: center;
  }
`

const DirectionsText = styled.div`
  font-size: 1.5rem;
  text-align: center;
  padding-inline-start: 0;
  `
const DirectionsLink = styled.a`
  color: white;
  text-align: center;
`