import React from 'react';
import './Community.scss';

export default function Community() {
  ;
  return (
    <section className="community">
      <div className="container">
        <div className="community__text">
          <h3 className="community__title">JOIN SHOPPING COMMUNITY TO GET MONTHLY PROMO</h3>
          <p className="community__desc">Type your email down below and be young wild generation</p>
        </div>

        <div className="community__input-wrapper">
          <label for="" class="community__label">
            <input placeholder='Add your email here' type="email" class="community__input" required />
          </label>
          <button className="community__btn">SEND</button>
        </div>

      </div>
    </section>
  );
};