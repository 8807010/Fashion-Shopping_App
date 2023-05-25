import React from 'react';
import './Payday.scss';

import paydayImg from './../../img/images/payday.png';

export default function Payday() {
  return (
    <section className='payday'>
      <div className='container'>
        <div className='payday__content'>
          <div className='payday__img'>
            <img src={paydayImg} alt='Payday' />
          </div>
          <div className='payday__text'>
            <h3 className="payday__title">
              <span class="highlight highlight--payday">
                <span>PAYDAY</span>
              </span>
              SALE NOW
            </h3>
            <p className="payday__desc">
              Spend minimal $100 get 30% off
              voucher code for your next purchase
            </p>
            <time className='payday__time'>1 June - 10 June 2021</time>
            <p className='payday__apply'>*Terms & Conditions apply</p>
            <div className="payday__btn-wrapper">
              <a href="#!" className="payday__btn">
                Shop Now
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
