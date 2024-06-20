import React, { useEffect } from 'react'
import styled from 'styled-components';
import Footer from './component/Footer';
import { useProductContext } from './context/ProductContext';
import { useParams } from 'react-router-dom';
import { MdOutlineDownloading } from "react-icons/md";
import PageNavigation from './component/PageNavigation';
import ProductImage from './component/ProductImage';
import FormatPrice from './Helper/FormatPrice';
import { MdSecurity } from "react-icons/md";
import { TbTruckDelivery, TbReplace } from "react-icons/tb";
import Star from './component/Star';
import AddToCard from './component/AddToCard';

const API = "https://api.pujakaitem.com/api/products";

const SingleProduct = () => {
  const { getSingleProduct, singleproduct, isSingleLoading } = useProductContext();
  //console.log(singleproduct);
  const { id } = useParams();

  const { id: alias, name, company, price, description, category, stock, stars, reviews, image } = singleproduct;
  //const API = `"https://api.pujakaitem.com/api/products"${id}`;
  useEffect(() => {
    //getSingleProduct(API);
    getSingleProduct(`${API}?id=${id}`);
  }, []);

  if (isSingleLoading) {
    return <div><MdOutlineDownloading style={{ width: '4rem', height: '4rem' }} /></div>
  }

  return (
    <Wrapper>
      <PageNavigation title={name} />
      <div className='container'>
        <div className='grid grid-two-column'>
          <div className='product_images'>
            <ProductImage imgs={image} />
          </div>

          <div className='product-data'>
            <h2>{name}</h2>
            <Star star={stars} review={reviews}/>
            
            <p className="product-data-price">
              MRP:
              <del>
                <FormatPrice price={price + 250000} />
              </del>
            </p>
            <p className="product-data-price product-data-real-price">
              Deal of the Day: <FormatPrice price={price} />
            </p>
            <p>{description}</p>
            <div className="product-data-warranty">
              <div className="product-warranty-data">
                <TbTruckDelivery className="warranty-icon" />
                <p>Free Delivery</p>
              </div>

              <div className="product-warranty-data">
                <TbReplace className="warranty-icon" />
                <p>30 Days Replacement</p>
              </div>

              <div className="product-warranty-data">
                <TbTruckDelivery className="warranty-icon" />
                <p>Thapa Delivered </p>
              </div>

              <div className="product-warranty-data">
                <MdSecurity className="warranty-icon" />
                <p>2 Year Warranty </p>
              </div>
            </div>
            <div className="product-data-info">
              <p>
                Available:
                <span> {stock > 0 ? "In Stock" : "Not Available"}</span>
              </p>
              <p>
                ID : <span> {id} </span>
              </p>
              <p>
                Brand :<span> {company} </span>
              </p>
              <p>category:<span>{category}</span></p>
            </div>

            <hr/>
             {stock > 0 && <AddToCard product={singleproduct}/>}
          </div>
        </div>
      </div>

      <Footer />
    </Wrapper>
  )
}
const Wrapper = styled.section`
.container {
    padding: 0rem 4rem;
    ${'' /* background-color:${({theme})=> theme.colors.bg}; */}
  }

  .product_images {
    display: flex;
    align-items: center;
  }
h2{ 
  font-size:2.6rem;
} 

p{
  font-size:1.2rem;
}
  .product-data {
    padding:.6rem 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 2rem;

    .product-data-warranty {
      width: 100%;
      display: flex;
      ${'' /* flex-direction:row; */}
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #ccc;
      margin-bottom: 1rem;

      .product-warranty-data {
        text-align: center;

        .warranty-icon {
          background-color: rgba(220, 220, 220, 0.5);
          border-radius: 50%;
          width: 4rem;
          height: 4rem;
          padding: 0.6rem;
        }
        p {
          font-size: 1.4rem;
          padding-top: 0.4rem;
        }
      }
    }

    .product-data-price {
      font-weight: bold;
    }
    .product-data-real-price {
      color: ${({ theme }) => theme.colors.btn};
    }
    .product-data-info {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      font-size: 1.8rem;

      span {
        font-weight: bold;
      }
    }

    hr {
      max-width: 100%;
      width: 90%;
      /* height: 0.2rem; */
      border: 0.1rem solid #000;
      color: red;
    }
  }

  .product-images {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .page_loading {
    font-size: 3.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 0 2.4rem;
  }
`;
export default SingleProduct;