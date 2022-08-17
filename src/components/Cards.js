import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Våra Projekt</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/bella.jpg'
              text='Enkel "Landing Page" till en av våra kunder'
              label='Enkel'
              path='/services'
            />
            <CardItem
              src='images/bella.jpg'
              text='Enkel "Landing Page" till en av våra kunder'
              label='Levande'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/bella.jpg'
              text='Enkel "Landing Page" till en av våra kunder'
              label='React'
              path='/services'
            />
            <CardItem
              src='images/bella.jpg'
              text='Enkel "Landing Page" till en av våra kunder'
              label='React'
              path='/products'
            />
            <CardItem
              src='images/bella.jpg'
              text='Enkel "Landing Page" till en av våra kunder'
              label='React'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
