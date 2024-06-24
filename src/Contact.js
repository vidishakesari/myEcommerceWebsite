import React from 'react'
import styled from 'styled-components'
import Footer from './component/Footer';
import { useAuth0 } from "@auth0/auth0-react";

const Contact = () => {

  const { user,isAuthenticated} = useAuth0();
  return (
    <Wrapper>

<h2 className='common-heading'>Contact Page</h2>

<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6997.7352607161165!2d77.07404298209951!3d28.72350164564965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d06c6e79e5097%3A0xfab4d60db264d27c!2sPocket%208%2C%20Sector%2023%2C%20Rohini%2C%20Delhi%2C%20110099!5e0!3m2!1sen!2sin!4v1714131916453!5m2!1sen!2sin"
title="This is a unique title"
 width="100%"
  height="350" 
  style={{border:0}} 
  allowFullScreen="" 
  loading="lazy" 
  referrerPolicy="no-referrer-when-downgrade"></iframe>

 <div className="container">
        <div className="contact-form">
          <form
            action="https://formspree.io/f/xqkrwvjr"
            method="POST"
            className="contact-inputs">
            <input
              type="text"
              placeholder="username"
              name="username"
              value={isAuthenticated ? user.name : ''}
              required
              autoComplete="off"
              
            />

           

            <input
              type="email"
              name="Email"
              value={isAuthenticated ? user.email : ''}
              placeholder="Email"
              autoComplete="off"
              required
            />

            <textarea
              name="Message"
              cols="30"
              rows="10"
              required
              autoComplete="off"
              placeholder="Enter you message"></textarea>

            <input type="submit" value="send" />
          </form>
        </div>
      </div>

      <Footer/>
     
    </Wrapper>
  )
}
const Wrapper =styled.section`
 padding: 3rem 0;
    text-align: center;
    
    
    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
          padding:0.7rem;
            cursor: pointer;
            transition: all 0.2s;
           margin-top:0.3rem;
           background-color: ${({theme})=> theme.colors.helper};

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.helper};
              color: ${({ theme }) => theme.colors.helper};
              transform: scale(0.9);
              
            }
          }
        }
      }
    }
`;
export default Contact