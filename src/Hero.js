import React from 'react'
import phone from './images/phone.svg'
import { useGlobalContext } from './context'

const Hero = () => {
  const {closeSubmenu} = useGlobalContext()

  return (
    <section className='hero' onMouseOver={closeSubmenu}>
      <article className='hero-info'>
        <h1>Payments infrastructure for the internet</h1>
        <p>Millions of companies of all sizes—from startups to Fortune 500s—use Stripe’s software and APIs to accept payments, send payouts, and manage their businesses online.</p>
      </article>
      <article className='hero-image'>
        <img
          className='hero-image-phone'
          src={phone}
          alt="a picture of a smartphone"
        />
      </article>
    </section>
  )
}

export default Hero