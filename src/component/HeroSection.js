import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../style/Button';

const HeroSection = ({myData}) => {
    const {name , image}=myData;
  return (
    <Wrapper>
       <div className="container">
        <div className="grid grid-two-column">
          <div className="hero-section-data">
            <p className="intro-data">Welcome to </p>
            <h1 style={{fontSize:'3.7rem'}}> {name} </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              atque temporibus veniam doloribus libero ad error omnis voluptates
              animi! Suscipit sapiente.
            </p>
            <NavLink>
              <Button>show now</Button>
            </NavLink>
          </div>
          {/* our homepage image  */}
          <div className="hero-section-image">
            <figure>
              <img
                src={image}
                alt="our_gaget"
                className="img-style"
              />
            </figure>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`


.container{
padding: 2rem 9rem;
}
img {
  min-width: 10rem;
  height: 10rem;
}

.hero-section-data {
    margin: 0 5rem;
  p {
    margin: 2rem 0;
    
  }

  h1 {
    text-transform: capitalize;
    font-weight: bold;
    
  }

  .intro-data {
    margin-bottom: 0;
    color:${({theme}) => theme.colors.helper};
   
  }
}

.hero-section-image {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
figure {
  position: relative;

  &::after {
    content: "";
    width: 60%;
    height: 80%;
    background-color: ${({theme})=> theme.colors.helper};
    position: absolute;
    left: 50%;
    top: -3rem;
    z-index: -1;
  }
}
.img-style {
  width: 100%;
  height: auto;
}

@media (max-width: ${({ theme }) => theme.media.mobile}) {
  .grid {
    gap: 10rem;
  }
  

   figure::after {
    content: "";
    width: 60%;
    height: %;
    background-color: ${({theme})=> theme.colors.helper};
     position: absolute;
    left: 50%;;
    top: -3rem;
     z-indez :-1;
    
    }
  
}
`;
export default HeroSection;