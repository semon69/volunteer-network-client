import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const SingleWork = ({ work }) => {
    const { photo, title, color } = work;
    const { user } = useContext(AuthContext)
    const booking = {
        photo,
        title,
        email: user?.email,
    }
    const handleBookings = () => {
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    alert('Added successfully')
                }
            })

    }
    return (
        <div>
            <div onClick={handleBookings} className='border border-black hover:text-white'>
                <img src={photo} alt="" />
                <div style={{ backgroundColor: color }} className={`h-24`}>
                    <p className='pt-3 text-3xl font-bold'>{title}</p>
                </div>
            </div>
        </div>
    );
};

export default SingleWork;