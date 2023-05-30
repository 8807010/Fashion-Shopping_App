import React from 'react';

import './Application.scss';

import applicationImg from './../../img/images/vouchers-img.png';
import googleStore from './../../img/icons/google-play.png';
import appleStore from './../../img/icons/app-store.png';


export default function Application() {
  return (
    <section className="application">
      <div className="container">
        <div className="application__info">
          <div className="application__text">
            <h2 className="application__title">DOWNLOAD APP &&nbsp; GET THE VOUCHER!</h2>
            <p className="application__description">Get 30% off for first transaction using Rondovision mobile app for now.</p>
            <div className="application__store">
              <a className="application__link" href="#!">
                <img src={googleStore} alt='Google play store' />
              </a>
              <a className="application__link" href="#!">
                <img src={appleStore} alt='Apple play store' />
              </a>
            </div>
          </div>

          <div className="application__image">
            <img src={applicationImg} alt='Google play store' />
          </div>
        </div>

      </div>
    </section>
  )
}
