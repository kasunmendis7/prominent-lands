import React from 'react';
import { Link } from 'react-router-dom';
import { MdLocationOn } from 'react-icons/md';
import image1 from '../assets/listing/card1.jpg'; 
import image2 from '../assets/listing/card2.jpg'; 
import image3 from '../assets/listing/card3.jpg'; 
import image4 from '../assets/listing/card4.jpg'; 
import image5 from '../assets/listing/card5.jpg'; 
import image6 from '../assets/listing/card6.jpg'; 

export default function ListingItem() {
    const listings = [
        {
            name: 'Charming Craftsman Home in Redmond',
            address: '123 Azure Lane, Redmond, WA 98052',
            description: 'Modern penthouse with stunning views of Lake Washington.',
            price: '$500,000',
            bedrooms: 4,
            image: image1
        },
        {
            name: 'Harbor View Condos',
            address: '456 Harbor Drive, Seattle, WA 98101',
            description: 'Waterfront condos with rooftop access and city skyline vistas.',
            price: '$600,000',
            bedrooms: 3,
            image: image2
        },
        {
            name: 'Maple Grove Estates',
            address: '789 Maple Avenue, Bellevue, WA 98004',
            description: 'Spacious family home surrounded by lush greenery.',
            price: '$1,200,000',
            bedrooms: 4,
            image: image3
        },
        {
            name: 'Sunset Ridge Retreat',
            address: '101 Sunset Way, Kirkland, WA 98033',
            description: 'Cozy cottage nestled in the hills, perfect for nature lovers.',
            price: '$450,000',
            bedrooms: 2,
            image: image4
        },
        {
            name: 'Cascade Peaks Manor',
            address: '222 Cascade Drive, Issaquah, WA 98027',
            description: 'Custom-built mansion with mountain views and a grand foyer.',
            price: '$2,800,000',
            bedrooms: 3,
            image: image5
        },
        {
            name: 'Evergreen Grove Townhome',
            address: '333 Evergreen Lane, Bothell, WA 98011',
            description: 'New townhomes near parks and schools, ideal for families.',
            price: '$750,000',
            bedrooms: 4,
            image: image6
        },
    ];

    return (
        <div className="flex flex-wrap gap-4 justify-center">
            {listings.map((listing, index) => (
                <div key={index} className='bg-white shadow-md hover:shadow-lg transition-shadow overflow-hidden rounded-lg w-full sm:w-[330px]'>
                    <Link to={`/listing/${index}`}>
                        <img
                            src={listing.image}
                            alt='listing cover'
                            className='h-[320px] sm:h-[220px] w-full object-cover hover:scale-105 transition-scale duration-300'
                        />
                        <div className='p-3 flex flex-col gap-2 w-full'>
                            <p className='truncate text-lg font-semibold text-slate-700'>
                                {listing.name}
                            </p>
                            <div className='flex items-center gap-1'>
                                <MdLocationOn className='h-4 w-4 text-green-700' />
                                <p className='text-sm text-gray-600 truncate w-full'>
                                    {listing.address}
                                </p>
                            </div>
                            <p className='text-sm text-gray-600 line-clamp-2'>
                                {listing.description}
                            </p>
                            <p className='text-slate-500 mt-2 font-semibold '>
                                {listing.price}
                            </p>
                            <div className='text-slate-700 flex gap-4'>
                                <div className='font-bold text-xs'>
                                    {listing.bedrooms > 1
                                        ? `${listing.bedrooms} beds`
                                        : `${listing.bedrooms} bed`}
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    );
}
