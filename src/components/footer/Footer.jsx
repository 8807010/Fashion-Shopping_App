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
            <ul className="footer__list">
              <li className="footer__item">
                <a href="#!" className="footer__link">Company</a>
              </li>
              <li className="footer__item">
                <a href="#!" className="footer__link">About</a>
              </li>
              <li className="footer__item">
                <a href="#!" className="footer__link">Contact us</a>
              </li>
              <li className="footer__item">
                <a href="#!" className="footer__link">Support</a>
              </li>
              <li className="footer__item">
                <a href="#!" className="footer__link">Careers</a>
              </li>
            </ul>
            <ul className="footer__list">
              <li className="footer__item">
                <a href="#!" className="footer__link">Quick Link</a>
              </li>
              <li className="footer__item">
                <a href="#!" className="footer__link">Share Location</a>
              </li>
              <li className="footer__item">
                <a href="#!" className="footer__link">Orders Tracking</a>
              </li>
              <li className="footer__item">
                <a href="#!" className="footer__link">Size Guide</a>
              </li>
              <li className="footer__item">
                <a href="#!" className="footer__link">FAQs</a>
              </li>
            </ul>
            <ul className="footer__list">
              <li className="footer__item">
                <a href="#!" className="footer__link">Legal</a>
              </li>
              <li className="footer__item">
                <a href="#!" className="footer__link">Terms & conditions</a>
              </li>
              <li className="footer__item">
                <a href="#!" className="footer__link">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
