import React from 'react';
import Card from '../card/Card';

import './Arrivals.scss';

import cat01Img from './../../img/categories/cat-01.jpg';
import cat02Img from './../../img/categories/cat-02.jpg';
import cat03Img from './../../img/categories/cat-03.jpg';

export default function Arrivals() {
  return (
    <section className="arrivals">
      <div className="container">
        <div className="arrivals__header">
          <h2 className="subtitle">NEW ARRIVALS</h2>
        </div>
        <ul className="arrivals__cards">
          <Card title="Hoodies & Sweetshirt" img={cat01Img} />
          <Card title="Coats & Parkas" img={cat02Img} />
          <Card title="Tees & T-Shirt" img={cat03Img} />
        </ul>
      </div>
    </section>
  )
}
