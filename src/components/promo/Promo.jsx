import React from 'react';
import './Promo.scss';
import promoImg from './../../img/images/header-img.png';

export default function Promo() {
  return (
    <section className="promo">
      <div className="container">
        <div className="promo__content">
          <div className="promo__text">
            <h1 className="promo__title">
              <span class="highlight">
                <span>LET’S</span>
              </span>
              EXPLORE
              <span class="highlight highlight--yellow">
                <span>UNIQUE</span>
              </span>
              CLOTHES.
            </h1>
            <div className="promo__desc">
              Live for Influential and Innovative fashion!
            </div>
            <div className="promo__btn-wrapper">
              <a href="#!" className="promo__btn">
                Shop Now
              </a>
            </div>
          </div>
          <div className="promo__img">
            <img src={promoImg} alt="Promo" />
          </div>
        </div>
      </div>
    </section>
  )
}
