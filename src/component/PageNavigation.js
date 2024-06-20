import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const PageNavigation = ({title}) => {
    
  return (
   <Wrapper>
    <NavLink to='/'>Home</NavLink>/&nbsp;{title}
   </Wrapper>
  )
}
const Wrapper = styled.section`
  ${'' /* padding: 1rem; */}
  ${'' /* background-color: ${({ theme }) => theme.colors.bg}; */}
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 2rem;
  padding-left: 4rem;

  a {
    font-size: 2rem;
  }
`;

export default PageNavigation;