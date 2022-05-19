import React from 'react'
import {Link} from 'react-router-dom'
import {ReactComponent as DeleteIcon} from '../assets/svg/deleteIcon.svg'
import bedIcon from '../assets/svg/bedIcon.svg'
import bathtunIcon from '../assets/svg/bathtubIcon.svg'


function ListingItem({listings, id}) {
    return (
        <li className='categoryListings'>
            <Link to={`/category/${listings.type}/${id}`} className='categoryListingLink'>
                <img src={listings.imgUrls} alt={listings.name} className='categoryListingImg'/>
                <div className='categoryListingDetails'>
                    <p className='categoryListingLocation'>
                        {listings.location}
                    </p>
                    <p className='categoryListingsName'>{listings.name}</p>
                    <p className='categoryListingsPrice'>
                        {listings}
                    </p>
                </div>
            </Link>
        </li>
    )
}

export default ListingItem