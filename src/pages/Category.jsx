import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {collection, getDocs, query, where, orderBy, limit} from 'firebase/firestore'
import {db} from '../firebase.config'
import { toast } from 'react-toastify'
import Spinner from '../components/Spinner'

export default function Category() {
    const [listings, setListings] = useState(null)
    const [loading, setLoading] = useState(true)

    const params = useParams()

    useEffect(() => {
        const fetchListings = async () => {
            try {
                // Get Reference
                const listingsRef = collection(db, 'listings')

                // create a query
                const q = query(
                    listingsRef,
                    where('type', '==', params.categoryName),
                    orderBy('timestamp', 'desc'),
                    limit(10)
                    )

                // Execute Query
                const  querySnap = await getDocs(q)

                let listings = []
                querySnap.forEach((doc) => {
                    // return listings.push({
                    //     id: doc.id,
                    //     data: doc.data(),

                    // })
                    console.log(doc.data())
                })

                setListings(listings)
                setLoading(false)

            } catch (error) {
                toast.error('Could not fetch listings')
                console.log(error)
            }
        }

        fetchListings()
    }, [params.categoryName])

    return (
        <div className='category'>
            <header>
                <p className='pageHeader'>
                    {params.CategoryName === 'rent' ? 'Places for rent' : 'Places to sale'}
                </p>
            </header>

            {loading ? <Spinner /> : listings && listings.length > 0 ?
            <>
                <ul className='categoryListings'>
                    {listings.map((listing) => (
                        <h3 key={listing.id}>{listing.data.name}</h3>
                    ))}
                </ul>
            </>
            : <p>No Listings for {params.CategoryName}</p>}
        </div>
    )}
