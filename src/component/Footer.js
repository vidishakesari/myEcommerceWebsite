import React from 'react'
import styled from 'styled-components';
import { NavLink } from "react-router-dom";
import { Button } from "../style/Button";
import { FaDiscord, FaInstagram,FaFacebook  } from "react-icons/fa";

const Footer = () => {
  return (
    <Wrapper>
        <section className="contact-short">
          <div className="grid grid-two-column">
            <div>
              <h3>Ready to get started?</h3>
              <h3>Talk to us today</h3>
            </div>

            <div>
              <Button className="btn hireme-btn">
                <NavLink to="/"> Get Started </NavLink>
              </Button>
            </div>
          </div>
        </section>

         {/* footer section */}

         <footer>
          <div className="container grid grid-four-column">
            <div className="footer-about">
              <h3>Your Store</h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
            </div>
            <div className="footer-subscribe">
              <h3>Contact me to get important updates</h3>
              <form action='#'>
                <input type="email" name="email" placeholder="YOUR E-MAIL" />
              </form>
            </div>
            <div className="footer-social">
              <h3>Follow Us</h3>
              <div className="footer-social--icons">
                <div>
                  <FaDiscord className="icons" />
                </div>
                <div>
                  <FaInstagram className="icons" />
                </div>
                <div>
                  <a href="https://www.facebook.com/vidisha.kesarwani.75">
                    <FaFacebook  className="icons" />
                  </a>
                </div>
              </div>
            </div>
            <div className="footer-contact">
              <h3>Call Us</h3>
              <h3>+91 9749756344</h3>
            </div>
          </div>

          <div className="footer-bottom--section">
            <hr />
            <div className="  grid grid-two-column  bottom">
              <p>
                @{new Date().getFullYear()} Vidisha Kesarwani. All Rights Reserved
              </p>
              <div>
                <p>PRIVACY POLICY</p>
                <p>TERMS & CONDITIONS</p>
              </div>
            </div>
          </div>
        </footer>
    </Wrapper>
  )
}
const Wrapper= styled.section`

.contact-short {
    max-width: 60vw;
    margin: auto;
    padding: 3rem 8rem;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(20%);

    

.grid div:last-child {
      justify-self: end;
      align-self: center;
    }
} 

footer {
    padding: 4rem 0 6rem 0;
    background-color: ${({ theme }) => theme.colors.footer_bg};
    h3 {
      color: ${({ theme }) => theme.colors.hr};
      margin-bottom: 2.4rem;
    }
    p {
      color: ${({ theme }) => theme.colors.white};
    }
    .footer-social--icons {
      display: flex;
      gap: 2rem;

      div {
        padding: 1rem;
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.colors.white};

        .icons {
          color: ${({ theme }) => theme.colors.white};
          font-size: 2.4rem;
          position: relative;
          cursor: pointer;
        }
      }
    }
  }

  .footer-bottom--section {
    padding-top: 5rem;

    hr {
      margin-bottom: 2rem;
      color: ${({ theme }) => theme.colors.hr};
      height: 0.1px;
    }
  }
  .bottom{
    height:1rem;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .contact-short {
      max-width: 80vw;
      margin: -2rem auto;
      transform: translateY(20%);
      text-align: center

      .grid div:last-child {
        justify-self: center;
      }
    }

    footer {
      padding: 3rem 0 9rem 0;
      
      
    }

    .footer-bottom--section {
      padding-top: 1rem;
      margin-bottom:1rem;
      ${'' /* display:flex;
      justify-content:center; */}
    }
  }
`;
export default Footer;