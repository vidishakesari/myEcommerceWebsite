import React from 'react'
import styled from 'styled-components';
import HeroSection from './component/HeroSection';
import Service from './component/Service';
import Trusted from './component/Trusted';
import Contact from './Contact';
import FeatureProduct from './component/FeatureProduct';
//import Footer from './component/Footer';


const Home = () => {

  const data = {
    name: "Your Store",
    image:'Images/shopping.jpg'
  };
  return (
    <Wrapper>
        <HeroSection myData = {data}/>
         <FeatureProduct/>
        <Service/>
        <Trusted/>
        <Contact/>
      {/* <Footer/> */}
</Wrapper>
  )
}
const Wrapper = styled.section`

height:100vh;
`;
export default Home;
