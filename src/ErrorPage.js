import React from 'react'
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import {Button} from './style/Button';

const ErrorPage = () => {
  return (
    <Wrapper>
      <div className='container '>
           <div>
          <h2>404</h2>
          <h3>UH OH! You're lost.</h3>
          <p>
            The page you are looking for does not exist. How you got here is a
            mystery. But you can click the button below to go back to the
            homepage.
          </p>

          <NavLink to="/">
            <Button>Go Back to Home</Button>
          </NavLink>
        </div>
           </div>
         

    </Wrapper>
  )
}
const Wrapper = styled.section`

padding:8rem 0;
text-align:center;

`;
export default ErrorPage;





