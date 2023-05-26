import React from 'react';
import './Brands.scss';

import hm from './../../img/brands/HM.png'
import obey from './../../img/brands/Obey.png'
import shopify from './../../img/brands/Shopify.png'
import lacoste from './../../img/brands/Lacoste.png'
import levis from './../../img/brands/Levis.png'
import amazon from './../../img/brands/Amazon.png'

export default function Brands() {
  return (
    <section className="brands">
      <div className="container">
        <ul className="brands__list">
          <li className="brands__item"><a className="brands__link" href="#!"><img src={hm} alt="" /></a></li>
          <li className="brands__item"><a className="brands__link" href="#!"><img src={obey} alt="" /></a></li>
          <li className="brands__item"><a className="brands__link" href="#!"><img src={shopify} alt="" /></a></li>
          <li className="brands__item"><a className="brands__link" href="#!"><img src={lacoste} alt="" /></a></li>
          <li className="brands__item"><a className="brands__link" href="#!"><img src={levis} alt="" /></a></li>
          <li className="brands__item"><a className="brands__link" href="#!"><img src={amazon} alt="" /></a></li>
        </ul>
      </div>
    </section>
  )
}

