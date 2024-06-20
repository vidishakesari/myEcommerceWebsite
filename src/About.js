import React from 'react'
import styled from 'styled-components';
import HeroSection from './component/HeroSection';
import Footer from './component/Footer';

const About = () => {

  const myAbout={
    name:'vidisha Ecommerce',
    image:'Images/shopping1.jpg'
  }
  return (
    <Wrapper>
       <HeroSection  myData = {myAbout}/>
       <Footer/>
    </Wrapper>
    
  )
}
const Wrapper = styled.section`
`;

export default About;