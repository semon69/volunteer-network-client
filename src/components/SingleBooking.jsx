import { data } from 'autoprefixer';
import React from 'react';

const SingleBooking = ({ booking, handleDelete }) => {
    const { title, photo, _id } = booking;


    return (
        <div>
            <div className='border border-black my-10 p-4'>
                <img className='w-72' src={photo} alt="" />
                <p>{title}</p>
                <div className='flex justify-between'>
                    <button onClick={() => handleDelete(_id)} className='btn btn-black'>Cancel</button>
                    <button className='btn btn-black'>Update</button>
                </div>
            </div>
        </div>
    );
};

export default SingleBooking;