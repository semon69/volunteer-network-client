import React, { useState } from 'react';
import { useLoaderData, useRevalidator } from 'react-router-dom';
import SingleWork from './SingleWork';

const Home = () => {
    const works = useLoaderData()
    // let revalidator = useRevalidator();

    const [allWorks, setAllWorks] = useState(works)
    
    const handleSearch = event => {
        event.preventDefault()
        const search = event.target.search.value;
        console.log(search)
        fetch(`http://localhost:5000/worksSearch/${search}`, {
            method: 'GET',
            headers: { 'content-type': 'application/json' },
        })
            .then(res => res.json())
            .then(data => {
                setAllWorks(data)
            })
    }

    const reValidate = async (event) => {
        // if (event.target.value === '') {
        //     await revalidator.revalidate();
        //     setAllWorks(works)
        // }
        if(event.target.value == ''){
            setAllWorks(works)
        }
    }
    console.log(allWorks)
    return (
        <div>

            <form onSubmit={handleSearch} className='my-16'>
                <input onChange={reValidate} type="text" placeholder="Type here" name='search' className="input input-bordered input-primary w-full max-w-xs" />
                <input className='btn btn-primary' type="submit" value="Search" />
            </form>

            <div className='grid grid-cols-3 gap-14'>
                {
                    allWorks.map(work =>
                        <SingleWork key={work._id} work={work}></SingleWork>
                    )
                }
            </div>
        </div>
    );
};

export default Home;