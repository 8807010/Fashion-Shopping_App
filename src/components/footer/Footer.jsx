import React from 'react';
import './Footer.scss';

import facebook from './../../img/socials/fb.svg';
import instagram from './../../img/socials/inst.svg';
import linkedin from './../../img/socials/in.svg';
import twitter from './../../img/socials/tw.svg';


export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">

        <div className="footer__content">
          <div className="footer__left">
            <a className="footer__logo" href="/">FASHION</a>
            <div className="footer__desc">Complete your style with awesome clothes from us.</div>
            <ul className="footer__socials-list">
              <li className="footer__social-item">
                <a className="footer__social-link" href="#!"><img src={facebook} alt="" /></a>
              </li>
              <li className="footer__social-item">
                <a className="footer__social-link" href="#!"><img src={instagram} alt="" /></a>
              </li>
              <li className="footer__social-item">
                <a className="footer__social-link" href="#!"><img src={twitter} alt="" /></a>
              </li>
              <li className="footer__social-item">
                <a className="footer__social-link" href="#!"><img src={linkedin} alt="" /></a>
              </li>
            </ul>


          </div>
          <div className="footer__right">

          </div>
        </div>
      </div>
    </footer>
  )
}
