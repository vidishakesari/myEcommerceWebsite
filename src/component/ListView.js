import React from 'react'
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import {Button} from '../style/Button';
import FormatPrice from '../Helper/FormatPrice';

const ListView = ({allProducts}) => {
  return (
    <Wrapper className='section'>
        <div className="container grid">
           {allProducts.map((curElem) => {
            const { id, name, image, price, description } = curElem;
            return(
                <div className='card grid grid-two-column' key={id}>
                <figure>
                <img src={image} alt={name} />
              </figure>

              <div className="card-data">
                <h3>{name}</h3>
                <p>
                  <FormatPrice price={price} />
                </p>
                <p style={{fontSize:'1.5rem'}}>{description.slice(0, 99)}...</p>

                <NavLink to={`/singleproduct/${id}`} className="btn-main">
                  <Button className="btn">Read More</Button>
                </NavLink>
                </div>
                </div>
            )
           })}
           
        </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
padding: 2rem 9rem;

.container {
  max-width: 120rem;
}

.grid {
     display:grid; 
  gap: 1rem; 
}

figure {
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  transition: all 0.5s linear;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width:0%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    transition: all 0.2s linear;
    cursor: pointer;
  }
  &:hover::after {
    width:100%;
    height:25rem;
    top:1.6rem;
  }
  &:hover img {
    transform: scale(1.2);
  }
  img {
    max-width: 90%;
    margin-top: 1.8rem;
    height: 19rem;
    transition: all 0.2s linear;
  }
}


.card {
  border: 0px solid rgb(170 170 170);

  .card-data {
    padding: 0 2rem;
  }

  h3 {
    margin: 2rem 0;
    font-weight: 300;
    font-size: 2rem;
    text-transform: capitalize;
  }

  .btn {
    margin: 2rem 0;
    background-color: rgb(0 0 0 / 0%);
    border: 0.1rem solid #00b7eb;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #00b7eb;
    padding:1rem 1rem;
  font-size:1.2rem;

    &:hover {
      background-color: ${({ theme }) => theme.colors.helper};
    }

    ${'' /* &:hover a {
      color: #fff;
    } */}
    a {
      color: rgb(98 84 243);
      font-size: 1.4rem;
    }
  }

  .btn-main .btn:hover {
    color: #fff;
  }
}

`;
export default ListView;