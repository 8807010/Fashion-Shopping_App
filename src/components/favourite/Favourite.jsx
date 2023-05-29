import React from 'react';
import Card from '../card/Card';

import './Favourite.scss';

import promo01Img from './../../img/images/promo-01.jpg';
import promo02Img from './../../img/images/promo-02.jpg';

export default function Favourite() {
  return (
    <section className="favourite">
      <div className="container">
        <div className="favourite__header">
          <h2 className="subtitle">Young’s Favourite</h2>
        </div>
        <ul className="favourite__cards">
          <Card title="Trending on instagram" img={promo01Img} />
          <Card title="All Under $40" img={promo02Img} />
        </ul>
      </div>
    </section>
  )
}
