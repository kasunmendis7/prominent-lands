import React from 'react'
import Greeting from '../components/Greeting'
import { Link } from 'react-router-dom'
import StandardCarousel from '../components/StandardCarousel'
import ListingItem from '../components/ListingItem'

export default function Home() {
  return (
    <div>
      {/* top */}
      <div className='flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto'>
        <Greeting />

        <div className='text-gray-400 text-sm '>
          Your trusted real estate partner with an expirience of 20 years.
          <br />
          We offer an extensive selection of properties for your consideration.
        </div>
        <Link to='/contact-us' className='text-sm text-blue-700 hover:underline'>Contact us for more details...</Link>
      </div>
      {/* carousel */}
      <StandardCarousel />

      {/* listing results for offer, sale and rent */}
      <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 my-10'>
        <div>
          <div className='my-6 mx-12'>
            <h2 className='text-2xl font-semibold text-slate-600'>Recent Offers</h2>
          </div>
          <div className='flex flex-wrap gap-6'>
            <ListingItem />
          </div>
        </div>
      </div>

    </div>
  )
}
