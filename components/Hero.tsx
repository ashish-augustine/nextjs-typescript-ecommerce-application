import React from "react";
import styled from "styled-components";
import heroBcg from "../public/hero-bcg.jpeg";
import heroBcg2 from "../public/hero-bcg-2.jpeg";
import Link from 'next/link'
import Image from "next/image";

const Hero = () => {
  return (
    <Wrapper className="section-center">
      <article className="content">
         <h1>
          buy your <br />
          furniture online
        </h1>
        <p>
          This is an e-commerce application, built using Next JS, listing a range of furniture
          products for home & office. The products can be filtered on the basis
          of their Category, Company, Colour, Price & Shipping Charges. The products can be added to the cart and then proceeded to the checkout. The checkout
    is integrated with Stripe Payment.
        </p>
        <Link href="/products" className="btn hero-btn">
          shop now
        </Link>
      </article>
      <article className="img-container">
        <Image src={heroBcg} alt="nice table" className="main-img"/>
        <Image src={heroBcg2} alt="person working" className="accent-img"/>
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: 60vh;
  display: grid;
  place-items: center;
  .img-container {
    display: none;
  }

  p {
    line-height: 2;
    max-width: 45em;
    margin-bottom: 2rem;
    color: var(--clr-grey-5);
    font-size: 1rem;
  }
  @media (min-width: 992px) {
    height: calc(100vh - 5rem);
    grid-template-columns: 1fr 1fr;
    gap: 8rem;
    h1 {
      margin-bottom: 2rem;
    }
    p {
      font-size: 1.25rem;
    }
    .hero-btn {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
    }
    .img-container {
      display: block;
      position: relative;
    }
    .main-img {
      width: 100%;
      height: 550px;
      position: relative;
      border-radius: var(--radius);
      display: block;
      object-fit: cover;
    }
    .accent-img {
      height: auto;
      position: absolute;
      bottom: 0;
      left: 0;
      width: 250px;
      transform: translateX(-50%);
      border-radius: var(--radius);
    }
    .img-container::before {
      content: "";
      position: absolute;
      width: 10%;
      height: 80%;
      background: var(--clr-primary-9);
      bottom: 0%;
      left: -8%;
      border-radius: var(--radius);
    }
  }
`;

export default Hero;
