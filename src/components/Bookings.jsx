import React, { useContext, useEffect, useState } from 'react';
import SingleBooking from './SingleBooking';
import { AuthContext } from '../Provider/AuthProvider';

const Bookings = () => {
    const {user} = useContext(AuthContext)
    const [bookings, setBookings] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/bookings?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setBookings(data)
            })
    }, [])
    const handleDelete = id => {
        console.log(id)
        fetch(`http://localhost:5000/bookings/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    const remaining = bookings.filter(booking => booking._id !== id)
                    setBookings(remaining)
                }
            })
    }
    return (
        <div>
            <h1>Bookings Page</h1>
            <div className='grid grid-cols-4 gap-9'>
                {
                    bookings.map(booking => <SingleBooking key={booking._id} booking={booking} handleDelete={handleDelete}></SingleBooking>)
                }
            </div>
        </div>
    );
};

export default Bookings;